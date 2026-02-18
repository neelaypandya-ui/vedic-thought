import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { colors, spacing, fonts, radius } from '../../theme';
import type { HomeStackScreenProps } from '../../navigation/types';

type Props = HomeStackScreenProps<'EveningReflection'>;

export default function EveningReflectionScreen({ navigation }: Props) {
  const [reflection, setReflection] = useState('');
  const [gratitude, setGratitude] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <ScrollView contentContainerStyle={styles.scroll} showsVerticalScrollIndicator={false}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.back}>
            <Text style={styles.backText}>← Back</Text>
          </TouchableOpacity>

          <Text style={styles.title}>Evening Reflection</Text>

          {/* Review Prompt */}
          <View style={styles.section}>
            <Text style={styles.sectionLabel}>REVIEW</Text>
            <Text style={styles.prompt}>
              How did today's teaching manifest in your experience? What did you notice?
            </Text>
            <TextInput
              style={styles.input}
              multiline
              placeholder="Write your reflection..."
              placeholderTextColor={colors.textMuted}
              value={reflection}
              onChangeText={setReflection}
              textAlignVertical="top"
            />
          </View>

          {/* Gratitude / Yajna */}
          <View style={styles.section}>
            <Text style={styles.sectionLabel}>YAJNA (OFFERING)</Text>
            <Text style={styles.prompt}>
              What did you offer to the world today, and what was offered to you?
            </Text>
            <TextInput
              style={styles.input}
              multiline
              placeholder="Your offering today..."
              placeholderTextColor={colors.textMuted}
              value={gratitude}
              onChangeText={setGratitude}
              textAlignVertical="top"
            />
          </View>

          {/* Night Mantra */}
          <View style={styles.mantraCard}>
            <Text style={styles.mantraLabel}>NIGHT MANTRA</Text>
            <Text style={styles.mantraSanskrit}>
              ॐ सह नाववतु। सह नौ भुनक्तु।{'\n'}
              सह वीर्यं करवावहै।
            </Text>
            <Text style={styles.mantraTranslation}>
              May we be protected together. May we be nourished together.{'\n'}
              May we work together with great vigor.
            </Text>
            <Text style={styles.mantraSource}>— Taittiriya Upanishad 2.2.2</Text>
          </View>

          <TouchableOpacity style={styles.saveBtn} onPress={() => navigation.goBack()}>
            <Text style={styles.saveBtnText}>Save & Rest</Text>
          </TouchableOpacity>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.bg },
  scroll: { padding: spacing.lg, gap: spacing.lg },
  back: {},
  backText: { color: colors.gold, fontSize: fonts.sizes.md },
  title: { fontSize: fonts.sizes.xxl, color: colors.textPrimary, fontWeight: '700' },

  section: { gap: spacing.sm },
  sectionLabel: {
    fontSize: fonts.sizes.xs,
    color: colors.gold,
    fontWeight: '700',
    letterSpacing: 1.5,
  },
  prompt: {
    fontSize: fonts.sizes.md,
    color: colors.textSecondary,
    lineHeight: fonts.sizes.md * 1.6,
  },
  input: {
    backgroundColor: colors.bgCard,
    borderRadius: radius.md,
    borderWidth: 1,
    borderColor: colors.border,
    padding: spacing.md,
    color: colors.textPrimary,
    fontSize: fonts.sizes.md,
    minHeight: 100,
  },

  mantraCard: {
    backgroundColor: colors.bgElevated,
    borderRadius: radius.lg,
    padding: spacing.lg,
    gap: spacing.sm,
    borderLeftWidth: 3,
    borderLeftColor: colors.gold,
  },
  mantraLabel: {
    fontSize: fonts.sizes.xs,
    color: colors.gold,
    fontWeight: '700',
    letterSpacing: 1.5,
  },
  mantraSanskrit: {
    fontSize: fonts.sizes.lg,
    color: colors.textPrimary,
    lineHeight: fonts.sizes.lg * 1.8,
  },
  mantraTranslation: {
    fontSize: fonts.sizes.sm,
    color: colors.textSecondary,
    fontStyle: 'italic',
    lineHeight: fonts.sizes.sm * 1.6,
  },
  mantraSource: { fontSize: fonts.sizes.xs, color: colors.textMuted },

  saveBtn: {
    backgroundColor: colors.gold,
    padding: spacing.md,
    borderRadius: radius.full,
    alignItems: 'center',
  },
  saveBtnText: { fontSize: fonts.sizes.lg, color: colors.bg, fontWeight: '700' },
});
