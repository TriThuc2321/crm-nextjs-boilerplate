'use client';

import Avatar from '@/components/customs/Avatar/Avatar';

// const ThemeSwitch = dynamic(() => import('./ThemeSwitch'), { ssr: false });

export default function Header() {
  return (
    <div className="flex items-center justify-end pr-4 pt-4">
      <Avatar alt="triThuc2321" />
    </div>
  );
}
