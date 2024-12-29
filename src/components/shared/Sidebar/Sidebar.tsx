'use client';

import logo from '@/assets/images/logo.png';
import { MENU_LIST } from '@/constants/menu.constant';
import { Button } from '@/libs/next-ui';
import classNames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { IoIosLogOut } from 'react-icons/io';
import type { IconType } from 'react-icons/lib';

export default function Sidebar() {
  return (
    <div className="flex h-full min-w-[260px] flex-col rounded-2xl bg-primary p-4 shadow-2xl">
      <Link href="/">
        <Image
          className="mx-auto"
          src={logo}
          width={64}
          height={64}
          alt="Logo"
        />
      </Link>

      <div className="mt-4 flex h-full flex-col gap-4 overflow-y-auto py-4">
        {MENU_LIST.map(menu => (
          <MenuItem key={menu.id} {...menu} />
        ))}
      </div>

      <div className="mt-auto pt-4">
        <Button className="flex w-full items-center justify-start gap-6 border border-white py-6">
          <IoIosLogOut className="text-xl text-white" />
          <p className="text-base font-medium text-white">Logout</p>
        </Button>
      </div>
    </div>
  );
}

type IMenuItem = {
  title: string;
  id: number;
  route: string;
  icon: IconType;
};

const MenuItem = ({ title, icon: Icon, route }: IMenuItem) => {
  const currentRoute = usePathname();

  const isActive =
    route === '/' ? route === currentRoute : currentRoute.startsWith(route);
  return (
    <Button
      className={classNames('w-full justify-start gap-6 py-6', {
        'bg-secondary font-medium shadow-sm': isActive,
      })}
      as={Link}
      href={route}
    >
      <Icon className="text-xl" />
      <p className="text-base">{title}</p>
    </Button>
  );
};
