import { render, screen } from '@testing-library/react';
import MainLayout from './MainLayout';

jest.mock('@/components/shared', () => ({
  Header: () => <div data-testid="header">Header</div>,
  Sidebar: () => <div data-testid="sidebar">Sidebar</div>,
}));

describe('MainLayout', () => {
  test('renders header, sidebar and children correctly', () => {
    const testChild = <div data-testid="test-child">Test Child</div>;

    render(<MainLayout>{testChild}</MainLayout>);

    expect(screen.getByTestId('header')).toBeInTheDocument();
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    expect(screen.getByTestId('test-child')).toBeInTheDocument();
  });
});
