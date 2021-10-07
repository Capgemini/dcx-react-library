import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Tab } from '../Tab';
import { TabContext } from '../../TabGroup';

describe('Tab', () => {
  it('should not render a tab with out a context', () => {
    expect(() =>
      render(
        <Tab eventKey="tab 2" label="tab 2" activeTabClassName="tabActive" />
      )
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
        <Tab eventKey="tab 2" label="tab 2" activeTabClassName="tabActive" />
      </TabContext.Provider>
    );

    expect(screen.getByRole('tab')).toBeInTheDocument();
  });

  it('should render a tab with anchor', () => {
    const onClickHandler = jest.fn();

    render(
      <TabContext.Provider
        value={{
          activeTab: 'tab 1',
          changeActiveTab: onClickHandler,
        }}
      >
        <Tab eventKey="tab 2" label="tab 2" activeTabClassName="tabActive" />
      </TabContext.Provider>
    );

    expect(screen.getByRole('tab')).toBeInTheDocument();
    expect(screen.getByRole('tab').getAttribute('href')).toBe('#tab 2');
    expect(screen.getByRole('tab').getAttribute('id')).toBe('tab 2');
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
          eventKey="tab 2"
          activeTabClassName="tabActive"
          label="tab 2"
          className="myClassName"
          ariaControls="tabParent"
          linkClassName="aClassName"
        />
      </TabContext.Provider>
    );

    expect(screen.getByRole('tab').getAttribute('id')).toBe('tab 2');
    expect(screen.getByRole('presentation').getAttribute('class')).toBe(
      'myClassName'
    );
    expect(screen.getByRole('tab').getAttribute('class')).toBe('aClassName');
    expect(screen.getByRole('tab').getAttribute('aria-controls')).toBe(
      'tabParent'
    );
    expect(screen.getByRole('tab').getAttribute('tabIndex')).toBe('-1');
    expect(screen.getByRole('tab').getAttribute('class')).toBe('aClassName');
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
          eventKey="tab 1"
          activeTabClassName="tabActive"
          label="tab 1"
          className="myClassName"
          ariaControls="tabParent"
        />
      </TabContext.Provider>
    );

    expect(screen.getByRole('tab').getAttribute('aria-selected')).toBeTruthy();
    expect(screen.getByRole('presentation').getAttribute('class')).toBe(
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
          eventKey="tab 1"
          activeTabClassName="tabActive"
          label="tab 1"
          className="myClassName"
          ariaControls="tabParent"
        />
      </TabContext.Provider>
    );

    expect(screen.getByText('tab 1')).toBeInTheDocument();
  });

  it('should render a tab with a custom label', () => {
    const onClickHandler = jest.fn();

    const el: JSX.Element = (
      <div>
        <span>I AM CUSTOM LABEL</span>
      </div>
    );

    render(
      <TabContext.Provider
        value={{
          activeTab: 'tab 1',
          changeActiveTab: onClickHandler,
        }}
      >
        <Tab
          eventKey="tab 1"
          activeTabClassName="tabActive"
          label={el}
          className="myClassName"
          ariaControls="tabParent"
        />
      </TabContext.Provider>
    );

    expect(screen.getByText('I AM CUSTOM LABEL')).toBeInTheDocument();
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
        <Tab eventKey="tab 1" activeTabClassName="tabActive" label="tab 1" />
        <Tab eventKey="tab 2" activeTabClassName="tabActive" label="tab 2" />
      </TabContext.Provider>
    );

    const tabs: Element[] = screen.getAllByRole('presentation');

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
          eventKey="tab 2"
          activeTabClassName="tabActive"
          label="tab 2"
          className="myClassName"
          ariaControls="tabParent"
          disabled={true}
          disabledClassName="tabDisabled"
        />
      </TabContext.Provider>
    );

    expect(screen.getByRole('presentation').getAttribute('class')).toBe(
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
          eventKey="tab 1"
          activeTabClassName="tabActive"
          label="tab 1"
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
