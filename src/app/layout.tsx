import ReactQueryProvider from '@/configs/react-query-provider';
import { ThemeProviders } from '@/configs/theme-provider';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import type { ReactNode } from 'react';
import { Toaster } from 'react-hot-toast';
import './globals.css';

const inter = Inter({
  subsets: ['latin', 'vietnamese'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-background`}>
        <ReactQueryProvider>
          <ThemeProviders>{children}</ThemeProviders>
          <ReactQueryDevtools initialIsOpen={false} buttonPosition="top-left" />
        </ReactQueryProvider>

        <Toaster
          containerStyle={{ zIndex: 99999 }}
          toastOptions={{
            style: { background: '#303641', color: '#fff' },
          }}
        />
      </body>
    </html>
  );
}

export const metadata: Metadata = {
  title: {
    template: '%s | Check in',
    default: 'Check in',
  },
  openGraph: {
    title: 'Check in',
    description: 'Check in',
  },
  description: 'Check in',
};
