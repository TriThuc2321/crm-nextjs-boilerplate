import dynamic from 'next/dynamic';

export const TopTable = dynamic(() => import('./TopTable/TopTable.unableTest'));
export const FooterTable = dynamic(() => import('./FooterTable/FooterTable'));
