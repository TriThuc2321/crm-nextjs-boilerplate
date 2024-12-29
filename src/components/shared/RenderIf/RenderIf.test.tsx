import { render, screen } from '@testing-library/react';
import RenderIf from './RenderIf';

describe('RenderIf', () => {
  test('renders children when condition is true', () => {
    const testChild = <div data-testid="test-child">Test Content</div>;

    render(<RenderIf condition={true}>{testChild}</RenderIf>);

    expect(screen.getByTestId('test-child')).toBeInTheDocument();
  });

  test('does not render children when condition is false', () => {
    const testChild = <div data-testid="test-child">Test Content</div>;

    render(<RenderIf condition={false}>{testChild}</RenderIf>);

    expect(screen.queryByTestId('test-child')).not.toBeInTheDocument();
  });
});
