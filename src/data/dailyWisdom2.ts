import type { DailyWisdom } from '../types';

const NIGHT = {
  saha: {
    mantra: 'ॐ सह नाववतु। सह नौ भुनक्तु। सह वीर्यं करवावहै।',
    translation: 'May we be protected together. May we be nourished together. May we work together with great energy.',
  },
  purna: {
    mantra: 'ॐ पूर्णमदः पूर्णमिदं पूर्णात्पूर्णमुदच्यते।',
    translation: 'That is full, this is full. From fullness, fullness proceeds.',
  },
  sarve: {
    mantra: 'सर्वे भवन्तु सुखिनः। सर्वे सन्तु निरामयाः।',
    translation: 'May all beings be happy. May all beings be free from disease.',
  },
  shanti: {
    mantra: 'ॐ शान्तिः शान्तिः शान्तिः।',
    translation: 'Peace, peace, peace.',
  },
};

const WISDOM2: DailyWisdom[] = [
  // ── 16. Bhagavad Gita 4.7-8 ─────────────────────────────────────────────
  {
    id: 'bg-4-7',
    date: '',
    verse: 'यदा यदा हि धर्मस्य\nग्लानिर्भवति भारत।\nअभ्युत्थानमधर्मस्य\nतदात्मानं सृजाम्यहम्।।',
    transliteration: 'Yadā yadā hi dharmasya glānir bhavati bhārata,\nabhyutthānam adharmasya tadātmānaṃ sṛjāmy aham.',
    translation: 'Whenever there is a decline of dharma\nand a rise of adharma,\nO Arjuna,\nthen I manifest Myself.',
    teaching: `Krishna speaks these verses to explain the doctrine of divine incarnation (avatāra). But their meaning extends beyond theology into a living principle available in every age. The decline of dharma — of right order, justice, and truth — is not an exceptional event. It happens in every era, in every society, and within every individual heart. Whenever greed displaces generosity, whenever fear displaces love, whenever unconscious habit displaces awareness — dharma has declined.\n\nFor the devotee, the response to this decline is divine grace. For the karma yogi, it is the moral weight of right action gathering force. In both readings, the message is the same: the universe is not indifferent to the state of the world. There is a force that moves toward the restoration of balance. You can align yourself with it — by acting rightly even when it is costly, by choosing truth even when it is unpopular, by being the restoration you recognize is needed rather than waiting for someone else to bring it.`,
    sankalpaPrompt: 'Where in your immediate world — family, work, community — do you see dharma declining? What is one concrete action you can take today to restore balance?',
    sourceText: 'Bhagavad Gita',
    citation: 'Bhagavad Gita 4.7–8',
    conceptIds: ['dharma', 'karma'],
    nightMantra: NIGHT.sarve.mantra,
    nightMantraTranslation: NIGHT.sarve.translation,
  },

  // ── 17. Bhagavad Gita 3.19 ───────────────────────────────────────────────
  {
    id: 'bg-3-19',
    date: '',
    verse: 'तस्मादसक्तः सततं\nकार्यं कर्म समाचर।\nअसक्तो ह्याचरन्कर्म\nपरमाप्नोति पूरुषः।।',
    transliteration: 'Tasmād asaktaḥ satataṃ kāryaṃ karma samācara;\nasakto hy ācaran karma param āpnoti pūruṣaḥ.',
    translation: 'Therefore, without being attached to the fruits of action,\none should act as a matter of duty;\nfor by working without attachment\none attains the Supreme.',
    teaching: `After the philosophical foundations of karma yoga have been laid, Krishna gives the practical instruction in its clearest form: act without attachment, constantly (satataṃ). Not for special spiritual occasions — for ordinary life, moment to moment. The word "param" — the Supreme — is the destination. But notice: it is reached not through renunciation of action but through action itself, performed with the right inner orientation.\n\nWhat does "without attachment" mean in practice? It is not being halfhearted or indifferent to quality. The Gita is explicit that work should be done with full skill (yogaḥ karmasu kauśalam — yoga is skill in action). Attachment is not caring; attachment is making your peace, your identity, your worth dependent on a particular outcome. When a surgeon operates, she brings every skill to bear — but does not tremble with the thought "if this patient dies, I am worthless." Skill and surrender can coexist. The result: action that is both more effective and more peaceful.`,
    sankalpaPrompt: 'Pick one recurring task you do habitually — cooking, responding to email, a daily commute. Do it today as a conscious offering, with full attention but no anxiety about how it turns out.',
    sourceText: 'Bhagavad Gita',
    citation: 'Bhagavad Gita 3.19',
    conceptIds: ['karma', 'yoga', 'dharma'],
    nightMantra: NIGHT.saha.mantra,
    nightMantraTranslation: NIGHT.saha.translation,
  },

  // ── 18. Bhagavad Gita 6.5 ────────────────────────────────────────────────
  {
    id: 'bg-6-5',
    date: '',
    verse: 'उद्धरेदात्मनात्मानं\nनात्मानमवसादयेत्।\nआत्मैव ह्यात्मनो बन्धु-\nरात्मैव रिपुरात्मनः।।',
    transliteration: 'Uddhared ātmanātmānaṃ, nātmānam avasādayet;\nātmaiva hy ātmano bandhur, ātmaiva ripur ātmanaḥ.',
    translation: 'One must elevate oneself by one\'s own mind,\nnot degrade oneself.\nThe mind alone is the friend of the self,\nand the mind alone is the enemy of the self.',
    teaching: `No one else can do the inner work for you. Teachers can point, scriptures can illuminate, community can support — but the actual transformation of the mind is yours alone. Krishna places this instruction near the center of the Gita's chapter on meditation, before describing the fruits of practice. The placement is intentional: before showing the destination, he insists on personal responsibility.\n\nThe same mind that produces suffering also produces liberation. The faculty that generates anxiety, resentment, and delusion can — when trained and directed — generate insight, equanimity, and freedom. "Enemy of the self" describes the undirected mind: rehearsing grievances, catastrophizing about the future, comparing and finding lack. "Friend of the self" describes the disciplined mind: one that can observe without being swept away, that returns to the present rather than dwelling in regret. The spiritual path is, at its core, the lifelong project of making your own mind your ally.`,
    sankalpaPrompt: 'Today, notice one moment when your mind turns against you — criticizes, catastrophizes, or compares. That is the enemy. Then choose one thought that lifts rather than degrades. That is the friend.',
    sourceText: 'Bhagavad Gita',
    citation: 'Bhagavad Gita 6.5',
    conceptIds: ['yoga', 'karma'],
    nightMantra: NIGHT.purna.mantra,
    nightMantraTranslation: NIGHT.purna.translation,
  },

  // ── 19. Isha Upanishad 6 ─────────────────────────────────────────────────
  {
    id: 'isha-6',
    date: '',
    verse: 'यस्तु सर्वाणि भूतानि\nआत्मन्येवानुपश्यति।\nसर्वभूतेषु चात्मानं\nततो न विजुगुप्सते।।',
    transliteration: 'Yas tu sarvāṇi bhūtāny ātmany evānupaśyati;\nsarva-bhūteṣu cātmānaṃ tato na vijugupsate.',
    translation: 'One who sees all beings in the Self\nand the Self in all beings\nfeels no hatred,\nno revulsion.',
    teaching: `This verse from the Isha Upanishad is one of the earliest statements of what we might today call radical empathy — though it goes further than empathy. The one who sees with this vision does not merely feel for others; they recognize themselves in others. "Revulsion" (vijugupsā) is the Upanishad's word for the fundamental human recoil from what is different or threatening — the instinct driving tribalism, cruelty, and the capacity to cause suffering without feeling it.\n\nThe opposite of revulsion — the vision the Upanishad commends — is not tolerance, which still keeps distance, but recognition: this other being is not other. This recognition is not a moral effort but a perceptual shift. When you see, even briefly, that the awareness reading these words is the same awareness looking out of every pair of eyes, something changes — not because you forced yourself to be compassionate, but because the conceptual barrier between "me" and "them" became transparent. The Isha Upanishad presents this not as an ideal to strive toward but as a fact to be recognized.`,
    sankalpaPrompt: 'Bring to mind someone you currently struggle to feel warmth toward. Try — just as an experiment — to see the same Ātman in them that is in you. What, if anything, shifts?',
    sourceText: 'Isha Upanishad',
    citation: 'Isha Upanishad 6',
    conceptIds: ['atman', 'brahman'],
    nightMantra: NIGHT.shanti.mantra,
    nightMantraTranslation: NIGHT.shanti.translation,
  },

  // ── 20. Bhagavad Gita 6.17 ───────────────────────────────────────────────
  {
    id: 'bg-6-17',
    date: '',
    verse: 'युक्ताहारविहारस्य\nयुक्तचेष्टस्य कर्मसु।\nयुक्तस्वप्नावबोधस्य\nयोगो भवति दुःखहा।।',
    transliteration: 'Yuktāhāra-vihārasya, yukta-ceṣṭasya karmasu;\nyukta-svapnāvabodhasya, yogo bhavati duḥkhahā.',
    translation: 'For one who is temperate in eating and recreation,\ntemperate in work,\ntemperate in sleeping and waking,\nyoga becomes the destroyer of all suffering.',
    teaching: `This verse is a reminder that the spiritual path is not about extremes but about intelligent moderation. The word "yukta" appears four times — from the root "yuj," the same root as yoga, meaning "appropriate, balanced, yoked." The person suited for deep practice is one who has brought their basic life habits into alignment. Four domains are specified: eating and recreation, work and activity, sleep and wakefulness. In each, the instruction is the same: neither excess nor deficiency.\n\nKrishna gives this instruction in the chapter on meditation because an instrument must be properly maintained to function as intended. You cannot achieve deep inner stillness if you are chronically sleep-deprived, poorly nourished, or exhausted by overwork. The spiritual path asks you to take your ordinary human life seriously — not as an obstacle to spirituality but as its very foundation. The extraordinary and the ordinary are not separate. Right living is the ground from which right practice grows.`,
    sankalpaPrompt: 'Honestly assess one area of your daily habits — sleep, food, work, or rest — where you are out of balance. What would "yukta" (appropriate measure) look like there?',
    sourceText: 'Bhagavad Gita',
    citation: 'Bhagavad Gita 6.17',
    conceptIds: ['yoga'],
    nightMantra: NIGHT.sarve.mantra,
    nightMantraTranslation: NIGHT.sarve.translation,
  },

  // ── 21. Mundaka Upanishad 1.1.4 ──────────────────────────────────────────
  {
    id: 'mu-1-1-4',
    date: '',
    verse: 'द्वे विद्ये वेदितव्ये इति ह स्म\nयद्ब्रह्मविदो वदन्ति —\nपरा चैवापरा च।',
    transliteration: 'Dve vidye veditavye iti ha sma yad brahma-vido vadanti —\nparā caivāparā ca.',
    translation: 'Two kinds of knowledge are to be known,\nas those who know Brahman declare —\nthe higher and the lower.',
    teaching: `In the Mundaka Upanishad, a householder named Shaunaka approaches the sage Angiras and asks the most important question: "What, if known, makes all this known?" Angiras responds with a fundamental distinction: lower knowledge (aparā vidyā) encompasses everything we ordinarily study — language, science, ritual, grammar. These are valuable and even essential for navigating the world, but ultimately unable to answer the deepest question. Lower knowledge deals with objects; it tells you how things work, not what ultimately is.\n\nHigher knowledge (parā vidyā) is the direct knowing of Brahman — not information about ultimate reality, but its direct recognition. This knowledge cannot be found in any text because it is not a concept to be memorized but an insight to be realized. The Mundaka Upanishad itself, in a beautiful paradox, uses words (lower knowledge) to point toward what is beyond words (higher knowledge). The seeker uses every available means — study, practice, contemplation — knowing that all of them are fingers pointing at the moon, not the moon itself.`,
    sankalpaPrompt: 'In what areas of life are you relying on lower knowledge (information, technique, intellectual understanding) when what is actually needed is direct experience?',
    sourceText: 'Mundaka Upanishad',
    citation: 'Mundaka Upanishad 1.1.4',
    conceptIds: ['brahman', 'moksha'],
    nightMantra: NIGHT.saha.mantra,
    nightMantraTranslation: NIGHT.saha.translation,
  },

  // ── 22. Yoga Sutras 1.2 ───────────────────────────────────────────────────
  {
    id: 'ys-1-2',
    date: '',
    verse: 'योगश्चित्तवृत्तिनिरोधः।',
    transliteration: 'Yogaś citta-vṛtti-nirodhaḥ.',
    translation: 'Yoga is the stilling\nof the fluctuations of the mind.',
    teaching: `Patanjali opens his Yoga Sutras with a definition so precise it has shaped meditation practice for two thousand years. "Citta" is the mind-field — the totality of mental activity including thoughts, emotions, memories, and imaginations. "Vṛtti" means fluctuations, movements, whirlpools. Every thought is a vṛtti. The mind is ordinarily never still; it moves from thought to memory to fantasy to plan, as restless as the surface of a windblown lake. "Nirodhaḥ" means cessation or stillness — not suppression, but a natural settling.\n\nWhen the mind stills — as when a room grows quiet after a bell — something is revealed. The following sutra (1.3) explains: "Then the seer abides in its own nature." The Self, which was always present but obscured by mental turbulence, becomes visible. This is why Patanjali calls this state "yoga" — union. Not union with something external, but the recognition of what you already are, minus the noise. Today's practice is simple: notice when the mind is turbulent, and instead of following the turbulence, return — again and again — to the breath, to the body, to this present moment.`,
    sankalpaPrompt: 'Set a timer for just five minutes today. Sit still and simply observe the fluctuations of your mind without following any of them. Count how many times you return from distraction. Each return is the practice.',
    sourceText: 'Yoga Sutras of Patanjali',
    citation: 'Yoga Sutras 1.2',
    conceptIds: ['yoga'],
    nightMantra: NIGHT.purna.mantra,
    nightMantraTranslation: NIGHT.purna.translation,
  },

  // ── 23. Bhagavad Gita 2.14 ───────────────────────────────────────────────
  {
    id: 'bg-2-14',
    date: '',
    verse: 'मात्रास्पर्शास्तु कौन्तेय\nशीतोष्णसुखदुःखदाः।\nआगमापायिनोऽनित्यास्-\nतांस्तितिक्षस्व भारत।।',
    transliteration: 'Mātrā-sparśās tu kaunteya, śītoṣṇa-sukha-duḥkha-dāḥ;\nāgamāpāyino\'nityās, tāṃs titikṣasva bhārata.',
    translation: 'The contacts of the senses with their objects\nproduce cold and heat, pleasure and pain.\nThey come and go; they are impermanent.\nEndure them, O Arjuna.',
    teaching: `Before introducing the eternal soul, Krishna begins with phenomenology — the basic structure of sensory experience. Every pleasant or painful sensation works the same way: a sense organ contacts an object, and a temporary experience arises. Cold, heat, pleasure, pain — all follow this pattern, and none of them last. The word Krishna uses for endurance is "titikṣā" — a technical term in Vedanta for the capacity to bear difficulty without being destabilized.\n\nTitikṣā is not the same as suppression or dissociation. It is closer to what modern psychology calls affect tolerance: the ability to feel without being overwhelmed. This quality is essential on the spiritual path because discomfort is inevitable — in meditation, in honest self-examination, in living with open-hearted attention in a world of loss. Titikṣā is trained incrementally, by staying with small difficulties before they become large ones, by learning that discomfort, like all sensory experience, is impermanent. "This too shall pass" is not a consolation. It is a metaphysical fact.`,
    sankalpaPrompt: 'Today, when you encounter a small discomfort — physical or emotional — instead of immediately seeking relief, stay with it for thirty seconds. Observe it. Watch it change. Practice titikṣā.',
    sourceText: 'Bhagavad Gita',
    citation: 'Bhagavad Gita 2.14',
    conceptIds: ['yoga', 'karma'],
    nightMantra: NIGHT.shanti.mantra,
    nightMantraTranslation: NIGHT.shanti.translation,
  },

  // ── 24. Maitri Upanishad 6.34 ────────────────────────────────────────────
  {
    id: 'maitri-6-34',
    date: '',
    verse: 'मन एव मनुष्याणां\nकारणं बन्धमोक्षयोः।',
    transliteration: 'Mana eva manuṣyāṇāṃ\nkāraṇaṃ bandha-mokṣayoḥ.',
    translation: 'The mind alone is the cause\nof bondage and liberation for human beings.',
    teaching: `The Maitri Upanishad is distinctive in placing the mind at the center — not karma, not fate, not external circumstances — as both the cause of bondage and the instrument of liberation. When the mind is absorbed in objects, constantly craving and fearing, it identifies with what is temporary and loses touch with what is eternal. This identification is not a metaphysical error correctable by argument; it is a lived habit, repeated thousands of times daily.\n\nWhat makes the same mind the cause of liberation? When turned inward and purified through practice, it becomes a transparent medium through which the Self is recognized. The Maitri elsewhere describes the mind absorbed in AUM, the mind that grows still in deep meditation — in these states, the veil of habit lifts and reality is momentarily visible as it is. The practice is not to escape the mind but to transform it: from a wall that blocks the light to a window through which it shines. Every moment of honest self-observation, every breath returned to in meditation, is that transformation in progress.`,
    sankalpaPrompt: 'Today, catch your mind in the act of creating suffering — through rumination, comparison, or worry. Recognize: this is the mind as enemy. Then consciously redirect it. Recognize: this is the mind as friend.',
    sourceText: 'Maitri Upanishad',
    citation: 'Maitri Upanishad 6.34',
    conceptIds: ['yoga', 'moksha'],
    nightMantra: NIGHT.sarve.mantra,
    nightMantraTranslation: NIGHT.sarve.translation,
  },

  // ── 25. Bhagavad Gita 2.62-63 ────────────────────────────────────────────
  {
    id: 'bg-2-62',
    date: '',
    verse: 'ध्यायतो विषयान्पुंसः\nसङ्गस्तेषूपजायते।\nसङ्गात्सञ्जायते कामः\nकामात्क्रोधोऽभिजायते।।',
    transliteration: 'Dhyāyato viṣayān puṃsaḥ, saṅgas teṣūpajāyate;\nsaṅgāt sañjāyate kāmaḥ, kāmāt krodho\'bhijāyate.',
    translation: 'By dwelling on sense objects,\nattachment arises;\nfrom attachment, desire;\nfrom desire, anger.',
    teaching: `In two compact verses, Krishna maps the entire chain of psychological catastrophe — from idle thought to ruin. The sequence: dwelling on objects → attachment → desire → anger (when desire is thwarted) → delusion → confusion of memory → loss of discernment → destruction. What is remarkable is where the chain begins: not with touching or experiencing, but with "dwelling on" (dhyāyataḥ) — sustained mental fixation. The mind is the first battlefield.\n\nEach step in the chain is mechanical, not chosen. Attachment produces desire as reliably as heat produces steam. The only place freedom exists is at the very beginning: in what the mind is allowed to dwell on. This is why the tradition places such emphasis on what you let your mind rehearse — through the media you consume, the conversations you have, the habits of thought you cultivate day after day. Meditation — the disciplined direction of attention — is not a luxury but the most fundamental act of self-governance available to a human being.`,
    sankalpaPrompt: 'Notice today what your mind dwells on when given free time. What does that dwelling produce in you over hours? Is that what you consciously choose to cultivate?',
    sourceText: 'Bhagavad Gita',
    citation: 'Bhagavad Gita 2.62–63',
    conceptIds: ['yoga', 'karma'],
    nightMantra: NIGHT.saha.mantra,
    nightMantraTranslation: NIGHT.saha.translation,
  },

  // ── 26. Katha Upanishad 2.3.14 ───────────────────────────────────────────
  {
    id: 'katha-2-3-14',
    date: '',
    verse: 'उत्तिष्ठत जाग्रत\nप्राप्य वरान्निबोधत।\nक्षुरस्य धारा निशिता दुरत्यया\nदुर्गं पथस्तत्कवयो वदन्ति।।',
    transliteration: 'Uttiṣṭhata jāgrata, prāpya varān nibodhata;\nkṣurasya dhārā niśitā duratyayā, durgaṃ pathas tat kavayo vadanti.',
    translation: 'Arise! Awake!\nApproach the great and learn.\nLike the sharp edge of a razor, this path is difficult to cross —\nso say the wise.',
    teaching: `This may be the most urgent verse in all the Upanishads. Yama, having imparted his deepest teachings to Nachiketa, ends with a call that is almost desperate: wake up. Do not sleep. Do not drift. The rare gift of a human life and a genuine teacher has come to you — seize it. "Arise, awake" is not a polite suggestion. It is the sound of a teacher shaking a student by the shoulder.\n\nThe razor's edge is one of the most famous metaphors in spiritual literature. A razor has an edge precise enough to cut — but the same precision that makes it useful makes it dangerous to walk upon. The path to liberation is narrow in exactly this way. It requires precision, care, and continuous attention. A single moment of carelessness — a return to the habits of avoidance, comfort, and unconsciousness — can slide one off the edge. But notice: Yama does not say this to discourage. The path is difficult because it is real. It leads somewhere genuine. This is the perpetual invitation of the tradition: you have everything you need. Now use it.`,
    sankalpaPrompt: 'What is one area of your life where you have been sleeping — drifting, avoiding, not fully awake? Today: arise. Take one concrete step in that area.',
    sourceText: 'Katha Upanishad',
    citation: 'Katha Upanishad 2.3.14',
    conceptIds: ['moksha', 'yoga'],
    nightMantra: NIGHT.purna.mantra,
    nightMantraTranslation: NIGHT.purna.translation,
  },

  // ── 27. Bhagavad Gita 9.22 ───────────────────────────────────────────────
  {
    id: 'bg-9-22',
    date: '',
    verse: 'अनन्याश्चिन्तयन्तो मां\nये जनाः पर्युपासते।\nतेषां नित्याभियुक्तानां\nयोगक्षेमं वहाम्यहम्।।',
    transliteration: 'Ananyāś cintayanto māṃ, ye janāḥ paryupāsate;\nteṣāṃ nityābhiyuktānāṃ, yoga-kṣemaṃ vahāmy aham.',
    translation: 'Those who worship Me with devotion,\nmeditating on My form without thinking of anything else —\nfor those who are always absorbed in Me,\nI carry what they lack and preserve what they have.',
    teaching: `This is the Bhagavad Gita's most unconditional promise, offered in the chapter of royal secrets. The path it describes is bhakti yoga — devotion so complete that the mind has no room for a secondary agenda. "Ananyāś" means "without other" — the mind entirely absorbed in the divine, like a flame that burns without flickering.\n\n"Yoga-kṣemaṃ vahāmy aham" — I carry (vahāmi) their yoga (what they seek to gain) and their kṣema (what they seek to preserve). The devotee who surrenders completely is promised that the divine takes responsibility for both gaining and keeping. Different traditions interpret this differently: the Advaitic reading holds that the Self, which is Brahman, naturally supports those aligned with it; the devotional reading takes Krishna's words literally. But across interpretations, the experiential report is consistent: when a person acts from love rather than self-interest, when the ego is genuinely surrendered, a quality of protection and ease becomes available that is not available when acting entirely alone.`,
    sankalpaPrompt: 'Spend five minutes today in sincere devotion — prayer, mantra, or simply sitting with a quality of grateful surrender. Do not ask for anything specific. Just offer your full attention.',
    sourceText: 'Bhagavad Gita',
    citation: 'Bhagavad Gita 9.22',
    conceptIds: ['yoga', 'moksha'],
    nightMantra: NIGHT.shanti.mantra,
    nightMantraTranslation: NIGHT.shanti.translation,
  },

  // ── 28. Shvetashvatara Upanishad 4.3 ─────────────────────────────────────
  {
    id: 'shveta-4-3',
    date: '',
    verse: 'त्वं स्त्री त्वं पुमानसि\nत्वं कुमार उत वा कुमारी।\nत्वं जीर्णो दण्डेन वञ्चसि\nत्वं जातो भवसि विश्वतोमुखः।।',
    transliteration: 'Tvaṃ strī tvaṃ pumān asi, tvaṃ kumāra uta vā kumārī;\ntvaṃ jīrṇo daṇḍena vañcasi, tvaṃ jāto bhavasi viśvato-mukhaḥ.',
    translation: 'Thou art woman, thou art man;\nthou art youth and also maiden.\nThou art the old man tottering with his staff;\nhaving become all this, thou art present with thy face everywhere.',
    teaching: `The Shvetashvatara Upanishad presents one of the most inclusive visions of divinity in any spiritual tradition. The divine is not merely transcendent — it is present in every form, every age, every gender. Woman and man, youth and maiden, the ancient wanderer with his walking stick: all are forms through which the single reality is expressing itself. "Viśvato-mukhaḥ" — facing everywhere, with face turned in all directions — describes a cosmic being for whom there is no "behind," only presence.\n\nThe practical implication: every person you meet is a face of the divine — not metaphorically but literally, according to this teaching. The Vedas do not permit the compartmentalization of the sacred into designated holy spaces and holy times. Reality is sacred through and through. This makes spiritual practice not a retreat from ordinary life but a transformation of how ordinary life is seen. The practice is simply to keep remembering — especially when encountering people who challenge you, who are different, who seem to be your opponents. Viśvato-mukhaḥ. The divine faces you from that direction too.`,
    sankalpaPrompt: 'Choose one person today you find genuinely difficult. Try to see — just as an experiment — the same divine presence in them that you would recognize in someone you love. What does that shift?',
    sourceText: 'Shvetashvatara Upanishad',
    citation: 'Shvetashvatara Upanishad 4.3',
    conceptIds: ['brahman', 'atman'],
    nightMantra: NIGHT.sarve.mantra,
    nightMantraTranslation: NIGHT.sarve.translation,
  },

  // ── 29. Bhagavad Gita 12.15 ──────────────────────────────────────────────
  {
    id: 'bg-12-15',
    date: '',
    verse: 'यस्मान्नोद्विजते लोको\nलोकान्नोद्विजते च यः।\nहर्षामर्षभयोद्वेगैर्-\nमुक्तो यः स च मे प्रियः।।',
    transliteration: 'Yasmān nodvijate loko, lokān nodvijate ca yaḥ;\nharṣāmarṣa-bhayodvegair, mukto yaḥ sa ca me priyaḥ.',
    translation: 'He by whom the world is not disturbed\nand who cannot be disturbed by the world,\nwho is freed from joy, anger, fear, and anxiety —\nhe is dear to Me.',
    teaching: `In Gita Chapter 12, Arjuna asks which devotees are dearest to Krishna: those who worship the formless, or those who worship the personal God? Krishna's answer takes an unexpected turn — he describes not a form of worship but a quality of being. The devotee dear to God is one whose inner life is so settled that they neither disturb the world nor are disturbed by it. They move like a person deeply rooted — the storms of approval and disapproval, gain and loss, cannot uproot them.\n\nThe four things this person is free from — joy (harṣa), anger (amarṣa), fear (bhaya), and anxiety (udvega) — cover the full spectrum of emotional reactivity. Note that this is not emotional numbness. The preceding verses describe such a person as compassionate (karuṇa) and friendly (maitrin). Their stability comes not from hardening but from depth — from having found an inner center that is not made of circumstances. This is the fruit of sustained practice: not the absence of human experience, but the inability of experience to tear you from your center.`,
    sankalpaPrompt: 'Notice today what disturbs you most — what unsettles your inner peace. That disturbance is pointing to where your roots need to go deeper. Name it honestly.',
    sourceText: 'Bhagavad Gita',
    citation: 'Bhagavad Gita 12.15',
    conceptIds: ['yoga', 'moksha'],
    nightMantra: NIGHT.saha.mantra,
    nightMantraTranslation: NIGHT.saha.translation,
  },

  // ── 30. Bhagavad Gita 18.66 ──────────────────────────────────────────────
  {
    id: 'bg-18-66',
    date: '',
    verse: 'सर्वधर्मान्परित्यज्य\nमामेकं शरणं व्रज।\nअहं त्वां सर्वपापेभ्यो\nमोक्षयिष्यामि मा शुचः।।',
    transliteration: 'Sarva-dharmān parityajya, mām ekaṃ śaraṇaṃ vraja;\nahaṃ tvāṃ sarva-pāpebhyo, mokṣayiṣyāmi mā śucaḥ.',
    translation: 'Abandon all varieties of dharma\nand just surrender unto Me.\nI shall deliver you from all sinful reactions.\nDo not fear.',
    teaching: `This is the final, culminating teaching of the Bhagavad Gita — the charama shloka, the "ultimate verse." After eighteen chapters of philosophy, after cosmic visions and intricate yogas, the teaching distills to this: let go, surrender, do not fear. "Abandon all dharmas" startled commentators through the centuries. How can the Gita, devoted throughout to dharma, now ask us to abandon it?\n\nThe Advaitic reading: go beyond even the distinction between dharmic and adharmic action — enter the state where you act spontaneously from the divine will within, no longer calculating duty but being directed by a deeper intelligence. The devotional reading: even if you feel you have violated dharma, even if guilt and unworthiness weigh on you — surrender those too. The divine is not a reward for good behavior but a refuge unconditionally offered. "Do not fear" (mā śucaḥ) are Krishna's final words. After all the complexity — the last instruction is simple. You are held. Whatever you are carrying, whatever you fear you cannot bear — surrender it. The path ends, as it began, in grace.`,
    sankalpaPrompt: 'What are you carrying today that you have not been able to surrender — a worry, a regret, a need to control an outcome? Today: offer it. Not as resignation, but as trust.',
    sourceText: 'Bhagavad Gita',
    citation: 'Bhagavad Gita 18.66',
    conceptIds: ['moksha', 'dharma', 'yoga'],
    nightMantra: NIGHT.purna.mantra,
    nightMantraTranslation: NIGHT.purna.translation,
  },
];

export default WISDOM2;
