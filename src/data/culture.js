// ─── Digital Jamaica: Culture Database ───
// Comprehensive cultural knowledge covering language, food, festivals, and spiritual life
// Created by Rohan Jowallah | © 2025 Digital Jamaica

export const CULTURAL_TOPICS = [
  {
    id: "patois",
    title: "Patois / Jamaican Creole",
    icon: "🗣️",
    preview: "More than slang — a full language with African, English, Spanish, and Taino roots. UNESCO recognizes it as a creole language.",
    description: "Jamaican Patois (or Jamaican Creole) is a rich, expressive language spoken by millions. It has its own grammar, syntax, and vocabulary drawn from West African languages (Akan, Igbo, Yoruba), English, Spanish, Taino, Hindi, and Chinese. While often dismissed as 'broken English,' linguists recognize it as a fully developed creole language. Louise Bennett-Coverley (Miss Lou) championed patois as a legitimate literary and performance language.",
    items: [
      { phrase: "Wah gwaan", meaning: "What's going on? (greeting)", usage: "Standard greeting, equivalent to 'How are you?'" },
      { phrase: "Mi deh yah", meaning: "I'm here / I'm good", usage: "Response to 'Wah gwaan' — means 'I'm present and alright'" },
      { phrase: "Nuh badda mi", meaning: "Don't bother me", usage: "Used when annoyed or wanting to be left alone" },
      { phrase: "Walk good", meaning: "Travel safely / Goodbye", usage: "A blessing for someone leaving — deeper than 'goodbye'" },
      { phrase: "Irie", meaning: "Everything is good/fine/peaceful", usage: "Can mean 'I'm well,' 'It's all good,' or 'That's nice'" },
      { phrase: "Nyam", meaning: "To eat", usage: "From the Akan/Wolof word for eat — 'Mi ah go nyam'" },
      { phrase: "Pickney", meaning: "Child/Children", usage: "From Portuguese 'pequeno' (small) — used across the Caribbean" },
      { phrase: "Yard", meaning: "Home / Jamaica itself", usage: "'Mi ah go ah yard' = 'I'm going home.' 'Back a yard' = Jamaica" },
      { phrase: "Big up yuhself", meaning: "Respect / Celebrate yourself", usage: "Encouragement, praise, or greeting" },
      { phrase: "One one coco full basket", meaning: "Steady effort achieves results", usage: "Patience and persistence proverb" },
      { phrase: "Every hoe ha dem stick a bush", meaning: "Everyone has their match/place", usage: "Reassurance that everyone belongs somewhere" },
      { phrase: "Cockroach nuh business inna fowl fight", meaning: "Don't get involved in others' conflicts", usage: "Warning against inserting yourself where you don't belong" },
      { phrase: "Sorry fi maga dog, maga dog turn round bite yuh", meaning: "Beware of misplaced sympathy", usage: "Warning that helping the wrong person can backfire" },
      { phrase: "Duppy know who fi frighten", meaning: "Bullies know who to target", usage: "The powerful pick on those they know won't fight back" },
      { phrase: "Wha sweet nanny goat ah go run him belly", meaning: "Indulgence has consequences", usage: "What feels good now may cause problems later" },
      { phrase: "Puss an dog nuh have di same luck", meaning: "Not everyone is equally fortunate", usage: "People have different circumstances and privileges" },
    ]
  },
  {
    id: "food",
    title: "Food Traditions",
    icon: "🍛",
    preview: "Ackee and saltfish isn't just breakfast — it's national identity. Jamaican cuisine reflects African, Taino, British, Indian, and Chinese influences.",
    description: "Jamaican food tells the story of every people who touched the island. Taino cassava became bammy. African cooking techniques created jerk. Indian immigration brought curry. Chinese immigrants added stir-fry methods. British traditions shaped the Sunday dinner. The result is one of the most flavorful cuisines on Earth — bold, aromatic, and deeply tied to community and celebration.",
    items: [
      { name: "Ackee & Saltfish", origin: "National Dish", desc: "Ackee (West African fruit brought on slave ships) cooked with salted codfish, onions, tomatoes, and scotch bonnet. Sunday breakfast staple." },
      { name: "Jerk Chicken/Pork", origin: "Maroon tradition, Portland", desc: "Meat rubbed with scotch bonnet, allspice (pimento), thyme, and slow-smoked over pimento wood. Originated with the Maroons in the Blue Mountains." },
      { name: "Rice & Peas", origin: "African-Caribbean", desc: "Rice cooked with kidney beans (or gungo peas), coconut milk, thyme, and scotch bonnet. THE Sunday dinner side dish — non-negotiable." },
      { name: "Curry Goat", origin: "Indian heritage", desc: "Goat meat slow-cooked in Jamaican curry powder with scotch bonnet, thyme, and allspice. Arrived with Indian indentured workers post-1845." },
      { name: "Bammy", origin: "Taino heritage", desc: "Flatbread made from grated cassava — a direct survival of Taino cuisine. Soaked in coconut milk and fried or steamed." },
      { name: "Mannish Water", origin: "African tradition", desc: "Goat head soup with yam, banana, cho-cho, and spices. Believed to be an aphrodisiac. A party and celebration staple." },
      { name: "Festival", origin: "Jamaican creation", desc: "Sweet fried dumplings — slightly sweet, golden, and crispy. Essential companion to jerk chicken and fried fish." },
      { name: "Sorrel", origin: "West African (hibiscus)", desc: "Hibiscus-based drink spiced with ginger, cloves, and rum. Traditional Christmas drink that marks the holiday season." },
      { name: "Escovitch Fish", origin: "Spanish-Jewish heritage", desc: "Fried whole fish topped with pickled vegetables (onions, carrots, scotch bonnet) in vinegar sauce. 'Escovitch' from Spanish 'escabeche.'" },
      { name: "Patties", origin: "British pasty influence", desc: "Flaky golden pastry filled with spiced beef, chicken, or vegetables. Jamaica's most popular street food — often eaten in coco bread." },
      { name: "Breadfruit", origin: "Brought from Tahiti 1793", desc: "Captain Bligh brought breadfruit to feed enslaved people cheaply. It became a beloved staple — roasted, fried, or boiled." },
      { name: "Callaloo", origin: "West African leafy green", desc: "Jamaican spinach-like green cooked with saltfish, onions, tomatoes, and scotch bonnet. Breakfast staple alongside ackee." },
    ]
  },
  {
    id: "festivals",
    title: "Festivals & Celebrations",
    icon: "🎉",
    preview: "From Carnival to Emancipation Day, Jamaica celebrates with music, colour, and community spirit year-round.",
    description: "Jamaica's festival calendar reflects its layered history — African-derived celebrations coexist with Christian holidays, independence commemorations, and modern music festivals. Community celebrations, from Nine Night to harvest festivals, remain vital to Jamaican social life.",
    items: [
      { name: "Emancipation Day", date: "August 1", desc: "Celebrates the end of slavery in 1838. Dawn ceremonies, cultural events, and national reflection. A national holiday." },
      { name: "Independence Day", date: "August 6", desc: "Jamaica's birthday. Grand Gala celebrations at the National Stadium, street dances, flag ceremonies, and national pride." },
      { name: "Reggae Sumfest", date: "July", desc: "The largest reggae/dancehall festival in the world. Held in Montego Bay — 'Dancehall Night' and 'International Night' draw global crowds." },
      { name: "Jamaica Carnival", date: "March–April", desc: "Soca, mas (masquerade) bands, and fetes. Growing celebration influenced by Trinidad Carnival but with distinct Jamaican energy." },
      { name: "Jonkonnu (John Canoe)", date: "December 26", desc: "Ancient masquerade tradition with elaborate costumes — Pitchy-Patchy, Horse Head, Devil, and Belly Woman. Rooted in West African and colonial-era traditions." },
      { name: "Accompong Maroon Festival", date: "January 6", desc: "Annual celebration at Accompong in St. Elizabeth honouring the 1739 peace treaty. Features Kromanti drumming, traditional ceremonies, and Maroon cultural displays." },
      { name: "Jamaica Day", date: "Last Friday in February", desc: "Celebration of Jamaican culture — schools and workplaces celebrate with traditional dress, food, music, and cultural activities." },
      { name: "Nine Night", date: "After a death", desc: "Nine nights of mourning and celebration after someone passes. Food, music, storytelling, and community gathering. The spirit is 'set free' on the ninth night." },
      { name: "Rebel Salute", date: "January", desc: "Roots reggae festival founded by Tony Rebel. Strictly 'ital' (no meat, no alcohol) — a conscious celebration of reggae and Rastafari culture." },
      { name: "Bob Marley Birthday Celebration", date: "February 6", desc: "Annual tribute concert at the Bob Marley Museum (56 Hope Road, Kingston). Music, art, and celebration of Jamaica's most famous son." },
    ]
  },
  {
    id: "spiritual",
    title: "Spiritual Life",
    icon: "🕊️",
    preview: "Christianity is dominant, but Jamaica's spiritual landscape includes Rastafari, Revivalism, Kumina, and more — reflecting African spiritual continuity.",
    description: "Jamaica has the highest number of churches per square mile of any country. Christianity arrived with colonizers, but African spiritual practices survived and adapted — creating uniquely Jamaican spiritual expressions. Rastafari, born in Jamaica, became a global movement. The tension between 'churchianity' and African-derived spirituality remains a vibrant part of Jamaican life.",
    items: [
      { name: "Rastafari", desc: "Born in Jamaica in the 1930s after the coronation of Ethiopian Emperor Haile Selassie I (Ras Tafari). Combines Biblical interpretation, Pan-Africanism, and naturalist living. Gave birth to reggae music. Ital diet, dreadlocks, and Nyabinghi drumming are sacred practices. Not just a religion — a way of life." },
      { name: "Revivalism", desc: "Afro-Christian syncretic tradition combining African spiritual practices with Christianity. Revival Zion is more Christian-aligned; Pukkumina (Pocomania) retains stronger African elements. Features spirit possession, drumming, and healing ceremonies." },
      { name: "Kumina", desc: "Kongolese-derived spiritual practice strongest in St. Thomas parish. Features powerful drumming (kbandu and playing cast drums), spirit possession, and ancestral veneration. Practiced by descendants of post-emancipation African immigrants." },
      { name: "Ethiopian Orthodox", desc: "Connected to Rastafari through the Haile Selassie link. Several Ethiopian Orthodox churches operate in Jamaica, bridging Rasta spirituality with organized Christianity." },
      { name: "Seventh-day Adventist", desc: "One of Jamaica's largest denominations. Adventist influence on diet (many Jamaican vegetarians), education (several major schools), and Saturday sabbath observance is significant." },
      { name: "Baptist", desc: "Historically the church of resistance. George Liele founded Jamaica's first Baptist church in 1783. Sam Sharpe and Paul Bogle were Baptist deacons. The church has deep roots in the freedom struggle." },
      { name: "Obeah", desc: "African-derived spiritual practice involving herbal medicine, divination, and spiritual protection. Criminalized during colonial era but still practiced. Often misunderstood — ranges from herbal healing to spiritual consultation." },
      { name: "Nine Night", desc: "Though not a religion, the Nine Night death tradition reflects deep spiritual beliefs about the journey of the soul. The combination of mourning, celebration, food, and music over nine nights helps the spirit transition." },
    ]
  }
];

// ─── Jamaica Proverbs & Wisdom ───
export const PROVERBS = [
  { text: "One one coco full basket", meaning: "Patience and persistence lead to success" },
  { text: "Every hoe ha dem stick a bush", meaning: "Everyone has their place/match" },
  { text: "Cockroach nuh business inna fowl fight", meaning: "Stay out of conflicts that don't concern you" },
  { text: "Sorry fi maga dog, maga dog turn round bite yuh", meaning: "Misplaced sympathy can backfire" },
  { text: "Duppy know who fi frighten", meaning: "Bullies target the vulnerable" },
  { text: "Wha sweet nanny goat ah go run him belly", meaning: "Indulgence has consequences" },
  { text: "Puss an dog nuh have di same luck", meaning: "Not everyone is equally fortunate" },
  { text: "When trouble catch yuh, pickney shut fit yuh", meaning: "Desperation makes anything acceptable" },
  { text: "New broom sweep clean, but ole broom know di corners", meaning: "Experience has value over novelty" },
  { text: "If yuh cyaan hear, yuh mus feel", meaning: "If you won't listen to advice, you'll learn the hard way" },
  { text: "Stone at di bottom of river nuh know sun hot", meaning: "The privileged don't understand others' struggles" },
  { text: "Play wid puppy, puppy lick yuh face", meaning: "Familiarity breeds contempt / boundaries matter" },
  { text: "Chicken merry, hawk deh near", meaning: "Be vigilant during good times — danger may be close" },
  { text: "What is fi yuh cyaan be un-fi-yuh", meaning: "What is meant for you will find you" },
  { text: "Finger neva say 'look here,' him say 'look deh'", meaning: "People point out others' faults, not their own" },
];

export default CULTURAL_TOPICS;
