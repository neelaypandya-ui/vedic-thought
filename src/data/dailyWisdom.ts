import type { DailyWisdom } from '../types';

// Night mantras rotate across entries
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

const WISDOM: DailyWisdom[] = [
  // ── 1. Brihadaranyaka Upanishad 1.3.28 ────────────────────────────────────
  {
    id: 'bu-1-3-28',
    date: '',
    verse: 'असतो मा सद्गमय।\nतमसो मा ज्योतिर्गमय।\nमृत्योर्मामृतं गमय।',
    transliteration: 'Asato mā sad gamaya.\nTamaso mā jyotir gamaya.\nMṛtyor māmṛtaṃ gamaya.',
    translation: 'Lead me from the unreal to the real,\nfrom darkness to light,\nfrom death to immortality.',
    teaching: `This ancient prayer is not a petition to an external deity but a deep inner resolve — a seeker's vow to move toward what is true, luminous, and undying. The three movements mirror three obstacles on the spiritual path: "unreal" (asat) refers to our habitual identification with temporary things; "darkness" (tamas) is the ignorance that prevents us from seeing reality clearly; "death" (mṛtyu) represents the fear at the center of all smaller fears.\n\nThe prayer's power lies in its direction. It does not ask for pleasures or powers. It asks only to be moved — toward reality, toward light, toward what does not die. The Upanishad teaches that Brahman — the ultimate reality — is sat (existence), cit (pure awareness), and ānanda (bliss). To move toward the real is to move toward our own deepest nature.`,
    sankalpaPrompt: 'Where in your life are you holding onto something unreal — a belief, a fear, an identity — that you know is not true? Name one small step toward what is real.',
    sourceText: 'Brihadaranyaka Upanishad',
    citation: 'Brihadaranyaka Upanishad 1.3.28',
    conceptIds: ['brahman', 'atman', 'moksha'],
    nightMantra: NIGHT.saha.mantra,
    nightMantraTranslation: NIGHT.saha.translation,
  },

  // ── 2. Chandogya Upanishad 6.2.1 ─────────────────────────────────────────
  {
    id: 'cu-6-2-1',
    date: '',
    verse: 'सदेव सोम्येदमग्र आसीत्,\nएकमेवाद्वितीयम्।',
    transliteration: 'Sad eva, saumya, idam agra āsīt —\nekam evādvitīyam.',
    translation: 'In the beginning, my dear,\nthere was only existence —\none alone, without a second.',
    teaching: `The sage Uddalaka opens his teaching to his son Svetaketu with a radical claim: before the universe existed — before stars, before life, before time — there was only Sat, pure existence, undivided. This is the Chandogya Upanishad's answer to the oldest question: what is at the beginning? Not chaos, not nothingness, but awareness itself.\n\n"Without a second" (advitīyam) is the crucial phrase. This reality has no rival, no opposite. It is not one-of-two but the only one. Unity is not sameness — it is the source from which all diversity arises, as waves arise from the ocean without ever being separate from it. Sit with this today: beneath everything you experience, there is a single, undivided ground.`,
    sankalpaPrompt: 'Today, notice one moment when you feel truly undivided — no inner conflict, no performance. What conditions made that possible?',
    sourceText: 'Chandogya Upanishad',
    citation: 'Chandogya Upanishad 6.2.1',
    conceptIds: ['brahman', 'atman'],
    nightMantra: NIGHT.purna.mantra,
    nightMantraTranslation: NIGHT.purna.translation,
  },

  // ── 3. Mandukya Upanishad 1.2 ────────────────────────────────────────────
  {
    id: 'mu-1-2',
    date: '',
    verse: 'सर्वं ह्येतद् ब्रह्म,\nअयमात्मा ब्रह्म,\nसोऽयमात्मा चतुष्पात्।',
    transliteration: 'Sarvam hy etad brahma,\nayam ātmā brahma,\nso\'yam ātmā catuṣpāt.',
    translation: 'All this is Brahman.\nThis Self is Brahman.\nThis Self has four quarters.',
    teaching: `The Mandukya Upanishad is the shortest of the principal Upanishads — twelve verses — yet tradition holds it sufficient for liberation. This verse is its philosophical core: the Self can be understood through four states of consciousness: waking (jāgrat), dreaming (svapna), deep dreamless sleep (suṣupti), and the fourth state (turīya) — pure awareness that underlies and witnesses the other three.\n\nMost of us identify with the waking state so completely that we forget we exist in all four. But notice: even in dreamless sleep, you exist. You wake and say "I slept so well" — the "I" was present even in the absence of all experience. Turīya is not a fourth state entered and left but the ever-present witnessing awareness in which the other three arise and dissolve. It is what you actually are.`,
    sankalpaPrompt: 'Today, pause once and ask: who is aware right now? Not what you are thinking or feeling, but who is watching the thinking and feeling.',
    sourceText: 'Mandukya Upanishad',
    citation: 'Mandukya Upanishad 1.2',
    conceptIds: ['atman', 'brahman', 'aum'],
    nightMantra: NIGHT.shanti.mantra,
    nightMantraTranslation: NIGHT.shanti.translation,
  },

  // ── 4. Isha Upanishad 1 ──────────────────────────────────────────────────
  {
    id: 'isha-1',
    date: '',
    verse: 'ईशावास्यमिदं सर्वं\nयत्किञ्च जगत्यां जगत्।\nतेन त्यक्तेन भुञ्जीथा\nमा गृधः कस्यस्विद्धनम्।।',
    transliteration: 'Īśāvāsyam idaṃ sarvaṃ, yat kiñca jagatyāṃ jagat;\ntena tyaktena bhuñjīthā, mā gṛdhaḥ kasya svid dhanam.',
    translation: 'All this — whatever exists in this changing world — is pervaded by the Lord.\nEnjoy through renunciation. Do not covet; whose is wealth?',
    teaching: `The Isha Upanishad opens with a paradox: if God pervades everything, why renounce? The answer is subtle — "enjoy through renunciation" (tyaktena bhuñjīthā). When you are attached, you see things as separate from you, as objects to possess. The moment you possess something, you also fear losing it. Enjoyment becomes anxiety. But when you hold things lightly — as borrowed from the divine, temporarily in your care — a deeper enjoyment becomes possible.\n\nThe closing question lands with full weight: "whose is wealth?" Everything cycles. Your body, your home, your relationships — these have been in other hands and will be again. The Upanishad does not ask this to generate despair but to generate freedom. Knowing that nothing is permanently yours, can you receive everything as gift rather than acquisition?`,
    sankalpaPrompt: 'Choose one thing you are holding too tightly today — a plan, an outcome, a relationship dynamic. Practice holding it as a guest rather than a possession.',
    sourceText: 'Isha Upanishad',
    citation: 'Isha Upanishad 1',
    conceptIds: ['dharma', 'karma', 'moksha'],
    nightMantra: NIGHT.sarve.mantra,
    nightMantraTranslation: NIGHT.sarve.translation,
  },

  // ── 5. Chandogya Upanishad 3.14.1 ────────────────────────────────────────
  {
    id: 'cu-3-14-1',
    date: '',
    verse: 'सर्वं खल्विदं ब्रह्म,\nतज्जलानिति शान्त उपासीत।',
    transliteration: 'Sarvam khalv idaṃ brahma,\ntaj-jalān iti śānta upāsīta.',
    translation: 'All this is indeed Brahman.\nFrom it all comes forth, into it all returns,\nin it all breathes. Meditate on it with tranquility.',
    teaching: `This mahāvākya — one of the "great sayings" of the Upanishads — makes the boldest possible claim: every single thing you experience is Brahman, not merely reflecting or containing it, but being it without remainder. The Sanskrit "taj-jalān" is a compound: from "tat" (that), "ja" (born from), "la" (dissolved into), "an" (breathed in). Brahman is that from which everything is born, into which everything dissolves, and by which everything is sustained — like the ocean giving rise to waves, absorbing them back, and being the medium through which they move.\n\nThe instruction "meditate with tranquility" (śānta upāsīta) is significant. You cannot force your way into this understanding. When the mind is turbulent, it sees multiplicity and division. When it settles — through practice — the unity that was always there becomes apparent. This is why meditation is not optional in Vedantic practice: it is the means by which the teaching becomes real rather than merely intellectual.`,
    sankalpaPrompt: 'In one interaction today — with a person, with nature, with your own breath — try to sense that what you are meeting is not separate from what you are.',
    sourceText: 'Chandogya Upanishad',
    citation: 'Chandogya Upanishad 3.14.1',
    conceptIds: ['brahman', 'yoga'],
    nightMantra: NIGHT.saha.mantra,
    nightMantraTranslation: NIGHT.saha.translation,
  },

  // ── 6. Kena Upanishad 1.2 ────────────────────────────────────────────────
  {
    id: 'kena-1-2',
    date: '',
    verse: 'यन्मनसा न मनुते\nयेनाहुर्मनो मतम्।\nतदेव ब्रह्म त्वं विद्धि\nनेदं यदिदमुपासते।।',
    transliteration: 'Yan manasā na manute, yenāhur mano matam;\ntad eva brahma tvaṃ viddhi, nedaṃ yad idam upāsate.',
    translation: 'That which is not thought by the mind,\nbut by which the mind thinks —\nknow that alone as Brahman,\nnot this which people worship as an object.',
    teaching: `The Kena Upanishad opens with one of philosophy's most arresting paradoxes: what is the power behind the power to know? The mind knows objects — but what knows the mind? The eye sees — but what sees the eye? The answer it reaches is that Brahman is not another object to be perceived; it is the very capacity for perception. It is the knowing behind all knowing.\n\nThis is why the Upanishad says: "It is not known by those who know it; it is known by those who do not know it." When you think "I have understood Brahman," that thought is still an object in awareness. The true recognition is different — not a new thought, but an awareness of awareness itself, which was always silently present. This cannot be taught directly; it can only be pointed at. That is precisely what this verse does.`,
    sankalpaPrompt: 'In your next meditation, instead of focusing on the breath as an object, try turning attention back on itself: who is aware? Rest in that question without forcing an answer.',
    sourceText: 'Kena Upanishad',
    citation: 'Kena Upanishad 1.2',
    conceptIds: ['brahman', 'atman'],
    nightMantra: NIGHT.purna.mantra,
    nightMantraTranslation: NIGHT.purna.translation,
  },

  // ── 7. Rig Veda 1.89.1 ───────────────────────────────────────────────────
  {
    id: 'rv-1-89-1',
    date: '',
    verse: 'आ नो भद्राः क्रतवो\nयन्तु विश्वतः।',
    transliteration: 'Ā no bhadrāḥ kratavo\nyantu viśvataḥ.',
    translation: 'Let noble thoughts come to us\nfrom all directions.',
    teaching: `This single line from the Rig Veda — among the oldest surviving human prayers — has become one of India's most beloved invocations, spoken at the opening of parliaments, schools, and temples. Its brevity conceals remarkable wisdom: the prayer does not ask for specific knowledge from a single source but for "noble thoughts" (bhadrāḥ kratavaḥ) from "all directions" (viśvataḥ). Let wisdom reach us from every tradition, every experience, every person we meet.\n\nThe word "kratavaḥ" comes from "kṛt," to do or think — suggesting thoughts that lead to action, ideas that have practical force. The prayer is not for idle thoughts but for thoughts that ennoble and guide. In your own life, this verse is a reminder to remain open — to resist the closing of the mind that comes from certainty, pride, or tribalism. Truth may come from unexpected sources. The wise person remains permeable.`,
    sankalpaPrompt: 'Today, genuinely listen to one person you would normally dismiss or disagree with. What noble thought might come from that direction?',
    sourceText: 'Rig Veda',
    citation: 'Rig Veda 1.89.1',
    conceptIds: ['dharma'],
    nightMantra: NIGHT.shanti.mantra,
    nightMantraTranslation: NIGHT.shanti.translation,
  },

  // ── 8. Chandogya Upanishad 6.8.7 ─────────────────────────────────────────
  {
    id: 'cu-6-8-7',
    date: '',
    verse: 'तत्त्वमसि।',
    transliteration: 'Tat tvam asi.',
    translation: 'Thou art That.',
    teaching: `In three Sanskrit words, the Chandogya Upanishad delivers what many consider the most direct statement of Vedanta's core insight. The sage Uddalaka teaches his son Svetaketu — who has returned from twelve years of Vedic study, proud of his learning — that he has not been taught the most essential thing: that by which everything is known. What follows is one of the greatest philosophical dialogues in human history, culminating nine times in the same refrain.\n\n"Tat" — That. The formless, infinite reality underlying all existence. "Tvam" — You. Not your name, not your history, not your personality, but the awareness present right now. "Asi" — are. Not "will become" — are, present tense, already. The teaching is not that you should try to become Brahman. It is that you already are, and only ignorance veils this. As Uddalaka illustrates: rivers flow into the ocean and "become" the ocean — but the water was always of the same nature. You were never separate from the ground of being.`,
    sankalpaPrompt: 'Three times today, pause and silently say "Tat tvam asi" — first about yourself, then about someone you love, then about someone who irritates you. Notice what shifts.',
    sourceText: 'Chandogya Upanishad',
    citation: 'Chandogya Upanishad 6.8.7',
    conceptIds: ['atman', 'brahman', 'moksha'],
    nightMantra: NIGHT.sarve.mantra,
    nightMantraTranslation: NIGHT.sarve.translation,
  },

  // ── 9. Bhagavad Gita 2.20 ────────────────────────────────────────────────
  {
    id: 'bg-2-20',
    date: '',
    verse: 'न जायते म्रियते वा कदाचिन्\nनायं भूत्वा भविता वा न भूयः।\nअजो नित्यः शाश्वतोऽयं पुराणो\nन हन्यते हन्यमाने शरीरे।।',
    transliteration: 'Na jāyate mriyate vā kadācin,\nnāyaṃ bhūtvā bhavitā vā na bhūyaḥ;\najo nityaḥ śāśvato\'yaṃ purāṇo,\nna hanyate hanyamāne śarīre.',
    translation: 'The soul is never born and never dies.\nIt has not come into being, does not come into being,\nand will not come into being.\nIt is not slain when the body is slain.',
    teaching: `Krishna is addressing Arjuna's grief over the prospect of his kinsmen dying in battle. The expected response might be sympathy or encouragement. Instead, Krishna goes straight to metaphysics: you are grieving over something that cannot die. The verse uses five different words for the soul's permanence — unborn, eternal, everlasting, ancient, unslain — each attacking the assumption of mortality from a different angle.\n\nThis teaching is not meant to make death trivial or grief invalid. It is meant to shift the frame entirely — to help us ask: if I am not this body, if those I love are not their bodies, what does it mean to live, to lose, to grieve? The Gita does not give easy answers. It gives better questions. Impermanence is real. Loss is real. But if what is deepest in us is not subject to birth and death, then suffering, while genuine, is not the final word.`,
    sankalpaPrompt: 'Bring to mind someone you have lost, or a version of yourself that no longer exists. Can you hold both the grief and the possibility that what is essential in them — and you — persists?',
    sourceText: 'Bhagavad Gita',
    citation: 'Bhagavad Gita 2.20',
    conceptIds: ['atman', 'karma', 'moksha'],
    nightMantra: NIGHT.saha.mantra,
    nightMantraTranslation: NIGHT.saha.translation,
  },

  // ── 10. Katha Upanishad 1.3.3-4 ─────────────────────────────────────────
  {
    id: 'katha-1-3-3',
    date: '',
    verse: 'आत्मानं रथिनं विद्धि\nशरीरं रथमेव तु।\nबुद्धिं तु सारथिं विद्धि\nमनः प्रग्रहमेव च।।',
    transliteration: 'Ātmānaṃ rathinaṃ viddhi, śarīraṃ ratham eva tu;\nbuddhiṃ tu sārathiṃ viddhi, manaḥ pragraham eva ca.',
    translation: 'Know the Self as the rider in the chariot,\nthe body as the chariot itself,\nthe intellect as the charioteer,\nand the mind as the reins.',
    teaching: `Yama, the Lord of Death, gives young Nachiketa what may be the most enduring metaphor in Vedic philosophy. Each element of the chariot corresponds precisely to a element of human psychology. The horses are the senses — powerful and naturally inclined toward pleasure. Left unchecked, they drag the chariot wherever instinct leads. The reins are the mind, which can hold or release the horses but is not itself the guide. The charioteer is the intellect (buddhi) — the faculty of discernment that can evaluate and direct. And the rider — who has the right to determine the destination — is the Ātman.\n\nThe problem Yama diagnoses is that most human lives are lived as if no one is in the seat. The horses run, the mind reacts, and the intellect is too undisciplined to hold the reins. The spiritual path — meditation, self-inquiry, ethical practice — is the work of taking one's seat. Not suppressing the horses or ignoring the mind, but learning to use the chariot skillfully, with the destination clearly known.`,
    sankalpaPrompt: 'Which horse is pulling hardest today — which sense or craving is driving your chariot? What would your intellect (buddhi) choose if it were truly in the driver\'s seat?',
    sourceText: 'Katha Upanishad',
    citation: 'Katha Upanishad 1.3.3–4',
    conceptIds: ['atman', 'yoga'],
    nightMantra: NIGHT.purna.mantra,
    nightMantraTranslation: NIGHT.purna.translation,
  },

  // ── 11. Katha Upanishad 1.2.23 ───────────────────────────────────────────
  {
    id: 'katha-1-2-23',
    date: '',
    verse: 'नायमात्मा प्रवचनेन लभ्यो\nन मेधया न बहुना श्रुतेन।\nयमेवैष वृणुते तेन लभ्य-\nस्तस्यैष आत्मा विवृणुते तनूँ स्वाम्।।',
    transliteration: 'Nāyam ātmā pravacanena labhyo,\nna medhayā na bahunā śrutena;\nyam evaiṣa vṛṇute tena labhyas,\ntasyaiṣa ātmā vivṛṇute tanūṃ svām.',
    translation: 'The Self cannot be known through lectures,\nnot through the intellect, not by much hearing.\nBy the one whom It chooses, by that one It is obtained;\nto that one this Self reveals its own nature.',
    teaching: `Yama gives Nachiketa a warning and a gift in one verse. The warning: intellectual pursuit alone cannot reach the Self. You can study every text, attend every lecture, memorize every teaching — and still miss what the teaching points toward. The intellect is itself an object within awareness; it cannot become the subject. This is not anti-intellectualism but a precise diagnosis of the intellect's limits.\n\nThe gift is stranger and more beautiful: the Self "chooses" the one who knows it. This does not mean an arbitrary external selection. Rather, the Self reveals itself when the seeker's longing is genuine and undiluted — when knowledge is sought not as a trophy but as liberation. The moment the seeking is pure, what was sought is found to have been here all along. The Upanishad is not discouraging study — Nachiketa himself is brilliantly intelligent. It is clarifying priority: intellect is a tool for preparation, not the destination. At some point, the mind must grow quiet enough for the witness behind all objects to be recognized.`,
    sankalpaPrompt: 'How much of your spiritual seeking is motivated by genuine longing versus the desire to know, to be considered wise, or to feel secure? Sit with this honestly.',
    sourceText: 'Katha Upanishad',
    citation: 'Katha Upanishad 1.2.23',
    conceptIds: ['atman', 'moksha'],
    nightMantra: NIGHT.shanti.mantra,
    nightMantraTranslation: NIGHT.shanti.translation,
  },

  // ── 12. Mundaka Upanishad 3.1.1-2 ────────────────────────────────────────
  {
    id: 'mu-3-1-1',
    date: '',
    verse: 'द्वा सुपर्णा सयुजा सखाया\nसमानं वृक्षं परिषस्वजाते।\nतयोरन्यः पिप्पलं स्वाद्वत्ति\nअनश्नन्नन्यो अभिचाकशीति।।',
    transliteration: 'Dvā suparṇā sayujā sakhāyā,\nsamānaṃ vṛkṣaṃ pariṣasvajāte;\ntayor anyaḥ pippalaṃ svādv atti,\nanaśnann anyo abhicākaśīti.',
    translation: 'Two birds, companions always,\ncling to the same tree.\nOne eats the fruits;\nthe other looks on without eating.',
    teaching: `Two birds sit on the same tree. One is busily eating — experiencing pleasure and pain, moving from branch to branch. The other simply watches, serene and still. The tree is the body-mind. The eating bird is the jīva — the individual self caught in the cycle of experience and suffering. The watching bird is the Ātman — pure witnessing awareness that is never entangled, never affected, eternally free. The profound twist: they are "companions always" (sayujā sakhāyā). They are on the same tree. The witness is not elsewhere — it is right here, present at every moment, yet untouched.\n\nThe path of self-inquiry (ātma-vicāra) is the practice of shifting identity from the eating bird to the watching bird — not by suppressing experience, but by recognizing that you are the one who watches, not only the one who eats. When you are absorbed in emotion, ask: who is aware of this emotion? When lost in thought, ask: who knows this thought is arising? That question, sincerely pursued, begins to reveal the silent witness that you have always been.`,
    sankalpaPrompt: 'Choose one difficult emotion you experience today. Instead of being fully inside it, try also observing it — naming it, watching it rise and pass. Notice the watcher.',
    sourceText: 'Mundaka Upanishad',
    citation: 'Mundaka Upanishad 3.1.1–2',
    conceptIds: ['atman', 'yoga'],
    nightMantra: NIGHT.sarve.mantra,
    nightMantraTranslation: NIGHT.sarve.translation,
  },

  // ── 13. Brihadaranyaka Upanishad 4.4.5 ───────────────────────────────────
  {
    id: 'bu-4-4-5',
    date: '',
    verse: 'स यथाकामो भवति तत्क्रतुर्भवति,\nयत्क्रतुर्भवति तत्कर्म कुरुते,\nयत्कर्म कुरुते तदभिसम्पद्यते।',
    transliteration: 'Sa yathā-kāmo bhavati, tat-kratur bhavati;\nyat-kratur bhavati, tat karma kurute;\nyat karma kurute, tad abhisampadyate.',
    translation: 'As a person\'s deepest desire is, so is their will.\nAs their will is, so is their action.\nAs their action is, so is what they become.',
    teaching: `Yajnavalkya, the great sage of the Brihadaranyaka Upanishad, makes a precise observation about how human lives are shaped. It is not fate that determines who we become; it is desire — not surface desire but the deep longing at the center of a person. That longing generates intention (kratu), which shapes action (karma), which generates the self that results. You are not the product of your circumstances but of your deepest wanting.\n\nThe practical implication is radical: examine your deepest desire honestly. Not what you think you should want, not what you tell others you want — what you actually, consistently desire most. That desire is writing the story of your life. The Upanishad does not say this to generate shame but to give power: change the deepest desire, and you change the arc of your existence. This is why the tradition places such emphasis on sankalpa — the conscious forming of intention. What you choose to want matters more than any technique.`,
    sankalpaPrompt: 'Without judgment, ask yourself: what do I actually want most deeply right now — not what I should want, but what I am genuinely pursuing? Is that what I choose to pursue?',
    sourceText: 'Brihadaranyaka Upanishad',
    citation: 'Brihadaranyaka Upanishad 4.4.5',
    conceptIds: ['karma', 'dharma'],
    nightMantra: NIGHT.saha.mantra,
    nightMantraTranslation: NIGHT.saha.translation,
  },

  // ── 14. Taittiriya Upanishad 2.1.1 ───────────────────────────────────────
  {
    id: 'tu-2-1-1',
    date: '',
    verse: 'सत्यं ज्ञानमनन्तं ब्रह्म।',
    transliteration: 'Satyam jñānam anantaṃ brahma.',
    translation: 'Brahman is existence, consciousness, infinite.',
    teaching: `Three Sanskrit words — yet teachers have meditated on their meaning for three thousand years. Brahman, the ultimate reality, is defined not by what it is "made of" but by three qualities that are inseparable aspects of a single reality. Satyam — existence, truth. Brahman is not a theory or concept. It is that which exists, full stop. Jñānam — knowledge, consciousness, awareness. Brahman is not an inert substrate; it is luminous and self-aware, the very ground of all knowing. This is the Vedic answer to the hard problem of consciousness: awareness is not a by-product of matter but the fundamental nature of reality itself. Anantam — infinite, without end or boundary.\n\nThese three — being, consciousness, infinity — are different facets of one reality. The Taittiriya Upanishad goes on to describe how Brahman is experienced as ānanda — bliss — when known directly. The reason most of us seek pleasure restlessly is that we are seeking in objects what can only be found in the subject. As the text says: in the infinite, there is bliss; in the finite, there is none. Today's invitation: when you are most fully present and aware, notice the quality of simple existence itself — before any thought about what that existence contains.`,
    sankalpaPrompt: 'Set aside five minutes today to simply exist — no phone, no task, no inner commentary if possible. Notice what the quality of bare awareness feels like without any object.',
    sourceText: 'Taittiriya Upanishad',
    citation: 'Taittiriya Upanishad 2.1.1',
    conceptIds: ['brahman', 'atman'],
    nightMantra: NIGHT.purna.mantra,
    nightMantraTranslation: NIGHT.purna.translation,
  },

  // ── 15. Bhagavad Gita 2.47 ───────────────────────────────────────────────
  {
    id: 'bg-2-47',
    date: '',
    verse: 'कर्मण्येवाधिकारस्ते\nमा फलेषु कदाचन।\nमा कर्मफलहेतुर्भूर्\nमा ते सङ्गोऽस्त्वकर्मणि।।',
    transliteration: 'Karmaṇy evādhikāras te,\nmā phaleṣu kadācana;\nmā karma-phala-hetur bhūr,\nmā te saṅgo\'stv akarmaṇi.',
    translation: 'You have a right to perform your prescribed duty,\nbut you are not entitled to the fruits of action.\nNever consider yourself the cause of the results,\nand never be attached to inaction.',
    teaching: `This is perhaps the most quoted verse in the Bhagavad Gita, and one of the most misunderstood. It is not an instruction toward indifference or passivity. It is a surgical strike against the root cause of suffering: the belief that we can control outcomes. You do have rights — over your actions, your effort, your quality of engagement. You do not have rights over results — these depend on time, other people, circumstances, and accumulated karma far beyond your control.\n\nNotice the four instructions: act, don't cling to fruits, don't claim to be the sole cause of outcomes, and don't use uncertainty as an excuse for inaction. When you act with full engagement but without attachment to results, something remarkable happens — the action becomes pure, an offering rather than a transaction. This is karma yoga: working in the world without being consumed by the world's verdict on your work. You can practice it today, in your work, your relationships, your smallest choices. Do your best. Release the rest.`,
    sankalpaPrompt: 'Choose one task today and do it with complete effort — but consciously release your attachment to how it will be received. Notice the difference in how it feels to work this way.',
    sourceText: 'Bhagavad Gita',
    citation: 'Bhagavad Gita 2.47',
    conceptIds: ['karma', 'dharma', 'yoga'],
    nightMantra: NIGHT.shanti.mantra,
    nightMantraTranslation: NIGHT.shanti.translation,
  },
];

export default WISDOM;
