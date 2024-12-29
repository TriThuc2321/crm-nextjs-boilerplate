import { render, screen } from '@testing-library/react';
import CustomTable, {
  ACTION_COLUMN_KEY,
  type ITableColumn,
} from './CustomTable';

interface TestData {
  id: number;
  name: string;
  age: number;
}

describe('CustomTable', () => {
  const mockData: TestData[] = [
    { id: 1, name: 'John', age: 25 },
    { id: 2, name: 'Jane', age: 30 },
  ];

  const mockColumns: ITableColumn<TestData>[] = [
    { title: 'ID', colKey: 'id', dataIndex: 'id' },
    { title: 'Name', colKey: 'name', dataIndex: 'name', sortable: true },
    { title: 'Age', colKey: 'age', dataIndex: 'age' },
    {
      title: 'Actions',
      colKey: ACTION_COLUMN_KEY,
      render: (_, record) => <button>Edit {record.name}</button>,
    },
  ];

  test('renders table with correct columns and data', () => {
    render(
      <CustomTable<TestData>
        dataKeyCol="id"
        dataSource={mockData}
        columns={mockColumns}
      />,
    );

    // Check column headers
    expect(screen.getByText('ID')).toBeInTheDocument();
    expect(screen.getByText('Name')).toBeInTheDocument();
    expect(screen.getByText('Age')).toBeInTheDocument();
    expect(screen.getByText('Actions')).toBeInTheDocument();

    // Check data rows
    expect(screen.getByText('1')).toBeInTheDocument();
    expect(screen.getByText('John')).toBeInTheDocument();
    expect(screen.getByText('25')).toBeInTheDocument();
    expect(screen.getByText('Edit John')).toBeInTheDocument();

    expect(screen.getByText('2')).toBeInTheDocument();
    expect(screen.getByText('Jane')).toBeInTheDocument();
    expect(screen.getByText('30')).toBeInTheDocument();
    expect(screen.getByText('Edit Jane')).toBeInTheDocument();
  });

  test('renders empty state when no data', () => {
    render(
      <CustomTable<TestData>
        dataKeyCol="id"
        dataSource={[]}
        columns={mockColumns}
      />,
    );

    expect(screen.getByText('No users found')).toBeInTheDocument();
  });

  test('applies correct CSS classes for action column', () => {
    render(
      <CustomTable<TestData>
        dataKeyCol="id"
        dataSource={mockData}
        columns={mockColumns}
      />,
    );

    const actionCells = screen.getAllByText(/Edit/);
    actionCells.forEach(cell => {
      expect(cell.closest('td')).toHaveClass(
        'sticky-col-right',
        'sticky',
        'right-0',
      );
    });
  });

  test('renders custom content using render prop', () => {
    const customColumns: ITableColumn<TestData>[] = [
      ...mockColumns,
      {
        title: 'Custom',
        colKey: 'custom',
        render: (_, record) => <span>Custom {record.name}</span>,
      },
    ];

    render(
      <CustomTable<TestData>
        dataKeyCol="id"
        dataSource={mockData}
        columns={customColumns}
      />,
    );

    expect(screen.getByText('Custom John')).toBeInTheDocument();
    expect(screen.getByText('Custom Jane')).toBeInTheDocument();
  });
});
