import { render, screen } from '@testing-library/react';
import { usePathname } from 'next/navigation';
import Sidebar from './Sidebar';

jest.mock('next/navigation', () => ({
  usePathname: jest.fn(),
}));

jest.mock('@/constants/menu.constant', () => ({
  MENU_LIST: [
    {
      id: 1,
      title: 'Home',
      route: '/',
      icon: () => <span>HomeIcon</span>,
    },
    {
      id: 2,
      title: 'Dashboard',
      route: '/dashboard',
      icon: () => <span>DashboardIcon</span>,
    },
  ],
}));

describe('Sidebar', () => {
  beforeEach(() => {
    (usePathname as jest.Mock).mockReturnValue('/');
  });

  test('renders logo image', () => {
    render(<Sidebar />);
    const logo = screen.getByRole('img', { name: /logo/i });
    expect(logo).toBeInTheDocument();
  });

  test('renders menu items from MENU_LIST', () => {
    render(<Sidebar />);
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Dashboard')).toBeInTheDocument();
  });

  test('highlights active menu item', () => {
    render(<Sidebar />);
    const homeButton = screen.getByText('Home').closest('a');
    expect(homeButton).toHaveClass('bg-secondary');
  });

  test('renders logout button', () => {
    render(<Sidebar />);
    expect(screen.getByText('Logout')).toBeInTheDocument();
  });

  test('applies active class for nested routes', () => {
    (usePathname as jest.Mock).mockReturnValue('/dashboard/stats');
    render(<Sidebar />);
    const dashboardButton = screen.getByText('Dashboard').closest('a');
    expect(dashboardButton).toHaveClass('bg-secondary');
  });
});
