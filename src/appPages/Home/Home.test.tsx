import { render, screen } from '@testing-library/react';
import Home from './Home';

describe('Home component', () => {
  test('renders home page text', () => {
    render(<Home />);
    const text = screen.getByText(/home/i);
    expect(text).toBeInTheDocument();
  });
});
