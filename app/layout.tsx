import type {Metadata} from 'next';
import { Belleza, Open_Sans, Playfair_Display } from 'next/font/google';
import './globals.css'; // Global styles

const belleza = Belleza({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-belleza',
});

const openSans = Open_Sans({
  subsets: ['latin'],
  variable: '--font-open-sans',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
});

const cabritoFallback = Playfair_Display({ // Using Playfair as a gorgeous fallback for Cabrito Didone
  subsets: ['latin'],
  style: ['italic'],
  weight: ['700'],
  variable: '--font-cabritodidone',
});

export const metadata: Metadata = {
  title: 'IL PARTICOLARE | Design & Sistemi in Vetro',
  description: 'Since 1999. Esperti in sistemi in vetro, interor design e superfici d\'autore a Barletta.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="it" className={`${belleza.variable} ${openSans.variable} ${playfair.variable} ${cabritoFallback.variable}`}>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
