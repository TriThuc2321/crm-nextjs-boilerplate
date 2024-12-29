'use client';

import CustomTable from '@/components/customs/Table/CustomTable';
import { FooterTable, TopTable } from '@/components/users';
import { USER_COLUMNS } from '@/configs/user.config';
import { ROW_PER_PAGES } from '@/constants/table.constant';
import type { SharedSelection, SortDescriptor } from '@/libs/next-ui';
import type { IUser } from '@/services/mock/user.mock';
import { statusOptions, users } from '@/services/mock/user.mock';
import { SortDirection } from '@/types/common';
import { useSearchParams } from 'next/navigation';
import React, { useMemo, useState } from 'react';

export default function Users() {
  const searchParams = useSearchParams();

  const search = searchParams.get('search') ?? '';
  const status = searchParams.getAll('status');
  const statusFilter = status?.length
    ? status
    : statusOptions.map(option => option.uid);

  const [selectedKeys, setSelectedKeys] = useState<SharedSelection>(
    new Set([]),
  );
  const [visibleColumns, setVisibleColumns] = useState<SharedSelection>(
    new Set(USER_COLUMNS.map(column => column.colKey)),
  );

  const [rowsPerPage, setRowsPerPage] = useState(ROW_PER_PAGES[0]);
  const [sortDescriptor, setSortDescriptor] = useState<SortDescriptor>({
    column: 'id',
    direction: SortDirection.ASC,
  });
  const [page, setPage] = useState(1);

  const total = Math.ceil(users.length / Number(rowsPerPage));

  const headerColumns = useMemo(() => {
    return USER_COLUMNS.filter(column =>
      Array.from(visibleColumns).includes(column.colKey),
    );
  }, [visibleColumns]);

  const data = useMemo(() => {
    let filteredUsers = [...users];

    const hasSearchFilter = Boolean(search);
    if (hasSearchFilter) {
      filteredUsers = filteredUsers.filter(user =>
        user.name.toLowerCase().includes(search.toLowerCase()),
      );
    }
    if (Array.from(statusFilter).length !== statusOptions.length) {
      filteredUsers = filteredUsers.filter(user =>
        Array.from(statusFilter).includes(user.status),
      );
    }

    const start = (page - 1) * Number(rowsPerPage);
    const end = start + Number(rowsPerPage);

    filteredUsers = filteredUsers.slice(start, end);

    return filteredUsers.sort((a, b) => {
      const column = sortDescriptor.column as keyof IUser;
      const first = a[column];
      const second = b[column];
      const cmp = first < second ? -1 : first > second ? 1 : 0;

      return sortDescriptor.direction === SortDirection.ASC ? -cmp : cmp;
    });
  }, [users, search, statusFilter, sortDescriptor]);

  return (
    <>
      <h1 className="absolute top-8 text-3xl font-bold">Users</h1>
      <CustomTable<IUser>
        columns={headerColumns}
        dataKeyCol="id"
        dataSource={data}
        selectedKeys={selectedKeys}
        sortDescriptor={sortDescriptor}
        topContent={
          <TopTable
            visibleColumns={visibleColumns}
            onChangeVisibleColumns={setVisibleColumns}
            selectedKeys={selectedKeys}
            total={users.length}
          />
        }
        onSelectionChange={setSelectedKeys}
        onSortChange={setSortDescriptor}
        bottomContent={
          <FooterTable
            page={page}
            total={total}
            rowsPerPage={rowsPerPage}
            onRowsPerPageChange={setRowsPerPage}
            onChangePage={setPage}
          />
        }
      />
    </>
  );
}
