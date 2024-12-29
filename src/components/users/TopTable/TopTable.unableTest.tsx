import { USER_COLUMNS } from '@/configs/user.config';
import { useDebounce } from '@/hooks/useDebounce';
import type { SharedSelection } from '@/libs/next-ui';
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Input,
} from '@/libs/next-ui';
import { statusOptions } from '@/services/mock/user.mock';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { GoChevronDown, GoPlus, GoSearch } from 'react-icons/go';

type TopTableProps = {
  visibleColumns: SharedSelection;
  onChangeVisibleColumns: (value: SharedSelection) => void;
  selectedKeys: SharedSelection;
  total: number;
};

export default function TopTable({
  visibleColumns,
  onChangeVisibleColumns,
  selectedKeys,
  total,
}: TopTableProps) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();

  const createQueryString = (name: string, value: string | string[] = '') => {
    const params = new URLSearchParams(searchParams.toString());
    if (Array.isArray(value)) {
      params.delete(name);
      value.forEach(value => {
        params.append(name, value);
      });
    } else {
      params.set(name, value);
    }

    return `${pathname}?${params.toString()}`;
  };
  const [searchValue, setSearchValue] = useState('');

  const searchValueDebounce = useDebounce<string>(searchValue);

  useEffect(() => {
    router.push(createQueryString('search', searchValueDebounce));
    setSearchValue(searchValueDebounce);
  }, [searchValueDebounce]);

  const onStatusChange = (value: SharedSelection) => {
    router.push(createQueryString('status', Array.from(value).map(String)));
    setStatusFilter(value);
  };

  const [statusFilter, setStatusFilter] = useState<SharedSelection>('all');

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-end justify-between gap-3">
        <div className="flex items-center gap-4">
          <Input
            isClearable
            classNames={{
              base: 'w-full max-w-[300px]',
              inputWrapper: 'border-1 border-primary text-typography',
            }}
            placeholder="Search by name..."
            startContent={<GoSearch />}
            value={searchValue}
            variant="bordered"
            onClear={() => setSearchValue('')}
            onValueChange={setSearchValue}
            aria-label="Search by name"
          />
        </div>
        <div className="flex gap-3">
          <Dropdown aria-label="Status">
            <DropdownTrigger className="hidden sm:flex">
              <Button
                aria-label="Status"
                endContent={<GoChevronDown className="text-base" />}
                variant="bordered"
              >
                Status
              </Button>
            </DropdownTrigger>
            <DropdownMenu
              color="primary"
              disallowEmptySelection
              aria-label="Status"
              closeOnSelect={false}
              selectedKeys={statusFilter}
              selectionMode="multiple"
              onSelectionChange={onStatusChange}
            >
              {statusOptions.map(status => (
                <DropdownItem
                  aria-label="Status"
                  key={status.uid}
                  className="capitalize"
                >
                  {status.name}
                </DropdownItem>
              ))}
            </DropdownMenu>
          </Dropdown>

          <Button
            aria-label="Add new"
            endContent={<GoPlus className="text-base" />}
          >
            Add New
          </Button>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <p className="text-sm text-typography-secondary">
          {Array.from(selectedKeys).length} of {total} selected
        </p>

        <Dropdown aria-label="Table Columns">
          <DropdownTrigger className="hidden sm:flex">
            <Button
              endContent={<GoChevronDown className="text-base" />}
              variant="bordered"
              aria-label="Table Columns"
            >
              Columns
            </Button>
          </DropdownTrigger>
          <DropdownMenu
            color="primary"
            disallowEmptySelection
            aria-label="Table Columns"
            closeOnSelect={false}
            selectedKeys={visibleColumns}
            selectionMode="multiple"
            onSelectionChange={onChangeVisibleColumns}
          >
            {USER_COLUMNS.map(column => (
              <DropdownItem key={column.colKey} className="capitalize">
                {column.title}
              </DropdownItem>
            ))}
          </DropdownMenu>
        </Dropdown>
      </div>
    </div>
  );
}
