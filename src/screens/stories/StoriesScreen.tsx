import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import { colors, spacing, fonts, radius } from '../../theme';
import type { StoriesStackScreenProps } from '../../navigation/types';

type Props = StoriesStackScreenProps<'StoriesMain'>;

const CATEGORIES = [
  { id: 'all', label: 'All' },
  { id: 'creation', label: 'Creation & Cosmos' },
  { id: 'self', label: 'Self & Consciousness' },
  { id: 'dharma', label: 'Dharma & Duty' },
  { id: 'devotion', label: 'Devotion' },
  { id: 'mind', label: 'Mind & Meditation' },
  { id: 'suffering', label: 'Suffering & Liberation' },
  { id: 'relationships', label: 'Relationships' },
  { id: 'practical', label: 'Practical Wisdom' },
] as const;

// Placeholder stories — will be replaced by real data layer
const SAMPLE_STORIES = [
  {
    id: 'nachiketa',
    title: 'Nachiketa and the Lord of Death',
    category: 'self',
    sourceText: 'Katha Upanishad',
    citation: 'Katha Upanishad 1.1–1.3',
    depthLevel: 'beginner',
    estimatedReadMinutes: 8,
    teaching: 'Choose the eternal over the pleasant',
  },
  {
    id: 'tat-tvam-asi',
    title: "Svetaketu's Lesson: Thou Art That",
    category: 'self',
    sourceText: 'Chandogya Upanishad',
    citation: 'Chandogya Upanishad 6.8.7',
    depthLevel: 'beginner',
    estimatedReadMinutes: 6,
    teaching: 'The individual self is identical with Brahman',
  },
  {
    id: 'nasadiya',
    title: 'The Hymn of Creation',
    category: 'creation',
    sourceText: 'Rig Veda',
    citation: 'Rig Veda 10.129',
    depthLevel: 'intermediate',
    estimatedReadMinutes: 5,
    teaching: 'The mystery at the origin of existence',
  },
  {
    id: 'arjuna-crisis',
    title: "Arjuna's Crisis on the Battlefield",
    category: 'dharma',
    sourceText: 'Bhagavad Gita',
    citation: 'Bhagavad Gita 1.1–2.10',
    depthLevel: 'beginner',
    estimatedReadMinutes: 10,
    teaching: 'The collapse of certainty as the beginning of wisdom',
  },
  {
    id: 'two-birds',
    title: 'Two Birds on a Tree',
    category: 'suffering',
    sourceText: 'Mundaka Upanishad',
    citation: 'Mundaka Upanishad 3.1.1–3.1.2',
    depthLevel: 'intermediate',
    estimatedReadMinutes: 4,
    teaching: 'The witness self and the experiencing self',
  },
  {
    id: 'chariot',
    title: 'The Chariot and the Master',
    category: 'mind',
    sourceText: 'Katha Upanishad',
    citation: 'Katha Upanishad 1.3.3–1.3.9',
    depthLevel: 'beginner',
    estimatedReadMinutes: 5,
    teaching: 'Intellect as the charioteer of the restless mind',
  },
];

const DEPTH_COLORS: Record<string, string> = {
  beginner: colors.gold,
  intermediate: colors.saffron,
  advanced: '#9B59B6',
};

export default function StoriesScreen({ navigation }: Props) {
  const [activeCategory, setActiveCategory] = useState('all');

  const filtered =
    activeCategory === 'all'
      ? SAMPLE_STORIES
      : SAMPLE_STORIES.filter((s) => s.category === activeCategory);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>Story Library</Text>
          <Text style={styles.subtitle}>Teachings from ancient scripture</Text>
        </View>

        {/* Category Filter */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.categoryRow}
        >
          {CATEGORIES.map((c) => (
            <TouchableOpacity
              key={c.id}
              style={[styles.categoryChip, activeCategory === c.id && styles.categoryChipActive]}
              onPress={() => setActiveCategory(c.id)}
            >
              <Text
                style={[
                  styles.categoryText,
                  activeCategory === c.id && styles.categoryTextActive,
                ]}
              >
                {c.label}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* Story Cards */}
        <View style={styles.list}>
          {filtered.map((story) => (
            <TouchableOpacity
              key={story.id}
              style={styles.card}
              onPress={() => navigation.navigate('StoryDetail', { storyId: story.id })}
            >
              <View style={styles.cardTop}>
                <Text style={styles.sourceText}>{story.sourceText}</Text>
                <View style={[styles.depthBadge, { borderColor: DEPTH_COLORS[story.depthLevel] }]}>
                  <Text style={[styles.depthText, { color: DEPTH_COLORS[story.depthLevel] }]}>
                    {story.depthLevel}
                  </Text>
                </View>
              </View>
              <Text style={styles.storyTitle}>{story.title}</Text>
              <Text style={styles.teaching}>{story.teaching}</Text>
              <View style={styles.cardBottom}>
                <Text style={styles.citation}>{story.citation}</Text>
                <Text style={styles.readTime}>{story.estimatedReadMinutes} min</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.bg },
  header: { padding: spacing.lg, paddingBottom: spacing.sm },
  title: { fontSize: fonts.sizes.xxl, color: colors.textPrimary, fontWeight: '700' },
  subtitle: { fontSize: fonts.sizes.sm, color: colors.textMuted, marginTop: 2 },

  categoryRow: {
    paddingHorizontal: spacing.lg,
    paddingBottom: spacing.md,
    gap: spacing.sm,
  },
  categoryChip: {
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.xs + 2,
    borderRadius: radius.full,
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.bgCard,
  },
  categoryChipActive: { borderColor: colors.gold, backgroundColor: colors.bgElevated },
  categoryText: { fontSize: fonts.sizes.sm, color: colors.textMuted },
  categoryTextActive: { color: colors.gold, fontWeight: '600' },

  list: { padding: spacing.lg, gap: spacing.md },
  card: {
    backgroundColor: colors.bgCard,
    borderRadius: radius.lg,
    padding: spacing.lg,
    borderWidth: 1,
    borderColor: colors.border,
    gap: spacing.xs,
  },
  cardTop: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  sourceText: { fontSize: fonts.sizes.xs, color: colors.textMuted, fontWeight: '600' },
  depthBadge: {
    borderWidth: 1,
    borderRadius: radius.full,
    paddingHorizontal: spacing.sm,
    paddingVertical: 2,
  },
  depthText: { fontSize: fonts.sizes.xs, fontWeight: '600', textTransform: 'capitalize' },
  storyTitle: {
    fontSize: fonts.sizes.lg,
    color: colors.textPrimary,
    fontWeight: '700',
    marginTop: spacing.xs,
  },
  teaching: {
    fontSize: fonts.sizes.sm,
    color: colors.textSecondary,
    fontStyle: 'italic',
    lineHeight: fonts.sizes.sm * 1.6,
  },
  cardBottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: spacing.sm,
  },
  citation: { fontSize: fonts.sizes.xs, color: colors.textMuted },
  readTime: { fontSize: fonts.sizes.xs, color: colors.gold },
});
