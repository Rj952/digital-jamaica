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

// ============ EXISTING DATA - PRESERVED EXACTLY ============
const PARISHES = [
  { name: "Kingston", population: "662,426", highlights: ["Capital city", "Bob Marley Museum", "National Gallery"] },
  { name: "Saint Andrew", population: "662,600", highlights: ["Blue Mountains", "Hope River", "Strawberry Hill"] },
  { name: "Saint Thomas", population: "94,000", highlights: ["Folly Ruins", "Morant Bay", "Golden Grove"] },
  { name: "Portland", population: "80,000", highlights: ["Rio Grande River", "Reach Falls", "Frenchman's Cove"] },
  { name: "Saint Mary", population: "110,000", highlights: ["Nine Mile (Marley birthplace)", "Dunn's River Falls", "Island Gully"] },
  { name: "Saint Ann", population: "172,000", highlights: ["Ocho Rios", "Green Grotto Caves", "Harmony Hall"] },
  { name: "Trelawny", population: "87,000", highlights: ["Martha Brae River", "Dunbar Falls", "Falmouth"] },
  { name: "Saint James", population: "184,000", highlights: ["Montego Bay", "Doctor's Cave Beach", "Appleton Estate"] },
  { name: "Hanover", population: "72,000", highlights: ["Lucea", "Green Island", "Negril"] },
  { name: "Westmoreland", population: "143,000", highlights: ["Savanna-la-Mar", "Mayfield Falls", "Black River"] },
  { name: "Saint Elizabeth", population: "146,000", highlights: ["Black River", "Treasure Beach", "Appleton Estate"] },
  { name: "Manchester", population: "190,000", highlights: ["Mandeville", "Marshall's Pen", "High Peak"] },
  { name: "Clarendon", population: "248,000", highlights: ["May Pen", "Milk River Bath", "Halse Hall"] },
];

const HISTORY_TIMELINE = [
  { year: "1494", event: "Columbus arrives", details: "Christopher Columbus arrives in Jamaica, marking the beginning of European contact." },
  { year: "1658", event: "British conquest", details: "British forces conquer Jamaica from the Spanish, establishing colonial rule." },
  { year: "1834", event: "Slavery abolished", details: "The Slavery Abolition Act comes into effect across British colonies including Jamaica." },
  { year: "1962", event: "Independence", details: "Jamaica gains independence from Great Britain, becoming a sovereign nation." },
  { year: "1972", event: "PNP takes power", details: "The People's National Party wins elections under Michael Manley." },
  { year: "1976", event: "Emergency declared", details: "State of emergency declared during turbulent political period." },
  { year: "1980", event: "JLP victory", details: "Edward Seaga and the Jamaica Labour Party win elections." },
  { year: "1989", event: "Hurricane Gilbert", details: "Jamaica is devastated by Hurricane Gilbert, the strongest Atlantic hurricane ever recorded." },
];

const MUSIC_EVOLUTION = [
  {
    era: "Mento (1900s-1950s)",
    description: "Folk music with African roots, featuring acoustic guitar and storytelling",
    keyArtists: ["Lord Beginner", "Laurel Aitken"],
    characteristics: ["Acoustic instrumentation", "Humorous narratives", "Call and response"],
  },
  {
    era: "Ska (1960s)",
    description: "Upbeat genre combining calypso, mento, and American R&B with offbeat guitar",
    keyArtists: ["The Skatalites", "Prince Buster", "Derrick Morgan"],
    characteristics: ["Offbeat guitar rhythm", "Horn sections", "Danceable beats"],
  },
  {
    era: "Rocksteady (1966-1968)",
    description: "Slower evolution of ska, featuring guitar-driven sound and romantic themes",
    keyArtists: ["Alton Ellis", "Delroy Wilson", "Phyllis Dillon"],
    characteristics: ["Slow tempo", "Guitar focus", "Romantic lyrics"],
  },
  {
    era: "Reggae (1968-present)",
    description: "Jamaica's most famous export combining rock, soul, and African rhythms",
    keyArtists: ["Bob Marley", "Peter Tosh", "Burning Spear"],
    characteristics: ["Steady offbeat rhythm", "Spiritual themes", "Global influence"],
  },
  {
    era: "Dancehall (1980s-present)",
    description: "Electronic, fast-paced music with DJ toasting and party culture",
    keyArtists: ["Yellowman", "Super Cat", "Shabba Ranks"],
    characteristics: ["Electronic beats", "DJ culture", "Party atmosphere"],
  },
  {
    era: "Dubstep & Grime (2000s-present)",
    description: "Modern electronic sounds influenced by Jamaican dancehall",
    keyArtists: ["Sean Paul", "Vybz Kartel", "Popcaan"],
    characteristics: ["Digital production", "Modern beats", "Global reach"],
  },
];

const CULTURAL_TOPICS = [
  {
    title: "The English Language Legacy",
    description: "Jamaica's English heritage has shaped language, institutions, and education. Jamaican Patois blends English with African and Spanish influences.",
    deepDive: "Despite Spanish colonization initially, English became the dominant language after British conquest in 1658. Today, Jamaican English (Standard English) and Jamaican Patois (Creole) coexist, with Patois being deeply rooted in daily life and cultural expression.",
  },
  {
    title: "African Diaspora & Identity",
    description: "Over 90% of Jamaicans have African ancestry. This heritage is celebrated through music, food, festivals, and spiritual practices.",
    deepDive: "The African diaspora shaped Jamaica's culture profoundly. Enslaved Africans preserved their traditions through syncretism, blending African spirituality with Christianity. This heritage is evident in everything from Kumina ceremonies to Rastafarianism.",
  },
  {
    title: "Reggae & Rastafarianism",
    description: "Bob Marley and reggae music revolutionized global culture while Rastafarianism provided spiritual meaning and social activism.",
    deepDive: "Rastafarianism emerged in 1930s Jamaica as a spiritual and political movement. It emphasizes African identity, natural living, and resistance to oppression. Reggae became its musical voice, spreading messages of unity and peace worldwide through Bob Marley's iconic status.",
  },
  {
    title: "Food & Culinary Traditions",
    description: "Jamaica's cuisine reflects African, Indian, European, and Caribbean influences creating unique flavors.",
    deepDive: "Jamaican food tells a story of cultural fusion: Ackee and saltfish (national dish), jerk seasoning from Maroon traditions, rice and peas (African influence), and curry goat (Indian influence). Traditional cooking methods and family recipes remain central to cultural identity.",
  },
  {
    title: "Carnivals & Celebrations",
    description: "Jamaican celebrations like Reggae Sumfest and Sts. Peter & Paul showcase music, dance, and community pride.",
    deepDive: "Major festivals include Emancipation Day (August 1), Independence Day (August 6), Reggae Sumfest (summer), and Christmas celebrations. These events blend religious observance, cultural pride, and modern entertainment in distinctly Jamaican ways.",
  },
];

const KNOWLEDGE_CATEGORIES = [
  { title: "History & Geography", icon: "📚", description: "Understand Jamaica's past and physical landscape", count: 234 },
  { title: "Arts & Culture", icon: "🎭", description: "Explore music, art, literature, and traditions", count: 456 },
  { title: "Business & Economics", icon: "💼", description: "Learn about Jamaica's economy and industries", count: 189 },
  { title: "Environment & Nature", icon: "🌿", description: "Discover Jamaica's biodiversity and conservation", count: 312 },
  { title: "Education & Innovation", icon: "🎓", description: "Explore learning opportunities and tech", count: 267 },
  { title: "Health & Wellness", icon: "⚕️", description: "Information on healthcare and well-being", count: 198 },
];

const YOUTH_JOURNEYS = [
  { title: "Future Leaders Program", description: "Develop leadership skills and community engagement", gradient: "linear-gradient(135deg, #1B8C3D, #2AAF52)" },
  { title: "Tech Innovation Hub", description: "Learn coding, entrepreneurship, and digital skills", gradient: "linear-gradient(135deg, #4A7FB5, #6BA3D9)" },
  { title: "Creative Arts Academy", description: "Master music, visual arts, and performance", gradient: "linear-gradient(135deg, #D4A04C, #E8C273)" },
  { title: "Sports & Wellness", description: "Develop athletic talent and mental resilience", gradient: "linear-gradient(135deg, #C44B4B, #E26A6A)" },
];

const GUIDE_QUESTIONS = [
  { category: "Getting Started", questions: ["How do I create a profile?", "What can I do on Jamaica Hub?"] },
  { category: "Content", questions: ["How do I search for information?", "Can I save content?"] },
  { category: "Community", questions: ["How do I join discussions?", "How do I report issues?"] },
  { category: "Technical", questions: ["What browsers are supported?", "Is there a mobile app?"] },
];

const FORUM_CATEGORIES = [
  { name: "General Discussion", description: "Anything about Jamaica", color: t.blue },
  { name: "Music & Arts", description: "Reggae, dancehall, and culture", color: t.gold },
  { name: "Technology & Innovation", description: "Startups, coding, and digital", color: t.green },
  { name: "Travel & Tourism", description: "Visiting and exploring Jamaica", color: t.goldLight },
  { name: "Business & Economy", description: "Economic opportunities and growth", color: t.greenLight },
];

const SAMPLE_THREADS = [
  { id: 1, category: "General Discussion", title: "Best places to visit in Jamaica", author: "TravelBug", likes: 234, replies: 47 },
  { id: 2, category: "Music & Arts", title: "The influence of reggae globally", author: "MusicLover", likes: 189, replies: 32 },
  { id: 3, category: "Technology & Innovation", title: "Tech startups in Jamaica 2024", author: "TechGuru", likes: 156, replies: 28 },
  { id: 4, category: "Travel & Tourism", title: "Hidden gems off the beaten path", author: "Explorer", likes: 298, replies: 61 },
  { id: 5, category: "Business & Economy", title: "Investment opportunities in Jamaica", author: "Investor", likes: 212, replies: 39 },
  { id: 6, category: "General Discussion", title: "Jamaican food recipes and traditions", author: "ChefCarol", likes: 341, replies: 73 },
  { id: 7, category: "Music & Arts", title: "Meet local artists and musicians", author: "ArtSupporter", likes: 167, replies: 21 },
  { id: 8, category: "Technology & Innovation", title: "Digital transformation in Jamaica", author: "DigitalDreamer", likes: 198, replies: 44 },
];

const COMMUNITY_GUIDELINES = [
  { title: "Be Respectful", description: "Treat all community members with dignity and respect regardless of background." },
  { title: "Stay On Topic", description: "Keep discussions relevant to Jamaica Hub and its communities." },
  { title: "No Spam", description: "Avoid promotional content, spam, or excessive self-promotion." },
  { title: "Fact-Check", description: "Verify information before sharing and cite credible sources." },
  { title: "Celebrate Diversity", description: "Embrace the diverse perspectives within our community." },
  { title: "Report Issues", description: "Use reporting tools to flag inappropriate content or behavior." },
];

const TECH_ECOSYSTEM = [
  { name: "Jamaica Dev Community", focus: "Open-source development and coding", status: "Active" },
  { name: "Caribbean Startup Hub", focus: "Entrepreneurship and innovation", status: "Growing" },
  { name: "Jamaica Tech Meetups", focus: "Networking and skill-sharing", status: "Monthly" },
  { name: "Digital Skills Training", focus: "Free tech education programs", status: "Ongoing" },
];

const ECONOMY_STATS = [
  { label: "GDP Growth", value: "3.2%", change: "+0.5%" },
  { label: "Unemployment", value: "6.8%", change: "-0.3%" },
  { label: "Tourism Revenue", value: "$3.8B", change: "+12%" },
  { label: "Tech Sector Growth", value: "15%", change: "+8%" },
  { label: "Export Value", value: "$4.2B", change: "+4%" },
];

const SPORTS_DATA = [
  {
    sport: "Track & Field",
    description: "Jamaica is a world powerhouse in sprinting, with multiple Olympic golds",
    athletes: ["Shelly-Ann Fraser-Pryce", "Elaine Thompson-Herah", "Julien Alfred"],
  },
  {
    sport: "Cricket",
    description: "Cricket has deep roots in Jamaica as part of Caribbean cricket tradition",
    athletes: ["Chris Gayle", "Shimron Hetmyer"],
  },
  {
    sport: "Netball",
    description: "Jamaica's netball team is consistently ranked in the world's top teams",
    athletes: ["Patra Fowler", "Shamera Sterling"],
  },
  {
    sport: "Football",
    description: "Growing football culture with regional and international competitions",
    athletes: ["Reggae Girlz", "Reggae Boyz"],
  },
];

const ENVIRONMENT_DATA = [
  {
    topic: "Blue & John Crow Mountains",
    description: "UNESCO World Heritage Site protecting tropical forest biodiversity",
    action: "Learn about mountain conservation efforts",
  },
  {
    topic: "Coral Reef Protection",
    description: "Jamaica's coral reefs are vital ecosystems threatened by climate change",
    action: "Discover reef restoration projects",
  },
  {
    topic: "Wetland Conservation",
    description: "Wetlands provide crucial habitat for birds, fish, and other wildlife",
    action: "Support wetland preservation",
  },
  {
    topic: "Sustainable Agriculture",
    description: "Traditional farming practices combined with modern sustainable methods",
    action: "Explore organic farming initiatives",
  },
];

// ============ HELPER COMPONENTS ============
const Badge = ({ children, color = t.gold, bg = null }) => (
  <span
    style={{
      display: "inline-block",
      padding: "4px 12px",
      borderRadius: "20px",
      fontSize: "12px",
      fontWeight: "600",
      backgroundColor: bg || color + "20",
      color: color,
      border: `1px solid ${color}`,
    }}
  >
    {children}
  </span>
);

const Section = ({ title, children }) => (
  <div style={{ marginBottom: "60px" }}>
    <h2
      style={{
        fontSize: "42px",
        fontWeight: "300",
        marginBottom: "40px",
        color: t.text,
        fontFamily: f.display,
        letterSpacing: "1px",
      }}
    >
      {title}
    </h2>
    {children}
  </div>
);

const AuthModal = ({ show, onClose, onRegister, onLogin }) => {
  const [isLogin, setIsLogin] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      onLogin(email, password);
    } else {
      onRegister(name, email, password);
    }
    setEmail("");
    setPassword("");
    setName("");
  };

  if (!show) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0, 0, 0, 0.7)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1000,
      }}
    >
      <div
        style={{
          backgroundColor: t.surface,
          padding: "40px",
          borderRadius: "12px",
          maxWidth: "500px",
          border: `1px solid ${t.border}`,
        }}
      >
        <h3 style={{ color: t.gold, marginBottom: "30px", fontSize: "24px" }}>
          {isLogin ? "Welcome Back" : "Join Jamaica Hub"}
        </h3>
        <form onSubmit={handleSubmit}>
          {!isLogin && (
            <input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={{
                width: "100%",
                padding: "12px",
                marginBottom: "15px",
                backgroundColor: t.card,
                border: `1px solid ${t.border}`,
                color: t.text,
                borderRadius: "6px",
                fontFamily: f.body,
              }}
              required
            />
          )}
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{
              width: "100%",
              padding: "12px",
              marginBottom: "15px",
              backgroundColor: t.card,
              border: `1px solid ${t.border}`,
              color: t.text,
              borderRadius: "6px",
              fontFamily: f.body,
            }}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{
              width: "100%",
              padding: "12px",
              marginBottom: "20px",
              backgroundColor: t.card,
              border: `1px solid ${t.border}`,
              color: t.text,
              borderRadius: "6px",
              fontFamily: f.body,
            }}
            required
          />
          <button
            type="submit"
            style={{
              width: "100%",
              padding: "12px",
              backgroundColor: t.gold,
              color: t.bg,
              border: "none",
              borderRadius: "6px",
              fontWeight: "600",
              cursor: "pointer",
              marginBottom: "15px",
              fontFamily: f.body,
            }}
          >
            {isLogin ? "Sign In" : "Create Account"}
          </button>
        </form>
        <button
          onClick={() => setIsLogin(!isLogin)}
          style={{
            background: "none",
            border: "none",
            color: t.gold,
            cursor: "pointer",
            textDecoration: "underline",
            fontFamily: f.body,
            marginRight: "10px",
          }}
        >
          {isLogin ? "Need an account?" : "Already have an account?"}
        </button>
        <button
          onClick={onClose}
          style={{
            background: "none",
            border: "none",
            color: t.textMut,
            cursor: "pointer",
            float: "right",
            fontFamily: f.body,
          }}
        >
          Close
        </button>
      </div>
    </div>
  );
};

const NewThreadForm = ({ onSubmit, onClose }) => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("General Discussion");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ title, category, content, author: "You" });
    setTitle("");
    setContent("");
  };

  return (
    <div
      style={{
        backgroundColor: t.surface,
        padding: "30px",
        borderRadius: "12px",
        border: `1px solid ${t.border}`,
        marginBottom: "30px",
      }}
    >
      <h3 style={{ color: t.gold, marginBottom: "20px" }}>Start a New Discussion</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Discussion Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={{
            width: "100%",
            padding: "12px",
            marginBottom: "15px",
            backgroundColor: t.card,
            border: `1px solid ${t.border}`,
            color: t.text,
            borderRadius: "6px",
            fontFamily: f.body,
          }}
          required
        />
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          style={{
            width: "100%",
            padding: "12px",
            marginBottom: "15px",
            backgroundColor: t.card,
            border: `1px solid ${t.border}`,
            color: t.text,
            borderRadius: "6px",
            fontFamily: f.body,
          }}
        >
          {FORUM_CATEGORIES.map((cat) => (
            <option key={cat.name} value={cat.name}>
              {cat.name}
            </option>
          ))}
        </select>
        <textarea
          placeholder="Share your thoughts..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
          style={{
            width: "100%",
            padding: "12px",
            marginBottom: "15px",
            backgroundColor: t.card,
            border: `1px solid ${t.border}`,
            color: t.text,
            borderRadius: "6px",
            fontFamily: f.body,
            minHeight: "120px",
            resize: "vertical",
          }}
          required
        />
        <div style={{ display: "flex", gap: "10px" }}>
          <button
            type="submit"
            style={{
              flex: 1,
              padding: "12px",
              backgroundColor: t.gold,
              color: t.bg,
              border: "none",
              borderRadius: "6px",
              fontWeight: "600",
              cursor: "pointer",
              fontFamily: f.body,
            }}
          >
            Post Discussion
          </button>
          <button
            type="button"
            onClick={onClose}
            style={{
              flex: 1,
              padding: "12px",
              backgroundColor: t.card,
              color: t.text,
              border: `1px solid ${t.border}`,
              borderRadius: "6px",
              fontWeight: "600",
              cursor: "pointer",
              fontFamily: f.body,
            }}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

// ============ MAIN COMPONENT ============
export default function DigitalJamaicaApp() {
  // Guard against hydration issues
  const [mounted, setMounted] = useState(false);

  // Navigation & Auth
  const [activeTab, setActiveTab] = useState("home");
  const [user, setUser] = useState(null);
  const [showAuth, setShowAuth] = useState(false);
  const [toasts, setToasts] = useState([]);

  // Interactive states
  const [expandedItems, setExpandedItems] = useState({});
  const [searchQuery, setSearchQuery] = useState("");
  const [bookmarks, setBookmarks] = useState([]);
  const [likes, setLikes] = useState({});
  const [joinedCommunities, setJoinedCommunities] = useState([]);
  const [returnChecklist, setReturnChecklist] = useState({});
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [selectedParish, setSelectedParish] = useState(null);
  const [selectedMentor, setSelectedMentor] = useState(null);
  const [featuredAthleteIdx, setFeaturedAthleteIdx] = useState(0);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [carouselIdx, setCarouselIdx] = useState(0);
  const [showNewThread, setShowNewThread] = useState(false);
  const [threads, setThreads] = useState(SAMPLE_THREADS);

  const contentRef = useRef(null);

  // Initialize from localStorage
  useEffect(() => {
    setMounted(true);
    const session = localStorage.getItem("dj_session");
    if (session) {
      setUser(JSON.parse(session));
    }
    setBookmarks(JSON.parse(localStorage.getItem("dj_bookmarks") || "[]"));
    setLikes(JSON.parse(localStorage.getItem("dj_likes") || "{}"));
    setJoinedCommunities(JSON.parse(localStorage.getItem("dj_communities") || "[]"));
    setReturnChecklist(JSON.parse(localStorage.getItem("dj_checklist") || "{}"));
  }, []);

  // Persist state to localStorage
  useEffect(() => {
    if (mounted) {
      localStorage.setItem("dj_bookmarks", JSON.stringify(bookmarks));
      localStorage.setItem("dj_likes", JSON.stringify(likes));
      localStorage.setItem("dj_communities", JSON.stringify(joinedCommunities));
      localStorage.setItem("dj_checklist", JSON.stringify(returnChecklist));
    }
  }, [bookmarks, likes, joinedCommunities, returnChecklist, mounted]);

  // Scroll handling
  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
      setShowScrollTop(position > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Auto-rotate carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCarouselIdx((prev) => (prev + 1) % 4);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // Toast notifications
  const showToast = (message) => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, message }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 3000);
  };

  // Auth handlers
  const handleRegister = (name, email, password) => {
    const newUser = { name, email };
    localStorage.setItem("dj_session", JSON.stringify(newUser));
    const users = JSON.parse(localStorage.getItem("dj_users") || "[]");
    users.push({ email, password });
    localStorage.setItem("dj_users", JSON.stringify(users));
    setUser(newUser);
    setShowAuth(false);
    showToast(`Welcome, ${name}!`);
  };

  const handleLogin = (email, password) => {
    const users = JSON.parse(localStorage.getItem("dj_users") || "[]");
    const found = users.find((u) => u.email === email && u.password === password);
    if (found) {
      const newUser = { name: email.split("@")[0], email };
      localStorage.setItem("dj_session", JSON.stringify(newUser));
      setUser(newUser);
      setShowAuth(false);
      showToast("Logged in successfully!");
    } else {
      showToast("Invalid email or password");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("dj_session");
    setUser(null);
    showToast("Logged out");
  };

  const toggleExpanded = (key) => {
    setExpandedItems((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const toggleBookmark = (id) => {
    setBookmarks((prev) =>
      prev.includes(id) ? prev.filter((b) => b !== id) : [...prev, id]
    );
  };

  const toggleLike = (id) => {
    setLikes((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const toggleJoinCommunity = (community) => {
    if (joinedCommunities.includes(community)) {
      setJoinedCommunities((prev) => prev.filter((c) => c !== community));
      showToast(`Left ${community}`);
    } else {
      setJoinedCommunities((prev) => [...prev, community]);
      showToast(`Joined ${community}!`);
    }
  };

  const toggleChecklistItem = (key) => {
    setReturnChecklist((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const handleNewThread = (threadData) => {
    const newThread = {
      id: threads.length + 1,
      ...threadData,
      likes: 0,
      replies: 0,
    };
    setThreads((prev) => [newThread, ...prev]);
    setShowNewThread(false);
    showToast("Discussion posted!");
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!mounted) return null;

  // ============ HOME TAB ============
  const renderHome = () => (
    <div>
      <Section title="Welcome to Jamaica Hub">
        <div style={{ marginBottom: "50px" }}>
          <p style={{ fontSize: "18px", color: t.textSec, marginBottom: "20px" }}>
            Discover Jamaica's rich heritage, connect with communities, and explore opportunities
          </p>
        </div>

        {/* Featured Content Carousel */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "20px",
            marginBottom: "50px",
          }}
        >
          {[
            { title: "Learn Jamaica", icon: "📚", desc: "History, culture, and heritage" },
            { title: "Jamaica Guide", icon: "🗺️", desc: "Explore parishes and attractions" },
            { title: "Knowledge Exchange", icon: "💡", desc: "Connect with mentors" },
            { title: "Community Forum", icon: "💬", desc: "Join discussions" },
          ].map((item, idx) => (
            <div
              key={idx}
              onClick={() => {
                if (idx === 0) setActiveTab("learn");
                if (idx === 1) setActiveTab("guide");
                if (idx === 2) setActiveTab("knowledge");
                if (idx === 3) setActiveTab("forum");
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = t.cardHover;
                e.currentTarget.style.borderColor = t.gold;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = t.card;
                e.currentTarget.style.borderColor = t.border;
              }}
              style={{
                backgroundColor: t.card,
                border: `1px solid ${t.border}`,
                padding: "30px",
                borderRadius: "12px",
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
            >
              <div style={{ fontSize: "40px", marginBottom: "15px" }}>{item.icon}</div>
              <h3 style={{ color: t.gold, fontSize: "20px", marginBottom: "10px" }}>
                {item.title}
              </h3>
              <p style={{ color: t.textSec, fontSize: "14px" }}>{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Quick Stats */}
        <div
          style={{
            backgroundColor: t.surface,
            padding: "40px",
            borderRadius: "12px",
            border: `1px solid ${t.border}`,
            marginBottom: "50px",
          }}
        >
          <h3 style={{ color: t.gold, fontSize: "24px", marginBottom: "30px" }}>
            Jamaica Hub Stats
          </h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: "30px" }}>
            {[
              { label: "Active Users", value: "12,540" },
              { label: "Discussions", value: "3,482" },
              { label: "Mentors", value: "847" },
              { label: "Countries Reached", value: "143" },
            ].map((stat, idx) => (
              <div key={idx}>
                <div style={{ fontSize: "32px", fontWeight: "bold", color: t.gold }}>
                  {stat.value}
                </div>
                <div style={{ color: t.textSec, fontSize: "14px" }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* What's New */}
        <div>
          <h3 style={{ color: t.gold, fontSize: "24px", marginBottom: "20px" }}>
            What's New
          </h3>
          <div style={{ display: "grid", gap: "15px" }}>
            {[
              "New reggae music documentary available",
              "Jamaica's tech ecosystem grows 15% this year",
              "10 hidden beaches guide published",
              "Youth innovation challenge launching next month",
            ].map((item, idx) => (
              <div
                key={idx}
                onClick={() => showToast(`Clicked: ${item}`)}
                onMouseEnter={(e) => {
                  e.currentTarget.style.paddingLeft = "25px";
                  e.currentTarget.style.borderLeftColor = t.gold;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.paddingLeft = "20px";
                  e.currentTarget.style.borderLeftColor = t.border;
                }}
                style={{
                  backgroundColor: t.card,
                  padding: "20px",
                  borderRadius: "8px",
                  borderLeft: `4px solid ${t.border}`,
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                }}
              >
                <p style={{ color: t.text, fontSize: "15px" }}>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </div>
  );

  // ============ LEARN JAMAICA TAB ============
  const renderLearnJamaica = () => (
    <div>
      <Section title="Learn Jamaica">
        {/* History Timeline */}
        <div style={{ marginBottom: "60px" }}>
          <h3 style={{ color: t.gold, fontSize: "28px", marginBottom: "30px" }}>
            Historical Timeline
          </h3>
          {HISTORY_TIMELINE.map((item, idx) => {
            const key = `hist-${idx}`;
            const isExpanded = expandedItems[key];
            return (
              <div
                key={idx}
                onClick={() => toggleExpanded(key)}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = t.cardHover;
                  e.currentTarget.style.borderColor = t.gold;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = t.card;
                  e.currentTarget.style.borderColor = t.border;
                }}
                style={{
                  backgroundColor: t.card,
                  border: `1px solid ${t.border}`,
                  padding: "20px",
                  borderRadius: "8px",
                  marginBottom: "15px",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <div>
                    <div style={{ color: t.gold, fontWeight: "bold", fontSize: "16px" }}>
                      {item.year}
                    </div>
                    <div style={{ color: t.text, fontSize: "18px", fontWeight: "500" }}>
                      {item.event}
                    </div>
                  </div>
                  <div style={{ color: t.gold, fontSize: "20px" }}>
                    {isExpanded ? "−" : "+"}
                  </div>
                </div>
                {isExpanded && (
                  <div style={{ marginTop: "15px", color: t.textSec, fontSize: "15px" }}>
                    {item.details}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Music Evolution */}
        <div style={{ marginBottom: "60px" }}>
          <h3 style={{ color: t.gold, fontSize: "28px", marginBottom: "30px" }}>
            Music Evolution
          </h3>
          {MUSIC_EVOLUTION.map((era, idx) => {
            const key = `music-${idx}`;
            const isExpanded = expandedItems[key];
            return (
              <div
                key={idx}
                onClick={() => toggleExpanded(key)}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = t.cardHover;
                  e.currentTarget.style.borderColor = t.gold;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = t.card;
                  e.currentTarget.style.borderColor = t.border;
                }}
                style={{
                  backgroundColor: t.card,
                  border: `1px solid ${t.border}`,
                  padding: "25px",
                  borderRadius: "8px",
                  marginBottom: "15px",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <div>
                    <div style={{ color: t.gold, fontSize: "18px", fontWeight: "bold" }}>
                      {era.era}
                    </div>
                    <div style={{ color: t.textSec, fontSize: "14px", marginTop: "5px" }}>
                      {era.description}
                    </div>
                  </div>
                  <div style={{ color: t.gold, fontSize: "20px" }}>
                    {isExpanded ? "▼" : "▶"}
                  </div>
                </div>
                {isExpanded && (
                  <div style={{ marginTop: "15px" }}>
                    <div style={{ marginBottom: "10px" }}>
                      <div style={{ color: t.gold, fontWeight: "600", marginBottom: "8px" }}>
                        Key Artists:
                      </div>
                      <div style={{ color: t.textSec, fontSize: "14px" }}>
                        {era.keyArtists.join(", ")}
                      </div>
                    </div>
                    <div>
                      <div style={{ color: t.gold, fontWeight: "600", marginBottom: "8px" }}>
                        Characteristics:
                      </div>
                      <div style={{ color: t.textSec, fontSize: "14px" }}>
                        {era.characteristics.join(" • ")}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Culture & Identity */}
        <div>
          <h3 style={{ color: t.gold, fontSize: "28px", marginBottom: "30px" }}>
            Culture & Identity
          </h3>
          {CULTURAL_TOPICS.map((topic, idx) => {
            const key = `culture-${idx}`;
            const isExpanded = expandedItems[key];
            return (
              <div
                key={idx}
                onClick={() => toggleExpanded(key)}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = t.cardHover;
                  e.currentTarget.style.borderColor = t.gold;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = t.card;
                  e.currentTarget.style.borderColor = t.border;
                }}
                style={{
                  backgroundColor: t.card,
                  border: `1px solid ${t.border}`,
                  padding: "25px",
                  borderRadius: "8px",
                  marginBottom: "15px",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                }}
              >
                <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between" }}>
                  <div style={{ flex: 1 }}>
                    <h4 style={{ color: t.gold, fontSize: "18px", marginBottom: "10px" }}>
                      {topic.title}
                    </h4>
                    <p style={{ color: t.textSec, fontSize: "14px" }}>
                      {topic.description}
                    </p>
                  </div>
                  <div style={{ color: t.gold, fontSize: "20px", marginLeft: "20px" }}>
                    {isExpanded ? "−" : "+"}
                  </div>
                </div>
                {isExpanded && (
                  <div style={{ marginTop: "15px", color: t.text, fontSize: "14px" }}>
                    {topic.deepDive}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </Section>
    </div>
  );

  // ============ JAMAICA GUIDE TAB ============
  const renderJamaicaGuide = () => (
    <div>
      <Section title="Jamaica Guide">
        <div style={{ marginBottom: "30px" }}>
          <input
            type="text"
            placeholder="Search parishes..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{
              width: "100%",
              padding: "12px",
              backgroundColor: t.card,
              border: `1px solid ${t.border}`,
              color: t.text,
              borderRadius: "8px",
              marginBottom: "30px",
              fontFamily: f.body,
            }}
          />
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
            gap: "20px",
          }}
        >
          {PARISHES.filter((p) =>
            p.name.toLowerCase().includes(searchQuery.toLowerCase())
          ).map((parish, idx) => {
            const isSelected = selectedParish === idx;
            return (
              <div
                key={idx}
                onClick={() => setSelectedParish(isSelected ? null : idx)}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = t.cardHover;
                  e.currentTarget.style.borderColor = t.gold;
                  e.currentTarget.style.transform = "translateY(-5px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = t.card;
                  e.currentTarget.style.borderColor = t.border;
                  e.currentTarget.style.transform = "translateY(0)";
                }}
                style={{
                  backgroundColor: t.card,
                  border: `1px solid ${t.border}`,
                  padding: "20px",
                  borderRadius: "12px",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                }}
              >
                <h3 style={{ color: t.gold, fontSize: "18px", marginBottom: "10px" }}>
                  {parish.name}
                </h3>
                <p style={{ color: t.textSec, fontSize: "13px", marginBottom: "15px" }}>
                  Population: {parish.population}
                </p>
                {isSelected && (
                  <div style={{ marginTop: "15px", paddingTop: "15px", borderTop: `1px solid ${t.border}` }}>
                    <p style={{ color: t.gold, fontWeight: "600", marginBottom: "8px" }}>
                      Highlights:
                    </p>
                    {parish.highlights.map((h, hidx) => (
                      <p key={hidx} style={{ color: t.text, fontSize: "13px", marginBottom: "4px" }}>
                        • {h}
                      </p>
                    ))}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleJoinCommunity(parish.name);
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = t.goldLight;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = t.gold;
                      }}
                      style={{
                        marginTop: "12px",
                        padding: "8px 16px",
                        backgroundColor: joinedCommunities.includes(parish.name)
                          ? t.green
                          : t.gold,
                        color: t.bg,
                        border: "none",
                        borderRadius: "6px",
                        cursor: "pointer",
                        fontFamily: f.body,
                        fontWeight: "600",
                        fontSize: "12px",
                      }}
                    >
                      {joinedCommunities.includes(parish.name)
                        ? "✓ Joined"
                        : "Join Community"}
                    </button>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </Section>
    </div>
  );

  // ============ KNOWLEDGE EXCHANGE TAB ============
  const renderKnowledge = () => (
    <div>
      <Section title="Knowledge Exchange">
        <div style={{ marginBottom: "50px" }}>
          <h3 style={{ color: t.gold, fontSize: "24px", marginBottom: "30px" }}>
            Explore Topics
          </h3>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "20px",
            }}
          >
            {KNOWLEDGE_CATEGORIES.map((cat, idx) => (
              <div
                key={idx}
                onClick={() => showToast(`Exploring ${cat.title}`)}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = t.cardHover;
                  e.currentTarget.style.borderColor = t.gold;
                  e.currentTarget.style.transform = "scale(1.05)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = t.card;
                  e.currentTarget.style.borderColor = t.border;
                  e.currentTarget.style.transform = "scale(1)";
                }}
                style={{
                  backgroundColor: t.card,
                  border: `1px solid ${t.border}`,
                  padding: "30px",
                  borderRadius: "12px",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  textAlign: "center",
                }}
              >
                <div style={{ fontSize: "40px", marginBottom: "15px" }}>{cat.icon}</div>
                <h3 style={{ color: t.gold, fontSize: "16px", marginBottom: "10px" }}>
                  {cat.title}
                </h3>
                <p style={{ color: t.textSec, fontSize: "13px", marginBottom: "15px" }}>
                  {cat.description}
                </p>
                <Badge color={t.green}>{cat.count} items</Badge>
              </div>
            ))}
          </div>
        </div>

        {/* Mentor Profiles */}
        <div>
          <h3 style={{ color: t.gold, fontSize: "24px", marginBottom: "30px" }}>
            Meet Your Mentors
          </h3>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "20px",
            }}
          >
            {[
              {
                name: "Dr. Amelia Brown",
                expertise: "Cultural History",
                bio: "Historian specializing in Caribbean heritage",
              },
              {
                name: "Marcus Johnson",
                expertise: "Tech Innovation",
                bio: "Software engineer and startup mentor",
              },
              {
                name: "Lisa Garcia",
                expertise: "Business Development",
                bio: "Serial entrepreneur and investor",
              },
              {
                name: "David Williams",
                expertise: "Music & Arts",
                bio: "Award-winning musician and educator",
              },
            ].map((mentor, idx) => {
              const key = `mentor-${idx}`;
              const isExpanded = expandedItems[key];
              return (
                <div
                  key={idx}
                  onClick={() => toggleExpanded(key)}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = t.cardHover;
                    e.currentTarget.style.borderColor = t.gold;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = t.card;
                    e.currentTarget.style.borderColor = t.border;
                  }}
                  style={{
                    backgroundColor: t.card,
                    border: `1px solid ${t.border}`,
                    padding: "25px",
                    borderRadius: "12px",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                  }}
                >
                  <h4 style={{ color: t.gold, fontSize: "18px", marginBottom: "5px" }}>
                    {mentor.name}
                  </h4>
                  <p style={{ color: t.green, fontSize: "12px", marginBottom: "10px" }}>
                    {mentor.expertise}
                  </p>
                  <p style={{ color: t.textSec, fontSize: "14px" }}>{mentor.bio}</p>
                  {isExpanded && (
                    <div style={{ marginTop: "15px" }}>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          showToast(`Connection request sent to ${mentor.name}!`);
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = t.goldLight;
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = t.gold;
                        }}
                        style={{
                          width: "100%",
                          padding: "10px",
                          backgroundColor: t.gold,
                          color: t.bg,
                          border: "none",
                          borderRadius: "6px",
                          cursor: "pointer",
                          fontFamily: f.body,
                          fontWeight: "600",
                        }}
                      >
                        Connect with Mentor
                      </button>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </Section>
    </div>
  );

  // ============ ECONOMY & INNOVATION TAB ============
  const renderEconomy = () => (
    <div>
      <Section title="Economy & Innovation">
        {/* Tech Ecosystem */}
        <div style={{ marginBottom: "60px" }}>
          <h3 style={{ color: t.gold, fontSize: "24px", marginBottom: "30px" }}>
            Tech Ecosystem
          </h3>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "20px",
            }}
          >
            {TECH_ECOSYSTEM.map((item, idx) => {
              const key = `tech-${idx}`;
              const isExpanded = expandedItems[key];
              return (
                <div
                  key={idx}
                  onClick={() => toggleExpanded(key)}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = t.cardHover;
                    e.currentTarget.style.borderColor = t.blue;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = t.card;
                    e.currentTarget.style.borderColor = t.border;
                  }}
                  style={{
                    backgroundColor: t.card,
                    border: `1px solid ${t.border}`,
                    padding: "20px",
                    borderRadius: "8px",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                  }}
                >
                  <h4 style={{ color: t.gold, fontSize: "16px", marginBottom: "8px" }}>
                    {item.name}
                  </h4>
                  <p style={{ color: t.textSec, fontSize: "13px", marginBottom: "8px" }}>
                    {item.focus}
                  </p>
                  <Badge color={t.green}>{item.status}</Badge>
                  {isExpanded && (
                    <div style={{ marginTop: "12px", color: t.text, fontSize: "13px" }}>
                      Connecting tech professionals and innovators across Jamaica
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Economy Stats */}
        <div>
          <h3 style={{ color: t.gold, fontSize: "24px", marginBottom: "30px" }}>
            Economic Indicators
          </h3>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "20px",
            }}
          >
            {ECONOMY_STATS.map((stat, idx) => (
              <div
                key={idx}
                onClick={() => showToast(`${stat.label}: ${stat.value} ${stat.change}`)}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = t.cardHover;
                  e.currentTarget.style.borderColor = t.goldLight;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = t.card;
                  e.currentTarget.style.borderColor = t.border;
                }}
                style={{
                  backgroundColor: t.card,
                  border: `1px solid ${t.border}`,
                  padding: "25px",
                  borderRadius: "8px",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  textAlign: "center",
                }}
              >
                <p style={{ color: t.textSec, fontSize: "13px", marginBottom: "10px" }}>
                  {stat.label}
                </p>
                <p style={{ color: t.gold, fontSize: "32px", fontWeight: "bold", marginBottom: "8px" }}>
                  {stat.value}
                </p>
                <p style={{ color: t.green, fontSize: "12px" }}>{stat.change}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </div>
  );

  // ============ SPORTS TAB ============
  const renderSports = () => (
    <div>
      <Section title="Sports">
        {/* Featured Athlete */}
        <div
          style={{
            backgroundColor: t.surface,
            padding: "40px",
            borderRadius: "12px",
            border: `1px solid ${t.border}`,
            marginBottom: "50px",
          }}
        >
          <h3 style={{ color: t.gold, fontSize: "24px", marginBottom: "20px" }}>
            Featured Athlete Spotlight
          </h3>
          <div style={{ marginBottom: "20px" }}>
            <p style={{ color: t.text, fontSize: "18px", fontWeight: "500" }}>
              {["Shelly-Ann Fraser-Pryce", "Elaine Thompson-Herah", "Chris Gayle"][
                featuredAthleteIdx
              ]}
            </p>
            <p style={{ color: t.textSec, fontSize: "14px" }}>
              One of Jamaica's greatest athletes with multiple Olympic medals
            </p>
          </div>
          <button
            onClick={() => setFeaturedAthleteIdx((prev) => (prev + 1) % 3)}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = t.goldLight;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = t.gold;
            }}
            style={{
              padding: "10px 20px",
              backgroundColor: t.gold,
              color: t.bg,
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
              fontFamily: f.body,
              fontWeight: "600",
            }}
          >
            Next Athlete
          </button>
        </div>

        {/* Sports Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "20px",
          }}
        >
          {SPORTS_DATA.map((sport, idx) => {
            const key = `sport-${idx}`;
            const isExpanded = expandedItems[key];
            return (
              <div
                key={idx}
                onClick={() => toggleExpanded(key)}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = t.cardHover;
                  e.currentTarget.style.borderColor = t.red;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = t.card;
                  e.currentTarget.style.borderColor = t.border;
                }}
                style={{
                  backgroundColor: t.card,
                  border: `1px solid ${t.border}`,
                  padding: "20px",
                  borderRadius: "8px",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                }}
              >
                <h4 style={{ color: t.gold, fontSize: "16px", marginBottom: "8px" }}>
                  {sport.sport}
                </h4>
                <p style={{ color: t.textSec, fontSize: "13px" }}>
                  {sport.description}
                </p>
                {isExpanded && (
                  <div style={{ marginTop: "12px", paddingTop: "12px", borderTop: `1px solid ${t.border}` }}>
                    <p style={{ color: t.gold, fontWeight: "600", marginBottom: "8px" }}>
                      Notable Athletes:
                    </p>
                    {sport.athletes.map((athlete, aidx) => (
                      <p key={aidx} style={{ color: t.text, fontSize: "12px", marginBottom: "4px" }}>
                        • {athlete}
                      </p>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </Section>
    </div>
  );

  // ============ ENVIRONMENT TAB ============
  const renderEnvironment = () => (
    <div>
      <Section title="Environment & Conservation">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "20px",
          }}
        >
          {ENVIRONMENT_DATA.map((env, idx) => {
            const key = `env-${idx}`;
            const isExpanded = expandedItems[key];
            return (
              <div
                key={idx}
                onClick={() => toggleExpanded(key)}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = t.cardHover;
                  e.currentTarget.style.borderColor = t.green;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = t.card;
                  e.currentTarget.style.borderColor = t.border;
                }}
                style={{
                  backgroundColor: t.card,
                  border: `1px solid ${t.border}`,
                  padding: "25px",
                  borderRadius: "8px",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                }}
              >
                <h4 style={{ color: t.gold, fontSize: "16px", marginBottom: "10px" }}>
                  {env.topic}
                </h4>
                <p style={{ color: t.textSec, fontSize: "13px", marginBottom: "15px" }}>
                  {env.description}
                </p>
                {isExpanded && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      showToast(`✓ Conservation tip: ${env.action}`);
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = t.greenLight;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = t.green;
                    }}
                    style={{
                      width: "100%",
                      padding: "10px",
                      backgroundColor: t.green,
                      color: t.bg,
                      border: "none",
                      borderRadius: "6px",
                      cursor: "pointer",
                      fontFamily: f.body,
                      fontWeight: "600",
                      fontSize: "12px",
                    }}
                  >
                    Take Action
                  </button>
                )}
              </div>
            );
          })}
        </div>
      </Section>
    </div>
  );

  // ============ FORUM TAB ============
  const renderForum = () => (
    <div>
      <Section title="Community Forum">
        {user && showNewThread && (
          <NewThreadForm
            onSubmit={handleNewThread}
            onClose={() => setShowNewThread(false)}
          />
        )}

        {user && !showNewThread && (
          <button
            onClick={() => setShowNewThread(true)}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = t.goldLight;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = t.gold;
            }}
            style={{
              padding: "12px 24px",
              backgroundColor: t.gold,
              color: t.bg,
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
              fontFamily: f.body,
              fontWeight: "600",
              marginBottom: "30px",
            }}
          >
            + Start New Discussion
          </button>
        )}

        {!user && (
          <div
            style={{
              backgroundColor: t.surface,
              padding: "30px",
              borderRadius: "12px",
              border: `1px solid ${t.border}`,
              marginBottom: "30px",
              textAlign: "center",
            }}
          >
            <p style={{ color: t.text, marginBottom: "15px" }}>
              Sign in to participate in discussions
            </p>
            <button
              onClick={() => setShowAuth(true)}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = t.goldLight;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = t.gold;
              }}
              style={{
                padding: "10px 20px",
                backgroundColor: t.gold,
                color: t.bg,
                border: "none",
                borderRadius: "6px",
                cursor: "pointer",
                fontFamily: f.body,
                fontWeight: "600",
              }}
            >
              Sign In
            </button>
          </div>
        )}

        {threads.map((thread) => {
          const key = `thread-${thread.id}`;
          const isExpanded = expandedItems[key];
          return (
            <div
              key={thread.id}
              onClick={() => toggleExpanded(key)}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = t.cardHover;
                e.currentTarget.style.borderColor = t.goldLight;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = t.card;
                e.currentTarget.style.borderColor = t.border;
              }}
              style={{
                backgroundColor: t.card,
                border: `1px solid ${t.border}`,
                padding: "20px",
                borderRadius: "8px",
                marginBottom: "15px",
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "start" }}>
                <div style={{ flex: 1 }}>
                  <Badge color={t.blue}>{thread.category}</Badge>
                  <h4 style={{ color: t.text, fontSize: "16px", marginTop: "10px", marginBottom: "8px" }}>
                    {thread.title}
                  </h4>
                  <p style={{ color: t.textSec, fontSize: "13px" }}>by {thread.author}</p>
                </div>
              </div>
              <div style={{ marginTop: "12px", display: "flex", gap: "20px" }}>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleLike(`thread-${thread.id}`);
                  }}
                  style={{
                    background: "none",
                    border: "none",
                    color: likes[`thread-${thread.id}`] ? t.red : t.textMut,
                    cursor: "pointer",
                    fontSize: "14px",
                    fontFamily: f.body,
                  }}
                >
                  {likes[`thread-${thread.id}`] ? "❤️" : "🤍"} {thread.likes}
                </button>
                <div style={{ color: t.textMut, fontSize: "14px" }}>
                  💬 {thread.replies}
                </div>
              </div>
              {isExpanded && (
                <div style={{ marginTop: "15px", paddingTop: "15px", borderTop: `1px solid ${t.border}` }}>
                  <p style={{ color: t.textSec, fontSize: "14px", marginBottom: "12px" }}>
                    Click the heart to like this discussion
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </Section>
    </div>
  );

  // ============ YOUTH MODE TAB ============
  const renderYouthMode = () => (
    <div>
      <Section title="Youth Mode">
        <div style={{ marginBottom: "50px" }}>
          <h3 style={{ color: t.gold, fontSize: "24px", marginBottom: "30px" }}>
            Opportunities & Journeys
          </h3>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "20px",
            }}
          >
            {YOUTH_JOURNEYS.map((journey, idx) => {
              const key = `youth-${idx}`;
              const isExpanded = expandedItems[key];
              return (
                <div
                  key={idx}
                  onClick={() => toggleExpanded(key)}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-10px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                  style={{
                    background: journey.gradient,
                    padding: "30px",
                    borderRadius: "12px",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                  }}
                >
                  <h3 style={{ color: t.bg, fontSize: "18px", marginBottom: "10px" }}>
                    {journey.title}
                  </h3>
                  <p style={{ color: "rgba(255,255,255,0.9)", fontSize: "14px" }}>
                    {journey.description}
                  </p>
                  {isExpanded && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        showToast("Journey started! Check your inbox for next steps.");
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.opacity = "0.9";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.opacity = "1";
                      }}
                      style={{
                        marginTop: "15px",
                        padding: "10px 20px",
                        backgroundColor: "rgba(255,255,255,0.9)",
                        color: t.bg,
                        border: "none",
                        borderRadius: "6px",
                        cursor: "pointer",
                        fontFamily: f.body,
                        fontWeight: "600",
                        transition: "opacity 0.3s ease",
                      }}
                    >
                      Get Started
                    </button>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <div>
          <h3 style={{ color: t.gold, fontSize: "24px", marginBottom: "30px" }}>
            Success Stories
          </h3>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "20px",
            }}
          >
            {[
              {
                name: "Kayla",
                story: "Completed the Tech Hub and now works as a junior developer",
              },
              {
                name: "Marcus",
                story: "Leaders program led to his first consulting contract",
              },
              {
                name: "Zara",
                story: "Arts Academy training resulted in regional music award",
              },
            ].map((story, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: t.card,
                  border: `1px solid ${t.border}`,
                  padding: "20px",
                  borderRadius: "8px",
                }}
              >
                <p style={{ color: t.gold, fontWeight: "600", marginBottom: "8px" }}>
                  {story.name}'s Story
                </p>
                <p style={{ color: t.textSec, fontSize: "14px" }}>{story.story}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </div>
  );

  // ============ PARISHES TAB ============
  const renderParishes = () => (
    <div>
      <Section title="Parishes & Communities">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "15px",
          }}
        >
          {PARISHES.map((parish, idx) => (
            <div
              key={idx}
              onClick={() => toggleJoinCommunity(parish.name)}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = t.cardHover;
                e.currentTarget.style.borderColor = t.gold;
                e.currentTarget.style.transform = "scale(1.05)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = t.card;
                e.currentTarget.style.borderColor = t.border;
                e.currentTarget.style.transform = "scale(1)";
              }}
              style={{
                backgroundColor: t.card,
                border: `1px solid ${t.border}`,
                padding: "20px",
                borderRadius: "8px",
                cursor: "pointer",
                transition: "all 0.3s ease",
                textAlign: "center",
              }}
            >
              <h4 style={{ color: t.gold, fontSize: "16px", marginBottom: "8px" }}>
                {parish.name}
              </h4>
              <p style={{ color: t.textSec, fontSize: "12px", marginBottom: "12px" }}>
                {parish.population} residents
              </p>
              <Badge
                color={
                  joinedCommunities.includes(parish.name) ? t.green : t.gold
                }
              >
                {joinedCommunities.includes(parish.name) ? "✓ Joined" : "Join"}
              </Badge>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );

  // ============ RETURN GUIDE TAB ============
  const renderReturnGuide = () => (
    <div>
      <Section title="Jamaica Return Guide">
        <p style={{ color: t.textSec, fontSize: "16px", marginBottom: "40px" }}>
          Your step-by-step checklist for returning to Jamaica
        </p>

        {[
          { id: "visa", title: "Check Visa Requirements", desc: "Ensure your passport is valid for Jamaica entry" },
          { id: "housing", title: "Arrange Housing", desc: "Book accommodation in your destination parish" },
          { id: "employment", title: "Employment Planning", desc: "Secure job offers or business licenses" },
          { id: "banking", title: "Banking & Finance", desc: "Open local bank accounts and establish credit" },
          { id: "healthcare", title: "Healthcare Registration", desc: "Register with local healthcare providers" },
          { id: "education", title: "Education (if applicable)", desc: "Enroll children in schools" },
          { id: "utilities", title: "Utilities & Services", desc: "Set up electricity, water, internet" },
          { id: "community", title: "Connect with Community", desc: "Join local organizations and networks" },
        ].map((step, idx) => {
          const isChecked = returnChecklist[step.id];
          return (
            <div
              key={idx}
              onClick={() => toggleChecklistItem(step.id)}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = t.cardHover;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = t.card;
              }}
              style={{
                backgroundColor: t.card,
                border: `1px solid ${isChecked ? t.green : t.border}`,
                padding: "20px",
                borderRadius: "8px",
                marginBottom: "15px",
                cursor: "pointer",
                transition: "all 0.3s ease",
                display: "flex",
                alignItems: "flex-start",
                gap: "15px",
              }}
            >
              <input
                type="checkbox"
                checked={isChecked}
                onChange={() => toggleChecklistItem(step.id)}
                style={{
                  marginTop: "3px",
                  cursor: "pointer",
                  accentColor: t.gold,
                }}
              />
              <div style={{ flex: 1 }}>
                <h4
                  style={{
                    color: isChecked ? t.green : t.gold,
                    fontSize: "16px",
                    marginBottom: "5px",
                    textDecoration: isChecked ? "line-through" : "none",
                  }}
                >
                  {step.title}
                </h4>
                <p
                  style={{
                    color: t.textSec,
                    fontSize: "13px",
                    textDecoration: isChecked ? "line-through" : "none",
                  }}
                >
                  {step.desc}
                </p>
              </div>
            </div>
          );
        })}
      </Section>
    </div>
  );

  // ============ HELP TAB ============
  const renderHelp = () => (
    <div>
      <Section title="Help & FAQ">
        {GUIDE_QUESTIONS.map((section, idx) => (
          <div key={idx} style={{ marginBottom: "50px" }}>
            <h3 style={{ color: t.gold, fontSize: "22px", marginBottom: "20px" }}>
              {section.category}
            </h3>
            <div style={{ display: "grid", gap: "15px" }}>
              {section.questions.map((q, qidx) => {
                const key = `faq-${idx}-${qidx}`;
                const isExpanded = expandedItems[key];
                return (
                  <div
                    key={qidx}
                    onClick={() => toggleExpanded(key)}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = t.cardHover;
                      e.currentTarget.style.borderColor = t.gold;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = t.card;
                      e.currentTarget.style.borderColor = t.border;
                    }}
                    style={{
                      backgroundColor: t.card,
                      border: `1px solid ${t.border}`,
                      padding: "20px",
                      borderRadius: "8px",
                      cursor: "pointer",
                      transition: "all 0.3s ease",
                    }}
                  >
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <h4 style={{ color: t.text, fontSize: "15px" }}>{q}</h4>
                      <div style={{ color: t.gold, fontSize: "18px" }}>
                        {isExpanded ? "−" : "+"}
                      </div>
                    </div>
                    {isExpanded && (
                      <p style={{ marginTop: "15px", color: t.textSec, fontSize: "14px" }}>
                        Contact support at support@jamaicahub.com or visit our help center for detailed answers.
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </Section>
    </div>
  );

  // Render tab content
  const renderTabContent = () => {
    switch (activeTab) {
      case "home":
        return renderHome();
      case "learn":
        return renderLearnJamaica();
      case "guide":
        return renderJamaicaGuide();
      case "knowledge":
        return renderKnowledge();
      case "economy":
        return renderEconomy();
      case "sports":
        return renderSports();
      case "environment":
        return renderEnvironment();
      case "forum":
        return renderForum();
      case "youth":
        return renderYouthMode();
      case "parishes":
        return renderParishes();
      case "return":
        return renderReturnGuide();
      case "help":
        return renderHelp();
      default:
        return renderHome();
    }
  };

  return (
    <div style={{ backgroundColor: t.bg, color: t.text, fontFamily: f.body, minHeight: "100vh" }}>
      {/* Sticky Navigation */}
      <nav
        style={{
          position: "sticky",
          top: 0,
          backgroundColor: t.surface,
          borderBottom: `1px solid ${t.border}`,
          padding: "20px 0",
          zIndex: 100,
        }}
      >
        <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "0 30px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
            <h1
              style={{
                fontSize: "32px",
                fontFamily: f.display,
                color: t.gold,
                margin: 0,
              }}
            >
              Jamaica Hub
            </h1>
            <div style={{ display: "flex", gap: "10px" }}>
              {user ? (
                <>
                  <span style={{ color: t.textSec, marginRight: "15px" }}>
                    Welcome, {user.name}!
                  </span>
                  <button
                    onClick={handleLogout}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = t.cardHover;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = "transparent";
                    }}
                    style={{
                      padding: "8px 16px",
                      backgroundColor: "transparent",
                      border: `1px solid ${t.border}`,
                      color: t.text,
                      borderRadius: "6px",
                      cursor: "pointer",
                      fontFamily: f.body,
                      transition: "all 0.3s ease",
                    }}
                  >
                    Logout
                  </button>
                </>
              ) : (
                <button
                  onClick={() => setShowAuth(true)}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = t.goldLight;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = t.gold;
                  }}
                  style={{
                    padding: "8px 16px",
                    backgroundColor: t.gold,
                    color: t.bg,
                    border: "none",
                    borderRadius: "6px",
                    cursor: "pointer",
                    fontFamily: f.body,
                    fontWeight: "600",
                    transition: "all 0.3s ease",
                  }}
                >
                  Sign In
                </button>
              )}
            </div>
          </div>

          {/* Tab Navigation */}
          <div
            style={{
              display: "flex",
              gap: "20px",
              overflowX: "auto",
              paddingBottom: "10px",
            }}
          >
            {[
              { id: "home", label: "Home" },
              { id: "learn", label: "Learn Jamaica" },
              { id: "guide", label: "Guide" },
              { id: "knowledge", label: "Knowledge" },
              { id: "economy", label: "Economy" },
              { id: "sports", label: "Sports" },
              { id: "environment", label: "Environment" },
              { id: "forum", label: "Forum" },
              { id: "youth", label: "Youth" },
              { id: "parishes", label: "Parishes" },
              { id: "return", label: "Return Guide" },
              { id: "help", label: "Help" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                onMouseEnter={(e) => {
                  if (activeTab !== tab.id) {
                    e.currentTarget.style.color = t.goldLight;
                  }
                }}
                onMouseLeave={(e) => {
                  if (activeTab !== tab.id) {
                    e.currentTarget.style.color = t.text;
                  }
                }}
                style={{
                  padding: "8px 16px",
                  backgroundColor: "transparent",
                  border: "none",
                  color: activeTab === tab.id ? t.gold : t.text,
                  cursor: "pointer",
                  fontFamily: f.body,
                  fontWeight: activeTab === tab.id ? "600" : "400",
                  borderBottom: activeTab === tab.id ? `2px solid ${t.gold}` : "none",
                  transition: "all 0.3s ease",
                  whiteSpace: "nowrap",
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main
        ref={contentRef}
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "60px 30px",
        }}
      >
        {renderTabContent()}
      </main>

      {/* Scroll-to-Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = t.goldLight;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = t.gold;
          }}
          style={{
            position: "fixed",
            bottom: "30px",
            right: "30px",
            padding: "12px 16px",
            backgroundColor: t.gold,
            color: t.bg,
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
            fontFamily: f.body,
            fontWeight: "600",
            transition: "all 0.3s ease",
            zIndex: 50,
          }}
        >
          ↑ Top
        </button>
      )}

      {/* Toast Notifications */}
      <div
        style={{
          position: "fixed",
          bottom: "30px",
          left: "30px",
          zIndex: 1000,
        }}
      >
        {toasts.map((toast) => (
          <div
            key={toast.id}
            style={{
              backgroundColor: t.gold,
              color: t.bg,
              padding: "15px 20px",
              borderRadius: "8px",
              marginBottom: "10px",
              fontFamily: f.body,
              fontWeight: "600",
              maxWidth: "300px",
              animation: "slideIn 0.3s ease",
            }}
          >
            {toast.message}
          </div>
        ))}
      </div>

      {/* Auth Modal */}
      <AuthModal
        show={showAuth}
        onClose={() => setShowAuth(false)}
        onRegister={handleRegister}
        onLogin={handleLogin}
      />

      {/* Footer */}
      <footer
        style={{
          backgroundColor: t.surface,
          borderTop: `1px solid ${t.border}`,
          padding: "60px 30px",
          marginTop: "100px",
        }}
      >
        <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "40px",
              marginBottom: "40px",
            }}
          >
            <div>
              <h3 style={{ color: t.gold, fontSize: "18px", marginBottom: "15px" }}>
                About Jamaica Hub
              </h3>
              <p style={{ color: t.textSec, fontSize: "14px", lineHeight: "1.6" }}>
                Connecting Jamaicans globally to celebrate heritage, share knowledge, and build opportunities.
              </p>
            </div>
            <div>
              <h3 style={{ color: t.gold, fontSize: "18px", marginBottom: "15px" }}>
                Quick Links
              </h3>
              {["Learn Jamaica", "Guide", "Forum", "Contact"].map((link, idx) => (
                <p
                  key={idx}
                  onClick={() => showToast(`Navigating to ${link}`)}
                  style={{
                    color: t.text,
                    fontSize: "14px",
                    marginBottom: "8px",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = t.gold;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = t.text;
                  }}
                >
                  {link}
                </p>
              ))}
            </div>
            <div>
              <h3 style={{ color: t.gold, fontSize: "18px", marginBottom: "15px" }}>
                Legal
              </h3>
              {["Privacy Policy", "Terms of Service", "Community Guidelines"].map(
                (link, idx) => (
                  <p
                    key={idx}
                    onClick={() => showToast(`Viewing ${link}`)}
                    style={{
                      color: t.text,
                      fontSize: "14px",
                      marginBottom: "8px",
                      cursor: "pointer",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = t.gold;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = t.text;
                    }}
                  >
                    {link}
                  </p>
                )
              )}
            </div>
          </div>
          <div
            style={{
              borderTop: `1px solid ${t.border}`,
              paddingTop: "30px",
              textAlign: "center",
              color: t.textMut,
              fontSize: "14px",
            }}
          >
            <p>© 2024 Jamaica Hub. All rights reserved.</p>
          </div>
        </div>
      </footer>

      <style>{`
        @keyframes slideIn {
          from {
            transform: translateX(-100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}