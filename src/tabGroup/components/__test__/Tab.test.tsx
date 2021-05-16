import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Tab } from '../Tab';

describe('Tab', () => {
  it('should render a tab', () => {
    const onClickHandler = jest.fn();

    render(
      <Tab
        activeTab="tab 1"
        label="tab 2"
        onClick={onClickHandler}
        activeTabClassName="tabActive"
      />
    );

    expect(screen.getByRole('tab')).toBeInTheDocument();
  });

  it('should render a tab with optional properties', () => {
    const onClickHandler = jest.fn();

    render(
      <Tab
        activeTab="tab 1"
        activeTabClassName="tabActive"
        label="tab 2"
        onClick={onClickHandler}
        id="myId"
        className="myClassName"
        ariaControls="tabParent"
      />
    );

    expect(screen.getByRole('tab').getAttribute('id')).toBe('myId');
    expect(screen.getByRole('tab').getAttribute('class')).toBe('myClassName');
    expect(screen.getByRole('tab').getAttribute('aria-controls')).toBe(
      'tabParent'
    );
    expect(screen.getByRole('tab').getAttribute('tabIndex')).toBe('-1');
  });

  it('should render a selected tab', () => {
    const onClickHandler = jest.fn();

    render(
      <Tab
        activeTab="tab 1"
        activeTabClassName="tabActive"
        label="tab 1"
        onClick={onClickHandler}
        id="myId"
        className="myClassName"
        ariaControls="tabParent"
      />
    );

    expect(screen.getByRole('tab').getAttribute('aria-selected')).toBeTruthy();
    expect(screen.getByRole('tab').getAttribute('class')).toBe(
      'myClassName tabActive'
    );
    expect(screen.getByRole('tab').getAttribute('tabIndex')).toBeNull();
  });

  it('should render a tab with a label', () => {
    const onClickHandler = jest.fn();

    render(
      <Tab
        activeTab="tab 1"
        activeTabClassName="tabActive"
        label="tab 1"
        onClick={onClickHandler}
        id="myId"
        className="myClassName"
        ariaControls="tabParent"
      />
    );

    expect(screen.getByText('tab 1')).toBeInTheDocument();
  });

  it('should render a disabled tab ', () => {
    const onClickHandler = jest.fn();

    render(
      <Tab
        activeTab="tab 1"
        activeTabClassName="tabActive"
        label="tab 2"
        onClick={onClickHandler}
        id="myId"
        className="myClassName"
        ariaControls="tabParent"
        disabled={true}
        disabledClassName="tabDisabled"
      />
    );

    expect(screen.getByRole('tab').getAttribute('class')).toBe(
      'myClassName tabDisabled'
    );
  });

  it('should render a tab with an onClick', () => {
    const onClickHandler = jest.fn();

    render(
      <Tab
        activeTab="tab 1"
        activeTabClassName="tabActive"
        label="tab 1"
        onClick={onClickHandler}
        id="myId"
        className="myClassName"
        ariaControls="tabParent"
      />
    );

    fireEvent.click(screen.getByRole('tab'));

    expect(onClickHandler).toBeCalled();
    expect(onClickHandler).toBeCalledWith('tab 1');
  });
});
