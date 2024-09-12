import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { LoadingSpinner } from '../LoadingSpinner';

describe('LoadingSpinner Component', () => {
  test('renders spinner without crashing', () => {
    render(<LoadingSpinner />);
    const spinnerElement = screen.getByRole('status');
    expect(spinnerElement).toBeInTheDocument();
  });

  test('applies correct styles based on props', () => {
    render(
      <LoadingSpinner
        color="red"
        background="blue"
        speed="2s"
      />
    );
    const spinnerElement = screen.getByRole('status');

    expect(spinnerElement).toHaveStyle('--spinner-border-top-color: red');
    expect(spinnerElement).toHaveStyle('--spinner-border-color: blue');
    expect(spinnerElement).toHaveStyle('--spinner-rotation-speed: 2s');
  });

  test('renders loading message when provided', () => {
    const message = 'Loading... Please wait';
    render(<LoadingSpinner message={message} />);
    
    const messageElement = screen.getByText(message);
    expect(messageElement).toBeInTheDocument();
  });

  test('does not render message when no message is provided', () => {
    render(<LoadingSpinner />);
    const messageElement = screen.queryByText(/Loading.../);
    expect(messageElement).not.toBeInTheDocument();
  });
});