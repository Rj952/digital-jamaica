// ─── Digital Jamaica: Youth & Next Generation Database ───
// Structured learning pathways for children of the Jamaican diaspora
// Created by Rohan Jowallah | © 2025 Digital Jamaica

export const YOUTH_JOURNEYS = [
  {
    id: "explorer",
    title: "Island Explorer",
    age: "6–9",
    desc: "Discover Jamaica's 14 parishes through stories, animals, and foods",
    icon: "🗺️",
    color: "#E8B741",
    modules: 14,
    progress: 0,
    overview: "Take a virtual trip around Jamaica! In each module, you'll visit a different parish, meet the animals that live there, taste the foods people eat, and hear stories from local children. By the end, you'll know Jamaica like the back of your hand.",
    moduleList: [
      { title: "Kingston — The Capital City", objectives: ["Identify Kingston on a map", "Name 3 landmarks", "Learn what a capital city does"] },
      { title: "St. Andrew — Mountain Views", objectives: ["Explore the Blue Mountains", "Learn about coffee growing", "Find the university"] },
      { title: "St. Thomas — Eastern Shores", objectives: ["Hear the story of Paul Bogle", "Visit Bath Hot Springs", "Learn about Kumina drums"] },
      { title: "Portland — The Green Parish", objectives: ["Discover how jerk chicken is made", "Explore the Blue Lagoon", "Learn about rafting"] },
      { title: "St. Mary — Spy Island!", objectives: ["Visit where James Bond was created", "Explore Firefly hilltop", "Draw a treasure map"] },
      { title: "St. Ann — Music & Gardens", objectives: ["Visit Bob Marley's birthplace", "Climb Dunn's River Falls", "Learn about Marcus Garvey"] },
      { title: "Trelawny — Speed & Nature", objectives: ["Learn about Usain Bolt's hometown", "Explore Cockpit Country", "Visit the Luminous Lagoon"] },
      { title: "St. James — Beach City", objectives: ["Explore Montego Bay", "Learn about Sam Sharpe", "Visit a coral reef"] },
      { title: "Hanover — The Clock Tower", objectives: ["Hear the story of the clock that went to the wrong place", "Explore Lucea", "Make a sundial"] },
      { title: "Westmoreland — Sunset Land", objectives: ["Watch a Negril sunset", "Learn about sugar cane", "Visit a lighthouse"] },
      { title: "St. Elizabeth — The Food Basket", objectives: ["Learn where Jamaica's food grows", "Visit the Maroons at Accompong", "Go on a Black River safari"] },
      { title: "Manchester — Cool Hills", objectives: ["Feel the cool mountain air", "Learn about bauxite", "Spot Jamaican birds"] },
      { title: "Clarendon — The Crossroads", objectives: ["Visit a Jamaican market", "Learn about citrus farming", "Try mineral water"] },
      { title: "St. Catherine — The Old Capital", objectives: ["Explore Spanish Town", "Visit the old cathedral", "Learn about Jamaica's governors"] },
    ]
  },
  {
    id: "historian",
    title: "Young Historian",
    age: "9–12",
    desc: "Travel through time and meet Jamaica's heroes and heroines",
    icon: "📚",
    color: "#2D7D3A",
    modules: 10,
    progress: 0,
    overview: "Become a time traveller! Journey through 500 years of Jamaican history, meet the brave people who shaped the nation, and understand how Jamaica became the country it is today. Each module includes stories, activities, and a 'Hero Profile' card you can collect.",
    moduleList: [
      { title: "The Taino — First Jamaicans", objectives: ["Learn who the Taino people were", "Understand what 'Xaymaca' means", "Create a Taino artifact drawing"] },
      { title: "When the Ships Came", objectives: ["Understand colonization", "Learn about the Spanish period", "Map Columbus's journey"] },
      { title: "The Maroons — Mountain Warriors", objectives: ["Meet Queen Nanny and Cudjoe", "Learn guerrilla warfare tactics", "Create a Hero Profile card"] },
      { title: "Slavery & Resistance", objectives: ["Understand slavery (age-appropriate)", "Learn about resistance movements", "Read stories of bravery"] },
      { title: "Sam Sharpe — The Preacher Rebel", objectives: ["Learn about the Christmas Rebellion", "Understand how slaves fought for freedom", "Create a Hero Profile card"] },
      { title: "Paul Bogle — Voice of the People", objectives: ["Learn about the Morant Bay Rebellion", "Understand what justice means", "Write a letter to Paul Bogle"] },
      { title: "Marcus Garvey — Look for Me in the Whirlwind", objectives: ["Meet the man who inspired millions", "Learn about Pan-Africanism (simplified)", "Design a UNIA-inspired banner"] },
      { title: "Road to Freedom", objectives: ["Learn about Norman Manley and Bustamante", "Understand what independence means", "Design your own country flag"] },
      { title: "August 6, 1962 — Independence!", objectives: ["Experience Independence Day", "Learn the national anthem and pledge", "Create a celebration poster"] },
      { title: "Jamaica Today — Our Story Continues", objectives: ["Celebrate modern Jamaica's achievements", "Learn about Usain Bolt, Koffee, and more", "Write 'My Jamaica Vision'"] },
    ]
  },
  {
    id: "culturalist",
    title: "Culture Keeper",
    age: "10–14",
    desc: "Learn patois, cook Jamaican food, and explore music traditions",
    icon: "🎶",
    color: "#D4294B",
    modules: 12,
    progress: 0,
    overview: "Become a keeper of Jamaican culture! Learn to speak patois, cook traditional dishes, understand music evolution, and practice cultural traditions. This journey makes you the culture expert in your family.",
    moduleList: [
      { title: "Patois 101 — Wah Gwaan!", objectives: ["Learn 20 essential patois phrases", "Understand patois grammar basics", "Practice pronunciation"] },
      { title: "Patois 102 — Proverbs & Wisdom", objectives: ["Learn 10 Jamaican proverbs", "Understand the stories behind them", "Use them in conversation"] },
      { title: "Kitchen Session 1 — Rice & Peas", objectives: ["Learn to cook rice & peas", "Understand the Sunday dinner tradition", "Identify key ingredients"] },
      { title: "Kitchen Session 2 — Ackee & Saltfish", objectives: ["Prepare the national dish", "Learn ackee safety (unripe ackee is toxic)", "Understand the African origin of ackee"] },
      { title: "Kitchen Session 3 — Festival & Jerk", objectives: ["Make festival dumplings", "Understand jerk seasoning tradition", "Learn about Portland cooking heritage"] },
      { title: "Music Journey 1 — Mento to Ska", objectives: ["Listen to mento recordings", "Learn the ska beat", "Identify instruments"] },
      { title: "Music Journey 2 — Reggae & Bob", objectives: ["Understand the one-drop rhythm", "Learn Bob Marley's story", "Analyse a reggae song"] },
      { title: "Music Journey 3 — Dancehall & Beyond", objectives: ["Understand dancehall culture", "Learn about sound system history", "Create a playlist"] },
      { title: "Fashion & Style", objectives: ["Explore Jamaican fashion evolution", "Learn about national dress", "Design a Jamaica Day outfit"] },
      { title: "Sports — Beyond Running", objectives: ["Explore Jamaica's sporting heritage", "Learn about cricket, football, netball", "Understand the sprint tradition"] },
      { title: "Storytelling — Anansi", objectives: ["Meet Anansi the spider", "Read traditional Anansi stories", "Write your own Anansi tale"] },
      { title: "Culture Keeper Graduation", objectives: ["Complete a cultural knowledge quiz", "Create a cultural presentation", "Teach someone what you learned"] },
    ]
  },
  {
    id: "innovator",
    title: "Future Builder",
    age: "13–17",
    desc: "Explore Jamaica's innovation, technology, and opportunities",
    icon: "🚀",
    color: "#1A3C5E",
    modules: 8,
    progress: 0,
    overview: "Jamaica's future needs builders. Explore the technology ecosystem, innovation hubs, entrepreneurial opportunities, and social challenges that define modern Jamaica. This journey prepares you to contribute — whether from abroad or back home.",
    moduleList: [
      { title: "Jamaica's Economy — The Real Story", objectives: ["Understand Jamaica's economic structure", "Learn about GDP, debt, and trade", "Compare with other Caribbean nations"] },
      { title: "Tech & Innovation Ecosystem", objectives: ["Explore Kingston's tech scene", "Learn about Jamaica's BPO industry", "Meet young Jamaican tech founders"] },
      { title: "Social Challenges — Understanding, Not Judging", objectives: ["Understand crime and its root causes", "Learn about inequality", "Explore solutions being tried"] },
      { title: "Climate & Environment", objectives: ["Understand Jamaica's climate vulnerabilities", "Learn about sustainability initiatives", "Explore the Blue and John Crow Mountains UNESCO site"] },
      { title: "Diaspora Power", objectives: ["Understand the economic impact of the diaspora", "Learn about remittances and beyond", "Explore diaspora professional networks"] },
      { title: "Entrepreneurship — Starting Something", objectives: ["Learn business basics", "Study successful Jamaican entrepreneurs", "Develop a business idea for Jamaica"] },
      { title: "Education & Skills Gap", objectives: ["Compare education systems", "Identify opportunities to contribute", "Learn about scholarship creation"] },
      { title: "Your Vision for Jamaica", objectives: ["Synthesize everything learned", "Write a 'Vision for Jamaica' essay", "Present to family or community"] },
    ]
  }
];

// ─── Heritage Tracking Features ───
export const HERITAGE_FEATURES = [
  { id: "tree", icon: "🌳", title: "Family Tree", desc: "Map your Jamaican lineage and connections across the diaspora", features: ["Multi-generational mapping", "Parish connections", "Migration tracking", "Photo integration"] },
  { id: "photos", icon: "📷", title: "Photo Archive", desc: "Preserve family photos with stories and context", features: ["Photo upload and tagging", "Date and location metadata", "Story attachment", "Family sharing"] },
  { id: "roots", icon: "📍", title: "Parish Roots", desc: "Pin your family's origin parishes on the Jamaica map", features: ["Interactive parish map", "Multiple family branches", "Community connections", "Historical context"] },
  { id: "oral", icon: "📖", title: "Oral History", desc: "Record and preserve family stories and traditions", features: ["Audio recording", "Transcription", "Story categorization", "Generational tagging"] },
];

export default YOUTH_JOURNEYS;
