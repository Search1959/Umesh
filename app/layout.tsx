import type {Metadata} from 'next';
import { Playfair_Display, Source_Sans_3, Montserrat } from 'next/font/google';
import './globals.css';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
});

const sourceSans = Source_Sans_3({
  subsets: ['latin'],
  variable: '--font-source-sans',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
});

export const metadata: Metadata = {
  title: "Dr. Umesh Chowdhury's Clinic | Medical Clinic in Kolkata",
  description: "Trusted medical clinic in College Street, Kolkata. General consultation, diagnosis & treatment by Dr. Umesh Chowdhury. Call 098300 06969.",
  keywords: "doctor Kolkata, medical clinic College Street, general physician Kolkata, Dr Umesh Chowdhury",
  openGraph: {
    title: "Dr. Umesh Chowdhury's Clinic",
    description: "5-star rated medical clinic in Kolkata. Compassionate care for every patient.",
    type: 'website',
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${playfair.variable} ${sourceSans.variable} ${montserrat.variable} scroll-smooth`}>
      <body suppressHydrationWarning className="bg-[#F8F6F0] text-[#1A1A2E] font-source-sans">
        {children}
      </body>
    </html>
  );
}
