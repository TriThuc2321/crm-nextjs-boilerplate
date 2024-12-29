'use client';

import { Button } from '@/libs/next-ui';
import { ThemeMode } from '@/types/common';
import { useTheme } from 'next-themes';
import { IoMoonOutline, IoSunnyOutline } from 'react-icons/io5';

const ThemeSwitch = () => {
  const { setTheme, theme } = useTheme();
  return (
    <div className="flex gap-2 rounded-full p-1">
      <Button
        className="h-8 min-h-8 w-8 min-w-8 rounded-full border border-typography"
        onClick={() =>
          setTheme(theme === ThemeMode.DARK ? ThemeMode.LIGHT : ThemeMode.DARK)
        }
        isIconOnly
        variant="light"
      >
        {theme === ThemeMode.DARK ? (
          <IoMoonOutline size={16} className="text-typography-secondary" />
        ) : (
          <IoSunnyOutline size={16} className="text-typography-secondary" />
        )}
      </Button>
    </div>
  );
};

export default ThemeSwitch;
