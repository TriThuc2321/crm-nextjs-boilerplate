import { BsAppIndicator } from 'react-icons/bs';
import { GiMatterStates } from 'react-icons/gi';
import { GoTasklist } from 'react-icons/go';
import { LuLayoutDashboard, LuUser, LuUsers } from 'react-icons/lu';

export const MENU_LIST = [
  {
    id: 0,
    title: 'Dashboard',
    route: '/',
    icon: LuLayoutDashboard,
  },
  {
    id: 1,
    title: 'Applications',
    route: '/applications',
    icon: BsAppIndicator,
  },
  {
    id: 2,
    title: 'States',
    route: '/states',
    icon: GiMatterStates,
  },
  {
    id: 4,
    title: 'Tasks',
    icon: GoTasklist,
    route: '/tasks',
  },
  {
    id: 5,
    title: 'Users',
    route: '/users',
    icon: LuUser,
  },
  {
    id: 6,
    title: 'Customers',
    icon: LuUsers,
    route: '/customers',
  },
];
