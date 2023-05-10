import React from 'react';
import { Paragraph } from '../Paragraph';
import {
  render,
  screen,
} from '@testing-library/react';
import '@testing-library/jest-dom';



describe('Paragraph', () => {
  it('should render', () => {
    const { getByText } = render(<Paragraph className="paragraph" value="paragraph text" />);
    const paragraph = getByText('paragraph text');
    expect(paragraph).toBeTruthy();
  });

  it('Renders the given content in the paragraph.', () => {
    render(<Paragraph  className="paragraph" value="paragraph text"/>);
    expect(screen.getByText('paragraph text')).toBeInTheDocument();
  });
});
