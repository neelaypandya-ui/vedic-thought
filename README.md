# ॐ Vedic Wisdom App

> Ancient Knowledge · Modern Experience · Inner Peace

An AI-powered spiritual companion that makes the profound teachings of the Vedas, Upanishads, and Bhagavad Gita accessible, interactive, and personally transformative.

## Features

- **Daily Wisdom** — A new verse each day from the Vedic canon (Sanskrit, transliteration, translation, teaching, and sankalpa intention). 30 real entries sequenced thematically across the four Vedas, thirteen Upanishads, and Bhagavad Gita.
- **Story Library** — Narrative retellings of canonical stories with teaching, reflection prompt, and practice. Filterable by category (Self, Dharma, Devotion, Mind, Liberation, and more).
- **Ask the Vedas** — Conversational AI powered by Claude, grounded exclusively in Vedic scripture. Every response is cited to a specific text and verse. Includes starter prompts and full conversation history.
- **My Journey** — Tracks spiritual path (Karma / Bhakti / Jnana Yoga), depth level, stories read, concepts explored, and a personal wisdom journal.
- **Onboarding** — Four-step dialogue that sets intention, familiarity level, content preference, and path — no dry surveys.

## Tech Stack

| Layer | Choice |
|---|---|
| Framework | Expo (SDK 54) + React Native |
| Language | TypeScript |
| Navigation | React Navigation v7 (native stack + bottom tabs) |
| State | React Context + useReducer |
| Persistence | AsyncStorage |
| AI | Anthropic Claude API (`claude-sonnet-4-6`) |

## Getting Started

```bash
git clone https://github.com/neelaypandya-ui/vedic-thought.git
cd vedic-thought
npm install
```

Create a `.env` file in the project root:

```
EXPO_PUBLIC_ANTHROPIC_API_KEY=sk-ant-your-key-here
```

Then run:

```bash
npm run web       # browser
npm run android   # Android emulator or device
npm run ios       # iOS simulator (macOS only)
```

## Project Structure

```
src/
├── theme/          # Colors, fonts, spacing
├── types/          # TypeScript interfaces
├── context/        # UserContext — global state + AsyncStorage persistence
├── navigation/     # Root, tab, and stack navigators
├── data/           # 30 daily wisdom entries + selector utility
├── services/       # Claude API client with Vedic system prompt
└── screens/
    ├── onboarding/ # 4-step onboarding flow
    ├── home/       # Daily wisdom, meditation, evening reflection
    ├── stories/    # Story library + detail view
    ├── ask/        # Claude-powered Q&A
    └── profile/    # Journey stats + wisdom journal
```

## Source Texts

The app draws from the canonical Vedic corpus:

- **Four Vedas** — Rig, Yajur, Sama, Atharva
- **13 Principal Upanishads** — Brihadaranyaka, Chandogya, Katha, Mandukya, Mundaka, Taittiriya, Isha, Kena, Maitri, Shvetashvatara, and more
- **Bhagavad Gita** — All 18 chapters across the three yogas
- **Yoga Sutras of Patanjali** — Meditation framework
- **Supplementary** — Mahabharata, Ramayana, Puranas (narrative context only)

## Deployment

| Target | URL |
|---|---|
| Live app | https://vedic-wisdom.netlify.app |
| GitHub | https://github.com/neelaypandya-ui/vedic-thought |

Deployments are automatic — pushing to `master` triggers a Netlify rebuild via `netlify.toml`.

---

*"Asato mā sadgamaya — Lead me from the unreal to the real."*
— Brihadaranyaka Upanishad 1.3.28
