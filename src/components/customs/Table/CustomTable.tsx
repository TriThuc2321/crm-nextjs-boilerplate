import type { TableProps } from '@/libs/next-ui';
import {
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from '@/libs/next-ui';
import classNames from 'classnames';
import { type ReactNode } from 'react';
import BaseTable from './BaseTable';

export interface ITableColumn<DataType extends Object> {
  title: string;
  colKey: string;
  dataIndex?: keyof DataType;
  colWidth?: number;
  sortable?: boolean;
  render?: (value: any, record: DataType, index: number) => ReactNode;
}

export interface ITableProps<DataType extends Object> extends TableProps {
  dataKeyCol: keyof DataType;
  dataSource: DataType[];
  columns: ITableColumn<DataType>[];
}

export const ACTION_COLUMN_KEY = 'actions';

export default function CustomTable<DataType extends Object>({
  dataKeyCol,
  dataSource,
  columns,
  ...rest
}: ITableProps<DataType>) {
  return (
    <BaseTable {...rest}>
      <TableHeader columns={columns}>
        {({ colKey, sortable, title }) => (
          <TableColumn
            className={classNames({
              'sticky-col-right sticky right-0': colKey === ACTION_COLUMN_KEY,
            })}
            key={colKey}
            align={colKey === ACTION_COLUMN_KEY ? 'end' : 'start'}
            allowsSorting={sortable}
          >
            {title}
          </TableColumn>
        )}
      </TableHeader>
      <TableBody emptyContent="No users found">
        {dataSource.map((data, index) => (
          <TableRow key={data[dataKeyCol] as React.Key}>
            {columns.map(column => {
              const { colKey, dataIndex, render } = column;
              return (
                <TableCell
                  key={colKey}
                  className={classNames({
                    'sticky-col-right sticky right-0 bg-accent':
                      colKey === ACTION_COLUMN_KEY,
                  })}
                >
                  {render ? (
                    render(dataIndex ? data[dataIndex] : null, data, index)
                  ) : (
                    <p>{String(dataIndex ? data[dataIndex] : '')}</p>
                  )}
                </TableCell>
              );
            })}
          </TableRow>
        ))}
      </TableBody>
    </BaseTable>
  );
}
