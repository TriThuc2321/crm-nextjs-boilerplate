import dynamic from 'next/dynamic';

export const ThemeSwitch = dynamic(() => import('./ThemeSwitch/ThemeSwitch'));
export const Header = dynamic(() => import('./Header/Header'));
export const Sidebar = dynamic(() => import('./Sidebar/Sidebar'));
