import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import type { CompositeScreenProps } from '@react-navigation/native';

// ── Root Stack (Onboarding ↔ Main) ───────────────────────────────────────────

export type RootStackParamList = {
  Onboarding: undefined;
  Main: undefined;
};

// ── Bottom Tabs ───────────────────────────────────────────────────────────────

export type TabParamList = {
  Home: undefined;
  Stories: undefined;
  Ask: undefined;
  Profile: undefined;
};

// ── Home Stack ────────────────────────────────────────────────────────────────

export type HomeStackParamList = {
  HomeMain: undefined;
  Meditation: { practiceId?: string };
  EveningReflection: undefined;
};

// ── Stories Stack ─────────────────────────────────────────────────────────────

export type StoriesStackParamList = {
  StoriesMain: undefined;
  StoryDetail: { storyId: string };
};

// ── Profile Stack ─────────────────────────────────────────────────────────────

export type ProfileStackParamList = {
  ProfileMain: undefined;
  Journal: undefined;
};

// ── Screen Props Helpers ──────────────────────────────────────────────────────

export type RootStackScreenProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;

export type HomeStackScreenProps<T extends keyof HomeStackParamList> =
  CompositeScreenProps<
    NativeStackScreenProps<HomeStackParamList, T>,
    BottomTabScreenProps<TabParamList>
  >;

export type StoriesStackScreenProps<T extends keyof StoriesStackParamList> =
  CompositeScreenProps<
    NativeStackScreenProps<StoriesStackParamList, T>,
    BottomTabScreenProps<TabParamList>
  >;

export type ProfileStackScreenProps<T extends keyof ProfileStackParamList> =
  CompositeScreenProps<
    NativeStackScreenProps<ProfileStackParamList, T>,
    BottomTabScreenProps<TabParamList>
  >;
