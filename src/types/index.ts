// ── User & Onboarding ────────────────────────────────────────────────────────

export type SpiritualPath = 'karma' | 'bhakti' | 'jnana' | 'undecided';
export type DepthLevel = 'beginner' | 'some' | 'practiced' | 'advanced';
export type ContentPreference = 'stories' | 'philosophy' | 'practice' | 'daily';
export type MoodState = 'peaceful' | 'anxious' | 'grieving' | 'joyful' | 'lost' | 'curious';

export interface UserProfile {
  id: string;
  onboardingComplete: boolean;
  spiritualPath: SpiritualPath;
  depthLevel: DepthLevel;
  contentPreference: ContentPreference;
  morningTime: string; // "06:00"
  exploredConcepts: string[];
  completedStories: string[];
  completedPractices: string[];
  journalEntries: JournalEntry[];
  currentMood?: MoodState;
  createdAt: string;
}

export interface JournalEntry {
  id: string;
  date: string;
  content: string;
  relatedStoryId?: string;
  relatedConcept?: string;
}

// ── Stories ───────────────────────────────────────────────────────────────────

export type StoryCategory =
  | 'creation'
  | 'self'
  | 'dharma'
  | 'devotion'
  | 'mind'
  | 'suffering'
  | 'relationships'
  | 'practical';

export interface Story {
  id: string;
  title: string;
  sourceText: string;
  citation: string; // e.g. "Katha Upanishad 1.2.1–1.2.6"
  category: StoryCategory;
  depthLevel: DepthLevel;
  narrative: string;
  teaching: string;
  reflectionPrompt: string;
  practice: Practice;
  concepts: string[]; // concept node ids
  relatedStoryIds: string[];
  estimatedReadMinutes: number;
}

// ── Concepts ──────────────────────────────────────────────────────────────────

export interface Concept {
  id: string;
  name: string;
  sanskritTerm: string;
  transliteration: string;
  definition: string;
  primarySources: string[];
  prerequisiteIds: string[];
  relatedPracticeIds: string[];
}

// ── Practices ─────────────────────────────────────────────────────────────────

export type PracticeType = 'mantra' | 'breath' | 'inquiry' | 'visualization' | 'nidra' | 'journaling' | 'behavioral';

export interface Practice {
  id: string;
  type: PracticeType;
  title: string;
  instructions: string;
  durationMinutes: number;
  difficulty: DepthLevel;
  guidedAudioUrl?: string;
  mantra?: string;
}

// ── Daily Wisdom ──────────────────────────────────────────────────────────────

export interface DailyWisdom {
  id: string;
  date: string;
  verse: string;         // Sanskrit (Devanagari)
  transliteration: string;
  translation: string;
  teaching: string;
  sankalpaPrompt: string;
  sourceText: string;
  citation: string;
  conceptIds: string[];
  nightMantra: string;
  nightMantraTranslation: string;
}

// ── Chat / Q&A ────────────────────────────────────────────────────────────────

export type MessageRole = 'user' | 'assistant';

export interface ChatMessage {
  id: string;
  role: MessageRole;
  content: string;
  timestamp: string;
  citedConcepts?: string[];
}

export interface Conversation {
  id: string;
  messages: ChatMessage[];
  contextConceptIds: string[];
  createdAt: string;
  updatedAt: string;
}
