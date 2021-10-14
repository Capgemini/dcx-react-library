import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import React from 'react';
import '@testing-library/jest-dom';
import { ToolTip } from '../Tooltip';
import './tooltip.css';

describe('ToolTip', () => {
  const textToolTip = 'this is test content';
  const parentText = 'Testing tooltip';
  it('should display the tooltip  ', async () => {
    const { container } = render(
      <ToolTip
        content={textToolTip}
        direction="top"
        className="tooltipClass"
        background="red"
        color="white"
        delay={400}
      >
        <b> {parentText}</b>
      </ToolTip>
    );

    expect(container.querySelector('.tooltipContainer')).toBeTruthy();

    fireEvent.mouseEnter(screen.getByText(parentText));
    await waitFor(() => screen.getByText(textToolTip));
    expect(screen.getByText(textToolTip)).toBeInTheDocument();
    fireEvent.mouseLeave(screen.getByText(parentText));
  });
  it('should display the tooltip bottom ', async () => {
    const { container } = render(
      <ToolTip
        content={textToolTip}
        direction="bottom"
        className="tooltipClass"
        background="red"
        color="white"
        delay={400}
      >
        <b> {parentText}</b>
      </ToolTip>
    );

    expect(container.querySelector('.tooltipContainer')).toBeTruthy();

    fireEvent.mouseEnter(screen.getByText(parentText));
    await waitFor(() => screen.getByText(textToolTip));
    expect(screen.getByText(textToolTip)).toBeInTheDocument();
    fireEvent.mouseLeave(screen.getByText(parentText));
  });
  it('should display the tooltip top ', async () => {
    const textToolTip = 'this is test content';
    const { container } = render(
      <ToolTip
        content={textToolTip}
        direction="top"
        className="tooltipClass"
        background="red"
        color="white"
        delay={400}
      >
        <b> {parentText}</b>
      </ToolTip>
    );

    expect(container.querySelector('.tooltipContainer')).toBeTruthy();

    fireEvent.mouseOver(screen.getByText(parentText));
    await waitFor(() => screen.getByText(textToolTip));
    expect(screen.getByText(textToolTip)).toBeInTheDocument();
  });
  it('should display the tooltip left ', async () => {
    const textToolTip = 'this is test content';
    const { container } = render(
      <ToolTip
        content={textToolTip}
        direction="left"
        className="tooltipClass"
        background="red"
        color="white"
        delay={400}
      >
        <b> {parentText}</b>
      </ToolTip>
    );

    expect(container.querySelector('.tooltipContainer')).toBeTruthy();

    fireEvent.mouseOver(screen.getByText(parentText));
    await waitFor(() => screen.getByText(textToolTip));
    expect(screen.getByText(textToolTip)).toBeInTheDocument();
  });
  it('should display the tooltip right ', async () => {
    const textToolTip = 'this is test content';
    const { container } = render(
      <ToolTip
        content={textToolTip}
        direction="right"
        className="tooltipClass"
        background="red"
        color="white"
        delay={400}
      >
        <b> {parentText}</b>
      </ToolTip>
    );

    expect(container.querySelector('.tooltipContainer')).toBeTruthy();

    fireEvent.mouseOver(screen.getByText(parentText));
    await waitFor(() => screen.getByText(textToolTip));
    expect(screen.getByText(textToolTip)).toBeInTheDocument();
  });
});
