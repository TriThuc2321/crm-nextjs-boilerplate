'use client';

import {
  ACTION_COLUMN_KEY,
  type ITableColumn,
} from '@/components/customs/Table/CustomTable';
import { Button, Chip } from '@/libs/next-ui';
import type { IUser } from '@/services/mock/user.mock';
import Image from 'next/image';
import React from 'react';
import { IoEyeOutline, IoTrash } from 'react-icons/io5';
import { LuPencil } from 'react-icons/lu';

const statusColorMap: Record<
  string,
  'success' | 'danger' | 'warning' | 'default' | 'primary' | 'secondary'
> = {
  active: 'success',
  paused: 'danger',
  vacation: 'warning',
};

export const USER_COLUMNS: ITableColumn<IUser>[] = [
  {
    title: 'Id',
    dataIndex: 'id',
    colKey: 'id',
    sortable: true,
  },
  {
    title: 'Age',
    dataIndex: 'age',
    colKey: 'age',
  },
  {
    title: 'Name',
    dataIndex: 'name',
    colKey: 'name',
    render: (value, record) => (
      <div className="flex min-w-max items-center gap-3">
        <Image
          className="rounded-full"
          width={32}
          height={32}
          src={record.avatar}
          alt={record.avatar}
        />
        <div className="flex flex-col">
          <p className="text-typography">{value}</p>
          <p className="text-xs text-typography-secondary">{record.email}</p>
        </div>
      </div>
    ),
  },
  {
    title: 'Role',
    dataIndex: 'role',
    colKey: 'role',
    render: (value, record) => (
      <div className="flex min-w-max flex-col">
        <p className="text-bold text-small capitalize">{value}</p>
        <p className="text-bold text-tiny capitalize text-default-500">
          {record.team}
        </p>
      </div>
    ),
  },
  {
    title: 'Team',
    dataIndex: 'team',
    colKey: 'team',
  },
  {
    title: 'Email',
    dataIndex: 'email',
    colKey: 'email',
  },
  {
    title: 'Status',
    dataIndex: 'status',
    colKey: 'status',
    render: value => (
      <Chip
        className="gap-1 border-none capitalize text-default-600"
        color={statusColorMap[value as keyof typeof statusColorMap]}
        size="sm"
        variant="dot"
      >
        {value}
      </Chip>
    ),
  },
  {
    title: 'Actions',
    colKey: ACTION_COLUMN_KEY,
    render: () => (
      <div className="relative flex items-center justify-end gap-2">
        <Button
          isIconOnly
          variant="bordered"
          className="max-h-8 min-w-8 max-w-8"
        >
          <IoEyeOutline className="text-base" />
        </Button>

        <Button
          isIconOnly
          variant="bordered"
          className="max-h-8 min-w-8 max-w-8"
        >
          <LuPencil className="text-base" />
        </Button>
        <Button
          isIconOnly
          variant="bordered"
          color="danger"
          className="max-h-8 min-w-8 max-w-8"
        >
          <IoTrash className="text-base" />
        </Button>
      </div>
    ),
  },
];
