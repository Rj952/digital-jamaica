// ─── Digital Jamaica: Music Database ───
// Complete evolution of Jamaican music from folk traditions to global influence
// Created by Rohan Jowallah | © 2025 Digital Jamaica

export const MUSIC_EVOLUTION = [
  {
    id: "folk",
    genre: "Folk & Kumina",
    period: "Pre-1940s",
    desc: "Jamaica's oldest musical traditions rooted in African spiritual practices. Kumina drumming from the Kongo people, Junkanoo masquerade music, Revival hymns, and work songs formed the foundation. These rhythms — especially the African-derived polyrhythmic drumming — are the DNA of everything that followed.",
    color: "#7D5A3C",
    keyArtists: ["Kumina Queens", "Revival bands", "Junkanoo performers"],
    instruments: ["Kumina drums (Kbandu & Playing Cast)", "Bamboo fife", "Grater", "Rhumba box", "Shakers"],
    influence: "Direct ancestor of mento; African rhythmic patterns persist in reggae and dancehall"
  },
  {
    id: "mento",
    genre: "Mento",
    period: "1940s–1950s",
    desc: "Jamaica's original popular music. Acoustic, humorous, and community-based, mento is often mistaken for calypso but has distinct Jamaican character. Played with acoustic guitar, banjo, rhumba box, and bamboo saxophone. Artists like Lord Flea, Count Lasher, and Louise Bennett-Coverley brought mento to international audiences. The music addressed social issues through humor and innuendo.",
    color: "#D4A574",
    keyArtists: ["Lord Flea", "Count Lasher", "The Jolly Boys", "Louise Bennett-Coverley", "Laurel Aitken", "Lord Tanamo"],
    instruments: ["Acoustic guitar", "Banjo", "Rhumba box", "Bamboo saxophone", "Maracas", "Hand drums"],
    influence: "Mento's rhythms and social commentary tradition directly influenced ska and all subsequent Jamaican music"
  },
  {
    id: "ska",
    genre: "Ska",
    period: "1960s",
    desc: "The sound of independence! Upbeat, brass-driven, and joyful, ska emerged from the recording studios of Orange Street, Kingston. Musicians combined mento rhythms with American R&B heard on transistor radios. The emphasis on the offbeat (the 'skank') became ska's signature. The Skatalites, Prince Buster, and Millie Small ('My Boy Lollipop') made Jamaica impossible to ignore on the world stage.",
    color: "#E8B741",
    keyArtists: ["The Skatalites", "Prince Buster", "Millie Small", "Jimmy Cliff", "Desmond Dekker", "Toots & The Maytals", "Byron Lee & The Dragonaires", "Derrick Morgan"],
    instruments: ["Trumpet", "Trombone", "Saxophone", "Guitar (offbeat)", "Walking bass", "Drums", "Piano/Organ"],
    influence: "Ska spawned rocksteady, reggae, and inspired the 2-Tone ska revival in Britain (The Specials, Madness)"
  },
  {
    id: "rocksteady",
    genre: "Rocksteady",
    period: "1966–1968",
    desc: "Ska slowed down and got soulful. The tempo dropped, the bass became more prominent, and romantic vocals took center stage. Alton Ellis is crowned the 'Godfather of Rocksteady.' This brief but beautiful era introduced the bass-heavy, stripped-down sound that would define reggae. Vocal harmony trios like The Paragons and The Heptones perfected the style.",
    color: "#C4713B",
    keyArtists: ["Alton Ellis", "The Paragons", "The Heptones", "Hopeton Lewis", "Phyllis Dillon", "Delroy Wilson", "Ken Boothe", "Slim Smith"],
    instruments: ["Electric bass (prominent)", "Guitar (slower offbeat)", "Organ", "Drums", "Horns (reduced)"],
    influence: "The rocksteady rhythm pattern became the foundation of reggae; bass prominence became a Jamaican music signature"
  },
  {
    id: "reggae",
    genre: "Reggae",
    period: "1968–Present",
    desc: "The heartbeat of Jamaica and its greatest cultural export. The one-drop drum pattern, heavy bass, and offbeat guitar 'chop' created a sound inseparable from Rastafari, Pan-Africanism, and anti-colonial resistance. Bob Marley became the Third World's first superstar. Peter Tosh demanded equal rights. Jimmy Cliff brought reggae to cinema. Burning Spear channeled Marcus Garvey. In 2018, reggae was inscribed on UNESCO's Intangible Cultural Heritage list.",
    color: "#2D7D3A",
    keyArtists: ["Bob Marley & The Wailers", "Peter Tosh", "Bunny Wailer", "Jimmy Cliff", "Burning Spear", "Dennis Brown", "Gregory Isaacs", "Black Uhuru", "Steel Pulse", "Third World", "Inner Circle", "Freddie McGregor", "Luciano", "Sizzla", "Chronixx", "Protoje", "Koffee"],
    instruments: ["One-drop drums", "Bass guitar (melodic)", "Rhythm guitar (skank)", "Lead guitar", "Organ/Piano", "Horns", "Nyabinghi drums"],
    influence: "Reggae influenced punk, hip-hop, electronic music, and liberation movements across Africa, Latin America, and Asia. UNESCO Intangible Cultural Heritage since 2018."
  },
  {
    id: "dub",
    genre: "Dub",
    period: "1970s–Present",
    desc: "King Tubby, Lee 'Scratch' Perry, and Scientist stripped reggae to its bones and rebuilt it with echo, reverb, delay, and space. Dub was the first genre built in the studio — the mixing board became the instrument. The remix was born. These Kingston producers invented techniques that Electronic music, hip-hop, and ambient would adopt decades later.",
    color: "#4A2D7D",
    keyArtists: ["King Tubby", "Lee 'Scratch' Perry", "Scientist", "Augustus Pablo", "Prince Jammy", "Mad Professor", "Adrian Sherwood", "Ras Michael"],
    instruments: ["Mixing board", "Echo/Delay units", "Spring reverb", "Bass guitar", "Melodica (Augustus Pablo)", "Nyabinghi drums"],
    influence: "Dub invented remix culture, influenced electronic music (trip-hop, dubstep, drum & bass), and pioneered producer-as-artist"
  },
  {
    id: "dancehall",
    genre: "Dancehall",
    period: "1980s–Present",
    desc: "Digital revolution! When Sleng Teng riddim played on Wayne Smith's 'Under Mi Sleng Teng' (1985) — created entirely on a Casio keyboard — it changed everything. DJs (toasters/deejays) took center stage over singers. Yellowman broke barriers, Shabba Ranks went global, Bounty Killer and Beenie Man battled for supremacy, and Vybz Kartel became the most influential artist of his generation. Dancehall culture — the fashion, the dance moves, the attitudes — conquered the world.",
    color: "#D4294B",
    keyArtists: ["Yellowman", "Shabba Ranks", "Beenie Man", "Bounty Killer", "Buju Banton", "Vybz Kartel", "Sean Paul", "Shaggy", "Elephant Man", "Popcaan", "Spice", "Shenseea", "Skillibeng"],
    instruments: ["Digital synthesizers", "Drum machines", "Casio keyboards (early)", "Computer production (modern)", "Sound system"],
    influence: "Dancehall influenced hip-hop, Latin music (reggaeton), Afrobeats, and pop. Rihanna, Drake, and Major Lazer have all drawn directly from dancehall."
  },
  {
    id: "modern",
    genre: "Modern Fusion",
    period: "2010s–Present",
    desc: "A new generation blends reggae, dancehall, trap, Afrobeats, and R&B. Chronixx, Protoje, and Koffee lead the 'reggae revival.' Shenseea and Skillibeng push dancehall into new sonic territory. Jamaica's influence on global pop (Afrobeats, Latin trap, K-pop) is deeper than ever. The Kingston music ecosystem continues to innovate.",
    color: "#FF6B35",
    keyArtists: ["Chronixx", "Protoje", "Koffee", "Shenseea", "Skillibeng", "Lila Iké", "Sevana", "Jesse Royal", "Kabaka Pyramid"],
    instruments: ["Digital production", "Live instrumentation revival", "Global collaboration tools"],
    influence: "Jamaican sonic DNA is now embedded in global pop, Afrobeats, Latin trap, and K-pop production"
  }
];

// ─── Sound System Culture ───
export const SOUND_SYSTEMS = {
  title: "Sound System Culture",
  desc: "Before Spotify, before radio dominated, Jamaica had sound systems — mobile discotheques that were the lifeblood of community entertainment and the launching pad for every major Jamaican music genre. Sound system culture is where producers tested riddims, DJs (deejays) honed their craft, and communities gathered.",
  legendary: [
    { name: "Sir Coxsone Downbeat", operator: "Clement 'Coxsone' Dodd", era: "1950s–1970s", note: "Dodd went on to found Studio One, the 'Motown of Jamaica'" },
    { name: "Duke Reid the Trojan", operator: "Duke Reid", era: "1950s–1960s", note: "Fierce rivalry with Coxsone defined early Jamaican music" },
    { name: "King Tubby's Home Town Hi-Fi", operator: "King Tubby", era: "1970s", note: "Birthplace of dub music" },
    { name: "Stone Love Movement", operator: "Winston 'Wee Pow' Powell", era: "1972–Present", note: "The longest-running sound system, still active" },
    { name: "Killamanjaro", operator: "Various selectors", era: "1969–Present", note: "Dancehall institution" },
  ],
  glossary: [
    { term: "Selector", def: "The person who chooses and plays the records" },
    { term: "MC / Deejay", def: "The person who toasts (raps) over the music" },
    { term: "Dub Plate", def: "Exclusive, one-off acetate recording — a sound system's secret weapon" },
    { term: "Riddim", def: "An instrumental track over which multiple artists record vocal versions" },
    { term: "Clash", def: "A competitive battle between sound systems" },
    { term: "Rewind / Pull Up", def: "When a song is so good, the selector plays it again from the start" },
    { term: "Session / Dance", def: "The event where the sound system plays" },
  ]
};

export default MUSIC_EVOLUTION;
