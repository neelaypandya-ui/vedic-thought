import React, { useState, useMemo } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import { colors, spacing, fonts, radius } from '../../theme';
import { useUser } from '../../context/UserContext';
import { getTodaysWisdom } from '../../data/wisdom';
import type { HomeStackScreenProps } from '../../navigation/types';

type Props = HomeStackScreenProps<'HomeMain'>;

function greeting(): string {
  const h = new Date().getHours();
  if (h < 12) return 'Good morning';
  if (h < 17) return 'Good afternoon';
  if (h < 21) return 'Good evening';
  return 'Good night';
}

function formatDate(d: Date): string {
  return d.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' });
}

function daysSince(iso: string): number {
  return Math.floor((Date.now() - new Date(iso).getTime()) / 86_400_000);
}

export default function HomeScreen({ navigation }: Props) {
  const { state } = useUser();
  const wisdom = useMemo(() => getTodaysWisdom(), []);
  const [teachingExpanded, setTeachingExpanded] = useState(false);
  const [mantraExpanded, setMantraExpanded] = useState(false);

  const days = state.profile?.createdAt ? daysSince(state.profile.createdAt) + 1 : 1;

  // Teaching: show first paragraph collapsed, full text expanded
  const paragraphs = wisdom.teaching.split('\n\n');
  const teachingPreview = paragraphs[0];
  const hasMoreTeaching = paragraphs.length > 1;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scroll} showsVerticalScrollIndicator={false}>

        {/* ── Header ─────────────────────────────────────────────────────── */}
        <View style={styles.header}>
          <View>
            <Text style={styles.greeting}>{greeting()}</Text>
            <Text style={styles.dateText}>{formatDate(new Date())}</Text>
          </View>
          <View style={styles.dayBadge}>
            <Text style={styles.dayNumber}>{days}</Text>
            <Text style={styles.dayLabel}>day{days === 1 ? '' : 's'}</Text>
          </View>
        </View>

        {/* ── Verse of the Day ────────────────────────────────────────────── */}
        <View style={styles.verseCard}>
          <View style={styles.verseCardHeader}>
            <Text style={styles.sectionLabel}>VERSE OF THE DAY</Text>
            <Text style={styles.sourceChip}>{wisdom.sourceText}</Text>
          </View>

          <Text style={styles.sanskrit}>{wisdom.verse}</Text>

          <View style={styles.divider} />

          <Text style={styles.transliteration}>{wisdom.transliteration}</Text>

          <View style={styles.divider} />

          <Text style={styles.translation}>{wisdom.translation}</Text>

          <Text style={styles.citation}>— {wisdom.citation}</Text>
        </View>

        {/* ── Teaching ────────────────────────────────────────────────────── */}
        <View style={styles.teachingCard}>
          <Text style={styles.sectionLabel}>THE TEACHING</Text>
          <Text style={styles.teachingText}>
            {teachingExpanded ? wisdom.teaching : teachingPreview}
          </Text>
          {hasMoreTeaching && (
            <TouchableOpacity
              onPress={() => setTeachingExpanded((v) => !v)}
              style={styles.expandBtn}
            >
              <Text style={styles.expandBtnText}>
                {teachingExpanded ? 'Show less ↑' : 'Read more ↓'}
              </Text>
            </TouchableOpacity>
          )}
        </View>

        {/* ── Sankalpa ────────────────────────────────────────────────────── */}
        <View style={styles.sankalpCard}>
          <Text style={styles.sankalpLabel}>TODAY'S SANKALPA (INTENTION)</Text>
          <Text style={styles.sankalpText}>{wisdom.sankalpaPrompt}</Text>
        </View>

        {/* ── Practices ───────────────────────────────────────────────────── */}
        <Text style={styles.practicesTitle}>Practices</Text>
        <View style={styles.actionsRow}>
          <TouchableOpacity
            style={styles.actionBtn}
            onPress={() => navigation.navigate('Meditation', {})}
          >
            <Text style={styles.actionIcon}>🧘</Text>
            <Text style={styles.actionLabel}>Meditate</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.actionBtn}
            onPress={() => navigation.navigate('EveningReflection', undefined)}
          >
            <Text style={styles.actionIcon}>🌙</Text>
            <Text style={styles.actionLabel}>Reflect</Text>
          </TouchableOpacity>
        </View>

        {/* ── Tonight's Mantra ─────────────────────────────────────────────── */}
        <TouchableOpacity
          style={styles.mantraCard}
          onPress={() => setMantraExpanded((v) => !v)}
          activeOpacity={0.8}
        >
          <View style={styles.mantraHeader}>
            <Text style={styles.sectionLabel}>TONIGHT'S MANTRA</Text>
            <Text style={styles.mantraChevron}>{mantraExpanded ? '↑' : '↓'}</Text>
          </View>
          {mantraExpanded && (
            <>
              <Text style={styles.mantraSanskrit}>{wisdom.nightMantra}</Text>
              <Text style={styles.mantraTranslation}>{wisdom.nightMantraTranslation}</Text>
            </>
          )}
        </TouchableOpacity>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.bg },
  scroll: { padding: spacing.lg, gap: spacing.md, paddingBottom: spacing.xxl },

  // Header
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: spacing.xs,
  },
  greeting: { fontSize: fonts.sizes.xxl, color: colors.textPrimary, fontWeight: '700' },
  dateText: { fontSize: fonts.sizes.sm, color: colors.textMuted, marginTop: 2 },
  dayBadge: {
    backgroundColor: colors.bgCard,
    borderRadius: radius.lg,
    borderWidth: 1,
    borderColor: colors.border,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
    alignItems: 'center',
    minWidth: 56,
  },
  dayNumber: { fontSize: fonts.sizes.xl, color: colors.gold, fontWeight: '700' },
  dayLabel: { fontSize: fonts.sizes.xs, color: colors.textMuted },

  // Verse card
  verseCard: {
    backgroundColor: colors.bgCard,
    borderRadius: radius.lg,
    padding: spacing.lg,
    borderWidth: 1,
    borderColor: colors.border,
    gap: spacing.sm,
  },
  verseCardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  sectionLabel: {
    fontSize: fonts.sizes.xs,
    color: colors.gold,
    fontWeight: '700',
    letterSpacing: 1.5,
  },
  sourceChip: {
    fontSize: fonts.sizes.xs,
    color: colors.textMuted,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.full,
    paddingHorizontal: spacing.sm,
    paddingVertical: 2,
  },
  sanskrit: {
    fontSize: fonts.sizes.lg,
    color: colors.textPrimary,
    lineHeight: fonts.sizes.lg * 1.9,
    marginTop: spacing.xs,
  },
  divider: { height: 1, backgroundColor: colors.border },
  transliteration: {
    fontSize: fonts.sizes.sm,
    color: colors.textSecondary,
    fontStyle: 'italic',
    lineHeight: fonts.sizes.sm * 1.9,
  },
  translation: {
    fontSize: fonts.sizes.md,
    color: colors.goldLight,
    lineHeight: fonts.sizes.md * 1.7,
    fontWeight: '500',
  },
  citation: { fontSize: fonts.sizes.xs, color: colors.textMuted, marginTop: spacing.xs },

  // Teaching card
  teachingCard: {
    backgroundColor: colors.bgCard,
    borderRadius: radius.lg,
    padding: spacing.lg,
    borderWidth: 1,
    borderColor: colors.border,
    gap: spacing.sm,
  },
  teachingText: {
    fontSize: fonts.sizes.md,
    color: colors.textSecondary,
    lineHeight: fonts.sizes.md * 1.7,
  },
  expandBtn: { alignSelf: 'flex-start', marginTop: spacing.xs },
  expandBtnText: { fontSize: fonts.sizes.sm, color: colors.gold, fontWeight: '600' },

  // Sankalpa
  sankalpCard: {
    backgroundColor: colors.bgElevated,
    borderRadius: radius.lg,
    padding: spacing.lg,
    borderLeftWidth: 3,
    borderLeftColor: colors.saffron,
    gap: spacing.sm,
  },
  sankalpLabel: { fontSize: fonts.sizes.xs, color: colors.saffron, fontWeight: '700', letterSpacing: 1.5 },
  sankalpText: {
    fontSize: fonts.sizes.md,
    color: colors.textSecondary,
    lineHeight: fonts.sizes.md * 1.7,
  },

  // Practices
  practicesTitle: {
    fontSize: fonts.sizes.lg,
    color: colors.textPrimary,
    fontWeight: '600',
    marginTop: spacing.xs,
  },
  actionsRow: { flexDirection: 'row', gap: spacing.md },
  actionBtn: {
    flex: 1,
    backgroundColor: colors.bgCard,
    borderRadius: radius.lg,
    padding: spacing.lg,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.border,
    gap: spacing.sm,
  },
  actionIcon: { fontSize: 32 },
  actionLabel: { fontSize: fonts.sizes.sm, color: colors.textSecondary, fontWeight: '600' },

  // Tonight's mantra
  mantraCard: {
    backgroundColor: colors.bgCard,
    borderRadius: radius.lg,
    padding: spacing.lg,
    borderWidth: 1,
    borderColor: colors.border,
    gap: spacing.sm,
  },
  mantraHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  mantraChevron: { color: colors.gold, fontSize: fonts.sizes.md, fontWeight: '700' },
  mantraSanskrit: {
    fontSize: fonts.sizes.md,
    color: colors.textPrimary,
    lineHeight: fonts.sizes.md * 1.8,
    marginTop: spacing.xs,
  },
  mantraTranslation: {
    fontSize: fonts.sizes.sm,
    color: colors.textSecondary,
    fontStyle: 'italic',
    lineHeight: fonts.sizes.sm * 1.6,
  },
});
