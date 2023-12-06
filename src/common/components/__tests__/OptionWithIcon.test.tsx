import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { OptionWithIcon } from '../OptionWithIcon';

describe('Option', () => {
  it('will render an option element with an icon', () => {
    render(
      <OptionWithIcon
        id="myId"
        label="option-label"
        value="option-value"
        icon="/capgemini.png"
        itemHoverBackgroundColor="red"
        iconStyle={{ width: '18px', height: '18px', borderRadius: '0px' }}
      />
    );

    expect(screen.getByTestId('myId').getAttribute('style')).toBe(
      'display: flex; align-items: center; justify-content: flex-start; color: black; cursor: pointer; background-color: white;'
    );
    expect(screen.getByTestId('myId-icon').getAttribute('style')).toBe(
      'padding-left: 10px; border-radius: 0px;'
    );
    expect(screen.getByTestId('myId-value').getAttribute('style')).toBe(
      'margin: 0px; padding: 4px 4px; width: 100%; font-size: 14px;'
    );
  });

  it('will render an option element with an icon that is disabled', () => {
    render(
      <OptionWithIcon
        disabled
        id="myId"
        label="option-label"
        value="option-value"
        icon="/capgemini.png"
        itemHoverBackgroundColor="red"
        iconStyle={{ width: '18px', height: '18px', borderRadius: '0px' }}
      />
    );

    expect(screen.getByTestId('myId').getAttribute('style')).toBe(
      'display: flex; align-items: center; justify-content: flex-start; color: rgb(116, 125, 140); cursor: not-allowed; background-color: white;'
    );
    expect(screen.getByTestId('myId-icon').getAttribute('style')).toBe(
      'padding-left: 10px; border-radius: 0px;'
    );
    expect(screen.getByTestId('myId-value').getAttribute('style')).toBe(
      'margin: 0px; padding: 4px 4px; width: 100%; font-size: 14px;'
    );
  });

  it('will render an option element without an icon', () => {
    render(
      <OptionWithIcon
        id="myId"
        label="option-label"
        value="option-value"
        itemHoverBackgroundColor="red"
        iconStyle={{ width: '18px', height: '18px', borderRadius: '0px' }}
      />
    );

    expect(screen.getByTestId('myId').getAttribute('style')).toBe(
      'display: flex; align-items: center; justify-content: flex-start; color: black; cursor: pointer; background-color: white;'
    );

    expect(screen.getByTestId('myId')).not.toContainElement(
      document.querySelector('img') as HTMLElement
    );
    expect(screen.getByTestId('myId-value').getAttribute('style')).toBe(
      'margin: 0px; padding: 4px 32px; width: 100%; font-size: 14px;'
    );
  });

  it('will render an option element as a Group Title', () => {
    render(
      <OptionWithIcon
        id="myId"
        isGroupTitle
        label="option-label"
        value="option-value"
        itemHoverBackgroundColor="red"
        iconStyle={{ width: '18px', height: '18px', borderRadius: '0px' }}
      />
    );

    expect(screen.getByTestId('myId').getAttribute('style')).toBe(
      'display: flex; align-items: center; justify-content: flex-start; color: black; cursor: default; font-weight: bold;'
    );

    expect(screen.getByTestId('myId')).not.toContainElement(
      document.querySelector('img') as HTMLElement
    );
    expect(screen.getByTestId('myId-value').getAttribute('style')).toBe(
      'margin: 0px; padding: 4px 10px; width: 100%; font-size: 14px;'
    );
  });

  it('Will render an option which is not disable and is not a group tile and  mouse-entere and mouse-leave envent happened ', async () => {
    render(
      <OptionWithIcon
        id="myId"
        label="option-label"
        value="option-value"
        icon="/capgemini.png"
        itemHoverBackgroundColor="red"
      />
    );

    expect(screen.getByTestId('myId').getAttribute('style')).toBe(
      'display: flex; align-items: center; justify-content: flex-start; color: black; cursor: pointer; background-color: white;'
    );

    fireEvent.mouseEnter(screen.getByTestId('myId'));

    await waitFor(() => screen.getByTestId('myId').getAttribute('style'));

    expect(screen.getByTestId('myId').getAttribute('style')).toBe(
      'display: flex; align-items: center; justify-content: flex-start; color: black; cursor: pointer; background-color: red;'
    );

    fireEvent.mouseLeave(screen.getByTestId('myId'));

    await waitFor(() => screen.getByTestId('myId').getAttribute('style'));

    expect(screen.getByTestId('myId').getAttribute('style')).toBe(
      'display: flex; align-items: center; justify-content: flex-start; color: black; cursor: pointer; background-color: white;'
    );
  });
});
