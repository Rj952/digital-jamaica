'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';

// ============ THEME & FONTS ============
const t = {
  bg: "#0A0A0A",
  surface: "#141414",
  card: "#1A1A1A",
  cardHover: "#222222",
  border: "#2A2A2A",
  borderLight: "#333333",
  gold: "#D4A04C",
  goldLight: "#E8C273",
  goldDim: "#8B7535",
  green: "#1B8C3D",
  greenLight: "#2AAF52",
  greenDark: "#0D5A24",
  text: "#F0ECE3",
  textSec: "#B8B0A0",
  textMut: "#7A7265",
  red: "#C44B4B",
  blue: "#4A7FB5",
};

const f = {
  display: "'Cormorant Garamond', Georgia, serif",
  body: "'Outfit', system-ui, sans-serif",
};

// ============ EXISTING DATA ============
const PARISHES = [
  { name: "Kingston", population: "662,426", highlights: ["Capital city", "Bob Marley Museum", "National Gallery"] },
  { name: "Saint Andrew", population: "662,600", highlights: ["Blue Mountains", "Hope River", "Strawberry Hill"] },
  { name: "Saint Thomas", population: "94,000", highlights: ["Folly Ruins", "Morant Bay", "Golden Grove"] },
  { name: "Portland", population: "80,000", highlights: ["Rio Grande River", "Reach Falls", "Frenchman's Cove"] },
  { name: "Saint Mary", population: "110,000", highlights: ["Nine Mile (Marley birthplace)", "Dunn's River Falls", "Island Gully"] },
  { name: "Saint Ann", population: "172,000", highlights: ["Ocho Rios", "Green Grotto Caves", "Harmony Hall"] },
  { name: "Trelawny", population: "87,000", highlights: ["Martha Brae River", "Dunbar Falls", "Falmouth"] },
  { name: "Saint James", population: "184,000", highlights: ["Montego Bay", "Doctor's Cave Beach", "Appleton Estate"] },
  { name: "Westmoreland", population: "145,000", highlights: ["Savanna-la-Mar", "Black River", "Grange Hill"] },
  { name: "Hanover", population: "70,000", highlights: ["Green Island", "Half Moon Beach", "Lucea"] },
  { name: "Saint Elizabeth", population: "150,000", highlights: ["Black River (longest river)", "YS Falls", "Middle Quarters"] },
  { name: "Manchester", population: "188,000", highlights: ["Mandeville", "Marshall's Pen", "Chest Hospital"] },
];

const HISTORY_TIMELINE = [
  { year: "1494", event: "Columbus arrives in Jamaica", details: "Christopher Columbus arrives on Jamaica's shores, leading to Spanish colonization." },
  { year: "1655", event: "British conquest begins", details: "English forces seize Jamaica from Spain, beginning British colonial rule." },
  { year: "1692", event: "Port Royal earthquake", details: "Devastating earthquake destroys Port Royal, once the pirate capital of the Caribbean." },
  { year: "1791-1804", event: "Haitian Revolution influence", details: "Haiti's successful slave rebellion inspires freedom movements across the Caribbean." },
  { year: "1834", event: "Slavery abolished", details: "Emancipation Act frees enslaved Africans in Jamaica." },
  { year: "1865", event: "Morant Bay Rebellion", details: "Paul Bogle leads rebellion against colonial injustice, a milestone in self-determination." },
  { year: "1938", event: "Labor movement rises", details: "Norman Manley and Alexander Bustamante establish political parties, founding modern Jamaica." },
  { year: "1962", event: "Independence Day", details: "Jamaica gains independence on August 6, becoming a sovereign nation." },
  { year: "1978", event: "Reggae goes global", details: "Bob Marley performs at One Love Peace Concert, unifying a divided nation." },
  { year: "2024", event: "Digital transformation accelerates", details: "Jamaica embraces fintech, renewable energy, and digital entrepreneurship." },
];

const MUSIC_EVOLUTION = [
  { era: "Mento (1920s-1950s)", style: "Acoustic folk ballads about daily life, hardship, and humor.", artists: "Count Lasher, Ella Andrina", example: "Dancing with tears in my eyes" },
  { era: "Ska (1960s)", style: "Upbeat, syncopated rhythm blending calypso, swing, and R&B.", artists: "The Skatalites, Justin Hinds", example: "Guns of Navarone" },
  { era: "Rocksteady (1966-1968)", style: "Slower, romantic evolution from ska with prominent bass lines.", artists: "Alton Ellis, Phyllis Dillon", example: "Rock Steady" },
  { era: "Reggae (1968-present)", style: "Syncopated rhythms with conscious lyrics, born from ska/rocksteady fusion.", artists: "Bob Marley, Peter Tosh", example: "One Love / People Get Ready" },
  { era: "Roots Reggae (1970s-1980s)", style: "Spiritual, Rasta-influenced reggae with deep social messages.", artists: "Burning Spear, Dennis Brown", example: "Every Man Thrive" },
  { era: "Dancehall (1980s-present)", style: "Rapid-fire rhythms, digital production, party-focused energy.", artists: "Shabba Ranks, Beenie Man", example: "Murder She Wrote" },
  { era: "Reggae Fusion (1990s-present)", style: "Blending reggae with pop, R&B, hip-hop, and electronic music.", artists: "Sean Paul, Chronixx", example: "Gimmie The Light" },
];

const CULTURAL_TOPICS = [
  {
    title: "Jamaican Patois (Jamaican Creole)",
    description: "A living language with African, English, Spanish, and French roots. 'Mi nuh know' = 'I don't know' — it's not broken English, it's a complete linguistic system.",
    deeper: "Patois preserves African grammar patterns and vocabulary, representing Jamaica's ancestral heritage. Recognized by linguists as a distinct language with its own rules.",
  },
  {
    title: "Rastafarianism & Spiritual Beliefs",
    description: "Religious and social movement born in 1930s Jamaica, viewing African heritage through Ethiopianism. Haile Selassie I revered as divine. Central to reggae and Jamaican identity.",
    deeper: "Rastafarianism emphasizes natural living, dreadlocks as spiritual commitment, and ganja as sacrament. It has profoundly shaped Jamaica's music, language, and social consciousness.",
  },
  {
    title: "Food Culture: Soul & Spice",
    description: "Jamaican cuisine blends African, British, Indian, and Spanish influences. Ackee & saltfish = national dish. Rice & peas, jerk chicken, patties, and rundown (breadfruit stew) are staples.",
    deeper: "Food is ceremonial and communal — 'Sunday dinner' brings families together. Cooking methods (jerk, boiling, stewing) preserve African techniques passed down through generations.",
  },
  {
    title: "Carnival & Festival Culture",
    description: "Jamaica Carnival (seasonal celebrations), Accompong Maroon Festival (ancestral celebration), and festival season showcase music, dance, and cultural pride.",
    deeper: "Festivals are resistance reclaimed — they celebrate freedom won by Maroons (escaped enslaved people) and maintain African-Caribbean identity.",
  },
  {
    title: "Visual Arts & Craft",
    description: "From Junkanoo parades to intricate beadwork, Jamaican visual culture is vibrant. National artists like Bob Nerbworth and Osmond Watson shaped Caribbean art.",
    deeper: "Jamaican art reflects the island's history — bright colors symbolize resilience, spirituality, and joy. Every craft carries stories of heritage.",
  },
];

const KNOWLEDGE_CATEGORIES = [
  {
    title: "History Mentors",
    mentors: [
      { name: "Dr. Daryl Leenus", expertise: "Colonial Jamaica & independence struggles", bio: "Historian specializing in Jamaica's path to sovereignty and post-colonial nation-building." },
      { name: "Professor Verene Shepherd", expertise: "Slavery, diaspora, & social history", bio: "Leading voice in Jamaican social history and diaspora studies, UWI-based." },
    ],
  },
  {
    title: "Music & Culture Mentors",
    mentors: [
      { name: "Herbie Miller", expertise: "Reggae history & ethnomusicology", bio: "Curator of Bob Marley Museum, deep knowledge of reggae's evolution." },
      { name: "Dr. Olive Lewin", expertise: "Jamaican folk music & oral tradition", bio: "Ethnomusicologist who documented Jamaica's rich musical heritage." },
    ],
  },
  {
    title: "Language & Literature Mentors",
    mentors: [
      { name: "Prof. Hubert Devonish", expertise: "Jamaican Creole linguistics", bio: "Leading linguist on Creole language structure and Caribbean sociolinguistics." },
      { name: "Kwame Dawes", expertise: "Jamaican poetry & diaspora literature", bio: "Award-winning poet and critic, explores identity and belonging in Caribbean literature." },
    ],
  },
];

const YOUTH_JOURNEYS = [
  {
    name: "Keanya",
    age: 17,
    location: "Kingston",
    dream: "STEM Career",
    story: "I was unsure about STEM until my teacher connected me with a female software engineer in our tech community. Now I'm coding and dreaming of working at a Jamaican startup.",
    achievement: "Completed coding bootcamp, got internship",
  },
  {
    name: "Marcus",
    age: 16,
    location: "Manchester",
    dream: "Sprinter",
    story: "My coach helped me understand that talent + discipline = opportunity. Training at Champs. Aiming for Olympics.",
    achievement: "100m time: 10.8s (U16 record in region)",
  },
  {
    name: "Anaya",
    age: 15,
    location: "Saint Ann",
    dream: "Social Entrepreneur",
    story: "Started a community garden in my village. Now connecting youth to agriculture and food security. My grandmother inspires me daily.",
    achievement: "Feeds 50+ families, mentoring 10 youth",
  },
];

const GUIDE_QUESTIONS = [
  {
    q: "How can I learn Jamaican history deeply?",
    a: "Start with the timeline here, then read 'A History of Jamaica' by John Sherlock. Listen to reggae with conscious lyrics (Bob Marley, Burning Spear) — they ARE history lessons. Connect with a history mentor for personalized guidance.",
  },
  {
    q: "What does it mean to be Jamaican?",
    a: "It's about resilience, creativity, and connection to your roots — whether you live here or in the diaspora. It's patois, music, food, and a spirit that says 'out of many, one people.'",
  },
  {
    q: "How can diaspora Jamaicans stay connected?",
    a: "Send money home, call family, speak patois with your kids, cook Jamaican food together, celebrate Jamaican holidays, and engage with digital communities like this one.",
  },
  {
    q: "What's Jamaica's future?",
    a: "Tech innovation (silicon mountain, fintech), sustainable tourism, agricultural advancement, and a generation of young Jamaicans building solutions. Your participation matters.",
  },
  {
    q: "How do I find mentorship?",
    a: "Check the Knowledge Exchange section, connect with experts listed, reach out to community leaders, attend local workshops, and ask questions here on the forum.",
  },
];

// ============ NEW DATA: FORUM, ECONOMY, SPORTS, ENVIRONMENT ============
const FORUM_CATEGORIES = [
  { id: "general", title: "General Discussion", icon: "💬", desc: "Talk about anything Jamaica-related", threads: 156, posts: 1243, color: "#D4A04C" },
  { id: "culture", title: "Culture & Heritage", icon: "🎭", desc: "Discuss Jamaican culture, patois, traditions, food", threads: 89, posts: 672, color: "#2D7D3A" },
  { id: "music", title: "Music & Entertainment", icon: "🎵", desc: "Reggae, dancehall, ska, and all Jamaican music", threads: 124, posts: 987, color: "#D4294B" },
  { id: "diaspora", title: "Diaspora Life", icon: "🌍", desc: "Experiences of being Jamaican abroad", threads: 203, posts: 1567, color: "#4A7FB5" },
  { id: "return", title: "Returning to Jamaica", icon: "✈️", desc: "Advice for those considering a return", threads: 78, posts: 534, color: "#FF6B35" },
  { id: "business", title: "Business & Investment", icon: "📊", desc: "Business opportunities and entrepreneurship", threads: 67, posts: 412, color: "#8B6914" },
  { id: "youth", title: "Youth & Education", icon: "🎓", desc: "Scholarships, education, and mentoring", threads: 91, posts: 623, color: "#1A3C5E" },
  { id: "parish", title: "Parish Talk", icon: "📍", desc: "Represent your parish!", threads: 145, posts: 890, color: "#6B4226" },
];

const SAMPLE_THREADS = [
  { id: "t1", category: "diaspora", title: "Tips for Jamaicans Moving to Canada", author: "TrontoYardie", date: "2025-12-15", replies: 34, likes: 67, pinned: true, preview: "After 12 years in Toronto, here's everything I wish someone told me..." },
  { id: "t2", category: "culture", title: "Teaching My Children Patois — Strategies That Work", author: "MissLouFan", date: "2025-12-10", replies: 23, likes: 89, preview: "My kids were born in London but I want them to speak patois fluently..." },
  { id: "t3", category: "return", title: "I Moved Back After 20 Years — My Honest Experience", author: "BackAYard", date: "2025-11-28", replies: 56, likes: 134, pinned: true, preview: "Left Jamaica in 2005, came back in 2025. The island has changed dramatically..." },
  { id: "t4", category: "music", title: "Best Reggae Revival Artists Right Now?", author: "RootsAndCulture", date: "2025-12-08", replies: 41, likes: 78, preview: "Chronixx, Protoje, Koffee obviously, but who else should I be listening to?" },
  { id: "t5", category: "business", title: "Starting a Remote Business in Jamaica — Tax & Legal Tips", author: "DigiNomad876", date: "2025-12-01", replies: 19, likes: 45, preview: "Running a software consultancy from Mandeville..." },
  { id: "t6", category: "youth", title: "Free Scholarships for Jamaican Students in 2026", author: "ScholarshipHunter", date: "2025-12-12", replies: 62, likes: 201, pinned: true, preview: "Comprehensive list of scholarships for 2026..." },
];

const COMMUNITY_GUIDELINES = [
  { rule: "Respect & Kindness", desc: "Treat every member with respect. We are all family." },
  { rule: "No Hate Speech", desc: "Zero tolerance for discrimination of any kind." },
  { rule: "Authentic Identity", desc: "Use a consistent username. No impersonation." },
  { rule: "No Spam", desc: "Share genuinely. Business discussions in Business category." },
  { rule: "Protect Privacy", desc: "Never share someone's personal info without consent." },
  { rule: "Report Concerns", desc: "See something troubling? Report it to moderators." },
];

const TECH_ECOSYSTEM = [
  { id: "bpo", title: "BPO & Outsourcing", icon: "🏢", desc: "60,000+ employees, ~$1B USD revenue, 3rd largest FX earner", color: "#D4A04C" },
  { id: "startups", title: "Startup Ecosystem", icon: "🚀", desc: "40+ high-tech startups, $2.17M avg raise, 1st in Caribbean", color: "#2D7D3A" },
  { id: "silicon", title: "Silicon Mountain", icon: "⛰️", desc: "Mandeville tech hub, 2,000 entrepreneur target by 2030", color: "#1A3C5E" },
  { id: "fintech", title: "Fintech & Digital", icon: "💳", desc: "JAM-DEX CBDC pilot, mobile money growth, blockchain", color: "#D4294B" },
  { id: "coding", title: "Coding & Digital Skills", icon: "👩‍💻", desc: "HEART/NSTA free training, Amber Coding Academy, 28 institutions", color: "#4A7FB5" },
  { id: "agritech", title: "Agricultural Innovation", icon: "🌱", desc: "400% hydroponic yield, 30% climate-resilient crops, $120M irrigation", color: "#FF6B35" },
];

const ECONOMY_STATS = [
  { label: "GDP (2024)", value: "$19.93B", icon: "💰" },
  { label: "BPO Employees", value: "60,000+", icon: "💻" },
  { label: "Tech Startups", value: "40+", icon: "🚀" },
  { label: "Remittances", value: "21.6% GDP", icon: "🌍" },
  { label: "Tourism Earnings", value: "$4.2B+", icon: "✈️" },
  { label: "Growth Rate", value: "1-3%", icon: "📈" },
];

const SPORTS_DATA = [
  { id: "track", title: "Track & Field", icon: "⚡", desc: "Usain Bolt, Fraser-Pryce, Thompson-Herah — fastest humans ever. ISSA Champs = Jamaica's Super Bowl.", color: "#FFD700", highlights: ["Usain Bolt — 8 Olympic golds, 9.58s/19.19s WRs", "Shelly-Ann Fraser-Pryce — multiple Olympic golds", "Kishane Thompson — Paris 2024 100m silver", "Nickisha Pryce — 48.57 in 400m", "ISSA Champs — world's largest HS track meet"] },
  { id: "football", title: "Football", icon: "⚽", desc: "1998 World Cup qualification. Reggae Girlz — 2019 & 2023 Women's World Cup.", color: "#2D7D3A", highlights: ["1998 World Cup — Jamaica's greatest sporting moment", "Reggae Girlz — Women's World Cup 2019 & 2023", "U-15 — 2025 CONCACAF League B champions", "Manning Cup & DaCosta Cup rivalry"] },
  { id: "cricket", title: "Cricket", icon: "🏏", desc: "Sabina Park since 1930. Chris Gayle, Courtney Walsh, George Headley.", color: "#C44B4B", highlights: ["George Headley — 'Black Bradman'", "Courtney Walsh — first to 500 Test wickets", "Chris Gayle — T20 legend", "Jamaica Tallawahs — CPL"] },
  { id: "netball", title: "Netball", icon: "🏀", desc: "Sunshine Girls — consistently world top 5.", color: "#FF6B35", highlights: ["Sunshine Girls — perennial world top 5", "Most popular women's sport in Jamaica", "Strong youth development programme"] },
  { id: "bobsled", title: "Bobsled", icon: "🛷", desc: "1988 Olympics inspired 'Cool Runnings'. Women qualified 2018 & 2022.", color: "#4A7FB5", highlights: ["1988 Calgary — legendary debut", "Inspired 'Cool Runnings' movie", "Women's team — 2018 & 2022 Olympics"] },
];

const ENVIRONMENT_DATA = [
  { id: "unesco", title: "Blue & John Crow Mountains", icon: "🏔️", desc: "UNESCO World Heritage Site — 26,252 hectares, 294 endemic species, 50% plant endemicity above 900m" },
  { id: "marine", title: "Marine Conservation", icon: "🐠", desc: "Montego Bay Marine Park pioneer. Fish sanctuaries, reef restoration, mangrove protection" },
  { id: "climate", title: "Climate Resilience", icon: "🌡️", desc: "Climate-smart agriculture, hydroponic farming (400% more yield, 90% less water)" },
  { id: "biodiversity", title: "Unique Biodiversity", icon: "🦜", desc: "3,000+ plant species, 28 endemic birds, Doctor Bird national bird, Jamaican Iguana revival" },
  { id: "sustainability", title: "Sustainability", icon: "♻️", desc: "Single-use plastic ban since 2019, solar expansion, Trees That Feed, farm-to-table movement" },
];

// ============ HELPER COMPONENTS ============
const Badge = ({ label, color = t.goldLight, size = "sm", icon = null }) => (
  <span style={{
    display: "inline-flex",
    alignItems: "center",
    gap: "6px",
    padding: size === "sm" ? "4px 12px" : "8px 16px",
    backgroundColor: `${color}20`,
    color: color,
    borderRadius: "20px",
    fontSize: size === "sm" ? "12px" : "13px",
    fontWeight: "600",
    fontFamily: f.body,
    border: `1px solid ${color}40`,
  }}>
    {icon && <span>{icon}</span>}
    {label}
  </span>
);

const Section = ({ title, icon = "📖", children, noPadding = false }) => (
  <div style={{
    marginBottom: "60px",
    paddingBottom: "40px",
    borderBottom: `1px solid ${t.border}`,
  }}>
    <div style={{
      display: "flex",
      alignItems: "center",
      gap: "12px",
      marginBottom: "32px",
      paddingLeft: noPadding ? "0" : "20px",
    }}>
      <span style={{ fontSize: "32px" }}>{icon}</span>
      <h2 style={{
        fontSize: "48px",
        fontWeight: "700",
        color: t.text,
        margin: 0,
        fontFamily: f.display,
        letterSpacing: "-1px",
      }}>
        {title}
      </h2>
    </div>
    <div style={{ paddingLeft: noPadding ? "0" : "20px" }}>
      {children}
    </div>
  </div>
);

// ============ MAIN COMPONENT ============
export default function DigitalJamaicaApp() {
  const [activeTab, setActiveTab] = useState("home");
  const [user, setUser] = useState(null);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authMode, setAuthMode] = useState("login");
  const [forumViewMode, setForumViewMode] = useState("categories");
  const [selectedForumCategory, setSelectedForumCategory] = useState(null);
  const [threads, setThreads] = useState(SAMPLE_THREADS);
  const navRef = useRef(null);

  // ============ AUTH LOGIC ============
  useEffect(() => {
    const stored = localStorage.getItem("digital_jamaica_user");
    if (stored) {
      try {
        setUser(JSON.parse(stored));
      } catch (e) {
        console.log("Failed to load user");
      }
    }
  }, []);

  const handleRegister = (name, email, password) => {
    const newUser = { id: Date.now(), name, email, password, joinDate: new Date().toLocaleDateString() };
    localStorage.setItem("digital_jamaica_user", JSON.stringify(newUser));
    setUser(newUser);
    setShowAuthModal(false);
  };

  const handleLogin = (email, password) => {
    const stored = localStorage.getItem("digital_jamaica_user");
    if (stored) {
      const userData = JSON.parse(stored);
      if (userData.email === email && userData.password === password) {
        setUser(userData);
        setShowAuthModal(false);
      } else {
        alert("Invalid email or password");
      }
    } else {
      alert("No account found. Please register first.");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("digital_jamaica_user");
    setUser(null);
    setActiveTab("home");
  };

  // ============ FORUM LOGIC ============
  const handleCreateThread = (title, content, category) => {
    const newThread = {
      id: `t${Date.now()}`,
      category,
      title,
      author: user.name,
      date: new Date().toISOString().split("T")[0],
      replies: 0,
      likes: 0,
      preview: content.substring(0, 100) + "...",
      content,
    };
    setThreads([newThread, ...threads]);
    setForumViewMode("threads");
    alert("Thread created successfully!");
  };

  // ============ RENDER: HOME ============
  const renderHome = () => (
    <div>
      <Section title="Welcome to Digital Jamaica" icon="🇯🇲">
        <p style={{ fontSize: "20px", color: t.textSec, lineHeight: "1.8", marginBottom: "20px" }}>
          A living digital space celebrating Jamaica's heritage, resilience, and future. Whether you're on the island, in the diaspora, or just discovering Jamaica — this is your home.
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "20px", marginTop: "30px" }}>
          {[
            { icon: "📚", title: "Learn Jamaica", desc: "Deep dive into history, music, and culture" },
            { icon: "🗺️", title: "Jamaica Guide", desc: "Practical information for life on the island" },
            { icon: "💡", title: "Knowledge Exchange", desc: "Learn from Jamaican experts and mentors" },
            { icon: "💬", title: "Community Forum", desc: "Connect with thousands of Jamaicans worldwide" },
          ].map((item, idx) => (
            <div key={idx} style={{
              padding: "20px",
              backgroundColor: t.card,
              border: `1px solid ${t.border}`,
              borderRadius: "12px",
              cursor: "pointer",
              transition: "all 0.3s ease",
            }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = t.cardHover} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = t.card}>
              <div style={{ fontSize: "32px", marginBottom: "10px" }}>{item.icon}</div>
              <h3 style={{ color: t.gold, fontSize: "18px", marginBottom: "8px", fontFamily: f.display }}>{item.title}</h3>
              <p style={{ color: t.textMut, fontSize: "14px", margin: 0 }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );

  // ============ RENDER: LEARN JAMAICA ============
  const renderLearnJamaica = () => (
    <div>
      <Section title="Jamaican History" icon="📜">
        <div style={{ display: "grid", gap: "20px" }}>
          {HISTORY_TIMELINE.map((item, idx) => (
            <div key={idx} style={{
              padding: "20px",
              backgroundColor: t.card,
              border: `2px solid ${t.border}`,
              borderLeft: `4px solid ${t.gold}`,
              borderRadius: "8px",
            }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "start", marginBottom: "10px" }}>
                <h3 style={{ color: t.gold, fontSize: "22px", margin: 0, fontFamily: f.display }}>{item.year}</h3>
                <Badge label={item.event} />
              </div>
              <p style={{ color: t.textSec, margin: "8px 0 0 0" }}>{item.details}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Music Evolution" icon="🎵">
        <div style={{ display: "grid", gap: "20px" }}>
          {MUSIC_EVOLUTION.map((item, idx) => (
            <div key={idx} style={{
              padding: "20px",
              backgroundColor: t.card,
              border: `1px solid ${t.border}`,
              borderRadius: "8px",
            }}>
              <h3 style={{ color: t.gold, fontSize: "20px", margin: "0 0 10px 0", fontFamily: f.display }}>{item.era}</h3>
              <p style={{ color: t.textSec, margin: "0 0 10px 0" }}>{item.style}</p>
              <div style={{ display: "flex", gap: "15px", flexWrap: "wrap" }}>
                <Badge label={`Artists: ${item.artists}`} color={t.greenLight} />
                <Badge label={`Example: ${item.example}`} color={t.goldLight} />
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Culture & Identity" icon="🎭">
        <div style={{ display: "grid", gap: "20px" }}>
          {CULTURAL_TOPICS.map((item, idx) => (
            <div key={idx} style={{
              padding: "20px",
              backgroundColor: t.card,
              border: `1px solid ${t.border}`,
              borderRadius: "8px",
            }}>
              <h3 style={{ color: t.gold, fontSize: "20px", margin: "0 0 10px 0", fontFamily: f.display }}>{item.title}</h3>
              <p style={{ color: t.textSec, margin: "0 0 10px 0" }}>{item.description}</p>
              <p style={{ color: t.textMut, fontSize: "14px", margin: "0", fontStyle: "italic" }}>{item.deeper}</p>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );

  // ============ RENDER: JAMAICA GUIDE ============
  const renderJamaicaGuide = () => (
    <div>
      <Section title="Parish Profiles" icon="📍">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "20px" }}>
          {PARISHES.map((parish, idx) => (
            <div key={idx} style={{
              padding: "20px",
              backgroundColor: t.card,
              border: `1px solid ${t.border}`,
              borderRadius: "8px",
            }}>
              <h3 style={{ color: t.gold, fontSize: "20px", margin: "0 0 8px 0", fontFamily: f.display }}>{parish.name}</h3>
              <p style={{ color: t.textSec, fontSize: "14px", margin: "0 0 12px 0" }}>Pop: {parish.population}</p>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                {parish.highlights.map((hl, i) => (
                  <div key={i} style={{ color: t.textMut, fontSize: "13px" }}>• {hl}</div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section title="FAQ & Guide" icon="❓">
        <div style={{ display: "grid", gap: "20px" }}>
          {GUIDE_QUESTIONS.map((item, idx) => (
            <details key={idx} style={{
              padding: "20px",
              backgroundColor: t.card,
              border: `1px solid ${t.border}`,
              borderRadius: "8px",
            }}>
              <summary style={{ color: t.gold, fontSize: "16px", fontWeight: "700", cursor: "pointer", fontFamily: f.display }}>
                {item.q}
              </summary>
              <p style={{ color: t.textSec, margin: "12px 0 0 0" }}>{item.a}</p>
            </details>
          ))}
        </div>
      </Section>
    </div>
  );

  // ============ RENDER: KNOWLEDGE EXCHANGE ============
  const renderKnowledgeExchange = () => (
    <div>
      <Section title="Meet Our Mentors" icon="👨‍🏫">
        <div style={{ display: "grid", gap: "40px" }}>
          {KNOWLEDGE_CATEGORIES.map((cat, idx) => (
            <div key={idx}>
              <h3 style={{ color: t.gold, fontSize: "28px", margin: "0 0 20px 0", fontFamily: f.display }}>{cat.title}</h3>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "20px" }}>
                {cat.mentors.map((mentor, midx) => (
                  <div key={midx} style={{
                    padding: "20px",
                    backgroundColor: t.card,
                    border: `2px solid ${t.gold}`,
                    borderRadius: "8px",
                  }}>
                    <h4 style={{ color: t.text, fontSize: "18px", margin: "0 0 8px 0", fontFamily: f.display }}>{mentor.name}</h4>
                    <Badge label={mentor.expertise} color={t.greenLight} size="sm" />
                    <p style={{ color: t.textSec, fontSize: "14px", margin: "12px 0 0 0" }}>{mentor.bio}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Youth Stories" icon="⭐">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "20px" }}>
          {YOUTH_JOURNEYS.map((youth, idx) => (
            <div key={idx} style={{
              padding: "20px",
              backgroundColor: t.card,
              border: `1px solid ${t.border}`,
              borderRadius: "8px",
            }}>
              <h3 style={{ color: t.gold, fontSize: "18px", margin: "0 0 8px 0", fontFamily: f.display }}>{youth.name}, {youth.age}</h3>
              <Badge label={youth.location} color={t.blue} size="sm" icon="📍" />
              <p style={{ color: t.textSec, margin: "12px 0 0 0" }}><strong>Dream:</strong> {youth.dream}</p>
              <p style={{ color: t.textMut, fontSize: "14px", margin: "8px 0" }}>{youth.story}</p>
              <Badge label={youth.achievement} color={t.greenLight} size="sm" icon="🏆" />
            </div>
          ))}
        </div>
      </Section>
    </div>
  );

  // ============ RENDER: ECONOMY & INNOVATION ============
  const renderEconomy = () => (
    <div>
      <Section title="Tech Ecosystem" icon="💻">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "20px", marginBottom: "40px" }}>
          {TECH_ECOSYSTEM.map((item, idx) => (
            <div key={idx} style={{
              padding: "20px",
              backgroundColor: t.card,
              border: `2px solid ${item.color}40`,
              borderLeft: `4px solid ${item.color}`,
              borderRadius: "8px",
            }}>
              <div style={{ fontSize: "32px", marginBottom: "10px" }}>{item.icon}</div>
              <h3 style={{ color: item.color, fontSize: "18px", margin: "0 0 8px 0", fontFamily: f.display }}>{item.title}</h3>
              <p style={{ color: t.textSec, fontSize: "14px", margin: 0 }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Economic Stats (2024)" icon="📊">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "20px" }}>
          {ECONOMY_STATS.map((stat, idx) => (
            <div key={idx} style={{
              padding: "20px",
              backgroundColor: t.card,
              border: `1px solid ${t.border}`,
              borderRadius: "8px",
              textAlign: "center",
            }}>
              <div style={{ fontSize: "28px", marginBottom: "8px" }}>{stat.icon}</div>
              <p style={{ color: t.textMut, fontSize: "13px", margin: "0 0 8px 0" }}>{stat.label}</p>
              <p style={{ color: t.gold, fontSize: "24px", fontWeight: "700", margin: 0, fontFamily: f.display }}>{stat.value}</p>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );

  // ============ RENDER: SPORTS ============
  const renderSports = () => (
    <div>
      <Section title="Jamaican Sports Legacy" icon="🏆">
        <p style={{ fontSize: "18px", color: t.textSec, marginBottom: "30px" }}>
          Jamaica punches far above its weight in global athletics. From Usain Bolt's supersonic sprints to the Reggae Girlz' historic World Cup runs, Jamaican athletes embody excellence, resilience, and pride.
        </p>
        <div style={{ display: "grid", gap: "20px" }}>
          {SPORTS_DATA.map((sport, idx) => (
            <div key={idx} style={{
              padding: "24px",
              backgroundColor: t.card,
              border: `2px solid ${sport.color}40`,
              borderLeft: `4px solid ${sport.color}`,
              borderRadius: "8px",
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "12px" }}>
                <span style={{ fontSize: "32px" }}>{sport.icon}</span>
                <h3 style={{ color: sport.color, fontSize: "22px", margin: 0, fontFamily: f.display }}>{sport.title}</h3>
              </div>
              <p style={{ color: t.textSec, margin: "0 0 12px 0" }}>{sport.desc}</p>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                {sport.highlights.map((hl, i) => (
                  <div key={i} style={{ color: t.textMut, fontSize: "14px" }}>• {hl}</div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );

  // ============ RENDER: ENVIRONMENT ============
  const renderEnvironment = () => (
    <div>
      <Section title="Jamaica's Natural Heritage" icon="🌿">
        <p style={{ fontSize: "18px", color: t.textSec, marginBottom: "30px" }}>
          Jamaica is a biodiversity hotspot with 28 endemic bird species, 3,000+ plant species, and critical ecosystems from Blue Mountains to coral reefs. Conservation and sustainability are key to Jamaica's future.
        </p>
        <div style={{ display: "grid", gap: "20px" }}>
          {ENVIRONMENT_DATA.map((env, idx) => (
            <div key={idx} style={{
              padding: "24px",
              backgroundColor: t.card,
              border: `1px solid ${t.border}`,
              borderRadius: "8px",
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "12px" }}>
                <span style={{ fontSize: "32px" }}>{env.icon}</span>
                <h3 style={{ color: t.greenLight, fontSize: "20px", margin: 0, fontFamily: f.display }}>{env.title}</h3>
              </div>
              <p style={{ color: t.textSec, margin: 0 }}>{env.desc}</p>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );

  // ============ RENDER: FORUM ============
  const renderForum = () => {
    if (forumViewMode === "categories") {
      return (
        <div>
          <Section title="Community Forum" icon="💬">
            <p style={{ fontSize: "16px", color: t.textSec, marginBottom: "30px" }}>
              Connect with thousands of Jamaicans across the globe. Ask questions, share experiences, and build community.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "20px" }}>
              {FORUM_CATEGORIES.map((cat, idx) => (
                <div
                  key={idx}
                  onClick={() => {
                    setSelectedForumCategory(cat.id);
                    setForumViewMode("threads");
                  }}
                  style={{
                    padding: "24px",
                    backgroundColor: t.card,
                    border: `2px solid ${cat.color}40`,
                    borderLeft: `4px solid ${cat.color}`,
                    borderRadius: "8px",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = t.cardHover;
                    e.currentTarget.style.transform = "translateY(-4px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = t.card;
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  <div style={{ fontSize: "32px", marginBottom: "10px" }}>{cat.icon}</div>
                  <h3 style={{ color: cat.color, fontSize: "18px", margin: "0 0 8px 0", fontFamily: f.display }}>{cat.title}</h3>
                  <p style={{ color: t.textMut, fontSize: "13px", margin: "0 0 12px 0" }}>{cat.desc}</p>
                  <div style={{ display: "flex", gap: "12px" }}>
                    <Badge label={`${cat.threads} threads`} color={cat.color} size="sm" />
                    <Badge label={`${cat.posts} posts`} color={cat.color} size="sm" />
                  </div>
                </div>
              ))}
            </div>
          </Section>

          <Section title="Community Guidelines" icon="📋">
            <div style={{ display: "grid", gap: "15px" }}>
              {COMMUNITY_GUIDELINES.map((item, idx) => (
                <div key={idx} style={{
                  padding: "16px",
                  backgroundColor: t.card,
                  border: `1px solid ${t.border}`,
                  borderRadius: "8px",
                }}>
                  <h4 style={{ color: t.gold, fontSize: "16px", margin: "0 0 6px 0", fontFamily: f.display }}>{item.rule}</h4>
                  <p style={{ color: t.textSec, fontSize: "14px", margin: 0 }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </Section>
        </div>
      );
    } else if (forumViewMode === "threads") {
      const category = FORUM_CATEGORIES.find((c) => c.id === selectedForumCategory);
      const categoryThreads = threads.filter((t) => t.category === selectedForumCategory);

      return (
        <div>
          <div style={{ marginBottom: "30px" }}>
            <button
              onClick={() => setForumViewMode("categories")}
              style={{
                padding: "10px 16px",
                backgroundColor: t.border,
                color: t.text,
                border: "none",
                borderRadius: "6px",
                cursor: "pointer",
                fontSize: "14px",
                fontFamily: f.body,
              }}
            >
              ← Back to Categories
            </button>
          </div>

          <Section title={`${category?.title || "Threads"}`} icon={category?.icon || "💬"} noPadding={true}>
            {user && (
              <button
                onClick={() => setForumViewMode("new-thread")}
                style={{
                  padding: "12px 24px",
                  backgroundColor: t.gold,
                  color: t.bg,
                  border: "none",
                  borderRadius: "6px",
                  cursor: "pointer",
                  fontSize: "14px",
                  fontWeight: "700",
                  fontFamily: f.body,
                  marginBottom: "30px",
                  marginLeft: "20px",
                }}
              >
                + New Thread
              </button>
            )}
            {!user && (
              <div style={{
                padding: "16px",
                backgroundColor: t.card,
                border: `1px solid ${t.gold}40`,
                borderRadius: "6px",
                color: t.textSec,
                marginBottom: "30px",
                marginLeft: "20px",
                marginRight: "20px",
              }}>
                <a
                  onClick={() => {
                    setShowAuthModal(true);
                    setAuthMode("login");
                  }}
                  style={{ color: t.gold, cursor: "pointer", textDecoration: "underline" }}
                >
                  Log in
                </a>
                {" "} to create a thread.
              </div>
            )}

            <div style={{ paddingLeft: "20px", paddingRight: "20px", display: "grid", gap: "16px" }}>
              {categoryThreads.map((thread) => (
                <div
                  key={thread.id}
                  style={{
                    padding: "20px",
                    backgroundColor: thread.pinned ? `${t.gold}15` : t.card,
                    border: `1px solid ${thread.pinned ? t.gold : t.border}`,
                    borderRadius: "8px",
                  }}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "start", marginBottom: "12px" }}>
                    <h3 style={{ color: t.text, fontSize: "16px", margin: 0, fontFamily: f.display, flex: 1 }}>
                      {thread.pinned && "📌 "}
                      {thread.title}
                    </h3>
                  </div>
                  <p style={{ color: t.textMut, fontSize: "13px", margin: "0 0 12px 0" }}>
                    by {thread.author} • {thread.date}
                  </p>
                  <p style={{ color: t.textSec, fontSize: "14px", margin: "0 0 12px 0" }}>{thread.preview}</p>
                  <div style={{ display: "flex", gap: "12px" }}>
                    <Badge label={`${thread.replies} replies`} color={t.textMut} size="sm" />
                    <Badge label={`${thread.likes} likes`} color={t.gold} size="sm" icon="👍" />
                  </div>
                </div>
              ))}
            </div>
          </Section>
        </div>
      );
    } else if (forumViewMode === "new-thread") {
      return (
        <NewThreadForm
          category={selectedForumCategory}
          onBack={() => setForumViewMode("threads")}
          onSubmit={handleCreateThread}
        />
      );
    }
  };

  // ============ RENDER: YOUTH MODE ============
  const renderYouthMode = () => (
    <div>
      <Section title="Youth Mode" icon="🎒">
        <p style={{ fontSize: "18px", color: t.textSec, marginBottom: "30px" }}>
          Designed for young Jamaicans. Find mentorship, opportunities, scholarships, and connect with your peers.
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "20px" }}>
          {[
            { icon: "🎓", title: "Scholarships & Education", desc: "Find funding for higher education locally and abroad." },
            { icon: "💼", title: "Internships & Jobs", desc: "Explore opportunities in tech, business, and creative fields." },
            { icon: "👥", title: "Mentorship", desc: "Get matched with established professionals in your field." },
            { icon: "🚀", title: "Entrepreneurship", desc: "Start your own business with guidance and resources." },
          ].map((item, idx) => (
            <div key={idx} style={{
              padding: "20px",
              backgroundColor: t.card,
              border: `2px solid ${t.green}40`,
              borderLeft: `4px solid ${t.green}`,
              borderRadius: "8px",
            }}>
              <div style={{ fontSize: "32px", marginBottom: "10px" }}>{item.icon}</div>
              <h3 style={{ color: t.green, fontSize: "18px", margin: "0 0 8px 0", fontFamily: f.display }}>{item.title}</h3>
              <p style={{ color: t.textSec, fontSize: "14px", margin: 0 }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );

  // ============ RENDER: PARISH COMMUNITIES ============
  const renderParishCommunities = () => (
    <div>
      <Section title="Parish Communities" icon="🗺️">
        <p style={{ fontSize: "18px", color: t.textSec, marginBottom: "30px" }}>
          Connect with people from your parish. Share news, events, opportunities, and community pride.
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "20px" }}>
          {PARISHES.slice(0, 6).map((parish, idx) => (
            <div key={idx} style={{
              padding: "20px",
              backgroundColor: t.card,
              border: `2px solid ${t.blue}40`,
              borderLeft: `4px solid ${t.blue}`,
              borderRadius: "8px",
            }}>
              <h3 style={{ color: t.blue, fontSize: "18px", margin: "0 0 8px 0", fontFamily: f.display }}>{parish.name}</h3>
              <p style={{ color: t.textMut, fontSize: "13px", margin: "0 0 12px 0" }}>Population: {parish.population}</p>
              <button style={{
                padding: "8px 16px",
                backgroundColor: t.blue,
                color: t.bg,
                border: "none",
                borderRadius: "6px",
                cursor: "pointer",
                fontSize: "13px",
                fontWeight: "700",
                fontFamily: f.body,
              }}>
                Join {parish.name} Community
              </button>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );

  // ============ RENDER: RETURN GUIDE ============
  const renderReturnGuide = () => (
    <div>
      <Section title="Guide to Returning to Jamaica" icon="✈️">
        <div style={{ display: "grid", gap: "30px" }}>
          {[
            {
              title: "Before You Return",
              points: [
                "Research employment and business opportunities",
                "Understand cost of living and housing markets",
                "Arrange healthcare and insurance",
                "Connect with diaspora return programs",
                "Plan your finances and tax obligations",
              ],
            },
            {
              title: "Upon Arrival",
              points: [
                "Register with local authorities if necessary",
                "Establish banking and financial accounts",
                "Find accommodation and settle in",
                "Network with local communities and professionals",
                "Explore your parish and get to know neighbors",
              ],
            },
            {
              title: "Long-Term Success",
              points: [
                "Build meaningful relationships and friendships",
                "Contribute to community development",
                "Explore mentorship and knowledge-sharing opportunities",
                "Stay connected with diaspora networks",
                "Embrace Jamaica as your home while maintaining global perspective",
              ],
            },
          ].map((section, idx) => (
            <div key={idx} style={{
              padding: "24px",
              backgroundColor: t.card,
              border: `2px solid ${t.gold}40`,
              borderLeft: `4px solid ${t.gold}`,
              borderRadius: "8px",
            }}>
              <h3 style={{ color: t.gold, fontSize: "20px", margin: "0 0 16px 0", fontFamily: f.display }}>{section.title}</h3>
              <ul style={{ margin: 0, paddingLeft: "20px" }}>
                {section.points.map((point, pidx) => (
                  <li key={pidx} style={{ color: t.textSec, fontSize: "15px", marginBottom: "10px" }}>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );

  // ============ MAIN RENDER ============
  return (
    <div style={{
      backgroundColor: t.bg,
      color: t.text,
      fontFamily: f.body,
      minHeight: "100vh",
      paddingBottom: "80px",
    }}>
      {/* NAVIGATION */}
      <nav style={{
        position: "sticky",
        top: 0,
        backgroundColor: t.surface,
        borderBottom: `1px solid ${t.border}`,
        zIndex: 1000,
        padding: "0 20px",
      }}>
        <div style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          overflowX: "auto",
          overflowY: "hidden",
          scrollBehavior: "smooth",
        }} ref={navRef}>
          <div style={{ display: "flex", gap: "0", minWidth: "max-content" }}>
            {[
              { id: "home", label: "Home", icon: "🏠" },
              { id: "learn", label: "Learn Jamaica", icon: "📚" },
              { id: "guide", label: "Guide", icon: "🗺️" },
              { id: "knowledge", label: "Knowledge", icon: "💡" },
              { id: "economy", label: "Economy", icon: "💼" },
              { id: "sports", label: "Sports", icon: "🏆" },
              { id: "environment", label: "Environment", icon: "🌿" },
              { id: "youth", label: "Youth Mode", icon: "🎒" },
              { id: "parish", label: "Parishes", icon: "📍" },
              { id: "return", label: "Return Guide", icon: "✈️" },
              { id: "forum", label: "Forum", icon: "💬" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveTab(tab.id);
                  setForumViewMode("categories");
                }}
                style={{
                  padding: "16px 20px",
                  backgroundColor: activeTab === tab.id ? t.gold : "transparent",
                  color: activeTab === tab.id ? t.bg : t.textSec,
                  border: "none",
                  cursor: "pointer",
                  fontSize: "14px",
                  fontWeight: activeTab === tab.id ? "700" : "500",
                  fontFamily: f.body,
                  whiteSpace: "nowrap",
                  transition: "all 0.2s ease",
                  borderBottom: activeTab === tab.id ? `3px solid ${t.gold}` : "none",
                }}
                onMouseEnter={(e) => {
                  if (activeTab !== tab.id) {
                    e.currentTarget.style.backgroundColor = t.border;
                  }
                }}
                onMouseLeave={(e) => {
                  if (activeTab !== tab.id) {
                    e.currentTarget.style.backgroundColor = "transparent";
                  }
                }}
              >
                <span style={{ marginRight: "6px" }}>{tab.icon}</span>
                {tab.label}
              </button>
            ))}
          </div>

          {/* AUTH BUTTON */}
          <div style={{ marginLeft: "20px", minWidth: "max-content" }}>
            {user ? (
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <span style={{ fontSize: "13px", color: t.textSec }}>👤 {user.name}</span>
                <button
                  onClick={handleLogout}
                  style={{
                    padding: "8px 16px",
                    backgroundColor: t.red,
                    color: t.bg,
                    border: "none",
                    borderRadius: "6px",
                    cursor: "pointer",
                    fontSize: "13px",
                    fontWeight: "700",
                    fontFamily: f.body,
                  }}
                >
                  Logout
                </button>
              </div>
            ) : (
              <button
                onClick={() => {
                  setShowAuthModal(true);
                  setAuthMode("login");
                }}
                style={{
                  padding: "8px 16px",
                  backgroundColor: t.gold,
                  color: t.bg,
                  border: "none",
                  borderRadius: "6px",
                  cursor: "pointer",
                  fontSize: "13px",
                  fontWeight: "700",
                  fontFamily: f.body,
                }}
              >
                Login / Register
              </button>
            )}
          </div>
        </div>
      </nav>

      {/* MAIN CONTENT */}
      <div style={{
        maxWidth: "1400px",
        margin: "0 auto",
        padding: "40px 20px",
      }}>
        {activeTab === "home" && renderHome()}
        {activeTab === "learn" && renderLearnJamaica()}
        {activeTab === "guide" && renderJamaicaGuide()}
        {activeTab === "knowledge" && renderKnowledgeExchange()}
        {activeTab === "economy" && renderEconomy()}
        {activeTab === "sports" && renderSports()}
        {activeTab === "environment" && renderEnvironment()}
        {activeTab === "youth" && renderYouthMode()}
        {activeTab === "parish" && renderParishCommunities()}
        {activeTab === "return" && renderReturnGuide()}
        {activeTab === "forum" && renderForum()}
      </div>

      {/* AUTH MODAL */}
      {showAuthModal && (
        <AuthModal
          mode={authMode}
          onClose={() => setShowAuthModal(false)}
          onSwitchMode={() => setAuthMode(authMode === "login" ? "register" : "login")}
          onRegister={handleRegister}
          onLogin={handleLogin}
        />
      )}

      {/* FOOTER */}
      <footer style={{
        padding: "40px 20px",
        textAlign: "center",
        borderTop: `1px solid ${t.border}`,
        color: t.textMut,
        fontSize: "14px",
      }}>
        <p>Created by Rohan Jowallah • Celebrating Jamaica's Heritage & Future</p>
        <p style={{ margin: "8px 0 0 0" }}>© 2026 Digital Jamaica. All rights reserved.</p>
      </footer>
    </div>
  );
}

// ============ AUTH MODAL COMPONENT ============
function AuthModal({ mode, onClose, onSwitchMode, onRegister, onLogin }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (mode === "register") {
      if (name && email && password) {
        onRegister(name, email, password);
        setName("");
        setEmail("");
        setPassword("");
      } else {
        alert("Please fill all fields");
      }
    } else {
      if (email && password) {
        onLogin(email, password);
        setEmail("");
        setPassword("");
      } else {
        alert("Please fill all fields");
      }
    }
  };

  return (
    <div style={{
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "rgba(0, 0, 0, 0.7)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 2000,
      backdropFilter: "blur(4px)",
    }}>
      <div style={{
        backgroundColor: t.card,
        border: `1px solid ${t.border}`,
        borderRadius: "12px",
        padding: "40px",
        maxWidth: "400px",
        width: "90%",
      }}>
        <h2 style={{
          color: t.gold,
          fontSize: "28px",
          margin: "0 0 30px 0",
          fontFamily: f.display,
          textAlign: "center",
        }}>
          {mode === "login" ? "Login" : "Register"}
        </h2>

        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          {mode === "register" && (
            <input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={{
                padding: "12px 16px",
                backgroundColor: t.surface,
                border: `1px solid ${t.border}`,
                borderRadius: "6px",
                color: t.text,
                fontFamily: f.body,
                fontSize: "14px",
              }}
            />
          )}
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{
              padding: "12px 16px",
              backgroundColor: t.surface,
              border: `1px solid ${t.border}`,
              borderRadius: "6px",
              color: t.text,
              fontFamily: f.body,
              fontSize: "14px",
            }}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{
              padding: "12px 16px",
              backgroundColor: t.surface,
              border: `1px solid ${t.border}`,
              borderRadius: "6px",
              color: t.text,
              fontFamily: f.body,
              fontSize: "14px",
            }}
          />
          <button
            type="submit"
            style={{
              padding: "12px 24px",
              backgroundColor: t.gold,
              color: t.bg,
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
              fontWeight: "700",
              fontSize: "14px",
              fontFamily: f.body,
              marginTop: "10px",
            }}
          >
            {mode === "login" ? "Login" : "Register"}
          </button>
        </form>

        <p style={{ textAlign: "center", color: t.textMut, fontSize: "13px", margin: "20px 0 0 0" }}>
          {mode === "login" ? "Don't have an account?" : "Already have an account?"}
          {" "}
          <a
            onClick={onSwitchMode}
            style={{ color: t.gold, cursor: "pointer", textDecoration: "underline" }}
          >
            {mode === "login" ? "Register" : "Login"}
          </a>
        </p>

        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: "16px",
            right: "16px",
            backgroundColor: "transparent",
            border: "none",
            color: t.text,
            fontSize: "24px",
            cursor: "pointer",
          }}
        >
          ×
        </button>
      </div>
    </div>
  );
}

// ============ NEW THREAD FORM COMPONENT ============
function NewThreadForm({ category, onBack, onSubmit }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const cat = FORUM_CATEGORIES.find((c) => c.id === category);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && content) {
      onSubmit(title, content, category);
      setTitle("");
      setContent("");
    } else {
      alert("Please fill in all fields");
    }
  };

  return (
    <div>
      <div style={{ marginBottom: "30px" }}>
        <button
          onClick={onBack}
          style={{
            padding: "10px 16px",
            backgroundColor: t.border,
            color: t.text,
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
            fontSize: "14px",
            fontFamily: f.body,
          }}
        >
          ← Back
        </button>
      </div>

      <div style={{
        padding: "40px",
        backgroundColor: t.card,
        border: `1px solid ${t.border}`,
        borderRadius: "8px",
        maxWidth: "800px",
      }}>
        <h2 style={{
          color: t.gold,
          fontSize: "28px",
          margin: "0 0 12px 0",
          fontFamily: f.display,
        }}>
          New Thread
        </h2>
        <p style={{ color: t.textMut, fontSize: "14px", margin: "0 0 30px 0" }}>
          in {cat?.icon} {cat?.title}
        </p>

        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <div>
            <label style={{ color: t.text, display: "block", marginBottom: "8px", fontSize: "14px", fontWeight: "700" }}>
              Thread Title
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="What's your topic?"
              style={{
                width: "100%",
                padding: "12px 16px",
                backgroundColor: t.surface,
                border: `1px solid ${t.border}`,
                borderRadius: "6px",
                color: t.text,
                fontFamily: f.body,
                fontSize: "14px",
                boxSizing: "border-box",
              }}
            />
          </div>

          <div>
            <label style={{ color: t.text, display: "block", marginBottom: "8px", fontSize: "14px", fontWeight: "700" }}>
              Content
            </label>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Share your thoughts, question, or story..."
              rows="10"
              style={{
                width: "100%",
                padding: "12px 16px",
                backgroundColor: t.surface,
                border: `1px solid ${t.border}`,
                borderRadius: "6px",
                color: t.text,
                fontFamily: f.body,
                fontSize: "14px",
                boxSizing: "border-box",
                resize: "vertical",
              }}
            />
          </div>

          <button
            type="submit"
            style={{
              padding: "12px 24px",
              backgroundColor: t.gold,
              color: t.bg,
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
              fontWeight: "700",
              fontSize: "14px",
              fontFamily: f.body,
            }}
          >
            Post Thread
          </button>
        </form>
      </div>
    </div>
  );
}
