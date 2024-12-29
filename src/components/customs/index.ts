import dynamic from 'next/dynamic';

export const BaseTable = dynamic(() => import('./Table/BaseTable'));
