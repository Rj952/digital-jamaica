// ─── Digital Jamaica: Community Forum Database ───
// Forum categories, sample threads, and community guidelines
// Created by Rohan Jowallah | © 2025 Digital Jamaica

export const FORUM_CATEGORIES = [
  {
    id: "general",
    title: "General Discussion",
    icon: "💬",
    desc: "Talk about anything Jamaica-related — news, opinions, and everyday life",
    threads: 156,
    posts: 1243,
    color: "#D4A04C"
  },
  {
    id: "culture",
    title: "Culture & Heritage",
    icon: "🎭",
    desc: "Discuss Jamaican culture, patois, traditions, food, and spiritual life",
    threads: 89,
    posts: 672,
    color: "#2D7D3A"
  },
  {
    id: "music",
    title: "Music & Entertainment",
    icon: "🎵",
    desc: "Reggae, dancehall, ska, and all Jamaican music and entertainment",
    threads: 124,
    posts: 987,
    color: "#D4294B"
  },
  {
    id: "diaspora",
    title: "Diaspora Life",
    icon: "🌍",
    desc: "Share experiences of being Jamaican abroad — challenges, triumphs, and community",
    threads: 203,
    posts: 1567,
    color: "#4A7FB5"
  },
  {
    id: "return",
    title: "Returning to Jamaica",
    icon: "✈️",
    desc: "Advice, experiences, and support for those considering or planning a return",
    threads: 78,
    posts: 534,
    color: "#FF6B35"
  },
  {
    id: "business",
    title: "Business & Investment",
    icon: "📊",
    desc: "Discuss business opportunities, investment, and entrepreneurship in Jamaica",
    threads: 67,
    posts: 412,
    color: "#8B6914"
  },
  {
    id: "youth",
    title: "Youth & Education",
    icon: "🎓",
    desc: "Scholarships, education, mentoring, and resources for young Jamaicans",
    threads: 91,
    posts: 623,
    color: "#1A3C5E"
  },
  {
    id: "parish",
    title: "Parish Talk",
    icon: "📍",
    desc: "Represent your parish! News, events, and discussions by community",
    threads: 145,
    posts: 890,
    color: "#6B4226"
  }
];

export const SAMPLE_THREADS = [
  {
    id: "t1",
    category: "diaspora",
    title: "Tips for Jamaicans Moving to Canada",
    author: "TrontoYardie",
    authorInitials: "TY",
    date: "2025-12-15",
    replies: 34,
    likes: 67,
    pinned: true,
    preview: "After 12 years in Toronto, here's everything I wish someone told me before I left Jamaica. From housing to culture shock to finding good Jamaican food..."
  },
  {
    id: "t2",
    category: "culture",
    title: "Teaching My Children Patois — Strategies That Work",
    author: "MissLouFan",
    authorInitials: "ML",
    date: "2025-12-10",
    replies: 23,
    likes: 89,
    pinned: false,
    preview: "My kids were born in London but I want them to speak patois fluently. Here's what I've been doing and what's actually working..."
  },
  {
    id: "t3",
    category: "return",
    title: "I Moved Back After 20 Years — My Honest Experience",
    author: "BackAYard",
    authorInitials: "BA",
    date: "2025-11-28",
    replies: 56,
    likes: 134,
    pinned: true,
    preview: "Left Jamaica in 2005, came back in 2025. The island has changed dramatically. Here's the good, the challenging, and the surprising..."
  },
  {
    id: "t4",
    category: "music",
    title: "Best Reggae Revival Artists Right Now?",
    author: "RootsAndCulture",
    authorInitials: "RC",
    date: "2025-12-08",
    replies: 41,
    likes: 78,
    pinned: false,
    preview: "Chronixx, Protoje, Koffee obviously, but who else should I be listening to? Looking for authentic roots reggae with a modern touch..."
  },
  {
    id: "t5",
    category: "business",
    title: "Starting a Remote Business in Jamaica — Tax & Legal Tips",
    author: "DigiNomad876",
    authorInitials: "DN",
    date: "2025-12-01",
    replies: 19,
    likes: 45,
    pinned: false,
    preview: "Running a software consultancy from Mandeville. Here's what you need to know about registering your business, taxes, and banking as a returnee..."
  },
  {
    id: "t6",
    category: "youth",
    title: "Free Scholarships for Jamaican Students in 2026",
    author: "ScholarshipHunter",
    authorInitials: "SH",
    date: "2025-12-12",
    replies: 62,
    likes: 201,
    pinned: true,
    preview: "Comprehensive list of scholarships available to Jamaican students for the 2026 academic year. Updated regularly with deadlines and requirements..."
  },
  {
    id: "t7",
    category: "general",
    title: "Jamaica's Tech Scene Is Growing — Let's Talk About It",
    author: "SiliconYard",
    authorInitials: "SY",
    date: "2025-12-05",
    replies: 28,
    likes: 56,
    pinned: false,
    preview: "From Kingston BETA to Silicon Mountain in Mandeville, Jamaica's tech ecosystem is expanding fast. Let's discuss opportunities and challenges..."
  },
  {
    id: "t8",
    category: "parish",
    title: "Portland Appreciation Thread — The Most Beautiful Parish",
    author: "PortlandPride",
    authorInitials: "PP",
    date: "2025-11-20",
    replies: 37,
    likes: 92,
    pinned: false,
    preview: "Blue Lagoon, Reach Falls, Boston Bay jerk, Frenchman's Cove... Let's celebrate the greenest, most beautiful parish in Jamaica!"
  }
];

export const COMMUNITY_GUIDELINES = [
  { rule: "Respect & Kindness", desc: "Treat every member with respect. Disagree without disrespect. We are all family." },
  { rule: "No Hate Speech", desc: "Zero tolerance for racism, homophobia, sexism, or any form of discrimination." },
  { rule: "Authentic Identity", desc: "Use your real identity or a consistent username. No impersonation." },
  { rule: "No Spam or Self-Promotion", desc: "Share genuinely, not for profit. Business discussions belong in the Business category." },
  { rule: "Protect Privacy", desc: "Never share someone's personal information without their consent." },
  { rule: "Report Concerns", desc: "If you see something troubling, report it. Moderators review all reports." },
  { rule: "Stay On Topic", desc: "Keep discussions relevant to Jamaica and the diaspora experience." },
  { rule: "No Misinformation", desc: "Share verified information. If unsure, say so. We value truth." },
];

export default FORUM_CATEGORIES;
