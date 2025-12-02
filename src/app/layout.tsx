import type { Metadata } from 'next';
import './globals.css';
import { cn } from '@/lib/utils';
import { Toaster } from '@/components/ui/toaster';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Inter as FontSans, Playfair_Display as FontHeadline } from 'next/font/google';

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const fontHeadline = FontHeadline({
  subsets: ["latin"],
  variable: "--font-headline",
});


export const metadata: Metadata = {
  title: 'Website Desa Batumarta 1',
  description: 'Website Resmi Desa Batumarta 1',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={cn(
        'min-h-screen bg-background font-body antialiased flex flex-col',
        fontSans.variable,
        fontHeadline.variable
      )}>
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
