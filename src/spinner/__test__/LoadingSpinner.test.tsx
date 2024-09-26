import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { LoadingSpinner } from '../LoadingSpinner';

describe('LoadingSpinner Component', () => {
  test('should render spinner without crashing', () => {
    render(<LoadingSpinner />);
    const spinnerElement = screen.getByRole('status');
    expect(spinnerElement).toBeInTheDocument();
  });

  test('should apply correct styles for color, background, and speed based on props', () => {
    render(<LoadingSpinner color="red" background="blue" speed="3s" />);
    const spinnerElement = screen.getByRole('status');
    expect(spinnerElement).toHaveStyle('--spinner-border-top-color: red');
    expect(spinnerElement).toHaveStyle('--spinner-border-color: blue');
    expect(spinnerElement).toHaveStyle('--spinner-rotation-speed: 3s');
  });

  test('should apply the correct speed to the spinner when speed is provided', () => {
    render(<LoadingSpinner speed="4s" />);
    const spinnerElement = screen.getByRole('status');
    expect(spinnerElement).toHaveStyle('--spinner-rotation-speed: 4s');
  });

  test('should load the message when provided', () => {
    const message = 'Loading... Please wait';
    render(<LoadingSpinner message={message} />);

    const messageElement = screen.getByText(message);
    expect(messageElement).toBeInTheDocument();
  });

  test('should not render message when no message is provided', () => {
    render(<LoadingSpinner />);
    const messageElement = screen.queryByText(/Loading.../);
    expect(messageElement).not.toBeInTheDocument();
  });
});
