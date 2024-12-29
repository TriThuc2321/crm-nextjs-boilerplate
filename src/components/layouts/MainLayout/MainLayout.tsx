import { Header, Sidebar } from '@/components/shared';
import type { ReactNode } from 'react';

type MainLayoutProps = {
  children: ReactNode;
};

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="flex h-screen w-full gap-4 p-4 pr-0">
      <Sidebar />

      <div className="flex w-full flex-col gap-4 overflow-auto pr-4">
        <Header />
        {children}
      </div>
    </div>
  );
}
