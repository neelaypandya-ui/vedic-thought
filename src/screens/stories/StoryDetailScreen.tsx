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
import type { StoriesStackScreenProps } from '../../navigation/types';

type Props = StoriesStackScreenProps<'StoryDetail'>;

// Placeholder — real data will come from the data layer
const STORY_PLACEHOLDER = {
  id: 'nachiketa',
  title: 'Nachiketa and the Lord of Death',
  sourceText: 'Katha Upanishad',
  citation: 'Katha Upanishad 1.1–1.3',
  narrative: `Long ago, a young boy named Nachiketa watched his father perform a great sacrifice. But something troubled him deeply — his father was offering old, barren cows that could give no more milk. Was this true giving?

"Father, to whom will you give me?" the boy asked, again and again, until his father, irritated, said: "I give you to Death."

And so Nachiketa kept his father's word and traveled to the house of Yama, the Lord of Death. But Yama was away for three days. When he returned and found a young brahmin boy waiting without food or water, Yama was troubled. A guest unserved is a fire that burns the host.

"You have waited three nights in my house without food," Yama said. "Ask three boons — one for each night."

Nachiketa's first boon: peace with his father. Granted.
His second boon: the knowledge of the sacred fire that leads to heaven. Granted.

Then came the third boon — the one that would change everything.

"When a person dies," said Nachiketa, "some say he continues to exist; others say he does not. Teach me this truth."

Yama flinched. He offered wealth, pleasures, kingdoms, beautiful women — anything but this. But Nachiketa refused every distraction.

"These pleasures are fleeting, O Death. They dull the senses without satisfying the spirit. Only the knowledge of the Self can satisfy. Tell me what lies beyond death."

Seeing that the boy could not be bought or frightened, Yama smiled. Only such a seeker was worthy of this teaching.

"There are two paths before every being," Yama began. "The pleasant (preya) and the good (shreya). The wise choose the good. The foolish choose the pleasant."`,
  teaching: `Nachiketa's story teaches us the art of discrimination (viveka) — the ability to distinguish between what is merely pleasant and what is truly good. Most of us spend our lives chasing the pleasant: comfort, approval, pleasure, security. But these are impermanent. They satisfy for a moment and then demand more.

The good — self-knowledge, liberation, understanding our true nature — does not glitter. It requires sacrifice, patience, and the willingness to sit with difficult questions. But it leads somewhere real.

The Katha Upanishad tells us that Atman — the true Self — cannot be known through the senses, through clever argument, or through scholarship alone. It reveals itself only to one who has chosen it above everything else, as Nachiketa did.

The Lord of Death is the ultimate teacher because he cuts through every illusion. When we face our own impermanence squarely, we stop wasting life on trivialities.`,
  reflectionPrompt: `Where in your own life are you choosing the pleasant over the good? What is one area where you know what the right path is, but find yourself pulled toward the easier, more comfortable option? What would Nachiketa do?`,
  practice: {
    title: 'Discrimination Contemplation',
    type: 'inquiry',
    instructions: `Sit quietly for 10 minutes. Take three slow breaths to settle.

Then ask yourself, without judgment:
"In this season of my life, what am I actually pursuing — pleasure or truth?"

Let whatever arises come. Don't analyze it immediately. Just observe with the same patience Nachiketa showed waiting at Death's door.

After sitting, write one sentence in your journal: "The good I am being called toward is ____________."`,
    duration: '10–15 min',
  },
  concepts: ['atman', 'viveka', 'shreya', 'preya'],
};

export default function StoryDetailScreen({ navigation, route }: Props) {
  const { storyId } = route.params;
  const story = STORY_PLACEHOLDER; // TODO: look up by storyId from data layer

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scroll} showsVerticalScrollIndicator={false}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.back}>
          <Text style={styles.backText}>← Stories</Text>
        </TouchableOpacity>

        {/* Meta */}
        <Text style={styles.source}>{story.sourceText}</Text>
        <Text style={styles.citation}>{story.citation}</Text>
        <Text style={styles.title}>{story.title}</Text>

        <View style={styles.divider} />

        {/* Narrative */}
        <Text style={styles.sectionLabel}>THE STORY</Text>
        <Text style={styles.narrative}>{story.narrative}</Text>

        <View style={styles.divider} />

        {/* Teaching */}
        <Text style={styles.sectionLabel}>THE TEACHING</Text>
        <Text style={styles.body}>{story.teaching}</Text>

        <View style={styles.divider} />

        {/* Reflection */}
        <View style={styles.reflectionCard}>
          <Text style={styles.sectionLabel}>REFLECTION</Text>
          <Text style={styles.body}>{story.reflectionPrompt}</Text>
        </View>

        {/* Practice */}
        <View style={styles.practiceCard}>
          <Text style={styles.sectionLabel}>PRACTICE</Text>
          <Text style={styles.practiceTitle}>{story.practice.title}</Text>
          <Text style={styles.practiceDuration}>{story.practice.duration}</Text>
          <Text style={styles.body}>{story.practice.instructions}</Text>
        </View>

        {/* Concepts */}
        <Text style={styles.sectionLabel}>CONCEPTS IN THIS STORY</Text>
        <View style={styles.conceptRow}>
          {story.concepts.map((c) => (
            <View key={c} style={styles.conceptChip}>
              <Text style={styles.conceptText}>{c}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.bg },
  scroll: { padding: spacing.lg, gap: spacing.md },
  back: { marginBottom: spacing.sm },
  backText: { color: colors.gold, fontSize: fonts.sizes.md },
  source: { fontSize: fonts.sizes.xs, color: colors.textMuted, fontWeight: '600', letterSpacing: 1 },
  citation: { fontSize: fonts.sizes.xs, color: colors.textMuted },
  title: {
    fontSize: fonts.sizes.xxl,
    color: colors.textPrimary,
    fontWeight: '700',
    lineHeight: fonts.sizes.xxl * 1.3,
  },
  divider: { height: 1, backgroundColor: colors.border, marginVertical: spacing.xs },
  sectionLabel: {
    fontSize: fonts.sizes.xs,
    color: colors.gold,
    fontWeight: '700',
    letterSpacing: 1.5,
    marginBottom: spacing.xs,
  },
  narrative: {
    fontSize: fonts.sizes.md,
    color: colors.textPrimary,
    lineHeight: fonts.sizes.md * 1.8,
  },
  body: {
    fontSize: fonts.sizes.md,
    color: colors.textSecondary,
    lineHeight: fonts.sizes.md * 1.7,
  },
  reflectionCard: {
    backgroundColor: colors.bgElevated,
    borderRadius: radius.lg,
    padding: spacing.lg,
    borderLeftWidth: 3,
    borderLeftColor: colors.saffron,
  },
  practiceCard: {
    backgroundColor: colors.bgCard,
    borderRadius: radius.lg,
    padding: spacing.lg,
    borderWidth: 1,
    borderColor: colors.border,
    gap: spacing.xs,
  },
  practiceTitle: { fontSize: fonts.sizes.lg, color: colors.textPrimary, fontWeight: '700' },
  practiceDuration: { fontSize: fonts.sizes.xs, color: colors.gold },
  conceptRow: { flexDirection: 'row', flexWrap: 'wrap', gap: spacing.sm },
  conceptChip: {
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.xs,
    borderRadius: radius.full,
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.bgCard,
  },
  conceptText: { fontSize: fonts.sizes.xs, color: colors.textSecondary, fontStyle: 'italic' },
});
