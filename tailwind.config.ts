import { nextui } from '@nextui-org/react';
import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/{components,app,appPages,configs}/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        accent: 'var(--color-accent)',
        background: 'var(--color-background)',
        typography: 'var(--color-typography)',
        'typography-secondary': 'var(--color-typography-secondary)',
      },
    },
  },
  darkMode: 'class',
  plugins: [nextui()],
} satisfies Config;
