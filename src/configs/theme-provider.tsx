'use client';

import { ThemeMode } from '@/types/common';
import { NextUIProvider } from '@nextui-org/react';
import { ThemeProvider } from 'next-themes';

export function ThemeProviders({ children }: { children: React.ReactNode }) {
  return (
    <NextUIProvider>
      <ThemeProvider
        attribute="data-theme"
        themes={[ThemeMode.DARK, ThemeMode.LIGHT, ThemeMode.SYSTEM]}
        defaultTheme={ThemeMode.LIGHT}
        enableSystem
      >
        {children}
      </ThemeProvider>
    </NextUIProvider>
  );
}
