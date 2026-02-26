# 🇯🇲 Digital Jamaica — Learn · Connect · Contribute

**The Digital Memory & Learning System of Jamaica's Global Nation**

A focused platform that helps Jamaicans abroad learn about Jamaica, reconnect with identity and culture, share knowledge, and stay meaningfully engaged with the country.

> No remittances. No financial transactions. Just knowledge, belonging, and participation.

---

## 🔥 The Problem

Diaspora Jamaicans are connected economically but disconnecting culturally and historically. Children born abroad are losing touch with their heritage. Returning residents face reverse culture shock. Knowledge flows out but doesn't come back.

## 💡 The Solution

Digital Jamaica preserves identity while building future engagement — a cultural and intellectual home for Jamaica's global nation.

---

## 📋 Features

### 1. 🇯🇲 Learn About Jamaica (Core Engine)
Interactive learning space covering:
- **History** — Pre-colonial to present (7 detailed eras)
- **Music** — Mento → Ska → Rocksteady → Reggae → Dub → Dancehall
- **Culture** — Patois, food, festivals, spiritual life
- **Jamaica Today** — Innovation, youth culture, development, challenges

### 2. 🤖 Jamaica Guide AI
AI-powered conversational guide:
- Ask anything about Jamaica
- Culturally authentic responses
- Intergenerational design
- Sample queries: *"Explain Portland culture to my child"*, *"What was life like in Jamaica in the 1970s?"*

### 3. 🤝 Knowledge Exchange
Diaspora expertise as a national resource:
- 6 knowledge categories (Career, Tech, Education, Health, Business, Arts)
- Mentor profiles with ratings and availability
- Contribution types (talks, lessons, mentoring, Q&A, guides)

### 4. 🌟 Youth & Next Generation Mode
Structured learning pathways for children abroad:
- **Island Explorer** (ages 6–9) — 14 parish discovery modules
- **Young Historian** (ages 9–12) — Time-travel history journey
- **Culture Keeper** (ages 10–14) — Patois, food, music learning
- **Future Builder** (ages 13–17) — Innovation and opportunity exploration
- Heritage Tracking (family tree, photos, oral history)

### 5. 📍 Parish Communities
Digital spaces organized by:
- Parish (all 14)
- School alumni networks
- Church communities
- Sports and interest groups

### 6. ✈️ Return & Reconnection Guide
Learning-based preparation (not logistics):
- Understanding today's Jamaica
- Cultural reintegration
- Community volunteering
- Education pathways
- Network building

---

## 🗂️ Project Structure

```
digital-jamaica/
├── public/
│   └── images/
├── src/
│   ├── app/
│   │   ├── layout.js          # Root layout with metadata & SEO
│   │   └── page.js            # Main page
│   ├── components/
│   │   └── DigitalJamaicaApp.js  # Main application component
│   ├── data/
│   │   ├── index.js           # Central data exports
│   │   ├── history.js         # Timeline, National Heroes (7 eras, 7 heroes)
│   │   ├── music.js           # Music evolution, Sound Systems (8 genres)
│   │   ├── culture.js         # Patois, Food, Festivals, Spiritual (4 topics, 15+ proverbs)
│   │   ├── parishes.js        # All 14 parishes (comprehensive profiles)
│   │   ├── knowledge.js       # Categories, Mentors, Contribution types
│   │   ├── youth.js           # 4 learning journeys, Heritage features
│   │   ├── returnGuide.js     # 5-step return guide
│   │   └── guideResponses.js  # AI Guide demo responses (12+ topics)
│   ├── lib/
│   │   └── theme.js           # Design tokens, colours, typography
│   └── styles/
│       └── globals.css        # Global styles, animations, scrollbar
├── .env.example               # Environment variables template
├── .gitignore
├── jsconfig.json              # Path aliases
├── next.config.js             # Next.js configuration
├── package.json
├── vercel.json                # Vercel deployment config
└── README.md
```

---

## 📊 Data Coverage

| Database File | Records | Coverage |
|---|---|---|
| `history.js` | 7 eras + 7 heroes | Pre-colonial to present, all National Heroes |
| `music.js` | 8 genres + 5 sound systems | Complete evolution + glossary |
| `culture.js` | 4 topics + 15 proverbs | Patois (16 phrases), Food (12 dishes), Festivals (10), Spiritual (8) |
| `parishes.js` | 14 parishes | Full profiles with landmarks, famous sons, schools, economy |
| `knowledge.js` | 6 categories + 6 mentors | Topics, mentor profiles, contribution types |
| `youth.js` | 4 journeys + 4 heritage | 44 total modules with objectives |
| `returnGuide.js` | 5 steps | 25 topics with descriptions |
| `guideResponses.js` | 12+ responses | Demo AI responses with keyword matching |

---

## 🚀 Deployment

### Local Development
```bash
git clone https://github.com/your-username/digital-jamaica.git
cd digital-jamaica
npm install
npm run dev
```
Open [http://localhost:3000](http://localhost:3000)

### Deploy to Vercel
1. Push to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Vercel auto-detects Next.js — click Deploy
4. Done! 🎉

### Environment Variables (Optional)
Copy `.env.example` to `.env.local` for AI integration:
```bash
cp .env.example .env.local
```

---

## 🛣️ Roadmap

### Phase 1 — Foundation (Current)
- [x] Interactive learning modules
- [x] AI Guide (demo mode)
- [x] Parish communities
- [x] Youth learning journeys
- [x] Knowledge exchange profiles
- [x] Return guide

### Phase 2 — AI Integration
- [ ] Claude API integration for Jamaica Guide
- [ ] AI-generated learning content
- [ ] Personalized learning paths
- [ ] Voice interaction (patois recognition)

### Phase 3 — Community
- [ ] User accounts and profiles
- [ ] Parish community forums
- [ ] Mentor booking system
- [ ] Content contribution platform
- [ ] Family heritage tracking (database-backed)

### Phase 4 — Scale
- [ ] Mobile app (React Native)
- [ ] Offline access for learning modules
- [ ] Multi-language support
- [ ] Institutional partnerships
- [ ] Content moderation system

---

## 🎨 Design Philosophy

- **Black, Green & Gold** — Jamaica's national colours
- **Cormorant Garamond** — Elegant serif for heritage and gravitas
- **Outfit** — Modern sans-serif for clarity and readability
- **Dark theme** — Sophisticated, immersive experience
- **Gold accents** — Warmth and cultural richness

---

## 🤝 Contributing

Digital Jamaica welcomes contributions from the Jamaican diaspora and allies:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/patois-lessons`)
3. Commit changes (`git commit -m 'Add interactive patois lessons'`)
4. Push to branch (`git push origin feature/patois-lessons`)
5. Open a Pull Request

### Data Contributions
We especially welcome:
- Additional parish histories and stories
- Patois phrases and proverbs
- Historical corrections or additions
- Cultural event information
- Mentor profiles

---

## 📄 License

MIT License — See [LICENSE](LICENSE) for details.

---

## 👤 Author

**Rohan Jowallah, Ed.D.**
- Senior Instructional Designer, University of Central Florida
- AI Education Consultant
- Author, *AI, Pedagogy and Inclusion* (2025)
- Fellow, UK Higher Education Academy

---

*Built with ❤️ for Jamaica's global nation*

*"Out of many, one people."* 🇯🇲
