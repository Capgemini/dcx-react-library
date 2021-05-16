import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Tab } from '../components/Tab';
import { TabGroup } from '../TabGroup';

describe('TabGroup', () => {
  it('should render a tab group with a container class name', () => {
    const { container } = render(
      <TabGroup containerClassName="container-class">
        <Tab label="tab 1 label">This is the content for tab 1</Tab>
        <Tab label="tab 2 label">
          <div></div>
        </Tab>
      </TabGroup>
    );

    expect(container.getElementsByClassName('container-class')).toBeDefined();
  });

  it('should render a tab group with a tab list', () => {
    render(
      <TabGroup>
        <Tab label="tab 1 label" />
        <Tab label="tab 2 label" />
      </TabGroup>
    );

    expect(screen.getByRole('tablist')).toBeInTheDocument();
  });

  it('should render a tab group with a tablist with children', () => {
    render(
      <TabGroup>
        <Tab label="tab 1 label">This is the content for tab 1</Tab>
        <Tab label="tab 2 label">
          <div></div>
        </Tab>
      </TabGroup>
    );

    expect(screen.getByRole('tablist')).toBeInTheDocument();
    expect(screen.getByRole('tablist').children.length).toBe(2);

    const tabs: Element[] = screen.getAllByRole('tab');

    expect(tabs[0].textContent).toBe('tab 1 label');
    expect(tabs[1].textContent).toBe('tab 2 label');
  });

  it('should render a tab list with an id', () => {
    render(
      <TabGroup id="tab-list-id">
        <Tab label="tab 1 label">This is the content for tab 1</Tab>
        <Tab label="tab 2 label">
          <div></div>
        </Tab>
      </TabGroup>
    );

    expect(screen.getByRole('tablist').getAttribute('id')).toBe('tab-list-id');
  });

  it('should render a tab list with a class name', () => {
    render(
      <TabGroup className="tab-list-class">
        <Tab label="tab 1 label">This is the content for tab 1</Tab>
        <Tab label="tab 2 label">
          <div></div>
        </Tab>
      </TabGroup>
    );

    expect(screen.getByRole('tablist').getAttribute('class')).toBe(
      'tab-list-class'
    );
  });

  it('should render a tab list with an aria-label', () => {
    render(
      <TabGroup ariaLabelTabList="aria-label-for-tab-list">
        <Tab label="tab 1 label">This is the content for tab 1</Tab>
        <Tab label="tab 2 label">
          <div></div>
        </Tab>
      </TabGroup>
    );

    expect(screen.getByRole('tablist').getAttribute('aria-label')).toBe(
      'aria-label-for-tab-list'
    );
  });

  it("should render tabs with tab id's", () => {
    render(
      <TabGroup activeTabClassName="tab-class-active">
        <Tab label="tab 1 label" id="tab-1-id">
          <div>This is the content for tab 1</div>
        </Tab>
        <Tab label="tab 2 label" id="tab-2-id">
          <div>This is the content for tab 2</div>
        </Tab>
      </TabGroup>
    );

    const tabs: HTMLElement[] = screen.getAllByRole('tab');

    expect(tabs[0]).toBeInTheDocument();
    expect(tabs[0].getAttribute('id')).toBe('tab-1-id');

    expect(tabs[1]).toBeInTheDocument();
    expect(tabs[1].getAttribute('id')).toBe('tab-2-id');
  });

  it('should render tabs with ariaControls that which tab panel they control', () => {
    render(
      <TabGroup activeTabClassName="tab-class-active">
        <Tab label="tab 1 label" tabPaneId="tab-pane-1-id">
          <div>This is the content for tab 1</div>
        </Tab>
        <Tab label="tab 2 label" tabPaneId="tab-pane-2-id">
          <div>This is the content for tab 2</div>
        </Tab>
      </TabGroup>
    );

    const tabs: HTMLElement[] = screen.getAllByRole('tab');

    expect(tabs[0].getAttribute('aria-controls')).toBe('tab-pane-1-id');
    expect(tabs[1].getAttribute('aria-controls')).toBe('tab-pane-2-id');
  });

  it('should render tabs with a negative tabIndex if unselected', () => {
    render(
      <TabGroup activeTabClassName="tab-class-active">
        <Tab label="tab 1 label" tabPaneId="tab-pane-1-id">
          <div>This is the content for tab 1</div>
        </Tab>
        <Tab label="tab 2 label" tabPaneId="tab-pane-2-id">
          <div>This is the content for tab 2</div>
        </Tab>
      </TabGroup>
    );

    const tabs: HTMLElement[] = screen.getAllByRole('tab');

    expect(tabs[0].getAttribute('tabIndex')).toBeNull();
    expect(tabs[1].getAttribute('tabIndex')).toBe('-1');
  });

  it('should render tabs with a shared tab class name', () => {
    render(
      <TabGroup tabClassName="tab-class-name">
        <Tab label="tab 1 label">This is the content for tab 1</Tab>
        <Tab label="tab 2 label">
          <div></div>
        </Tab>
      </TabGroup>
    );

    const tabs: HTMLElement[] = screen.getAllByRole('tab');

    expect(tabs[0].getAttribute('class')).toBe('tab-class-name');
    expect(tabs[1].getAttribute('class')).toBe('tab-class-name');
  });

  it('should render tabs with a shared and specific tab class names', () => {
    render(
      <TabGroup tabClassName="tab-class-name">
        <Tab label="tab 1 label" className="tab-1-class-name">
          This is the content for tab 1
        </Tab>
        <Tab label="tab 2 label" className="tab-2-class-name">
          <div></div>
        </Tab>
      </TabGroup>
    );

    const tabs: HTMLElement[] = screen.getAllByRole('tab');

    expect(tabs[0].getAttribute('class')).toBe(
      'tab-class-name tab-1-class-name'
    );
    expect(tabs[1].getAttribute('class')).toBe(
      'tab-class-name tab-2-class-name'
    );
  });

  it('should render a tab group with first tab being active', () => {
    render(
      <TabGroup
        activeTabClassName="tab-class-active"
        tabClassName="tab-class-name"
      >
        <Tab label="tab 1 label">This is the content for tab 1</Tab>
        <Tab label="tab 2 label">
          <div></div>
        </Tab>
      </TabGroup>
    );

    const tabs: HTMLElement[] = screen.getAllByRole('tab');

    expect(tabs[0].getAttribute('class')).toBe(
      'tab-class-name tab-class-active'
    );
    expect(tabs[1].getAttribute('class')).not.toContain('tab-class-active');
  });

  it('should render a tab group with a disabled tab', () => {
    render(
      <TabGroup
        activeTabClassName="tab-class-active"
        disabledClassName="tab-class-disabled"
      >
        <Tab label="tab 1 label" className="tab-1-class-name">
          <div>This is the content for tab 1</div>
        </Tab>
        <Tab label="tab 2 label">
          <div>This is the content for tab 2</div>
        </Tab>
        <Tab label="tab 3 label" disabled={true}>
          <div>This is the content for tab 3</div>
        </Tab>
      </TabGroup>
    );

    const tabs: HTMLElement[] = screen.getAllByRole('tab');

    expect(tabs[2]).toBeInTheDocument();
    expect(tabs[2].getAttribute('class')).toBe('tab-class-disabled');
  });

  it('should call the onClick for a tab group', () => {
    const tabGroupClickHandler = jest.fn();

    render(
      <TabGroup
        activeTabClassName="tab-class-active"
        onClick={tabGroupClickHandler}
      >
        <Tab label="tab 1 label" className="tab-1-class-name">
          <div>This is the content for tab 1</div>
        </Tab>
        <Tab label="tab 2 label">
          <div>This is the content for tab 2</div>
        </Tab>
      </TabGroup>
    );

    const tabs: HTMLElement[] = screen.getAllByRole('tab');

    fireEvent.click(tabs[1]);

    expect(tabGroupClickHandler).toHaveBeenCalled();
    expect(tabGroupClickHandler).toHaveBeenCalledWith('tab 2 label');

    expect(tabs[0]).toBeInTheDocument();
    expect(tabs[0].getAttribute('class')).toBe('tab-1-class-name');

    expect(tabs[1]).toBeInTheDocument();
    expect(tabs[1].getAttribute('class')).toBe('tab-class-active');
  });

  it('should not call the onClick for a tab group if not provided', () => {
    const tabGroupClickHandler = jest.fn();

    render(
      <TabGroup activeTabClassName="tab-class-active">
        <Tab label="tab 1 label" className="tab-1-class-name">
          <div>This is the content for tab 1</div>
        </Tab>
        <Tab label="tab 2 label">
          <div>This is the content for tab 2</div>
        </Tab>
      </TabGroup>
    );

    const tabs: HTMLElement[] = screen.getAllByRole('tab');

    expect(tabs[0].getAttribute('tabIndex')).toBeNull();
    expect(tabs[1].getAttribute('tabIndex')).toBe('-1');

    expect(tabs[0].getAttribute('class')).toBe(
      'tab-1-class-name tab-class-active'
    );
    expect(tabs[1].getAttribute('class')).toBe('');

    fireEvent.click(tabs[1]);

    expect(tabs[0].getAttribute('tabIndex')).toBe('-1');
    expect(tabs[1].getAttribute('tabIndex')).toBeNull();

    expect(tabGroupClickHandler).not.toHaveBeenCalled();

    expect(tabs[0].getAttribute('class')).toBe('tab-1-class-name');
    expect(tabs[1].getAttribute('class')).toBe('tab-class-active');
  });

  it('should not call the onClick for a tab group if tab is disabled', () => {
    const tabGroupClickHandler = jest.fn();

    render(
      <TabGroup
        activeTabClassName="tab-class-active"
        disabledClassName="tab-class-disabled"
        onClick={tabGroupClickHandler}
      >
        <Tab label="tab 1 label" className="tab-1-class-name">
          <div>This is the content for tab 1</div>
        </Tab>
        <Tab label="tab 2 label">
          <div>This is the content for tab 2</div>
        </Tab>
        <Tab label="tab 3 label" disabled={true}>
          <div>This is the content for tab 3</div>
        </Tab>
      </TabGroup>
    );

    const tabs: HTMLElement[] = screen.getAllByRole('tab');

    fireEvent.click(tabs[2]);

    expect(tabGroupClickHandler).not.toHaveBeenCalled();

    expect(tabs[0]).toBeInTheDocument();
    expect(tabs[0].getAttribute('class')).toBe(
      'tab-1-class-name tab-class-active'
    );

    expect(tabs[2]).toBeInTheDocument();
    expect(tabs[2].getAttribute('class')).toBe('tab-class-disabled');
  });

  it('should render an active tab panel with content', () => {
    render(
      <TabGroup activeTabClassName="tab-class-active">
        <Tab label="tab 1 label">
          <div>This is the content for tab 1</div>
        </Tab>
        <Tab label="tab 2 label">
          <div>This is the content for tab 2</div>
        </Tab>
      </TabGroup>
    );

    const tabPanel: Element = screen.getByRole('tabpanel');

    expect(tabPanel).toBeInTheDocument();
    expect(tabPanel.innerHTML).toBe('<div>This is the content for tab 1</div>');
  });

  it('should render a tab panel with an id', () => {
    render(
      <TabGroup
        activeTabClassName="tab-class-active"
        contentClassName="tab-content-name"
      >
        <Tab label="tab 1 label" tabPaneId="tab-panel-id">
          <div>This is the content for tab 1</div>
        </Tab>
        <Tab label="tab 2 label">
          <div>This is the content for tab 2</div>
        </Tab>
      </TabGroup>
    );

    const tabPanel: Element = screen.getByRole('tabpanel');

    expect(tabPanel.getAttribute('id')).toBe('tab-panel-id');
  });

  it('should render a tab panel with a default selected tab', () => {
    render(
      <TabGroup
        defaultSelectedTab="tab 2 label"
        activeTabClassName="tab-class-active"
      >
        <Tab label="tab 1 label" className="tab-1-class-name">
          <div>This is the content for tab 1</div>
        </Tab>
        <Tab label="tab 2 label">
          <div>This is the content for tab 2</div>
        </Tab>
      </TabGroup>
    );

    const tabs: HTMLElement[] = screen.getAllByRole('tab');

    expect(tabs[0]).toBeInTheDocument();
    expect(tabs[0].getAttribute('class')).toBe('tab-1-class-name');

    expect(tabs[1]).toBeInTheDocument();
    expect(tabs[1].getAttribute('class')).toBe('tab-class-active');

    expect(screen.getByRole('tabpanel')).toBeInTheDocument();
    expect(screen.getByRole('tabpanel').innerHTML).toBe(
      '<div>This is the content for tab 2</div>'
    );
  });

  it('should render a tab panel with a content class name', () => {
    render(
      <TabGroup contentClassName="content-class">
        <Tab label="tab 1 label">This is the content for tab 1</Tab>
        <Tab label="tab 2 label">
          <div></div>
        </Tab>
      </TabGroup>
    );

    const tabPanel: HTMLElement = screen.getByRole('tabpanel');
    expect(tabPanel).toBeInTheDocument();
    expect(tabPanel.getAttribute('class')).toBe('content-class');
  });

  it('should render a tab panel with content of the selected tab', () => {
    render(
      <TabGroup>
        <Tab label="tab 1 label">This is the content for tab 1</Tab>
        <Tab label="tab 2 label">
          <div></div>
        </Tab>
      </TabGroup>
    );

    const tabPanel: HTMLElement = screen.getByRole('tabpanel');

    expect(tabPanel).toBeInTheDocument();
    expect(tabPanel.innerHTML).toBe('This is the content for tab 1');
  });

  it('should render a tab panel with a aria labelled of the corresponding tab id', () => {
    render(
      <TabGroup>
        <Tab label="tab 1 label" id="tab-1-id">
          This is the content for tab 1
        </Tab>
        <Tab label="tab 2 label" id="tab-2-id">
          <div></div>
        </Tab>
      </TabGroup>
    );

    const tabPanel: HTMLElement = screen.getByRole('tabpanel');

    expect(tabPanel.getAttribute('aria-labelledby')).toBe('tab-1-id');
  });

  it('should render tabs with ariaControls of the tab panel they control', () => {
    render(
      <TabGroup activeTabClassName="tab-class-active">
        <Tab label="tab 1 label" tabPaneId="tab-pane-1-id">
          <div>This is the content for tab 1</div>
        </Tab>
        <Tab label="tab 2 label" tabPaneId="tab-pane-2-id">
          <div>This is the content for tab 2</div>
        </Tab>
      </TabGroup>
    );

    const tabPanel: HTMLElement = screen.getByRole('tabpanel');

    expect(tabPanel.getAttribute('tabIndex')).toBe('0');
  });
});
