import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Tab } from '../Tab';
import { TabContext } from '../../TabGroup';

describe('Tab', () => {
  it('should not render a tab with out a context', () => {
    expect(() =>
      render(<Tab label="tab 2" activeTabClassName="tabActive" />)
    ).toThrow('Tab must be used within a TabGroup');
  });

  it('should render a tab', () => {
    const onClickHandler = jest.fn();

    render(
      <TabContext.Provider
        value={{
          activeTab: 'tab 1',
          changeActiveTab: onClickHandler,
        }}
      >
        <Tab label="tab 2" activeTabClassName="tabActive" />
      </TabContext.Provider>
    );

    expect(screen.getByRole('tab')).toBeInTheDocument();
  });

  it('should render a tab with optional properties', () => {
    const onClickHandler = jest.fn();

    render(
      <TabContext.Provider
        value={{
          activeTab: 'tab 1',
          changeActiveTab: onClickHandler,
        }}
      >
        <Tab
          activeTabClassName="tabActive"
          label="tab 2"
          id="myId"
          className="myClassName"
          ariaControls="tabParent"
        />
      </TabContext.Provider>
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
      <TabContext.Provider
        value={{
          activeTab: 'tab 1',
          changeActiveTab: onClickHandler,
        }}
      >
        <Tab
          activeTabClassName="tabActive"
          label="tab 1"
          id="myId"
          className="myClassName"
          ariaControls="tabParent"
        />
      </TabContext.Provider>
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
      <TabContext.Provider
        value={{
          activeTab: 'tab 1',
          changeActiveTab: onClickHandler,
        }}
      >
        <Tab
          activeTabClassName="tabActive"
          label="tab 1"
          id="myId"
          className="myClassName"
          ariaControls="tabParent"
        />
      </TabContext.Provider>
    );

    expect(screen.getByText('tab 1')).toBeInTheDocument();
  });

  it('should render a preselected tab ', () => {
    const onClickHandler = jest.fn();

    render(
      <TabContext.Provider
        value={{
          activeTab: 'tab 2',
          changeActiveTab: onClickHandler,
        }}
      >
        <Tab activeTabClassName="tabActive" label="tab 1" />
        <Tab activeTabClassName="tabActive" label="tab 2" />
      </TabContext.Provider>
    );

    const tabs: Element[] = screen.getAllByRole('tab');

    expect(tabs[0].getAttribute('class')).toBe('');
    expect(tabs[1].getAttribute('class')).toBe('tabActive');
  });

  it('should render a disabled tab ', () => {
    const onClickHandler = jest.fn();

    render(
      <TabContext.Provider
        value={{
          activeTab: 'tab 1',
          changeActiveTab: onClickHandler,
        }}
      >
        <Tab
          activeTabClassName="tabActive"
          label="tab 2"
          id="myId"
          className="myClassName"
          ariaControls="tabParent"
          disabled={true}
          disabledClassName="tabDisabled"
        />
      </TabContext.Provider>
    );

    expect(screen.getByRole('tab').getAttribute('class')).toBe(
      'myClassName tabDisabled'
    );
  });

  it('should render a tab with an onClick', () => {
    const onClickHandler = jest.fn();

    render(
      <TabContext.Provider
        value={{
          activeTab: 'tab 1',
          changeActiveTab: onClickHandler,
        }}
      >
        <Tab
          activeTabClassName="tabActive"
          label="tab 1"
          id="myId"
          className="myClassName"
          ariaControls="tabParent"
        />
      </TabContext.Provider>
    );

    fireEvent.click(screen.getByRole('tab'));

    expect(onClickHandler).toBeCalled();
    expect(onClickHandler).toBeCalledWith('tab 1');
  });
});
