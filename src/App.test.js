import { render, screen } from '@testing-library/react';
import App from './App';

test('renders app title', () => {
  render(<App />);

  const linkElement = screen.getByText(/Click here for thoughts take picture examples/i);
  expect(linkElement).toBeInTheDocument();
});
