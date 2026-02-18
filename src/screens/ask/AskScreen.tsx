import React, { useState, useRef, useCallback } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  ActivityIndicator,
} from 'react-native';
import { colors, spacing, fonts, radius } from '../../theme';
import { useUser } from '../../context/UserContext';
import { askVedas, MissingApiKeyError } from '../../services/claude';
import type { ChatMessage } from '../../types';

const STARTER_PROMPTS = [
  'What is the nature of Atman?',
  "I'm struggling with anger — what do the Vedas say?",
  'Explain the three gunas',
  'How do I practice detachment?',
];

// The welcome message is synthetic — it is shown in the UI but never sent to
// the API, so the conversation history always starts with a real user message.
const WELCOME_ID = 'welcome';
const WELCOME_MESSAGE: ChatMessage = {
  id: WELCOME_ID,
  role: 'assistant',
  content:
    'Namaste. I am here as a companion steeped in the Vedas, Upanishads, and Bhagavad Gita — not as a guru, but as a fellow seeker who has studied these texts deeply.\n\nWhat question arises in you today?',
  timestamp: new Date().toISOString(),
};

export default function AskScreen() {
  const { state } = useUser();
  const [messages, setMessages] = useState<ChatMessage[]>([WELCOME_MESSAGE]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const listRef = useRef<FlatList>(null);

  const sendMessage = useCallback(
    async (text: string) => {
      if (!text.trim() || isLoading) return;

      setError(null);

      const userMsg: ChatMessage = {
        id: Date.now().toString(),
        role: 'user',
        content: text.trim(),
        timestamp: new Date().toISOString(),
      };

      // Optimistically add the user message
      const nextMessages = [...messages, userMsg];
      setMessages(nextMessages);
      setInput('');
      setIsLoading(true);

      try {
        if (!state.profile) throw new Error('User profile not loaded.');

        // Strip the synthetic welcome message before sending to the API.
        // The API requires the conversation to start with a user message.
        const apiMessages = nextMessages.filter((m) => m.id !== WELCOME_ID);

        const responseText = await askVedas({
          messages: apiMessages,
          userProfile: state.profile,
        });

        const assistantMsg: ChatMessage = {
          id: (Date.now() + 1).toString(),
          role: 'assistant',
          content: responseText,
          timestamp: new Date().toISOString(),
        };

        setMessages((prev) => [...prev, assistantMsg]);
      } catch (err) {
        let message = 'Something went wrong. Please try again.';
        if (err instanceof MissingApiKeyError) {
          message = 'No API key found. Add EXPO_PUBLIC_ANTHROPIC_API_KEY to your .env file.';
        } else if (err instanceof Error) {
          message = err.message;
        }
        setError(message);
        // Remove the optimistic user message on failure so they can retry
        setMessages(messages);
        setInput(text);
      } finally {
        setIsLoading(false);
      }
    },
    [messages, isLoading, state.profile],
  );

  function renderMessage({ item }: { item: ChatMessage }) {
    const isUser = item.role === 'user';
    return (
      <View style={[styles.bubbleWrapper, isUser ? styles.userWrapper : styles.assistantWrapper]}>
        {!isUser && <Text style={styles.guideLabel}>Vedic Guide</Text>}
        <View style={[styles.bubble, isUser ? styles.userBubble : styles.assistantBubble]}>
          <Text style={[styles.bubbleText, isUser ? styles.userText : styles.assistantText]}>
            {item.content}
          </Text>
        </View>
      </View>
    );
  }

  const showStarters = messages.length === 1 && !isLoading;

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        keyboardVerticalOffset={90}
      >
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Ask the Vedas</Text>
          <Text style={styles.headerSub}>Grounded in scripture · Cited always</Text>
        </View>

        {/* Error banner */}
        {error && (
          <View style={styles.errorBanner}>
            <Text style={styles.errorText}>{error}</Text>
            <TouchableOpacity onPress={() => setError(null)}>
              <Text style={styles.errorDismiss}>✕</Text>
            </TouchableOpacity>
          </View>
        )}

        {/* Messages */}
        <FlatList
          ref={listRef}
          data={messages}
          keyExtractor={(m) => m.id}
          renderItem={renderMessage}
          contentContainerStyle={styles.messageList}
          onContentSizeChange={() => listRef.current?.scrollToEnd({ animated: true })}
          keyboardShouldPersistTaps="handled"
          ListFooterComponent={
            isLoading ? (
              <View style={styles.loadingRow}>
                <ActivityIndicator color={colors.gold} size="small" />
                <Text style={styles.loadingText}>Consulting the scriptures...</Text>
              </View>
            ) : null
          }
        />

        {/* Starter prompts — shown only before the first user message */}
        {showStarters && (
          <View style={styles.starterRow}>
            {STARTER_PROMPTS.map((p) => (
              <TouchableOpacity
                key={p}
                style={styles.starterChip}
                onPress={() => sendMessage(p)}
              >
                <Text style={styles.starterText}>{p}</Text>
              </TouchableOpacity>
            ))}
          </View>
        )}

        {/* Input */}
        <View style={styles.inputRow}>
          <TextInput
            style={styles.input}
            placeholder="Ask a question..."
            placeholderTextColor={colors.textMuted}
            value={input}
            onChangeText={setInput}
            multiline
            maxLength={500}
            returnKeyType="send"
            blurOnSubmit
            onSubmitEditing={() => sendMessage(input)}
          />
          <TouchableOpacity
            style={[styles.sendBtn, (!input.trim() || isLoading) && styles.sendBtnDisabled]}
            onPress={() => sendMessage(input)}
            disabled={!input.trim() || isLoading}
          >
            <Text style={styles.sendIcon}>↑</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.bg },

  header: {
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.md,
    paddingBottom: spacing.sm,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  headerTitle: { fontSize: fonts.sizes.xl, color: colors.textPrimary, fontWeight: '700' },
  headerSub: { fontSize: fonts.sizes.xs, color: colors.textMuted },

  errorBanner: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#3D0A0A',
    borderBottomWidth: 1,
    borderBottomColor: colors.error,
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.sm,
    gap: spacing.sm,
  },
  errorText: { flex: 1, fontSize: fonts.sizes.sm, color: '#FF9999' },
  errorDismiss: { fontSize: fonts.sizes.md, color: colors.error, fontWeight: '700' },

  messageList: { padding: spacing.md, gap: spacing.md, flexGrow: 1 },

  bubbleWrapper: { maxWidth: '85%', gap: 4 },
  userWrapper: { alignSelf: 'flex-end' },
  assistantWrapper: { alignSelf: 'flex-start' },

  guideLabel: { fontSize: fonts.sizes.xs, color: colors.gold, fontWeight: '600', marginLeft: 4 },

  bubble: { borderRadius: radius.lg, padding: spacing.md },
  userBubble: { backgroundColor: colors.bgElevated, borderWidth: 1, borderColor: colors.border },
  assistantBubble: { backgroundColor: colors.bgCard, borderWidth: 1, borderColor: colors.border },

  bubbleText: { fontSize: fonts.sizes.md, lineHeight: fonts.sizes.md * 1.6 },
  userText: { color: colors.textPrimary },
  assistantText: { color: colors.textSecondary },

  loadingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
    padding: spacing.md,
  },
  loadingText: { fontSize: fonts.sizes.sm, color: colors.textMuted, fontStyle: 'italic' },

  starterRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: spacing.md,
    gap: spacing.sm,
  },
  starterChip: {
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.xs,
    borderRadius: radius.full,
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.bgCard,
  },
  starterText: { fontSize: fonts.sizes.xs, color: colors.textSecondary },

  inputRow: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    padding: spacing.md,
    gap: spacing.sm,
    borderTopWidth: 1,
    borderTopColor: colors.border,
  },
  input: {
    flex: 1,
    backgroundColor: colors.bgCard,
    borderRadius: radius.lg,
    borderWidth: 1,
    borderColor: colors.border,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
    color: colors.textPrimary,
    fontSize: fonts.sizes.md,
    maxHeight: 120,
  },
  sendBtn: {
    width: 44,
    height: 44,
    borderRadius: radius.full,
    backgroundColor: colors.gold,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sendBtnDisabled: { backgroundColor: colors.bgElevated },
  sendIcon: { fontSize: fonts.sizes.lg, color: colors.bg, fontWeight: '700' },
});
