// ─── Digital Jamaica: Knowledge Exchange Database ───
// Diaspora expertise categories, mentor profiles, and contribution system
// Created by Rohan Jowallah | © 2025 Digital Jamaica

export const KNOWLEDGE_CATEGORIES = [
  {
    id: "career",
    title: "Career Guidance",
    icon: "💼",
    desc: "Share professional pathways and industry insights",
    count: 47,
    topics: [
      "Resume and CV preparation",
      "Interview techniques",
      "Career transitions",
      "Professional certifications",
      "Networking strategies",
      "Salary negotiation",
      "Remote work opportunities",
      "Industry-specific pathways"
    ]
  },
  {
    id: "tech",
    title: "Technology & Innovation",
    icon: "💻",
    desc: "Digital skills, coding, and tech entrepreneurship",
    count: 32,
    topics: [
      "Software development",
      "Data science and AI",
      "Cybersecurity",
      "Cloud computing",
      "Mobile app development",
      "Tech startup building",
      "Digital marketing",
      "UX/UI design"
    ]
  },
  {
    id: "education",
    title: "Education & Scholarships",
    icon: "🎓",
    desc: "University guidance, applications, and funding",
    count: 58,
    topics: [
      "University application process",
      "Scholarship databases",
      "Graduate school preparation",
      "Study abroad programs",
      "Financial aid navigation",
      "Standardized test prep",
      "Academic research skills",
      "PhD and postdoc paths"
    ]
  },
  {
    id: "health",
    title: "Health & Wellness",
    icon: "🏥",
    desc: "Medical careers, mental health, and wellbeing",
    count: 23,
    topics: [
      "Nursing and medical careers",
      "Mental health awareness",
      "Nutrition and diet",
      "Fitness and exercise",
      "Public health careers",
      "Health insurance navigation",
      "Wellness for diaspora families",
      "Traditional and modern remedies"
    ]
  },
  {
    id: "business",
    title: "Business & Entrepreneurship",
    icon: "📊",
    desc: "Starting businesses, market knowledge, investment",
    count: 41,
    topics: [
      "Business plan development",
      "Access to funding",
      "Market research",
      "Import/export with Jamaica",
      "Real estate investment",
      "Franchise opportunities",
      "Social enterprise",
      "Diaspora business networks"
    ]
  },
  {
    id: "arts",
    title: "Arts & Creative Industries",
    icon: "🎨",
    desc: "Music, film, visual arts, and creative careers",
    count: 36,
    topics: [
      "Music production and distribution",
      "Film and media careers",
      "Visual arts and galleries",
      "Writing and publishing",
      "Fashion and design",
      "Theatre and performance",
      "Creative entrepreneurship",
      "Cultural preservation"
    ]
  }
];

export const FEATURED_MENTORS = [
  {
    id: "m1",
    name: "Dr. Andrea Campbell",
    initials: "AC",
    location: "Toronto, Canada",
    field: "Education",
    expertise: "University admissions & scholarship strategy",
    years: "15 years experience",
    bio: "Former university admissions officer who has helped over 200 Jamaican students secure scholarships to North American universities. Specializes in first-generation college students.",
    availability: "Weekends",
    sessions: 142,
    rating: 4.9
  },
  {
    id: "m2",
    name: "Marcus Thompson",
    initials: "MT",
    location: "London, UK",
    field: "Technology",
    expertise: "Software engineering & career pivots",
    years: "12 years experience",
    bio: "Senior software engineer at a FTSE 100 company. Started coding at UTech Jamaica and transitioned through the UK tech ecosystem. Mentors Jamaican developers entering the global tech market.",
    availability: "Evenings (GMT)",
    sessions: 87,
    rating: 4.8
  },
  {
    id: "m3",
    name: "Sharon Reid-Brown",
    initials: "SR",
    location: "New York, USA",
    field: "Healthcare",
    expertise: "Nursing careers & healthcare pathways",
    years: "20 years experience",
    bio: "Registered Nurse and clinical educator who navigated the US healthcare system from Jamaica. Now helps Jamaican-trained nurses with licensure, certification, and career advancement.",
    availability: "Flexible",
    sessions: 203,
    rating: 4.9
  },
  {
    id: "m4",
    name: "Kevin Williams",
    initials: "KW",
    location: "Miami, USA",
    field: "Business",
    expertise: "Entrepreneurship & market entry strategies",
    years: "10 years experience",
    bio: "Serial entrepreneur who built a Caribbean food import business from scratch. Advises on US market entry, business formation, and diaspora business networks.",
    availability: "Weekdays",
    sessions: 64,
    rating: 4.7
  },
  {
    id: "m5",
    name: "Dr. Nicole Brown-Stewart",
    initials: "NB",
    location: "Atlanta, USA",
    field: "Education",
    expertise: "K-12 education & curriculum development",
    years: "18 years experience",
    bio: "School principal and education consultant with experience in both Jamaican and US education systems. Helps families navigate education choices for Jamaican children abroad.",
    availability: "Weekends",
    sessions: 95,
    rating: 4.8
  },
  {
    id: "m6",
    name: "Ryan Chambers",
    initials: "RC",
    location: "Birmingham, UK",
    field: "Arts",
    expertise: "Music production & distribution",
    years: "8 years experience",
    bio: "Grammy-nominated music producer who grew up in Kingston's music scene. Mentors young Jamaican producers on global distribution, licensing, and building sustainable creative careers.",
    availability: "Evenings (GMT)",
    sessions: 52,
    rating: 4.9
  }
];

// ─── Contribution Types ───
export const CONTRIBUTION_TYPES = [
  { id: "talk", title: "Career Talk", desc: "Record a 15-30 minute talk about your professional journey", icon: "🎤", timeCommit: "30 min one-time" },
  { id: "lesson", title: "Recorded Lesson", desc: "Create an educational video on your area of expertise", icon: "🎬", timeCommit: "1-2 hours one-time" },
  { id: "mentor", title: "1-on-1 Mentoring", desc: "Schedule regular sessions with a mentee", icon: "🤝", timeCommit: "1-2 hours monthly" },
  { id: "qa", title: "Q&A Session", desc: "Host a live Q&A session for diaspora youth", icon: "❓", timeCommit: "1 hour one-time" },
  { id: "resource", title: "Resource Guide", desc: "Write a practical guide based on your experience", icon: "📝", timeCommit: "2-4 hours one-time" },
  { id: "review", title: "Application Review", desc: "Review university applications, resumes, or business plans", icon: "📋", timeCommit: "1-2 hours per review" },
];

export default KNOWLEDGE_CATEGORIES;
