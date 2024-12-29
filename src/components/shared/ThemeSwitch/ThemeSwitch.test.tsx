import { fireEvent, render, screen } from '@testing-library/react';
import { useTheme } from 'next-themes';
import ThemeSwitch from './ThemeSwitch';

jest.mock('next-themes', () => ({
  useTheme: jest.fn(),
}));

describe('ThemeSwitch', () => {
  const mockSetTheme = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders theme switch button with sun icon in light mode', () => {
    (useTheme as jest.Mock).mockReturnValue({
      theme: 'light',
      setTheme: mockSetTheme,
    });

    render(<ThemeSwitch />);

    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();

    const sunIcon = document.querySelector('svg');
    expect(sunIcon).toHaveClass('text-typography-secondary');

    fireEvent.click(button);
    expect(mockSetTheme).toHaveBeenCalledWith('dark');
  });

  test('renders theme switch button with moon icon in dark mode', () => {
    (useTheme as jest.Mock).mockReturnValue({
      theme: 'dark',
      setTheme: mockSetTheme,
    });

    render(<ThemeSwitch />);

    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();

    const moonIcon = document.querySelector('svg');
    expect(moonIcon).toHaveClass('text-typography-secondary');

    fireEvent.click(button);
    expect(mockSetTheme).toHaveBeenCalledWith('light');
  });

  test('toggles theme when button is clicked', () => {
    (useTheme as jest.Mock).mockReturnValue({
      theme: 'light',
      setTheme: mockSetTheme,
    });

    render(<ThemeSwitch />);

    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();

    fireEvent.click(button);
    expect(mockSetTheme).toHaveBeenCalledWith('dark');

    fireEvent.click(button);
    expect(mockSetTheme).toHaveBeenCalledWith;
  });
});
