import '@/styles/globals.css';

export const metadata = {
  title: 'Digital Jamaica — Learn · Connect · Contribute',
  description: 'The Digital Memory & Learning System of Jamaica\'s Global Nation. A focused platform that helps Jamaicans abroad learn about Jamaica, reconnect with identity and culture, share knowledge, and stay meaningfully engaged.',
  keywords: ['Jamaica', 'diaspora', 'Jamaican culture', 'Jamaican history', 'patois', 'reggae', 'Caribbean', 'cultural heritage', 'Digital Jamaica'],
  authors: [{ name: 'Rohan Jowallah' }],
  creator: 'Rohan Jowallah',
  openGraph: {
    title: 'Digital Jamaica — Learn · Connect · Contribute',
    description: 'A cultural and intellectual home for Jamaica\'s global nation. No remittances. No financial transactions. Just knowledge, belonging, and participation.',
    url: 'https://digital-jamaica.vercel.app',
    siteName: 'Digital Jamaica',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Digital Jamaica — Learn · Connect · Contribute',
    description: 'The Digital Memory & Learning System of Jamaica\'s Global Nation.',
    creator: '@RohanJowallah',
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0A0A0A',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>{children}</body>
    </html>
  );
}
