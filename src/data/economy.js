// ─── Digital Jamaica: Economy & Innovation Database ───
// Current economic data, tech ecosystem, and business landscape
// Created by Rohan Jowallah | © 2025 Digital Jamaica

export const ECONOMY_OVERVIEW = {
  gdp: "$19.93 billion USD (2024)",
  gdpGrowth: "1.0–3.0% projected (2025-26)",
  population: "2.8 million",
  currency: "Jamaican Dollar (JMD)",
  majorIndustries: ["Tourism", "Financial Services", "BPO/IT", "Agriculture", "Mining (Bauxite/Alumina)", "Manufacturing"],
  keyStats: [
    { label: "GDP (2024)", value: "$19.93B", icon: "💰" },
    { label: "BPO Employees", value: "60,000+", icon: "💻" },
    { label: "Tech Startups", value: "40+", icon: "🚀" },
    { label: "Remittances (% GDP)", value: "21.6%", icon: "🌍" },
    { label: "Tourism Earnings", value: "$4.2B+", icon: "✈️" },
    { label: "Internet Penetration", value: "76%+", icon: "📶" },
  ]
};

export const TECH_ECOSYSTEM = [
  {
    id: "bpo",
    title: "BPO & Outsourcing",
    icon: "🏢",
    desc: "Jamaica's BPO sector employs 60,000+ people and generates nearly $1 billion USD annually. It is the third-largest foreign exchange earner. Companies like Conduent, Hinduja Global Solutions, and Alorica operate major centres in Montego Bay and Kingston. The government aims to grow the sector to 100,000 jobs.",
    stats: ["60,000+ employees", "~$1B USD revenue", "3rd largest FX earner", "25 years of growth"],
  },
  {
    id: "startups",
    title: "Startup Ecosystem",
    icon: "🚀",
    desc: "Jamaica ranks 1st in the Caribbean as a startup destination with 40+ high-tech startups raising an average of $2.17M USD. Kingston BETA is the leading tech event series. Three startups — HeadOffice (Fintech), Cyphr (MusicTech), and GroceryList (E-commerce) — were accepted into Techstars New Orleans Accelerator.",
    stats: ["40+ high-tech startups", "$2.17M avg raise", "1st in Caribbean", "Techstars accelerated"],
  },
  {
    id: "silicon-mountain",
    title: "Silicon Mountain Project",
    icon: "⛰️",
    desc: "Based in Mandeville, Manchester, the Silicon Mountain Project aims to decentralize Jamaica's tech scene beyond Kingston. The goal: impact 2,000 entrepreneurs outside the corporate area by 2030. It hosts a growing community of developers, designers, and business professionals building solutions for local and global markets.",
    stats: ["Based in Mandeville", "2,000 entrepreneurs target", "Decentralized tech", "Growing community"],
  },
  {
    id: "fintech",
    title: "Fintech & Digital Payments",
    icon: "💳",
    desc: "Jamaica's fintech sector is driving innovation in payments, remittances, and financial inclusion. Mobile money, blockchain-based payment systems, and digital banking are expanding access. The Bank of Jamaica has been exploring a Central Bank Digital Currency (CBDC) called JAM-DEX, launched as a pilot in 2022.",
    stats: ["JAM-DEX CBDC pilot", "Mobile money growth", "Blockchain payments", "Financial inclusion push"],
  },
  {
    id: "coding",
    title: "Coding & Digital Skills",
    icon: "👩‍💻",
    desc: "The Amber HEART Coding Academy offers intensive year-long residency training with internship components. HEART/NSTA Trust provides free training up to Associate Degree level. UTech Jamaica partners with HEART/NSTA for seamless bachelor degree pathways. Summer of Skills programmes train youth ages 15+ across 28 institutions.",
    stats: ["Free HEART/NSTA training", "28 institutions", "UTech pathway", "Year-long residency"],
  },
  {
    id: "agriculture-tech",
    title: "Agricultural Innovation",
    icon: "🌱",
    desc: "Jamaica is embracing climate-smart agriculture. Hydroponic systems yield 400% more per acre using 90% less water. Climate-resilient crop varieties increased 30% between 2020-2024. Value-added exports (ginger extracts, craft coffee, jams) are estimated to rise 18% by 2026. The Ministry allocated $120M for small irrigation kits.",
    stats: ["400% hydroponic yield", "30% climate-resilient crops", "18% export growth", "$120M irrigation investment"],
  }
];

export const INVESTMENT_SECTORS = [
  { sector: "Tourism & Hospitality", opportunity: "Eco-tourism, boutique hotels, adventure tourism, culinary tourism", growth: "High" },
  { sector: "Technology & BPO", opportunity: "Software development, AI solutions, nearshore outsourcing", growth: "Very High" },
  { sector: "Agriculture & Agri-tech", opportunity: "Hydroponics, value-added food products, organic farming, Blue Mountain coffee", growth: "High" },
  { sector: "Real Estate", opportunity: "Diaspora housing, retirement communities, commercial development", growth: "Moderate" },
  { sector: "Renewable Energy", opportunity: "Solar, wind, waste-to-energy projects", growth: "Growing" },
  { sector: "Creative Industries", opportunity: "Music production, film, animation, gaming", growth: "High" },
  { sector: "Cannabis/Hemp", opportunity: "Medical cannabis, hemp products (newly regulated)", growth: "Emerging" },
  { sector: "Education & Training", opportunity: "Online learning, vocational training, edtech", growth: "Growing" },
];

export default ECONOMY_OVERVIEW;
