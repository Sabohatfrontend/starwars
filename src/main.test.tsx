import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import App from './App';

describe('Main App Rendering:', () => {
  it('renders App', () => {
    const { container } = render(<App />);
    expect(container).toBeInTheDocument();
  });
});
