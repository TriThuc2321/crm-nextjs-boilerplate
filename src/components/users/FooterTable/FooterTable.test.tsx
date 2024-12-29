import { fireEvent, render, screen } from '@testing-library/react';
import FooterTable from './FooterTable';

describe('FooterTable', () => {
  const defaultProps = {
    page: 1,
    total: 10,
    rowsPerPage: '10',
    onRowsPerPageChange: jest.fn(),
    onChangePage: jest.fn(),
  };

  test('renders pagination and rows per page select', () => {
    render(<FooterTable {...defaultProps} />);

    expect(screen.getByLabelText('Pagination')).toBeInTheDocument();
    expect(screen.getByLabelText('Rows per page')).toBeInTheDocument();
  });

  test('calls onChangePage when pagination is clicked', () => {
    render(<FooterTable {...defaultProps} />);

    const nextButton = screen.getByRole('button', {
      name: /next page button/i,
    });
    fireEvent.click(nextButton);

    expect(defaultProps.onChangePage).toHaveBeenCalledWith(2);
  });
});
