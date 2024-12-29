import { MainLayout } from '@/components/layouts';
import type { ReactNode } from 'react';

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return <MainLayout>{children}</MainLayout>;
}
