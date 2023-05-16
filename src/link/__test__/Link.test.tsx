import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Link } from '../Link';

describe('Link', () => {
  const link = 'https://www.google.com/';

  it('renders anchor tag with correct href', () => {
    render(<Link to={link} value="Google" />);
    const anchorElement = screen.getByRole('link', { name: 'Google' });
    expect(anchorElement).toBeInTheDocument();
    expect(anchorElement).toHaveAttribute('href', 'https://www.google.com/');
  });

  it('fires onClick event when clicked', () => {
    const onClickMock = jest.fn();
    render(<Link to={link} props={{ onClick: onClickMock }} value="Google" />);
    const anchorElement = screen.getByRole('link', { name: 'Google' });
    fireEvent.click(anchorElement);
    expect(onClickMock).toHaveBeenCalledTimes(1);
  });

  it('should be able to pass some extra properties', () => {
    render(<Link to={link} props={{ target: '_blank' }} value="Google" />);
    const anchorElement = screen.getByRole('link', { name: 'Google' });
    expect(anchorElement).toHaveAttribute('target', '_blank');
  });
});
