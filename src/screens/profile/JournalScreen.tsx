import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { colors, spacing, fonts, radius } from '../../theme';
import { useUser } from '../../context/UserContext';
import type { ProfileStackScreenProps } from '../../navigation/types';

type Props = ProfileStackScreenProps<'Journal'>;

export default function JournalScreen({ navigation }: Props) {
  const { state, dispatch } = useUser();
  const entries = state.profile?.journalEntries ?? [];
  const [newEntry, setNewEntry] = useState('');
  const [composing, setComposing] = useState(false);

  function saveEntry() {
    if (!newEntry.trim()) return;
    dispatch({
      type: 'ADD_JOURNAL_ENTRY',
      payload: {
        id: Date.now().toString(),
        date: new Date().toISOString(),
        content: newEntry.trim(),
      },
    });
    setNewEntry('');
    setComposing(false);
  }

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <ScrollView contentContainerStyle={styles.scroll} showsVerticalScrollIndicator={false}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.back}>
            <Text style={styles.backText}>← Profile</Text>
          </TouchableOpacity>

          <Text style={styles.title}>Wisdom Journal</Text>
          <Text style={styles.subtitle}>
            Your reflections, breakthroughs, and insights
          </Text>

          {/* Compose */}
          {composing ? (
            <View style={styles.composeCard}>
              <TextInput
                style={styles.composeInput}
                multiline
                placeholder="Write your reflection..."
                placeholderTextColor={colors.textMuted}
                value={newEntry}
                onChangeText={setNewEntry}
                textAlignVertical="top"
                autoFocus
              />
              <View style={styles.composeActions}>
                <TouchableOpacity onPress={() => setComposing(false)}>
                  <Text style={styles.cancelText}>Cancel</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.saveBtn} onPress={saveEntry}>
                  <Text style={styles.saveBtnText}>Save</Text>
                </TouchableOpacity>
              </View>
            </View>
          ) : (
            <TouchableOpacity style={styles.newEntryBtn} onPress={() => setComposing(true)}>
              <Text style={styles.newEntryIcon}>✏️</Text>
              <Text style={styles.newEntryText}>New Reflection</Text>
            </TouchableOpacity>
          )}

          {/* Entries */}
          {entries.length === 0 ? (
            <View style={styles.emptyState}>
              <Text style={styles.emptyText}>
                Your journal is empty.{'\n'}Begin reflecting on your daily teachings.
              </Text>
            </View>
          ) : (
            entries.map((entry) => (
              <View key={entry.id} style={styles.entryCard}>
                <Text style={styles.entryDate}>
                  {new Date(entry.date).toLocaleDateString('en-US', {
                    weekday: 'long',
                    month: 'long',
                    day: 'numeric',
                  })}
                </Text>
                <Text style={styles.entryContent}>{entry.content}</Text>
              </View>
            ))
          )}
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.bg },
  scroll: { padding: spacing.lg, gap: spacing.md },
  back: {},
  backText: { color: colors.gold, fontSize: fonts.sizes.md },
  title: { fontSize: fonts.sizes.xxl, color: colors.textPrimary, fontWeight: '700' },
  subtitle: { fontSize: fonts.sizes.sm, color: colors.textMuted },

  newEntryBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
    backgroundColor: colors.bgCard,
    borderRadius: radius.lg,
    padding: spacing.lg,
    borderWidth: 1,
    borderColor: colors.border,
    borderStyle: 'dashed',
  },
  newEntryIcon: { fontSize: 20 },
  newEntryText: { fontSize: fonts.sizes.md, color: colors.textMuted },

  composeCard: {
    backgroundColor: colors.bgCard,
    borderRadius: radius.lg,
    padding: spacing.lg,
    borderWidth: 1,
    borderColor: colors.gold,
    gap: spacing.md,
  },
  composeInput: {
    color: colors.textPrimary,
    fontSize: fonts.sizes.md,
    minHeight: 120,
    lineHeight: fonts.sizes.md * 1.6,
  },
  composeActions: { flexDirection: 'row', justifyContent: 'flex-end', gap: spacing.md, alignItems: 'center' },
  cancelText: { color: colors.textMuted, fontSize: fonts.sizes.md },
  saveBtn: {
    backgroundColor: colors.gold,
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.sm,
    borderRadius: radius.full,
  },
  saveBtnText: { color: colors.bg, fontWeight: '700', fontSize: fonts.sizes.md },

  emptyState: { padding: spacing.xxl, alignItems: 'center' },
  emptyText: {
    fontSize: fonts.sizes.md,
    color: colors.textMuted,
    textAlign: 'center',
    lineHeight: fonts.sizes.md * 1.6,
  },
  entryCard: {
    backgroundColor: colors.bgCard,
    borderRadius: radius.lg,
    padding: spacing.lg,
    borderWidth: 1,
    borderColor: colors.border,
    gap: spacing.sm,
  },
  entryDate: { fontSize: fonts.sizes.xs, color: colors.gold, fontWeight: '600', letterSpacing: 0.5 },
  entryContent: {
    fontSize: fonts.sizes.md,
    color: colors.textSecondary,
    lineHeight: fonts.sizes.md * 1.7,
  },
});
