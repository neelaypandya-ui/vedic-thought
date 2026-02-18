import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native';
import { colors, spacing, fonts, radius } from '../../theme';
import type { HomeStackScreenProps } from '../../navigation/types';

type Props = HomeStackScreenProps<'Meditation'>;

const PRACTICE_TYPES = [
  {
    id: 'mantra',
    icon: '🕉️',
    title: 'Mantra Meditation',
    subtitle: 'Gayatri Mantra · AUM',
    description: 'Guided audio with breathing cues and meaning explanation',
    duration: '10–20 min',
    source: 'Vedic chanting tradition',
  },
  {
    id: 'breath',
    icon: '🌬️',
    title: 'Pranayama',
    subtitle: 'Breath Awareness',
    description: 'Animated breathing guides from basic to advanced techniques',
    duration: '5–15 min',
    source: 'Yoga Sutras · Upanishadic prana teachings',
  },
  {
    id: 'inquiry',
    icon: '🔍',
    title: 'Self-Inquiry',
    subtitle: 'Atma Vichara — "Who am I?"',
    description: 'Guided contemplation sessions with silence intervals',
    duration: '15–30 min',
    source: 'Advaita Vedanta · Upanishads',
  },
  {
    id: 'visualization',
    icon: '✨',
    title: 'Dhyana',
    subtitle: 'Visualization & Inner Light',
    description: 'Guided imagery: inner light, cosmic form, ego dissolution',
    duration: '10–20 min',
    source: 'Bhagavad Gita Ch. 6 · Upanishads',
  },
  {
    id: 'nidra',
    icon: '🌌',
    title: 'Yoga Nidra',
    subtitle: 'Yogic Sleep',
    description: 'Deep relaxation mapping to turiya — the fourth state of consciousness',
    duration: '20–45 min',
    source: 'Mandukya Upanishad',
  },
];

export default function MeditationScreen({ navigation }: Props) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scroll} showsVerticalScrollIndicator={false}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.back}>
          <Text style={styles.backText}>← Back</Text>
        </TouchableOpacity>

        <Text style={styles.title}>Meditation Practices</Text>
        <Text style={styles.subtitle}>
          Choose a practice rooted in Vedic tradition
        </Text>

        {PRACTICE_TYPES.map((p) => (
          <TouchableOpacity key={p.id} style={styles.card}>
            <View style={styles.cardTop}>
              <Text style={styles.icon}>{p.icon}</Text>
              <View style={styles.cardMeta}>
                <Text style={styles.duration}>{p.duration}</Text>
              </View>
            </View>
            <Text style={styles.practiceTitle}>{p.title}</Text>
            <Text style={styles.practiceSubtitle}>{p.subtitle}</Text>
            <Text style={styles.description}>{p.description}</Text>
            <Text style={styles.source}>{p.source}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.bg },
  scroll: { padding: spacing.lg, gap: spacing.md },
  back: { marginBottom: spacing.sm },
  backText: { color: colors.gold, fontSize: fonts.sizes.md },
  title: { fontSize: fonts.sizes.xxl, color: colors.textPrimary, fontWeight: '700' },
  subtitle: { fontSize: fonts.sizes.md, color: colors.textSecondary, marginBottom: spacing.sm },
  card: {
    backgroundColor: colors.bgCard,
    borderRadius: radius.lg,
    padding: spacing.lg,
    borderWidth: 1,
    borderColor: colors.border,
    gap: spacing.xs,
  },
  cardTop: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start' },
  icon: { fontSize: 32 },
  cardMeta: {},
  duration: { fontSize: fonts.sizes.xs, color: colors.gold, fontWeight: '600', letterSpacing: 0.5 },
  practiceTitle: { fontSize: fonts.sizes.lg, color: colors.textPrimary, fontWeight: '700' },
  practiceSubtitle: { fontSize: fonts.sizes.sm, color: colors.goldLight, fontStyle: 'italic' },
  description: { fontSize: fonts.sizes.sm, color: colors.textSecondary, lineHeight: fonts.sizes.sm * 1.6 },
  source: { fontSize: fonts.sizes.xs, color: colors.textMuted, marginTop: spacing.xs },
});
