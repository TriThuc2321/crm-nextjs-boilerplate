import dynamic from 'next/dynamic';

export const HomePage = dynamic(() => import('./Home/Home'));
export const UsersPage = dynamic(() => import('./Users/Users'));
