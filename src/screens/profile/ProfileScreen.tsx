import React from 'react';
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
import type { ProfileStackScreenProps } from '../../navigation/types';

type Props = ProfileStackScreenProps<'ProfileMain'>;

const PATH_LABELS: Record<string, string> = {
  karma: 'Karma Yoga — Path of Action',
  bhakti: 'Bhakti Yoga — Path of Devotion',
  jnana: 'Jnana Yoga — Path of Knowledge',
  undecided: 'Open Path',
};

const DEPTH_LABELS: Record<string, string> = {
  beginner: 'Beginner Seeker',
  some: 'Curious Student',
  practiced: 'Practiced Student',
  advanced: 'Deep Practitioner',
};

export default function ProfileScreen({ navigation }: Props) {
  const { state } = useUser();
  const profile = state.profile;

  if (!profile) return null;

  const storiesCount = profile.completedStories.length;
  const conceptsCount = profile.exploredConcepts.length;
  const journalCount = profile.journalEntries.length;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scroll} showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.om}>ॐ</Text>
          <Text style={styles.title}>My Journey</Text>
          <Text style={styles.path}>{PATH_LABELS[profile.spiritualPath]}</Text>
          <Text style={styles.depth}>{DEPTH_LABELS[profile.depthLevel]}</Text>
        </View>

        {/* Stats */}
        <View style={styles.statsRow}>
          <StatCard value={storiesCount} label="Stories\nRead" />
          <StatCard value={conceptsCount} label="Concepts\nExplored" />
          <StatCard value={journalCount} label="Journal\nEntries" />
        </View>

        {/* The Three Yogas */}
        <Text style={styles.sectionTitle}>Paths Walked</Text>
        <View style={styles.yogaCard}>
          <YogaBar label="Karma Yoga" subtitle="Selfless Action" progress={0.3} color={colors.saffron} />
          <YogaBar label="Bhakti Yoga" subtitle="Devotion" progress={0.15} color={colors.gold} />
          <YogaBar label="Jnana Yoga" subtitle="Knowledge" progress={0.2} color={colors.goldLight} />
        </View>

        {/* Journal */}
        <TouchableOpacity
          style={styles.journalBtn}
          onPress={() => navigation.navigate('Journal')}
        >
          <Text style={styles.journalIcon}>📖</Text>
          <View style={styles.journalMeta}>
            <Text style={styles.journalTitle}>Wisdom Journal</Text>
            <Text style={styles.journalSub}>
              {journalCount === 0
                ? 'No entries yet — begin reflecting'
                : `${journalCount} reflection${journalCount === 1 ? '' : 's'} recorded`}
            </Text>
          </View>
          <Text style={styles.chevron}>›</Text>
        </TouchableOpacity>

        {/* Quote */}
        <View style={styles.quoteCard}>
          <Text style={styles.quote}>
            "The soul that is not moved, the soul that with a strong and constant calm takes sorrow
            and takes joy indifferently, lives in the life undying."
          </Text>
          <Text style={styles.quoteSource}>— Bhagavad Gita 2.15</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

function StatCard({ value, label }: { value: number; label: string }) {
  return (
    <View style={styles.statCard}>
      <Text style={styles.statValue}>{value}</Text>
      <Text style={styles.statLabel}>{label}</Text>
    </View>
  );
}

function YogaBar({
  label,
  subtitle,
  progress,
  color,
}: {
  label: string;
  subtitle: string;
  progress: number;
  color: string;
}) {
  return (
    <View style={styles.yogaBarWrapper}>
      <View style={styles.yogaBarMeta}>
        <Text style={styles.yogaLabel}>{label}</Text>
        <Text style={styles.yogaSubtitle}>{subtitle}</Text>
      </View>
      <View style={styles.barTrack}>
        <View style={[styles.barFill, { width: `${progress * 100}%`, backgroundColor: color }]} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.bg },
  scroll: { padding: spacing.lg, gap: spacing.lg },

  header: { alignItems: 'center', gap: spacing.xs },
  om: { fontSize: 48, color: colors.gold },
  title: { fontSize: fonts.sizes.xxl, color: colors.textPrimary, fontWeight: '700' },
  path: { fontSize: fonts.sizes.md, color: colors.goldLight, fontStyle: 'italic' },
  depth: { fontSize: fonts.sizes.sm, color: colors.textMuted },

  statsRow: { flexDirection: 'row', gap: spacing.md },
  statCard: {
    flex: 1,
    backgroundColor: colors.bgCard,
    borderRadius: radius.lg,
    padding: spacing.md,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.border,
    gap: spacing.xs,
  },
  statValue: { fontSize: fonts.sizes.xxl, color: colors.gold, fontWeight: '700' },
  statLabel: { fontSize: fonts.sizes.xs, color: colors.textMuted, textAlign: 'center' },

  sectionTitle: {
    fontSize: fonts.sizes.lg,
    color: colors.textPrimary,
    fontWeight: '600',
  },
  yogaCard: {
    backgroundColor: colors.bgCard,
    borderRadius: radius.lg,
    padding: spacing.lg,
    borderWidth: 1,
    borderColor: colors.border,
    gap: spacing.md,
  },
  yogaBarWrapper: { gap: spacing.xs },
  yogaBarMeta: { flexDirection: 'row', justifyContent: 'space-between' },
  yogaLabel: { fontSize: fonts.sizes.sm, color: colors.textPrimary, fontWeight: '600' },
  yogaSubtitle: { fontSize: fonts.sizes.xs, color: colors.textMuted, fontStyle: 'italic' },
  barTrack: {
    height: 6,
    backgroundColor: colors.border,
    borderRadius: radius.full,
    overflow: 'hidden',
  },
  barFill: { height: '100%', borderRadius: radius.full },

  journalBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.bgCard,
    borderRadius: radius.lg,
    padding: spacing.lg,
    borderWidth: 1,
    borderColor: colors.border,
    gap: spacing.md,
  },
  journalIcon: { fontSize: 28 },
  journalMeta: { flex: 1, gap: 2 },
  journalTitle: { fontSize: fonts.sizes.md, color: colors.textPrimary, fontWeight: '600' },
  journalSub: { fontSize: fonts.sizes.sm, color: colors.textMuted },
  chevron: { fontSize: fonts.sizes.xl, color: colors.textMuted },

  quoteCard: {
    borderRadius: radius.lg,
    padding: spacing.lg,
    borderWidth: 1,
    borderColor: colors.border,
    gap: spacing.sm,
  },
  quote: {
    fontSize: fonts.sizes.md,
    color: colors.textSecondary,
    fontStyle: 'italic',
    lineHeight: fonts.sizes.md * 1.7,
    textAlign: 'center',
  },
  quoteSource: { fontSize: fonts.sizes.xs, color: colors.textMuted, textAlign: 'center' },
});
