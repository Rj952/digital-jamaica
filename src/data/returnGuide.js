// ─── Digital Jamaica: Return & Reconnection Guide Database ───
// Learning-based preparation for diaspora Jamaicans considering return
// Created by Rohan Jowallah | © 2025 Digital Jamaica

export const RETURN_STEPS = [
  {
    id: "understanding",
    step: 1,
    title: "Understanding Today's Jamaica",
    icon: "🔍",
    desc: "Jamaica has changed. Learn about the realities of daily life — cost of living, infrastructure, healthcare, safety, and community dynamics. This isn't the Jamaica you left; it's evolved.",
    topics: [
      { title: "Cost of Living Realities", desc: "Food prices, utilities, transportation, housing costs, and how they compare to abroad. The Jamaica dollar, inflation, and purchasing power." },
      { title: "Healthcare System Overview", desc: "Public vs private healthcare, hospital access, health insurance options, pharmacies, and what to expect. Medical tourism is growing but daily healthcare access varies." },
      { title: "Safety & Community Awareness", desc: "Understanding community dynamics, garrison politics, safe areas, and practical safety awareness without fearmongering. Most of Jamaica is safe — but awareness matters." },
      { title: "Infrastructure & Daily Logistics", desc: "Roads, water supply (some areas have inconsistent water), electricity, internet connectivity, banking, and transportation options including route taxis." },
      { title: "Economic Landscape", desc: "Job market realities, entrepreneurship opportunities, business registration, tax obligations, and the growing BPO/tech sector." }
    ]
  },
  {
    id: "cultural",
    step: 2,
    title: "Cultural Reintegration",
    icon: "🤝",
    desc: "Returning Jamaicans often experience reverse culture shock. Understanding current social norms, communication styles, workplace culture, and community expectations helps bridge the gap.",
    topics: [
      { title: "Workplace Culture Differences", desc: "Jamaican workplace norms — relationship-building, communication styles, hierarchy, punctuality expectations, and how they differ from US/UK/Canadian workplaces." },
      { title: "Social Expectations", desc: "How neighbours, community, and family will perceive you. The 'foreign' label — expectations that you have money, that you should help, and managing those dynamics." },
      { title: "Communication Styles", desc: "Directness, humour, patois use in professional vs casual settings, and the cultural nuances that returning residents sometimes misread." },
      { title: "Community Integration", desc: "How to genuinely become part of a community rather than remaining an outsider. Church, community groups, sports, and local involvement." },
      { title: "Managing Expectations", desc: "Your expectations vs reality. Not everything will work the way it does abroad. Patience, flexibility, and a learning mindset are essential." }
    ]
  },
  {
    id: "volunteering",
    step: 3,
    title: "Community Volunteering",
    icon: "🌱",
    desc: "Before or after returning, contribute meaningfully. Education programs, youth mentoring, environmental projects, and community development initiatives welcome diaspora involvement.",
    topics: [
      { title: "Education Volunteering", desc: "Reading programs, tutoring, computer literacy, exam preparation support. Schools across Jamaica welcome skilled volunteers." },
      { title: "Youth Mentorship Programs", desc: "Big Brother/Big Sister-style programs, career exposure days, and summer camp volunteering. Youth in Jamaica need positive role models." },
      { title: "Environmental Conservation", desc: "Beach cleanups, mangrove restoration, Blue and John Crow Mountains projects, and marine conservation programs." },
      { title: "Community Development", desc: "Community centres, library programs, skills training workshops, and infrastructure improvement projects." },
      { title: "Skills-Based Volunteering", desc: "Using your professional skills — accounting, legal, medical, tech — to support organizations that need specialized help." }
    ]
  },
  {
    id: "education",
    step: 4,
    title: "Education Pathways",
    icon: "🎓",
    desc: "Whether for your children or yourself — understand Jamaica's education system, university options, professional certification, and continuing education opportunities.",
    topics: [
      { title: "K-12 School Options", desc: "Public schools, private preparatory schools, and high schools. The PEP exam system, traditional high schools vs newer institutions, and school culture." },
      { title: "University Landscape", desc: "UWI (Mona), UTech, Northern Caribbean University, and growing private institutions. Degree recognition, transfer credits, and programme quality." },
      { title: "Professional Certifications", desc: "ACCA, CPA equivalencies, medical licensing, teaching certification, and how foreign qualifications transfer to Jamaica." },
      { title: "Skills Training Programs", desc: "HEART/NSTA Trust programs, vocational training, technology bootcamps, and entrepreneurship incubators." },
      { title: "Children's Education Planning", desc: "Choosing the right school for children moving from abroad, managing curriculum differences, and supporting adjustment." }
    ]
  },
  {
    id: "network",
    step: 5,
    title: "Building Your Network",
    icon: "🌐",
    desc: "Success in Jamaica requires relationships. Learn how to build genuine connections with local communities, professional networks, and government services.",
    topics: [
      { title: "Professional Associations", desc: "Jamaica Chamber of Commerce, professional bodies, industry groups, and networking events. LinkedIn is growing but face-to-face still matters most." },
      { title: "Community Organizations", desc: "Service clubs (Rotary, Kiwanis), community development committees, and parish councils. Getting involved locally builds trust and connections." },
      { title: "Government Services", desc: "Tax registration (TRN), National Insurance (NIS), driver's license, and navigating government bureaucracy. Tips for efficiency." },
      { title: "Business Networks", desc: "JAMPRO (investment agency), Jamaica Business Development Corporation, diaspora business networks, and returnee communities." },
      { title: "Faith Communities", desc: "Churches remain central to Jamaican social life. Finding a church community provides immediate social connections and support." }
    ]
  }
];

// ─── Practical Resources ───
export const RETURN_RESOURCES = [
  { title: "Jamaica Moves (Diaspora Programme)", url: "#", desc: "Government programme for returning residents" },
  { title: "JAMPRO", url: "#", desc: "Jamaica's trade and investment promotion agency" },
  { title: "Returning Residents' Facilitation Unit", url: "#", desc: "Customs and import duty relief for returning residents" },
  { title: "National Housing Trust", url: "#", desc: "Mortgage and housing support" },
  { title: "Jamaica Customs Agency", url: "#", desc: "Importing personal effects and vehicles" },
];

export default RETURN_STEPS;
