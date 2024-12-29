import { ROW_PER_PAGE_OPTIONS } from '@/constants/table.constant';
import { Pagination, Select, SelectItem } from '@/libs/next-ui';

type FooterTableProps = {
  page: number;
  total: number;
  rowsPerPage: string;
  onRowsPerPageChange: (value: string) => void;
  onChangePage: (page: number) => void;
};
export default function FooterTable({
  page,
  total,
  rowsPerPage,
  onRowsPerPageChange,
  onChangePage,
}: FooterTableProps) {
  return (
    <div className="flex w-full justify-end">
      <Pagination
        showControls
        classNames={{
          cursor: 'text-white bg-primary',
        }}
        color="default"
        page={page}
        total={total}
        variant="light"
        onChange={onChangePage}
        aria-label="Pagination"
      />

      <Select
        color="primary"
        variant="bordered"
        className="max-w-20"
        onChange={e => onRowsPerPageChange(e.target.value)}
        value={rowsPerPage}
        items={ROW_PER_PAGE_OPTIONS}
        selectedKeys={[rowsPerPage]}
        aria-label="Rows per page"
      >
        {page => (
          <SelectItem className="text-typography" key={page.key}>
            {page.label}
          </SelectItem>
        )}
      </Select>
    </div>
  );
}
