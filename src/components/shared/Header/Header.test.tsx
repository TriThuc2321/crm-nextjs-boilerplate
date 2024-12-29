import { render } from '@testing-library/react';
import Header from './Header';

describe('Header Component', () => {
  test('renders Header component correctly', () => {
    const { container } = render(<Header />);
    expect(container.firstChild).toHaveClass(
      'flex items-center justify-end pr-4 pt-4',
    );
  });
});
