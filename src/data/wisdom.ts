/**
 * Combines all daily wisdom entries and exposes a deterministic day-based selector.
 *
 * Selection: day-of-year mod entry-count — so the same date always returns
 * the same verse, and the sequence cycles annually. No calendar mapping needed.
 */
import type { DailyWisdom } from '../types';
import WISDOM1 from './dailyWisdom';
import WISDOM2 from './dailyWisdom2';

export const ALL_WISDOM: DailyWisdom[] = [...WISDOM1, ...WISDOM2];

/** Returns today's wisdom entry based on the day of year. */
export function getTodaysWisdom(): DailyWisdom {
  const now = new Date();
  const start = new Date(now.getFullYear(), 0, 0);
  const dayOfYear = Math.floor((now.getTime() - start.getTime()) / 86_400_000);
  return ALL_WISDOM[dayOfYear % ALL_WISDOM.length];
}

/** Returns the entry for an arbitrary Date (useful for testing or previewing). */
export function getWisdomForDate(date: Date): DailyWisdom {
  const start = new Date(date.getFullYear(), 0, 0);
  const dayOfYear = Math.floor((date.getTime() - start.getTime()) / 86_400_000);
  return ALL_WISDOM[dayOfYear % ALL_WISDOM.length];
}
