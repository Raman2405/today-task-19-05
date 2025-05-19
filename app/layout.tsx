import './globals.css';
import type { Metadata } from 'next';
import { Inter as FontSans, Playfair_Display as FontSerif } from 'next/font/google';
import { cn } from '@/lib/utils';
import { ThemeProvider } from '@/components/theme-provider';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

const fontSans = FontSans({ 
  subsets: ['latin'],
  variable: '--font-sans',
});

const fontSerif = FontSerif({ 
  subsets: ['latin'],
  variable: '--font-serif',
});

export const metadata: Metadata = {
  title: 'Elegant Hair Label Designs | Premium Product Packaging',
  description: 'Browse our collection of elegant, custom hair product label designs. Find inspiration for your brand with our premium packaging showcases.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(
        'min-h-screen bg-background font-sans antialiased',
        fontSans.variable,
        fontSerif.variable
      )}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}