'use client';
import { useState, useEffect, useRef, useCallback } from "react";

const FONTS = "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Outfit:wght@300;400;500;600;700;800&display=swap";

// ─── Jamaica Data ───
const PARISHES = [
  { name: "Kingston", pop: "89,057", vibe: "Capital city energy, culture hub", icon: "🏙️" },
  { name: "St. Andrew", pop: "573,369", vibe: "Uptown vibes, education centre", icon: "🏫" },
  { name: "St. Thomas", pop: "93,902", vibe: "Eastern roots, Maroon heritage", icon: "⛰️" },
  { name: "Portland", pop: "82,183", vibe: "Lush beauty, jerk chicken origin", icon: "🌿" },
  { name: "St. Mary", pop: "113,615", vibe: "North coast charm, Firefly", icon: "🔥" },
  { name: "St. Ann", pop: "172,362", vibe: "Garden parish, Bob Marley birthplace", icon: "🎵" },
  { name: "Trelawny", pop: "75,164", vibe: "Maroon Town, Cockpit Country", icon: "🏔️" },
  { name: "St. James", pop: "184,818", vibe: "Montego Bay, tourism capital", icon: "🏖️" },
  { name: "Hanover", pop: "69,534", vibe: "Western tip, Lucea heritage", icon: "🌅" },
  { name: "Westmoreland", pop: "144,103", vibe: "Negril sunsets, sugarcane roots", icon: "🌾" },
  { name: "St. Elizabeth", pop: "150,205", vibe: "Breadbasket parish, YS Falls", icon: "🌊" },
  { name: "Manchester", pop: "190,812", vibe: "Cool highlands, Mandeville", icon: "🌤️" },
  { name: "Clarendon", pop: "246,322", vibe: "Central heartland, farming roots", icon: "🌱" },
  { name: "St. Catherine", pop: "516,218", vibe: "Spanish Town history, growth hub", icon: "🏛️" },
];

const HISTORY_TIMELINE = [
  { era: "Pre-Colonial", period: "Before 1494", title: "The Taino People", desc: "The Arawak-speaking Taino people called Jamaica 'Xaymaca' — Land of Wood and Water. They built a thriving civilization with advanced agriculture, pottery, and spiritual practices. Over 200 village sites have been identified across the island.", color: "#8B6914", icon: "🏺" },
  { era: "Colonial Era", period: "1494–1655", title: "Spanish Rule", desc: "Columbus arrived in 1494. The Spanish established settlements but devastated the Taino population through disease and forced labor. Santiago de la Vega (Spanish Town) became the capital.", color: "#8B4513", icon: "⚓" },
  { era: "British Period", period: "1655–1962", title: "Empire & Resistance", desc: "Britain seized Jamaica in 1655. The island became the largest sugar producer in the British Empire, built on the brutal enslavement of Africans. But resistance never ceased — from the Maroons' guerrilla warfare to Sam Sharpe's 1831 rebellion that accelerated abolition.", color: "#4A0E0E", icon: "⚔️" },
  { era: "Maroon Legacy", period: "1655–Present", title: "Freedom Fighters", desc: "The Maroons — escaped enslaved Africans who built free communities in the Blue Mountains and Cockpit Country — waged successful wars against the British. Queen Nanny, a National Hero, led the Windward Maroons. Their communities still maintain autonomy and cultural traditions today.", color: "#2D5016", icon: "🏔️" },
  { era: "Emancipation", period: "1834–1865", title: "After Slavery", desc: "Full emancipation came in 1838. Former enslaved people built free villages, established churches, and fought for land rights. Paul Bogle and George William Gordon led the 1865 Morant Bay Rebellion. Both became National Heroes.", color: "#6B4226", icon: "✊" },
  { era: "Self-Governance", period: "1938–1962", title: "Road to Independence", desc: "The 1938 labour riots sparked the modern political movement. Norman Manley and Alexander Bustamante founded the PNP and JLP respectively. Universal adult suffrage came in 1944.", color: "#1A3C5E", icon: "📜" },
  { era: "Independence", period: "1962–Present", title: "A Nation Is Born", desc: "On August 6, 1962, Jamaica gained independence. The black, green, and gold flag was raised. Since then, Jamaica has navigated economic challenges, political evolution, and cultural explosion — becoming one of the most influential small nations on Earth.", color: "#006400", icon: "🇯🇲" },
];

const MUSIC_EVOLUTION = [
  { genre: "Mento", period: "1940s–1950s", desc: "Jamaica's original folk music. Acoustic, humorous, community-based. Artists like Lord Flea and Count Lasher brought mento to international audiences.", color: "#D4A574" },
  { genre: "Ska", period: "1960s", desc: "The sound of independence! Upbeat, brass-driven, joyful. The Skatalites, Prince Buster, and Millie Small made Jamaica impossible to ignore.", color: "#E8B741" },
  { genre: "Rocksteady", period: "1966–1968", desc: "Ska slowed down and got soulful. Alton Ellis, The Paragons, and Hopeton Lewis created romantic, bass-heavy grooves.", color: "#C4713B" },
  { genre: "Reggae", period: "1968–Present", desc: "The heartbeat of Jamaica. Bob Marley, Peter Tosh, Jimmy Cliff, and Burning Spear spread messages of justice, love, and resistance worldwide. UNESCO Intangible Cultural Heritage since 2018.", color: "#2D7D3A" },
  { genre: "Dub", period: "1970s–Present", desc: "King Tubby, Lee 'Scratch' Perry, and Scientist stripped reggae to its bones and rebuilt it with echo, reverb, and space. Dub invented remix culture.", color: "#4A2D7D" },
  { genre: "Dancehall", period: "1980s–Present", desc: "Digital revolution! Yellowman, Shabba Ranks, Beenie Man, and Vybz Kartel took Jamaican music in bold new directions. Dancehall culture conquered the world.", color: "#D4294B" },
];

const CULTURAL_TOPICS = [
  { title: "Patois / Jamaican Creole", icon: "🗣️", preview: "More than slang — a full language with African, English, Spanish, and Taino roots.", items: ["Wah gwaan — What's going on", "Mi deh yah — I'm here / I'm good", "Nuh badda mi — Don't bother me", "Walk good — Travel safely / Goodbye", "Irie — Everything is good/fine", "Nyam — To eat", "Pickney — Child/Children", "Yard — Home / Jamaica"] },
  { title: "Food Traditions", icon: "🍛", preview: "Ackee and saltfish isn't just breakfast — it's national identity.", items: ["Ackee & Saltfish — National dish", "Jerk Chicken — Portland origin", "Rice & Peas — Sunday staple", "Curry Goat — Indian heritage", "Bammy — Taino cassava bread", "Mannish Water — Goat head soup", "Festival — Sweet fried dumplings", "Sorrel — Christmas drink"] },
  { title: "Festivals & Celebrations", icon: "🎉", preview: "From Carnival to Emancipation Day, Jamaica celebrates with music, colour, and community.", items: ["Carnival — Spring bacchanal", "Reggae Sumfest — July music festival", "Independence Day — August 6", "Emancipation Day — August 1", "Jonkonnu — Christmas masquerade", "Maroon Festival — January 6", "Jamaica Day — Last Friday in Feb", "Grand Gala — Independence celebration"] },
  { title: "Spiritual Life", icon: "🕊️", preview: "Christianity is dominant, but Jamaica's spiritual landscape includes Rastafari, Revivalism, Kumina, and more.", items: ["Rastafari — Global movement born in Jamaica", "Revivalism — Afro-Christian syncretic tradition", "Kumina — Kongolese-derived practice", "Ethiopian Orthodox — Rasta connection", "Seventh-day Adventist — Major denomination", "Baptist — Historical resistance church", "Pocomania — Spiritual healing tradition", "Nine Night — Death celebration tradition"] },
];

const KNOWLEDGE_CATEGORIES = [
  { id: "career", title: "Career Guidance", icon: "💼", desc: "Share professional pathways and industry insights", count: 47 },
  { id: "tech", title: "Technology & Innovation", icon: "💻", desc: "Digital skills, coding, and tech entrepreneurship", count: 32 },
  { id: "education", title: "Education & Scholarships", icon: "🎓", desc: "University guidance, applications, and funding", count: 58 },
  { id: "health", title: "Health & Wellness", icon: "🏥", desc: "Medical careers, mental health, and wellbeing", count: 23 },
  { id: "business", title: "Business & Entrepreneurship", icon: "📊", desc: "Starting businesses, market knowledge, investment", count: 41 },
  { id: "arts", title: "Arts & Creative Industries", icon: "🎨", desc: "Music, film, visual arts, and creative careers", count: 36 },
];

const YOUTH_JOURNEYS = [
  { id: "explorer", title: "Island Explorer", age: "6–9", desc: "Discover Jamaica's 14 parishes through stories, animals, and foods", icon: "🗺️", color: "#E8B741", modules: 14, progress: 0 },
  { id: "historian", title: "Young Historian", age: "9–12", desc: "Travel through time and meet Jamaica's heroes and heroines", icon: "📚", color: "#2D7D3A", modules: 10, progress: 0 },
  { id: "culturalist", title: "Culture Keeper", age: "10–14", desc: "Learn patois, cook Jamaican food, and explore music traditions", icon: "🎶", color: "#D4294B", modules: 12, progress: 0 },
  { id: "innovator", title: "Future Builder", age: "13–17", desc: "Explore Jamaica's innovation, technology, and opportunities", icon: "🚀", color: "#1A3C5E", modules: 8, progress: 0 },
];

const GUIDE_QUESTIONS = [
  "Explain Portland culture to my child",
  "What was life like in Jamaica in the 1970s?",
  "Teach me Jamaican sayings",
  "How did reggae music begin?",
  "Tell me about the Maroons",
  "What is Jonkonnu?",
  "Explain the parish system",
  "What makes Jamaican food unique?",
];

// ─── Theme ───
const t = {
  bg: "#0A0A0A", surface: "#141414", card: "#1A1A1A", cardHover: "#222222",
  border: "#2A2A2A", borderLight: "#333333",
  gold: "#D4A04C", goldLight: "#E8C273", goldDim: "#8B7535",
  green: "#1B8C3D", greenLight: "#2AAF52", greenDark: "#0D5A24",
  text: "#F0ECE3", textSec: "#B8B0A0", textMut: "#7A7265",
};
const f = { display: "'Cormorant Garamond', Georgia, serif", body: "'Outfit', system-ui, sans-serif" };

// ─── Components ───
function Badge({ children, color = t.gold, bg }) {
  return <span style={{ display: "inline-flex", alignItems: "center", gap: 4, padding: "3px 10px", borderRadius: 20, background: bg || `${color}18`, color, fontSize: 11, fontWeight: 600, fontFamily: f.body, letterSpacing: "0.04em", textTransform: "uppercase" }}>{children}</span>;
}

function Section({ overline, title, subtitle, align = "left" }) {
  return (
    <div style={{ textAlign: align, marginBottom: 32 }}>
      {overline && <div style={{ fontFamily: f.body, fontSize: 11, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: t.gold, marginBottom: 8 }}>{overline}</div>}
      <h2 style={{ fontFamily: f.display, fontSize: "clamp(28px, 4vw, 42px)", fontWeight: 600, color: t.text, margin: 0, lineHeight: 1.15 }}>{title}</h2>
      {subtitle && <p style={{ fontFamily: f.body, fontSize: 15, color: t.textSec, marginTop: 8, maxWidth: align === "center" ? 560 : "none", marginLeft: align === "center" ? "auto" : 0, marginRight: align === "center" ? "auto" : 0, lineHeight: 1.6 }}>{subtitle}</p>}
    </div>
  );
}

// ─── Main App ───
export default function DigitalJamaica() {
  const [page, setPage] = useState("home");
  const [sideOpen, setSideOpen] = useState(true);
  const [guideInput, setGuideInput] = useState("");
  const [guideMessages, setGuideMessages] = useState([]);
  const [guideLoading, setGuideLoading] = useState(false);
  const [selectedParish, setSelectedParish] = useState(null);
  const [selectedTimeline, setSelectedTimeline] = useState(0);
  const [expandedCulture, setExpandedCulture] = useState(null);
  const [activeYouthJourney, setActiveYouthJourney] = useState(null);
  const [mentorFilter, setMentorFilter] = useState("all");
  const [returnStep, setReturnStep] = useState(0);
  const [learnTab, setLearnTab] = useState("history");
  const guideRef = useRef(null);

  useEffect(() => {
    if (!document.getElementById("dj-fonts")) {
      const link = document.createElement("link");
      link.id = "dj-fonts"; link.rel = "stylesheet"; link.href = FONTS;
      document.head.appendChild(link);
    }
  }, []);

  useEffect(() => { if (guideRef.current) guideRef.current.scrollTop = guideRef.current.scrollHeight; }, [guideMessages]);

  const simulateGuide = useCallback((question) => {
    setGuideLoading(true);
    const r = {
      portland: "Portland is Jamaica's lushest parish. It's home to the original jerk cooking tradition, born in the Blue Mountains where the Maroons seasoned and slow-smoked meat over pimento wood. The Rio Grande rafting tradition was started by Errol Flynn. Port Antonio was once one of the most glamorous destinations in the Caribbean. Portland people are known for their warmth, storytelling tradition, and deep connection to the land. The parish has a mystical quality — waterfalls hidden in rainforest, the famous Blue Lagoon, and Reach Falls.",
      "1970": "The 1970s in Jamaica were electric and turbulent. Michael Manley's democratic socialism brought free education, land reform, and the minimum wage — but also economic crisis and political violence. Bob Marley released Catch a Fire, Natty Dread, Rastaman Vibration, and Exodus. The Smile Jamaica concert in 1976 happened just days after Marley was shot. Kingston's dancehalls were revolutionary spaces. Reggae became the voice of the Third World. It was the decade that shaped modern Jamaica.",
      saying: "Essential Jamaican expressions:\n\n• 'Wah gwaan' — What's happening?\n• 'Mi deh yah' — I'm here / I'm alright\n• 'Walk good' — Travel safely\n• 'Every hoe ha dem stick a bush' — Everyone has their match\n• 'Cockroach nuh business inna fowl fight' — Don't get involved in others' conflicts\n• 'Sorry fi maga dog, maga dog turn round bite yuh' — Beware of misplaced sympathy\n• 'One one coco full basket' — Steady effort achieves results\n• 'Big up yuhself' — Respect / Celebrate yourself",
      reggae: "Reggae emerged around 1968 from the evolution of ska and rocksteady. The one-drop drumbeat became its signature. Toots Hibbert is credited with first using the word 'reggae' in 'Do the Reggay' (1968). Bob Marley made reggae a global force. The music was inseparable from Rastafari, Pan-Africanism, and anti-colonial resistance. Studios like Studio One, Channel One, and Black Ark became sacred spaces. Reggae gave voice to the sufferers and became the sound of liberation movements worldwide.",
      maroon: "The Maroons are among the most remarkable freedom fighters in world history. When the British invaded Jamaica in 1655, enslaved Africans fled to the mountains and formed free communities. Queen Nanny — a National Hero — led the Windward Maroons using brilliant military tactics. Cudjoe led the Leeward Maroons in the Cockpit Country. The British signed peace treaties in 1739-1740 granting the Maroons land and autonomy. Today, Maroon communities like Accompong and Moore Town maintain distinct cultural traditions.",
    };
    const q = question.toLowerCase();
    let resp = `Great question about "${question}"! In a full deployment, the AI Jamaica Guide would provide detailed, culturally authentic responses about Jamaican history, culture, language, and society. Try asking about Portland, the 1970s, Jamaican sayings, reggae, or the Maroons for demo responses.`;
    for (const [key, val] of Object.entries(r)) { if (q.includes(key)) { resp = val; break; } }
    setTimeout(() => { setGuideMessages(prev => [...prev, { role: "assistant", content: resp }]); setGuideLoading(false); }, 1200);
  }, []);

  const handleGuideSend = () => {
    if (!guideInput.trim()) return;
    setGuideMessages(prev => [...prev, { role: "user", content: guideInput.trim() }]);
    const q = guideInput.trim(); setGuideInput(""); simulateGuide(q);
  };

  const navItems = [
    { id: "home", label: "Home", icon: "🏠" },
    { id: "learn", label: "Learn Jamaica", icon: "🇯🇲" },
    { id: "guide", label: "Jamaica Guide", icon: "🤖" },
    { id: "knowledge", label: "Knowledge Exchange", icon: "🤝" },
    { id: "youth", label: "Youth Mode", icon: "🌟" },
    { id: "parishes", label: "Parish Communities", icon: "📍" },
    { id: "return", label: "Return Guide", icon: "✈️" },
  ];

  // ═══ HOME ═══
  const HomePage = () => (
    <div>
      <div style={{ position: "relative", borderRadius: 20, overflow: "hidden", background: `linear-gradient(135deg, ${t.greenDark} 0%, #0A1A0D 40%, #1A0F00 70%, ${t.goldDim}33 100%)`, padding: "60px 48px", marginBottom: 40, border: `1px solid ${t.border}` }}>
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, opacity: 0.06, backgroundImage: "repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(212,160,76,0.5) 35px, rgba(212,160,76,0.5) 36px)", pointerEvents: "none" }} />
        <div style={{ position: "relative", zIndex: 1 }}>
          <div style={{ fontSize: 48, marginBottom: 16 }}>🇯🇲</div>
          <Badge color={t.goldLight}>The Digital Memory & Learning System</Badge>
          <h1 style={{ fontFamily: f.display, fontSize: "clamp(36px, 5.5vw, 64px)", fontWeight: 700, color: t.text, margin: "16px 0 0", lineHeight: 1.08, maxWidth: 700 }}>Digital Jamaica</h1>
          <p style={{ fontFamily: f.display, fontSize: "clamp(18px, 2.5vw, 26px)", fontWeight: 400, fontStyle: "italic", color: t.goldLight, margin: "8px 0 0", maxWidth: 500 }}>Learn · Connect · Contribute</p>
          <p style={{ fontFamily: f.body, fontSize: 15, color: t.textSec, marginTop: 20, maxWidth: 520, lineHeight: 1.7 }}>A focused platform that helps Jamaicans abroad learn about Jamaica, reconnect with identity and culture, share knowledge, and stay meaningfully engaged with the country.</p>
          <div style={{ display: "flex", gap: 12, marginTop: 28, flexWrap: "wrap" }}>
            <button onClick={() => setPage("learn")} style={{ fontFamily: f.body, fontSize: 14, fontWeight: 600, padding: "12px 28px", background: t.gold, color: "#000", border: "none", borderRadius: 8, cursor: "pointer" }}>Start Learning</button>
            <button onClick={() => setPage("guide")} style={{ fontFamily: f.body, fontSize: 14, fontWeight: 600, padding: "12px 28px", background: "transparent", color: t.gold, border: `1.5px solid ${t.gold}`, borderRadius: 8, cursor: "pointer" }}>Ask the Jamaica Guide</button>
          </div>
        </div>
      </div>

      <div style={{ display: "flex", gap: 16, marginBottom: 40, flexWrap: "wrap" }}>
        {[{ v: "2.8M+", l: "Jamaican Diaspora", i: "🌍" }, { v: "14", l: "Parishes to Explore", i: "📍" }, { v: "400+", l: "Years of History", i: "📜" }, { v: "∞", l: "Culture to Share", i: "🎶" }].map((s, i) => (
          <div key={i} style={{ background: t.card, border: `1px solid ${t.border}`, borderRadius: 12, padding: "20px 24px", flex: 1, minWidth: 140 }}>
            <div style={{ fontSize: 24, marginBottom: 8 }}>{s.i}</div>
            <div style={{ fontFamily: f.display, fontSize: 32, fontWeight: 700, color: t.gold, lineHeight: 1 }}>{s.v}</div>
            <div style={{ fontFamily: f.body, fontSize: 12, color: t.textMut, marginTop: 4, textTransform: "uppercase", letterSpacing: "0.08em" }}>{s.l}</div>
          </div>
        ))}
      </div>

      <Section overline="Platform Features" title="Your Cultural & Intellectual Home" subtitle="Not social media. Not fintech. A space for knowledge, belonging, and participation." />
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 16, marginBottom: 40 }}>
        {[
          { icon: "🇯🇲", title: "Learn About Jamaica", desc: "Interactive history, culture, music, and society — powered by AI", pg: "learn" },
          { icon: "🤖", title: "Jamaica Guide AI", desc: "Ask anything about Jamaica. Culturally authentic, intergenerational.", pg: "guide" },
          { icon: "🤝", title: "Knowledge Exchange", desc: "Diaspora expertise shared as a national resource", pg: "knowledge" },
          { icon: "🌟", title: "Youth & Next Gen", desc: "Structured identity learning for children abroad", pg: "youth" },
          { icon: "📍", title: "Parish Communities", desc: "Reconnect with yard — by parish, school, or interest", pg: "parishes" },
          { icon: "✈️", title: "Return & Reconnect", desc: "Understanding-based preparation, not just logistics", pg: "return" },
        ].map((c, i) => (
          <button key={i} onClick={() => setPage(c.pg)} style={{ background: t.card, border: `1px solid ${t.border}`, borderRadius: 14, padding: "28px 24px", textAlign: "left", cursor: "pointer", transition: "all 0.2s", display: "flex", flexDirection: "column", gap: 12 }}
            onMouseOver={e => { e.currentTarget.style.borderColor = t.goldDim; e.currentTarget.style.background = t.cardHover; }}
            onMouseOut={e => { e.currentTarget.style.borderColor = t.border; e.currentTarget.style.background = t.card; }}>
            <span style={{ fontSize: 32 }}>{c.icon}</span>
            <span style={{ fontFamily: f.display, fontSize: 20, fontWeight: 600, color: t.text }}>{c.title}</span>
            <span style={{ fontFamily: f.body, fontSize: 13, color: t.textSec, lineHeight: 1.5 }}>{c.desc}</span>
          </button>
        ))}
      </div>

      <div style={{ background: `linear-gradient(135deg, ${t.goldDim}15, transparent)`, border: `1px solid ${t.goldDim}30`, borderRadius: 16, padding: "40px 36px", textAlign: "center" }}>
        <div style={{ fontFamily: f.display, fontSize: 28, fontWeight: 600, color: t.gold, marginBottom: 12 }}>The Deeper Vision</div>
        <p style={{ fontFamily: f.body, fontSize: 15, color: t.textSec, maxWidth: 600, margin: "0 auto", lineHeight: 1.7 }}>Diaspora Jamaicans are connected economically but disconnecting culturally and historically. Digital Jamaica preserves identity while building future engagement — a cultural and intellectual home for Jamaica's global nation.</p>
        <div style={{ fontFamily: f.body, fontSize: 12, color: t.textMut, marginTop: 20, textTransform: "uppercase", letterSpacing: "0.1em" }}>No remittances · No financial transactions · Just knowledge, belonging & participation</div>
      </div>
    </div>
  );

  // ═══ LEARN ═══
  const LearnPage = () => (
    <div>
      <Section overline="The Core Engine" title="Learn About Jamaica" subtitle="An interactive learning space where you explore history, culture, society, and the Jamaica of today." />
      <div style={{ display: "flex", gap: 8, marginBottom: 32, flexWrap: "wrap" }}>
        {[{ id: "history", l: "📜 History" }, { id: "music", l: "🎶 Music" }, { id: "culture", l: "🎭 Culture" }, { id: "today", l: "🌍 Jamaica Today" }].map(tab => (
          <button key={tab.id} onClick={() => setLearnTab(tab.id)} style={{ fontFamily: f.body, fontSize: 13, fontWeight: learnTab === tab.id ? 600 : 400, padding: "10px 20px", borderRadius: 8, cursor: "pointer", border: "none", background: learnTab === tab.id ? t.gold : t.card, color: learnTab === tab.id ? "#000" : t.textSec, transition: "all 0.15s" }}>{tab.l}</button>
        ))}
      </div>

      {learnTab === "history" && (
        <div>
          <div style={{ display: "flex", gap: 8, marginBottom: 24, flexWrap: "wrap" }}>
            {HISTORY_TIMELINE.map((item, i) => (
              <button key={i} onClick={() => setSelectedTimeline(i)} style={{ fontFamily: f.body, fontSize: 11, fontWeight: 600, padding: "6px 14px", borderRadius: 20, border: `1.5px solid ${selectedTimeline === i ? item.color : t.border}`, background: selectedTimeline === i ? `${item.color}20` : "transparent", color: selectedTimeline === i ? item.color : t.textMut, cursor: "pointer" }}>{item.era}</button>
            ))}
          </div>
          <div style={{ background: t.card, border: `1px solid ${t.border}`, borderRadius: 16, padding: 36, position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", top: 0, left: 0, width: 4, height: "100%", background: HISTORY_TIMELINE[selectedTimeline].color }} />
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8 }}>
              <span style={{ fontSize: 36 }}>{HISTORY_TIMELINE[selectedTimeline].icon}</span>
              <Badge color={HISTORY_TIMELINE[selectedTimeline].color}>{HISTORY_TIMELINE[selectedTimeline].period}</Badge>
            </div>
            <h3 style={{ fontFamily: f.display, fontSize: 32, fontWeight: 700, color: t.text, margin: "12px 0 16px" }}>{HISTORY_TIMELINE[selectedTimeline].title}</h3>
            <p style={{ fontFamily: f.body, fontSize: 15, color: t.textSec, lineHeight: 1.8, maxWidth: 640 }}>{HISTORY_TIMELINE[selectedTimeline].desc}</p>
          </div>
        </div>
      )}

      {learnTab === "music" && (
        <div style={{ position: "relative", paddingLeft: 24 }}>
          <div style={{ position: "absolute", left: 8, top: 0, bottom: 0, width: 2, background: `linear-gradient(to bottom, ${t.goldDim}, ${t.greenDark})` }} />
          {MUSIC_EVOLUTION.map((m, i) => (
            <div key={i} style={{ position: "relative", marginBottom: 24, paddingLeft: 32 }}>
              <div style={{ position: "absolute", left: -4, top: 8, width: 16, height: 16, borderRadius: "50%", background: m.color, border: `3px solid ${t.bg}` }} />
              <div style={{ background: t.card, border: `1px solid ${t.border}`, borderRadius: 14, padding: "24px 28px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8 }}>
                  <span style={{ fontFamily: f.display, fontSize: 26, fontWeight: 700, color: m.color }}>{m.genre}</span>
                  <Badge color={m.color}>{m.period}</Badge>
                </div>
                <p style={{ fontFamily: f.body, fontSize: 14, color: t.textSec, lineHeight: 1.7, margin: 0 }}>{m.desc}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      {learnTab === "culture" && (
        <div style={{ display: "grid", gap: 16 }}>
          {CULTURAL_TOPICS.map((topic, i) => (
            <div key={i} style={{ background: t.card, border: `1px solid ${expandedCulture === i ? t.goldDim : t.border}`, borderRadius: 14, overflow: "hidden" }}>
              <button onClick={() => setExpandedCulture(expandedCulture === i ? null : i)} style={{ width: "100%", padding: "20px 24px", background: "none", border: "none", cursor: "pointer", display: "flex", alignItems: "center", gap: 16, textAlign: "left" }}>
                <span style={{ fontSize: 32 }}>{topic.icon}</span>
                <div style={{ flex: 1 }}>
                  <div style={{ fontFamily: f.display, fontSize: 20, fontWeight: 600, color: t.text }}>{topic.title}</div>
                  <div style={{ fontFamily: f.body, fontSize: 13, color: t.textSec, marginTop: 4 }}>{topic.preview}</div>
                </div>
                <span style={{ fontSize: 18, color: t.textMut, transform: expandedCulture === i ? "rotate(180deg)" : "none", transition: "transform 0.2s" }}>▼</span>
              </button>
              {expandedCulture === i && (
                <div style={{ padding: "0 24px 24px", borderTop: `1px solid ${t.border}` }}>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: 10, paddingTop: 16 }}>
                    {topic.items.map((item, j) => (
                      <div key={j} style={{ background: t.cardHover, borderRadius: 8, padding: "12px 16px", fontFamily: f.body, fontSize: 13, color: t.textSec, lineHeight: 1.5, borderLeft: `3px solid ${t.goldDim}` }}>{item}</div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {learnTab === "today" && (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 16 }}>
          {[
            { icon: "💡", title: "Innovation & Tech", items: ["Growing tech startup ecosystem", "Silicon Mountain (Montego Bay)", "Digital transformation initiatives", "Coding bootcamps and hackathons"] },
            { icon: "🌱", title: "Youth Culture", items: ["Social media creators making waves", "New music genres emerging", "Entrepreneurial energy", "Climate activism growing"] },
            { icon: "🏗️", title: "Development", items: ["Highway 2000 network", "Logistics Hub Initiative", "Renewable energy targets", "Tourism diversification"] },
            { icon: "🎯", title: "Challenges", items: ["Crime and public safety", "Brain drain and migration", "Climate vulnerability", "Economic inequality"] },
          ].map((sec, i) => (
            <div key={i} style={{ background: t.card, border: `1px solid ${t.border}`, borderRadius: 14, padding: "28px 24px" }}>
              <span style={{ fontSize: 32 }}>{sec.icon}</span>
              <h3 style={{ fontFamily: f.display, fontSize: 22, fontWeight: 600, color: t.text, margin: "12px 0 16px" }}>{sec.title}</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {sec.items.map((item, j) => (
                  <div key={j} style={{ fontFamily: f.body, fontSize: 13, color: t.textSec, paddingLeft: 16, position: "relative", lineHeight: 1.5 }}>
                    <span style={{ position: "absolute", left: 0, color: t.goldDim }}>—</span>{item}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );

  // ═══ GUIDE ═══
  const GuidePage = () => (
    <div>
      <Section overline="AI-Powered" title="Jamaica Guide" subtitle="Ask anything about Jamaica — history, culture, language, society. Designed for all generations." />
      {guideMessages.length === 0 && (
        <div style={{ marginBottom: 24 }}>
          <div style={{ fontFamily: f.body, fontSize: 12, fontWeight: 600, color: t.textMut, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 12 }}>Try asking:</div>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            {GUIDE_QUESTIONS.map((q, i) => (
              <button key={i} onClick={() => { setGuideMessages([{ role: "user", content: q }]); simulateGuide(q); }} style={{ fontFamily: f.body, fontSize: 12, padding: "8px 16px", borderRadius: 20, background: t.card, border: `1px solid ${t.border}`, color: t.textSec, cursor: "pointer" }}
                onMouseOver={e => { e.currentTarget.style.borderColor = t.goldDim; e.currentTarget.style.color = t.gold; }}
                onMouseOut={e => { e.currentTarget.style.borderColor = t.border; e.currentTarget.style.color = t.textSec; }}>"{q}"</button>
            ))}
          </div>
        </div>
      )}
      <div style={{ background: t.card, border: `1px solid ${t.border}`, borderRadius: 16, height: 480, display: "flex", flexDirection: "column", overflow: "hidden" }}>
        <div ref={guideRef} style={{ flex: 1, overflow: "auto", padding: 24, display: "flex", flexDirection: "column", gap: 16 }}>
          {guideMessages.length === 0 && (
            <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", gap: 12 }}>
              <span style={{ fontSize: 48 }}>🇯🇲</span>
              <span style={{ fontFamily: f.display, fontSize: 22, color: t.textMut }}>Ask me anything about Jamaica</span>
            </div>
          )}
          {guideMessages.map((msg, i) => (
            <div key={i} style={{ alignSelf: msg.role === "user" ? "flex-end" : "flex-start", maxWidth: "80%" }}>
              <div style={{ background: msg.role === "user" ? t.gold : t.cardHover, color: msg.role === "user" ? "#000" : t.text, borderRadius: msg.role === "user" ? "16px 16px 4px 16px" : "16px 16px 16px 4px", padding: "14px 18px", fontFamily: f.body, fontSize: 14, lineHeight: 1.7, border: msg.role === "user" ? "none" : `1px solid ${t.border}`, whiteSpace: "pre-wrap" }}>{msg.content}</div>
            </div>
          ))}
          {guideLoading && <div style={{ alignSelf: "flex-start" }}><div style={{ background: t.cardHover, borderRadius: "16px 16px 16px 4px", padding: "14px 18px", border: `1px solid ${t.border}`, fontFamily: f.body, fontSize: 14, color: t.textMut }}><span style={{ animation: "pulse 1.5s infinite" }}>Thinking about Jamaica...</span></div></div>}
        </div>
        <div style={{ padding: 16, borderTop: `1px solid ${t.border}`, display: "flex", gap: 12 }}>
          <input value={guideInput} onChange={e => setGuideInput(e.target.value)} onKeyDown={e => e.key === "Enter" && handleGuideSend()} placeholder="Ask about Jamaica's history, culture, language..." style={{ flex: 1, fontFamily: f.body, fontSize: 14, padding: "12px 16px", background: t.bg, border: `1px solid ${t.border}`, borderRadius: 10, color: t.text, outline: "none" }} />
          <button onClick={handleGuideSend} style={{ fontFamily: f.body, fontSize: 14, fontWeight: 600, padding: "12px 24px", background: t.gold, color: "#000", border: "none", borderRadius: 10, cursor: "pointer" }}>Send</button>
        </div>
      </div>
    </div>
  );

  // ═══ KNOWLEDGE ═══
  const KnowledgePage = () => (
    <div>
      <Section overline="Diaspora Expertise" title="Knowledge Exchange" subtitle="Contribute your expertise. Career talks, recorded lessons, advice, and professional mentoring." />
      <div style={{ display: "flex", gap: 8, marginBottom: 24, flexWrap: "wrap" }}>
        {["all", ...KNOWLEDGE_CATEGORIES.map(c => c.id)].map(flt => (
          <button key={flt} onClick={() => setMentorFilter(flt)} style={{ fontFamily: f.body, fontSize: 12, fontWeight: mentorFilter === flt ? 600 : 400, padding: "8px 16px", borderRadius: 20, cursor: "pointer", border: "none", background: mentorFilter === flt ? t.gold : t.card, color: mentorFilter === flt ? "#000" : t.textSec }}>{flt === "all" ? "All Areas" : KNOWLEDGE_CATEGORIES.find(c => c.id === flt)?.title}</button>
        ))}
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 16, marginBottom: 32 }}>
        {KNOWLEDGE_CATEGORIES.filter(c => mentorFilter === "all" || c.id === mentorFilter).map((cat, i) => (
          <div key={i} style={{ background: t.card, border: `1px solid ${t.border}`, borderRadius: 14, padding: "28px 24px" }}>
            <span style={{ fontSize: 36 }}>{cat.icon}</span>
            <h3 style={{ fontFamily: f.display, fontSize: 20, fontWeight: 600, color: t.text, margin: "12px 0 8px" }}>{cat.title}</h3>
            <p style={{ fontFamily: f.body, fontSize: 13, color: t.textSec, margin: "0 0 16px", lineHeight: 1.5 }}>{cat.desc}</p>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <Badge>{cat.count} contributors</Badge>
              <button style={{ fontFamily: f.body, fontSize: 12, fontWeight: 600, padding: "6px 16px", background: "transparent", border: `1px solid ${t.goldDim}`, borderRadius: 6, color: t.gold, cursor: "pointer" }}>Contribute</button>
            </div>
          </div>
        ))}
      </div>
      <Section overline="Featured Mentors" title="Jamaicans Giving Back" />
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 16 }}>
        {[
          { name: "Dr. Andrea Campbell", loc: "Toronto, Canada", field: "Education", exp: "University admissions & scholarship strategy", yrs: "15 years" },
          { name: "Marcus Thompson", loc: "London, UK", field: "Technology", exp: "Software engineering & career pivots", yrs: "12 years" },
          { name: "Sharon Reid-Brown", loc: "New York, USA", field: "Healthcare", exp: "Nursing careers & healthcare pathways", yrs: "20 years" },
          { name: "Kevin Williams", loc: "Miami, USA", field: "Business", exp: "Entrepreneurship & market entry", yrs: "10 years" },
        ].map((m, i) => (
          <div key={i} style={{ background: t.card, border: `1px solid ${t.border}`, borderRadius: 14, padding: "24px 20px", display: "flex", flexDirection: "column", gap: 8 }}>
            <div style={{ width: 48, height: 48, borderRadius: "50%", background: `${t.gold}20`, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: f.display, fontSize: 20, fontWeight: 700, color: t.gold }}>{m.name.split(" ").map(n => n[0]).join("")}</div>
            <div style={{ fontFamily: f.display, fontSize: 18, fontWeight: 600, color: t.text }}>{m.name}</div>
            <div style={{ fontFamily: f.body, fontSize: 12, color: t.textMut }}>📍 {m.loc} · {m.yrs}</div>
            <Badge color={t.greenLight}>{m.field}</Badge>
            <div style={{ fontFamily: f.body, fontSize: 13, color: t.textSec, lineHeight: 1.5 }}>{m.exp}</div>
            <button style={{ fontFamily: f.body, fontSize: 12, fontWeight: 600, padding: "8px 16px", background: t.gold, color: "#000", border: "none", borderRadius: 6, cursor: "pointer", marginTop: 8, alignSelf: "flex-start" }}>Request Mentoring</button>
          </div>
        ))}
      </div>
    </div>
  );

  // ═══ YOUTH ═══
  const YouthPage = () => (
    <div>
      <Section overline="Next Generation" title="Discover Jamaica" subtitle="Structured learning pathways for children abroad — parents finally have a way to teach identity, heritage, and culture." />
      {!activeYouthJourney ? (
        <>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 20 }}>
            {YOUTH_JOURNEYS.map((j, i) => (
              <div key={i} style={{ background: t.card, border: `1px solid ${t.border}`, borderRadius: 16, overflow: "hidden" }}>
                <div style={{ height: 8, background: j.color }} />
                <div style={{ padding: "28px 24px" }}>
                  <span style={{ fontSize: 40 }}>{j.icon}</span>
                  <h3 style={{ fontFamily: f.display, fontSize: 24, fontWeight: 700, color: t.text, margin: "12px 0 4px" }}>{j.title}</h3>
                  <Badge color={j.color}>Ages {j.age}</Badge>
                  <p style={{ fontFamily: f.body, fontSize: 13, color: t.textSec, margin: "12px 0 20px", lineHeight: 1.6 }}>{j.desc}</p>
                  <div style={{ fontFamily: f.body, fontSize: 12, color: t.textMut, marginBottom: 16 }}>{j.modules} modules</div>
                  <button onClick={() => setActiveYouthJourney(j)} style={{ width: "100%", fontFamily: f.body, fontSize: 13, fontWeight: 600, padding: "10px 0", background: j.color, color: "#fff", border: "none", borderRadius: 8, cursor: "pointer" }}>Start Journey</button>
                </div>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 32 }}>
            <Section overline="Family Feature" title="Heritage Tracking" subtitle="Document and preserve your family's Jamaican story for future generations." />
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: 16 }}>
              {[{ icon: "🌳", title: "Family Tree", d: "Map your Jamaican lineage" }, { icon: "📷", title: "Photo Archive", d: "Preserve family photos and stories" }, { icon: "📍", title: "Parish Roots", d: "Pin your family's origin parishes" }, { icon: "📖", title: "Oral History", d: "Record family stories and traditions" }].map((item, i) => (
                <div key={i} style={{ background: t.card, border: `1px solid ${t.border}`, borderRadius: 12, padding: "24px 20px", textAlign: "center" }}>
                  <span style={{ fontSize: 32 }}>{item.icon}</span>
                  <div style={{ fontFamily: f.display, fontSize: 17, fontWeight: 600, color: t.text, margin: "8px 0 4px" }}>{item.title}</div>
                  <div style={{ fontFamily: f.body, fontSize: 12, color: t.textSec }}>{item.d}</div>
                </div>
              ))}
            </div>
          </div>
        </>
      ) : (
        <div>
          <button onClick={() => setActiveYouthJourney(null)} style={{ fontFamily: f.body, fontSize: 13, padding: "8px 16px", background: t.card, border: `1px solid ${t.border}`, borderRadius: 8, color: t.textSec, cursor: "pointer", marginBottom: 24 }}>← Back to all journeys</button>
          <div style={{ background: t.card, border: `1px solid ${t.border}`, borderRadius: 16, padding: 36 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 24 }}>
              <span style={{ fontSize: 48 }}>{activeYouthJourney.icon}</span>
              <div>
                <h2 style={{ fontFamily: f.display, fontSize: 32, fontWeight: 700, color: t.text, margin: 0 }}>{activeYouthJourney.title}</h2>
                <Badge color={activeYouthJourney.color}>Ages {activeYouthJourney.age} · {activeYouthJourney.modules} modules</Badge>
              </div>
            </div>
            {activeYouthJourney.id === "explorer" ? (
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: 12 }}>
                {PARISHES.map((p, i) => (
                  <div key={i} style={{ background: t.cardHover, border: `1px solid ${t.border}`, borderRadius: 10, padding: "16px 20px", cursor: "pointer" }}
                    onMouseOver={e => e.currentTarget.style.borderColor = activeYouthJourney.color}
                    onMouseOut={e => e.currentTarget.style.borderColor = t.border}>
                    <div style={{ fontSize: 24, marginBottom: 4 }}>{p.icon}</div>
                    <div style={{ fontFamily: f.display, fontSize: 16, fontWeight: 600, color: t.text }}>{p.name}</div>
                    <div style={{ fontFamily: f.body, fontSize: 11, color: t.textMut, marginTop: 4 }}>{p.vibe}</div>
                  </div>
                ))}
              </div>
            ) : activeYouthJourney.id === "historian" ? (
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {HISTORY_TIMELINE.map((h, i) => (
                  <div key={i} style={{ background: t.cardHover, border: `1px solid ${t.border}`, borderRadius: 10, padding: "16px 20px", display: "flex", alignItems: "center", gap: 16 }}>
                    <span style={{ fontSize: 28 }}>{h.icon}</span>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontFamily: f.display, fontSize: 16, fontWeight: 600, color: t.text }}>{h.title}</div>
                      <div style={{ fontFamily: f.body, fontSize: 12, color: t.textMut }}>{h.period}</div>
                    </div>
                    <button style={{ fontFamily: f.body, fontSize: 11, fontWeight: 600, padding: "6px 14px", background: activeYouthJourney.color, color: "#fff", border: "none", borderRadius: 6, cursor: "pointer" }}>Explore</button>
                  </div>
                ))}
              </div>
            ) : (
              <div style={{ textAlign: "center", padding: "60px 20px", color: t.textMut, fontFamily: f.body, fontSize: 15 }}>
                <span style={{ fontSize: 48, display: "block", marginBottom: 12 }}>{activeYouthJourney.icon}</span>
                Interactive modules coming soon!
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );

  // ═══ PARISHES ═══
  const ParishesPage = () => (
    <div>
      <Section overline="Reconnect with Yard" title="Parish Communities" subtitle="Digital spaces organized by parish, school alumni, and interests." />
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: 14, marginBottom: 32 }}>
        {PARISHES.map((p, i) => (
          <button key={i} onClick={() => setSelectedParish(selectedParish === i ? null : i)} style={{ background: selectedParish === i ? `${t.gold}12` : t.card, border: `1px solid ${selectedParish === i ? t.goldDim : t.border}`, borderRadius: 12, padding: "20px 16px", cursor: "pointer", textAlign: "left", transition: "all 0.15s" }}>
            <div style={{ fontSize: 28 }}>{p.icon}</div>
            <div style={{ fontFamily: f.display, fontSize: 18, fontWeight: 600, color: t.text, marginTop: 8 }}>{p.name}</div>
            <div style={{ fontFamily: f.body, fontSize: 11, color: t.textMut, marginTop: 4 }}>Pop: {p.pop}</div>
            <div style={{ fontFamily: f.body, fontSize: 12, color: t.textSec, marginTop: 6 }}>{p.vibe}</div>
          </button>
        ))}
      </div>
      {selectedParish !== null && (
        <div style={{ background: t.card, border: `1px solid ${t.goldDim}`, borderRadius: 16, padding: 32, marginBottom: 24 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 20 }}>
            <span style={{ fontSize: 48 }}>{PARISHES[selectedParish].icon}</span>
            <div>
              <h3 style={{ fontFamily: f.display, fontSize: 28, fontWeight: 700, color: t.text, margin: 0 }}>{PARISHES[selectedParish].name} Community</h3>
              <div style={{ fontFamily: f.body, fontSize: 13, color: t.textSec, marginTop: 4 }}>{PARISHES[selectedParish].vibe}</div>
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))", gap: 12 }}>
            {[{ l: "Discussion Board", i: "💬" }, { l: "School Alumni", i: "🎓" }, { l: "Photo Memories", i: "📷" }, { l: "Local Events", i: "📅" }].map((item, j) => (
              <div key={j} style={{ background: t.cardHover, borderRadius: 10, padding: "16px 14px", border: `1px solid ${t.border}` }}>
                <span style={{ fontSize: 22 }}>{item.i}</span>
                <div style={{ fontFamily: f.body, fontSize: 13, fontWeight: 600, color: t.text, marginTop: 6 }}>{item.l}</div>
              </div>
            ))}
          </div>
        </div>
      )}
      <Section overline="Ways to Connect" title="Find Your People" />
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: 16 }}>
        {[
          { icon: "🏫", title: "School Alumni Networks", d: "Find classmates from your school or university", m: "12,400+" },
          { icon: "⛪", title: "Church Communities", d: "Connect with congregations from your parish", m: "3,200+" },
          { icon: "⚽", title: "Sports & Interests", d: "Join groups by hobby, sport, or interest", m: "8,700+" },
          { icon: "👨‍👩‍👧‍👦", title: "Family Networks", d: "Extended family connections across the diaspora", m: "5,100+" },
        ].map((g, i) => (
          <div key={i} style={{ background: t.card, border: `1px solid ${t.border}`, borderRadius: 12, padding: "24px 20px" }}>
            <span style={{ fontSize: 32 }}>{g.icon}</span>
            <div style={{ fontFamily: f.display, fontSize: 18, fontWeight: 600, color: t.text, margin: "10px 0 6px" }}>{g.title}</div>
            <div style={{ fontFamily: f.body, fontSize: 13, color: t.textSec, lineHeight: 1.5, marginBottom: 12 }}>{g.d}</div>
            <Badge>{g.m} members</Badge>
          </div>
        ))}
      </div>
    </div>
  );

  // ═══ RETURN GUIDE ═══
  const ReturnPage = () => {
    const steps = [
      { title: "Understanding Today's Jamaica", icon: "🔍", desc: "Jamaica has changed. Learn about daily life realities — cost of living, infrastructure, healthcare, safety, and community dynamics.", topics: ["Cost of living realities", "Healthcare system overview", "Safety and community awareness", "Infrastructure and daily logistics", "Economic landscape"] },
      { title: "Cultural Reintegration", icon: "🤝", desc: "Returning Jamaicans often experience reverse culture shock. Understanding current social norms and workplace culture helps bridge the gap.", topics: ["Workplace culture differences", "Social expectations", "Communication styles", "Community integration", "Managing expectations"] },
      { title: "Community Volunteering", icon: "🌱", desc: "Contribute meaningfully through education programs, youth mentoring, environmental projects, and community development.", topics: ["Education volunteering", "Youth mentorship", "Environmental conservation", "Community development", "Skills-based volunteering"] },
      { title: "Education Pathways", icon: "🎓", desc: "Understand Jamaica's education system, university options, professional certification, and continuing education.", topics: ["K-12 school options", "University landscape", "Professional certifications", "Skills training programs", "Children's education planning"] },
      { title: "Building Your Network", icon: "🌐", desc: "Success in Jamaica requires relationships. Build genuine connections with communities, professional networks, and services.", topics: ["Professional associations", "Community organizations", "Government services", "Business networks", "Faith communities"] },
    ];
    return (
      <div>
        <Section overline="Come Home Prepared" title="Return & Reconnection Guide" subtitle="Not logistics — understanding. A learning-based preparation for meaningful reconnection with Jamaica." />
        <div style={{ display: "flex", gap: 4, marginBottom: 32 }}>
          {steps.map((_, i) => (<button key={i} onClick={() => setReturnStep(i)} style={{ flex: 1, height: 6, borderRadius: 3, border: "none", cursor: "pointer", background: i <= returnStep ? t.gold : t.border, transition: "all 0.2s" }} />))}
        </div>
        <div style={{ background: t.card, border: `1px solid ${t.border}`, borderRadius: 16, padding: 36 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 20 }}>
            <span style={{ fontSize: 40 }}>{steps[returnStep].icon}</span>
            <div>
              <Badge>Step {returnStep + 1} of {steps.length}</Badge>
              <h3 style={{ fontFamily: f.display, fontSize: 28, fontWeight: 700, color: t.text, margin: "8px 0 0" }}>{steps[returnStep].title}</h3>
            </div>
          </div>
          <p style={{ fontFamily: f.body, fontSize: 15, color: t.textSec, lineHeight: 1.7, maxWidth: 600, marginBottom: 24 }}>{steps[returnStep].desc}</p>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {steps[returnStep].topics.map((topic, j) => (
              <div key={j} style={{ background: t.cardHover, borderRadius: 8, padding: "12px 16px", display: "flex", alignItems: "center", gap: 12, border: `1px solid ${t.border}`, cursor: "pointer" }}
                onMouseOver={e => e.currentTarget.style.borderColor = t.goldDim}
                onMouseOut={e => e.currentTarget.style.borderColor = t.border}>
                <span style={{ fontFamily: f.body, fontSize: 13, color: t.text, flex: 1 }}>{topic}</span>
                <span style={{ color: t.textMut }}>→</span>
              </div>
            ))}
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", marginTop: 28 }}>
            <button onClick={() => setReturnStep(Math.max(0, returnStep - 1))} disabled={returnStep === 0} style={{ fontFamily: f.body, fontSize: 13, fontWeight: 600, padding: "10px 20px", background: "transparent", border: `1px solid ${t.border}`, borderRadius: 8, color: returnStep === 0 ? t.textMut : t.textSec, cursor: returnStep === 0 ? "default" : "pointer" }}>← Previous</button>
            <button onClick={() => setReturnStep(Math.min(steps.length - 1, returnStep + 1))} disabled={returnStep === steps.length - 1} style={{ fontFamily: f.body, fontSize: 13, fontWeight: 600, padding: "10px 20px", background: returnStep === steps.length - 1 ? t.card : t.gold, color: returnStep === steps.length - 1 ? t.textMut : "#000", border: "none", borderRadius: 8, cursor: returnStep === steps.length - 1 ? "default" : "pointer" }}>Next →</button>
          </div>
        </div>
      </div>
    );
  };

  // ═══ RENDER ═══
  const pages = { home: HomePage, learn: LearnPage, guide: GuidePage, knowledge: KnowledgePage, youth: YouthPage, parishes: ParishesPage, return: ReturnPage };
  const Page = pages[page] || HomePage;

  return (
    <div style={{ display: "flex", height: "100vh", background: t.bg, color: t.text, fontFamily: f.body, overflow: "hidden" }}>
      <style>{`
        @keyframes fadeIn { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.4; } }
        * { box-sizing: border-box; scrollbar-width: thin; scrollbar-color: ${t.border} transparent; }
        *::-webkit-scrollbar { width: 6px; } *::-webkit-scrollbar-track { background: transparent; } *::-webkit-scrollbar-thumb { background: ${t.border}; border-radius: 3px; }
        input::placeholder { color: ${t.textMut}; } button:hover { opacity: 0.92; }
      `}</style>

      <aside style={{ width: sideOpen ? 240 : 64, minWidth: sideOpen ? 240 : 64, background: t.surface, borderRight: `1px solid ${t.border}`, display: "flex", flexDirection: "column", transition: "all 0.2s", overflow: "hidden" }}>
        <div style={{ padding: sideOpen ? "20px 20px 16px" : "20px 12px 16px", borderBottom: `1px solid ${t.border}`, display: "flex", alignItems: "center", gap: 12 }}>
          <button onClick={() => setSideOpen(!sideOpen)} style={{ background: "none", border: "none", cursor: "pointer", padding: 4, fontSize: 24, lineHeight: 1 }}>🇯🇲</button>
          {sideOpen && <div>
            <div style={{ fontFamily: f.display, fontSize: 18, fontWeight: 700, color: t.gold, lineHeight: 1 }}>Digital Jamaica</div>
            <div style={{ fontFamily: f.body, fontSize: 9, color: t.textMut, textTransform: "uppercase", letterSpacing: "0.15em", marginTop: 2 }}>Learn · Connect · Contribute</div>
          </div>}
        </div>
        <nav style={{ flex: 1, padding: "12px 8px", display: "flex", flexDirection: "column", gap: 2 }}>
          {navItems.map(item => (
            <button key={item.id} onClick={() => setPage(item.id)} style={{ display: "flex", alignItems: "center", gap: 12, padding: sideOpen ? "10px 14px" : "10px 0", borderRadius: 8, background: page === item.id ? `${t.gold}15` : "transparent", color: page === item.id ? t.gold : t.textSec, border: "none", cursor: "pointer", fontSize: 13, fontWeight: page === item.id ? 600 : 400, fontFamily: f.body, textAlign: "left", transition: "all 0.15s", justifyContent: sideOpen ? "flex-start" : "center", whiteSpace: "nowrap" }}>
              <span style={{ fontSize: 18, flexShrink: 0 }}>{item.icon}</span>
              {sideOpen && <span>{item.label}</span>}
            </button>
          ))}
        </nav>
        {sideOpen && <div style={{ padding: "16px 20px", borderTop: `1px solid ${t.border}` }}>
          <div style={{ fontFamily: f.body, fontSize: 10, color: t.textMut, lineHeight: 1.6 }}>Created by Rohan Jowallah<br />© 2025 Digital Jamaica</div>
        </div>}
      </aside>

      <main style={{ flex: 1, padding: "32px 40px", overflow: "auto", animation: "fadeIn 0.25s ease" }}>
        <div style={{ maxWidth: 960, margin: "0 auto" }}><Page /></div>
      </main>
    </div>
  );
}
