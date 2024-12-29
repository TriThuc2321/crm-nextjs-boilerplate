import { render, screen } from '@testing-library/react';
import Avatar from './Avatar';

describe('Avatar component', () => {
  test('renders image when src is provided', () => {
    const props = {
      src: '/test-image.jpg',
      alt: 'Test User',
    };
    render(<Avatar {...props} />);
    const image = screen.getByRole('img');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('alt', 'Test User avatar');
    expect(image).toHaveAttribute('src');
  });

  test('renders fallback avatar with first letter when no src provided', () => {
    const props = {
      alt: 'Test User',
    };
    render(<Avatar {...props} />);
    const fallback = screen.getByText('T');
    expect(fallback).toBeInTheDocument();
    const container = fallback.parentElement;
    expect(container).toHaveClass('bg-primary', 'rounded-full');
  });
});
