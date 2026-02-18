import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import { colors, spacing, fonts, radius } from '../../theme';
import { useUser } from '../../context/UserContext';
import type { RootStackScreenProps } from '../../navigation/types';
import type { SpiritualPath, DepthLevel, ContentPreference } from '../../types';

type Props = RootStackScreenProps<'Onboarding'>;

const STEPS = ['welcome', 'intention', 'familiarity', 'preference'] as const;
type Step = (typeof STEPS)[number];

export default function OnboardingScreen({ navigation }: Props) {
  const { dispatch } = useUser();
  const [step, setStep] = useState<Step>('welcome');
  const [intention, setIntention] = useState<SpiritualPath>('undecided');
  const [familiarity, setFamiliarity] = useState<DepthLevel>('beginner');
  const [preference, setPreference] = useState<ContentPreference>('stories');

  function next() {
    const idx = STEPS.indexOf(step);
    if (idx < STEPS.length - 1) {
      setStep(STEPS[idx + 1]);
    } else {
      finishOnboarding();
    }
  }

  function finishOnboarding() {
    dispatch({
      type: 'COMPLETE_ONBOARDING',
      payload: {
        spiritualPath: intention,
        depthLevel: familiarity,
        contentPreference: preference,
        morningTime: '07:00',
        exploredConcepts: [],
        completedStories: [],
        completedPractices: [],
        journalEntries: [],
        createdAt: new Date().toISOString(),
      },
    });
    navigation.replace('Main');
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scroll} bounces={false}>
        {step === 'welcome' && <WelcomeStep onNext={next} />}
        {step === 'intention' && (
          <ChoiceStep
            question="What brings you to this path?"
            choices={[
              { value: 'karma', label: 'Inner peace & daily guidance' },
              { value: 'jnana', label: 'Spiritual knowledge & philosophy' },
              { value: 'bhakti', label: 'Devotion & connection with the divine' },
              { value: 'undecided', label: 'Curiosity & cultural connection' },
            ]}
            selected={intention}
            onSelect={(v) => setIntention(v as SpiritualPath)}
            onNext={next}
          />
        )}
        {step === 'familiarity' && (
          <ChoiceStep
            question="How familiar are you with Vedic teachings?"
            choices={[
              { value: 'beginner', label: 'Complete beginner' },
              { value: 'some', label: 'Some exposure' },
              { value: 'practiced', label: 'Practiced student' },
              { value: 'advanced', label: 'Deep practitioner' },
            ]}
            selected={familiarity}
            onSelect={(v) => setFamiliarity(v as DepthLevel)}
            onNext={next}
          />
        )}
        {step === 'preference' && (
          <ChoiceStep
            question="What resonates with you most?"
            choices={[
              { value: 'stories', label: 'Stories & parables' },
              { value: 'philosophy', label: 'Philosophical inquiry' },
              { value: 'practice', label: 'Practical techniques' },
              { value: 'daily', label: 'Daily wisdom doses' },
            ]}
            selected={preference}
            onSelect={(v) => setPreference(v as ContentPreference)}
            onNext={next}
            nextLabel="Begin the path"
          />
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

// ── Sub-components ────────────────────────────────────────────────────────────

function WelcomeStep({ onNext }: { onNext: () => void }) {
  return (
    <View style={styles.stepContainer}>
      <Text style={styles.om}>ॐ</Text>
      <Text style={styles.heroTitle}>Vedic Wisdom</Text>
      <Text style={styles.subtitle}>
        Ancient Knowledge · Modern Experience · Inner Peace
      </Text>
      <Text style={styles.body}>
        The Vedas, Upanishads, and Bhagavad Gita contain some of humanity's
        deepest insights into consciousness, purpose, and inner peace.
      </Text>
      <Text style={styles.body}>
        This app is your guide into that living tradition.
      </Text>
      <Text style={styles.quote}>
        "Tat tvam asi — Thou art That."
      </Text>
      <Text style={styles.quoteSource}>— Chandogya Upanishad 6.8.7</Text>
      <TouchableOpacity style={styles.primaryBtn} onPress={onNext}>
        <Text style={styles.primaryBtnText}>Begin</Text>
      </TouchableOpacity>
    </View>
  );
}

interface ChoiceStepProps {
  question: string;
  choices: { value: string; label: string }[];
  selected: string;
  onSelect: (v: string) => void;
  onNext: () => void;
  nextLabel?: string;
}

function ChoiceStep({
  question,
  choices,
  selected,
  onSelect,
  onNext,
  nextLabel = 'Continue',
}: ChoiceStepProps) {
  return (
    <View style={styles.stepContainer}>
      <Text style={styles.question}>{question}</Text>
      {choices.map((c) => (
        <TouchableOpacity
          key={c.value}
          style={[styles.choiceBtn, selected === c.value && styles.choiceBtnSelected]}
          onPress={() => onSelect(c.value)}
        >
          <Text
            style={[
              styles.choiceText,
              selected === c.value && styles.choiceTextSelected,
            ]}
          >
            {c.label}
          </Text>
        </TouchableOpacity>
      ))}
      <TouchableOpacity style={styles.primaryBtn} onPress={onNext}>
        <Text style={styles.primaryBtnText}>{nextLabel}</Text>
      </TouchableOpacity>
    </View>
  );
}

// ── Styles ────────────────────────────────────────────────────────────────────

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.bg },
  scroll: { flexGrow: 1, justifyContent: 'center', padding: spacing.lg },
  stepContainer: { alignItems: 'center', gap: spacing.md },
  om: { fontSize: 64, color: colors.gold, marginBottom: spacing.sm },
  heroTitle: {
    fontSize: fonts.sizes.hero,
    color: colors.textPrimary,
    fontWeight: '700',
    letterSpacing: 1,
  },
  subtitle: {
    fontSize: fonts.sizes.sm,
    color: colors.gold,
    textAlign: 'center',
    letterSpacing: 0.5,
  },
  body: {
    fontSize: fonts.sizes.md,
    color: colors.textSecondary,
    textAlign: 'center',
    lineHeight: fonts.sizes.md * 1.6,
  },
  quote: {
    fontSize: fonts.sizes.lg,
    color: colors.goldLight,
    fontStyle: 'italic',
    textAlign: 'center',
    marginTop: spacing.md,
  },
  quoteSource: {
    fontSize: fonts.sizes.sm,
    color: colors.textMuted,
    textAlign: 'center',
  },
  question: {
    fontSize: fonts.sizes.xl,
    color: colors.textPrimary,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: spacing.sm,
  },
  choiceBtn: {
    width: '100%',
    padding: spacing.md,
    borderRadius: radius.md,
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.bgCard,
  },
  choiceBtnSelected: {
    borderColor: colors.gold,
    backgroundColor: colors.bgElevated,
  },
  choiceText: {
    fontSize: fonts.sizes.md,
    color: colors.textSecondary,
    textAlign: 'center',
  },
  choiceTextSelected: { color: colors.goldLight, fontWeight: '600' },
  primaryBtn: {
    marginTop: spacing.lg,
    backgroundColor: colors.gold,
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.xxl,
    borderRadius: radius.full,
  },
  primaryBtnText: {
    fontSize: fonts.sizes.lg,
    color: colors.bg,
    fontWeight: '700',
    letterSpacing: 0.5,
  },
});
