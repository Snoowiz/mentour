import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Alongside — Vetted Executive Mentorship & Community',
  description: 'Connect with experienced founders, operators, and executives. Gain practical milestone-driven insights and take your next strategic step with unwavering confidence.',
  openGraph: {
    title: 'Alongside — Vetted Executive Mentorship & Community',
    description: 'Connect with experienced founders, operators, and executives. Gain practical milestone-driven insights.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Alongside — Vetted Executive Mentorship & Community',
    description: 'Connect with experienced founders, operators, and executives. Gain practical milestone-driven insights.',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={plusJakartaSans.variable}>
      <body className="font-sans antialiased text-[#131b2e] bg-[#faf8ff] selection:bg-[#85f8c4] selection:text-[#002114]" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
