'use client';

import type { TableProps } from '@/libs/next-ui';
import { Table } from '@/libs/next-ui';

export default function BaseTable(props: TableProps) {
  return (
    <Table
      isCompact
      aria-label="Table with custom cells, pagination and sorting"
      bottomContentPlacement="outside"
      checkboxesProps={{
        classNames: {
          wrapper: 'after:bg-primary after:text-primary text-background',
        },
      }}
      classNames={{
        wrapper: [
          'max-h-[calc(100vh-280px)]',
          'w-full',
          'bg-accent',
          'border-none',
          'shadow-none',
          'relative',
          'overflow-auto',
          'pt-0',
          'pr-0',
          'pl-0',
          'pb-2',
        ],
        th: [
          'text-base',
          'text-typography',
          'font-medium',
          'sticky',
          'top-0',
          'z-50',
          'pb-3',
          'pt-4',
          'bg-primary',
          'text-white',
        ],
        thead: ['[&>tr:last-of-type]:hidden'],
        tr: ['cursor-pointer h-12'],
        td: [
          // changing the rows border radius
          // first
          'group-data-[first=true]/tr:first:before:rounded-none',
          'group-data-[first=true]/tr:last:before:rounded-none',
          // middle
          'group-data-[middle=true]/tr:before:rounded-none',
          // last
          'group-data-[last=true]/tr:first:before:rounded-none',
          'group-data-[last=true]/tr:last:before:rounded-none',
        ],
      }}
      selectionMode="multiple"
      topContentPlacement="outside"
      {...props}
    />
  );
}
