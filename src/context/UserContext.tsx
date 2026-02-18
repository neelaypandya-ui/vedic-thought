import React, {
  createContext,
  useContext,
  useReducer,
  useEffect,
  useRef,
  ReactNode,
} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import type { UserProfile, MoodState } from '../types';

const STORAGE_KEY = '@vedic_wisdom:profile';

// ── State ─────────────────────────────────────────────────────────────────────

interface UserState {
  profile: UserProfile | null;
  /** True while the persisted profile is being read from storage on startup. */
  isHydrating: boolean;
}

const initialState: UserState = {
  profile: null,
  isHydrating: true,
};

// ── Actions ───────────────────────────────────────────────────────────────────

type Action =
  | { type: 'HYDRATE'; payload: UserProfile | null }
  | { type: 'SET_PROFILE'; payload: UserProfile }
  | { type: 'COMPLETE_ONBOARDING'; payload: Partial<UserProfile> }
  | { type: 'SET_MOOD'; payload: MoodState }
  | { type: 'MARK_STORY_COMPLETE'; payload: string }
  | { type: 'MARK_CONCEPT_EXPLORED'; payload: string }
  | { type: 'ADD_JOURNAL_ENTRY'; payload: UserProfile['journalEntries'][0] };

function reducer(state: UserState, action: Action): UserState {
  const profile = state.profile;

  switch (action.type) {
    case 'HYDRATE':
      return { profile: action.payload, isHydrating: false };

    case 'SET_PROFILE':
      return { ...state, profile: action.payload };

    case 'COMPLETE_ONBOARDING':
      if (!profile) return state;
      return {
        ...state,
        profile: { ...profile, ...action.payload, onboardingComplete: true },
      };

    case 'SET_MOOD':
      if (!profile) return state;
      return { ...state, profile: { ...profile, currentMood: action.payload } };

    case 'MARK_STORY_COMPLETE':
      if (!profile) return state;
      if (profile.completedStories.includes(action.payload)) return state;
      return {
        ...state,
        profile: {
          ...profile,
          completedStories: [...profile.completedStories, action.payload],
        },
      };

    case 'MARK_CONCEPT_EXPLORED':
      if (!profile) return state;
      if (profile.exploredConcepts.includes(action.payload)) return state;
      return {
        ...state,
        profile: {
          ...profile,
          exploredConcepts: [...profile.exploredConcepts, action.payload],
        },
      };

    case 'ADD_JOURNAL_ENTRY':
      if (!profile) return state;
      return {
        ...state,
        profile: {
          ...profile,
          journalEntries: [action.payload, ...profile.journalEntries],
        },
      };

    default:
      return state;
  }
}

// ── Context ───────────────────────────────────────────────────────────────────

interface UserContextValue {
  state: UserState;
  dispatch: React.Dispatch<Action>;
}

const UserContext = createContext<UserContextValue | undefined>(undefined);

export function UserProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  // Track whether we have hydrated yet so the save effect doesn't overwrite
  // storage with null before the initial load completes.
  const hydrated = useRef(false);

  // ── Load from storage once on mount ────────────────────────────────────────
  useEffect(() => {
    AsyncStorage.getItem(STORAGE_KEY)
      .then((raw) => {
        const profile: UserProfile | null = raw ? JSON.parse(raw) : null;
        dispatch({ type: 'HYDRATE', payload: profile });
        hydrated.current = true;
      })
      .catch(() => {
        // Storage read failed — start fresh rather than crashing
        dispatch({ type: 'HYDRATE', payload: null });
        hydrated.current = true;
      });
  }, []);

  // ── Persist on every profile change ────────────────────────────────────────
  useEffect(() => {
    if (!hydrated.current) return; // don't save during initial hydration
    if (state.profile) {
      AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(state.profile)).catch(
        () => {
          // Silently ignore write failures (e.g. storage quota exceeded)
        },
      );
    } else {
      AsyncStorage.removeItem(STORAGE_KEY).catch(() => {});
    }
  }, [state.profile]);

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser(): UserContextValue {
  const ctx = useContext(UserContext);
  if (!ctx) throw new Error('useUser must be used inside UserProvider');
  return ctx;
}
