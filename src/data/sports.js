// ─── Digital Jamaica: Sports & Athletics Database ───
// Jamaica's extraordinary sporting achievements and culture
// Created by Rohan Jowallah | © 2025 Digital Jamaica

export const SPORTS_CATEGORIES = [
  {
    id: "track",
    title: "Track & Field",
    icon: "⚡",
    desc: "Jamaica's global dominance in sprinting is unmatched. From Usain Bolt's 9.58s 100m world record to Shelly-Ann Fraser-Pryce's multiple Olympic golds, Jamaica has produced the fastest humans in history. The annual ISSA Boys' & Girls' Championships (Champs) is the world's largest high school track meet.",
    highlights: [
      "Usain Bolt — 8 Olympic golds, world records 100m (9.58s) & 200m (19.19s)",
      "Shelly-Ann Fraser-Pryce — Multiple Olympic & World Championship golds",
      "Elaine Thompson-Herah — Double-double Olympic sprint champion",
      "Kishane Thompson — Paris 2024 Olympic 100m silver medallist",
      "Nickisha Pryce — 400m specialist, ran 48.57 at 2024 London Diamond League",
      "Ackera Nugent — Set national record 12.24 in 100m hurdles (2024)",
      "Trelawny parish produces sprinters at an impossible per-capita rate",
      "ISSA Champs fills the National Stadium with 30,000+ fans annually"
    ],
    color: "#FFD700"
  },
  {
    id: "football",
    title: "Football",
    icon: "⚽",
    desc: "The Reggae Boyz qualified for the 1998 FIFA World Cup in France, uniting the nation. The Reggae Girlz made history qualifying for the 2019 and 2023 Women's World Cups, supported by Bob Marley's daughter Cedella. In 2024-25, the U-15 Reggae Boyz captured the CONCACAF League B title.",
    highlights: [
      "1998 World Cup qualification — Jamaica's greatest sporting moment",
      "Reggae Girlz — 2019 & 2023 Women's World Cup qualifiers",
      "U-15 Reggae Boyz — 2025 CONCACAF League B champions",
      "Senior team defeated Honduras away for first time in 2024",
      "Cedella Marley's support transformed women's football",
      "Manning Cup & DaCosta Cup — fierce high school football rivalries",
      "Growing professional league development"
    ],
    color: "#2D7D3A"
  },
  {
    id: "cricket",
    title: "Cricket",
    icon: "🏏",
    desc: "Cricket is deeply embedded in Jamaican culture. Sabina Park in Kingston has hosted international matches since 1930. Jamaica consistently produces players for the West Indies team. The sport bridges social classes and communities across the island.",
    highlights: [
      "Sabina Park — historic home of Jamaican cricket since 1930",
      "George Headley — 'Black Bradman,' one of cricket's all-time greats",
      "Courtney Walsh — 519 Test wickets, first bowler to 500",
      "Chris Gayle — T20 cricket legend, holds multiple batting records",
      "Michael Holding — 'Whispering Death,' one of fastest bowlers ever",
      "Jimmy Adams, Wavell Hinds, Marlon Samuels among modern stars",
      "Jamaica Tallawahs in Caribbean Premier League (CPL)"
    ],
    color: "#C44B4B"
  },
  {
    id: "netball",
    title: "Netball",
    icon: "🏀",
    desc: "Jamaica's Sunshine Girls are consistently ranked in the world's top 5 in netball. The sport is hugely popular, especially among women and girls, and the team has been a regular competitor in the Netball World Cup since the 1960s.",
    highlights: [
      "Sunshine Girls — Consistently world top 5 ranked",
      "Multiple Netball World Cup appearances since 1963",
      "Strong youth development programmes island-wide",
      "Netball is Jamaica's most popular women's sport",
      "Regular competitors in Fast5 Netball World Series"
    ],
    color: "#FF6B35"
  },
  {
    id: "bobsled",
    title: "Bobsled & Winter Sports",
    icon: "🛷",
    desc: "The 1988 Jamaican bobsled team inspired the movie 'Cool Runnings.' Against all odds, Jamaica from the tropics competed in the Winter Olympics. The team has continued to compete, with the women's team also qualifying for the 2018 and 2022 Winter Olympics.",
    highlights: [
      "1988 Calgary Olympics — legendary debut inspired 'Cool Runnings'",
      "Women's bobsled team qualified for 2018 & 2022 Winter Olympics",
      "Jamaica continues to develop winter sports athletes",
      "Symbol of Jamaican determination and spirit",
      "Unique cultural phenomenon — tropical island in winter games"
    ],
    color: "#4A7FB5"
  },
  {
    id: "boxing",
    title: "Boxing & Combat Sports",
    icon: "🥊",
    desc: "Jamaica has a proud boxing tradition. From the amateur ranks to professional glory, Jamaican boxers have competed on the world stage. The sport continues to produce talented fighters from Kingston's gyms.",
    highlights: [
      "Mike McCallum — 'The Body Snatcher,' three-division world champion",
      "Trevor Berbick — Heavyweight champion, last man to fight Muhammad Ali",
      "Nicholas Walters — WBA Featherweight champion",
      "Strong amateur boxing programme",
      "Growing MMA and combat sports scene"
    ],
    color: "#8B4513"
  }
];

export const SPORTING_EVENTS = [
  { name: "ISSA Boys' & Girls' Championships (Champs)", when: "March/April", where: "National Stadium, Kingston", desc: "World's largest high school track meet. 30,000+ fans. Jamaica's Super Bowl." },
  { name: "Manning Cup", when: "Football season", where: "Kingston & St. Andrew", desc: "Premier high school football competition. KC vs JC rivalry is legendary." },
  { name: "DaCosta Cup", when: "Football season", where: "Rural parishes", desc: "Rural high school football championship — Cornwall College, Munro, Glenmuir." },
  { name: "Jamaica Premier League", when: "Year-round", where: "Island-wide", desc: "Professional football league with clubs from across Jamaica." },
  { name: "Caribbean Premier League (CPL)", when: "August-October", where: "Sabina Park & Caribbean", desc: "Jamaica Tallawahs compete in T20 cricket tournament." },
  { name: "Reggae Marathon", when: "December", where: "Negril", desc: "Annual marathon along Negril's coastline — scenic and challenging." },
];

export default SPORTS_CATEGORIES;
