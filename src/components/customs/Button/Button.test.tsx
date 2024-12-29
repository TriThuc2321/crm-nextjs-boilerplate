import { render, screen } from '@testing-library/react';
import MyButton from './Button';

describe('MyButton', () => {
  test('should render with primary color by default', () => {
    render(<MyButton>Click me</MyButton>);
    const button = screen.getByText(/Click me/i);
    expect(button).toHaveClass('bg-primary');
  });
});
