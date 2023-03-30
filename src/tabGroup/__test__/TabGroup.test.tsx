import React, { useEffect } from 'react';
import { fireEvent, render, screen, renderHook } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Tab } from '../components/Tab';
import { TabGroup } from '../TabGroup';
import { Button } from '../../button';

describe('TabGroup', () => {
  it('should not render a tab group if event keys are not unique', () => {
    expect(() =>
      render(
        <TabGroup containerClassName="container-class">
          <Tab eventKey="tab-1-id" label="tab 1 label">
            This is the content for tab 1
          </Tab>
          <Tab eventKey="tab-1-id" label="tab 1 label">
            This is the content for tab 1
          </Tab>
        </TabGroup>
      )
    ).toThrow('Tab event keys must be unique');
  });

  it('should render a tab group with a container class name', () => {
    const { container } = render(
      <TabGroup containerClassName="container-class">
        <Tab eventKey="tab-1-id" label="tab 1 label">
          This is the content for tab 1
        </Tab>
        <Tab eventKey="tab-2-id" label="tab 2 label">
          <div></div>
        </Tab>
      </TabGroup>
    );

    expect(container.getElementsByClassName('container-class')).toBeDefined();
  });

  it('should render a tab group with a tab list', () => {
    render(
      <TabGroup>
        <Tab eventKey="tab-1-id" label="tab 1 label" />
        <Tab eventKey="tab-2-id" label="tab 2 label" />
      </TabGroup>
    );

    expect(screen.getByRole('tablist')).toBeInTheDocument();
  });

  it('should render a tab group with a tablist with children', () => {
    render(
      <TabGroup>
        <Tab eventKey="tab-1-id" label="tab 1 label">
          This is the content for tab 1
        </Tab>
        <Tab eventKey="tab-2-id" label="tab 2 label">
          <div></div>
        </Tab>
      </TabGroup>
    );

    expect(screen.getByRole('tablist')).toBeInTheDocument();
    expect(screen.getByRole('tablist').children.length).toBe(2);

    const tabs: Element[] = screen.getAllByRole('presentation');

    expect(tabs[0].textContent).toBe('tab 1 label');
    expect(tabs[1].textContent).toBe('tab 2 label');
  });

  it('should render a tab list with an id', () => {
    render(
      <TabGroup id="tab-list-id">
        <Tab eventKey="tab-1-id" label="tab 1 label">
          This is the content for tab 1
        </Tab>
        <Tab eventKey="tab-2-id" label="tab 2 label">
          <div></div>
        </Tab>
      </TabGroup>
    );

    expect(screen.getByRole('tablist').getAttribute('id')).toBe('tab-list-id');
  });

  it('should render a tab list with a class name', () => {
    render(
      <TabGroup className="tab-list-class">
        <Tab eventKey="tab-1-id" label="tab 1 label">
          This is the content for tab 1
        </Tab>
        <Tab eventKey="tab-2-id" label="tab 2 label">
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
        <Tab eventKey="tab-1-id" label="tab 1 label">
          This is the content for tab 1
        </Tab>
        <Tab eventKey="tab-2-id" label="tab 2 label">
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
        <Tab label="tab 1 label" eventKey="tab-1-id">
          <div>This is the content for tab 1</div>
        </Tab>
        <Tab label="tab 2 label" eventKey="tab-2-id">
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
        <Tab label="tab 1 label" eventKey="tab-pane-1-id">
          <div>This is the content for tab 1</div>
        </Tab>
        <Tab label="tab 2 label" eventKey="tab-pane-2-id">
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
        <Tab label="tab 1 label" eventKey="tab-pane-1-id">
          <div>This is the content for tab 1</div>
        </Tab>
        <Tab label="tab 2 label" eventKey="tab-pane-2-id">
          <div>This is the content for tab 2</div>
        </Tab>
      </TabGroup>
    );

    const tabs: HTMLElement[] = screen.getAllByRole('tab');

    expect(tabs[0].getAttribute('tabIndex')).toBeNull();
    expect(tabs[1].getAttribute('tabIndex')).toBe('-1');
  });

  it('should render tabs with shared tab class name', () => {
    render(
      <TabGroup tabClassName="tab-class-name">
        <Tab eventKey="tab-1-id" label="tab 1 label">
          This is the content for tab 1
        </Tab>
        <Tab eventKey="tab-2-id" label="tab 2 label">
          <div></div>
        </Tab>
      </TabGroup>
    );

    const tabs: HTMLElement[] = screen.getAllByRole('presentation');

    expect(tabs[0].getAttribute('class')).toBe('tab-class-name');
    expect(tabs[1].getAttribute('class')).toBe('tab-class-name');
  });

  it('should render tabs with shared anchor tab class name', () => {
    render(
      <TabGroup tabLinkClassName="tab-class-name">
        <Tab eventKey="tab-1-id" label="tab 1 label">
          This is the content for tab 1
        </Tab>
        <Tab eventKey="tab-2-id" label="tab 2 label">
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
        <Tab
          eventKey="tab-1-id"
          label="tab 1 label"
          className="tab-1-class-name"
        >
          This is the content for tab 1
        </Tab>
        <Tab
          eventKey="tab-2-id"
          label="tab 2 label"
          className="tab-2-class-name"
        >
          <div></div>
        </Tab>
      </TabGroup>
    );

    const tabs: HTMLElement[] = screen.getAllByRole('presentation');

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
        <Tab eventKey="tab-1-id" label="tab 1 label">
          This is the content for tab 1
        </Tab>
        <Tab eventKey="tab-2-id" label="tab 2 label">
          <div></div>
        </Tab>
      </TabGroup>
    );

    const tabs: HTMLElement[] = screen.getAllByRole('presentation');

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
        <Tab
          eventKey="tab-1-id"
          label="tab 1 label"
          className="tab-1-class-name"
        >
          <div>This is the content for tab 1</div>
        </Tab>
        <Tab eventKey="tab-2-id" label="tab 2 label">
          <div>This is the content for tab 2</div>
        </Tab>
        <Tab eventKey="tab 3 label" label="tab 3 label" disabled={true}>
          <div>This is the content for tab 3</div>
        </Tab>
      </TabGroup>
    );

    const tabs: HTMLElement[] = screen.getAllByRole('presentation');

    expect(tabs[2]).toBeInTheDocument();
    expect(tabs[2].getAttribute('class')).toBe('tab-class-disabled');
  });

  it('should call the onSelect for a tab group', () => {
    const tabGroupSelectHandler = jest.fn();

    render(
      <TabGroup
        activeTabClassName="tab-class-active"
        onSelect={tabGroupSelectHandler}
      >
        <Tab
          eventKey="tab-1-id"
          label="tab 1 label"
          className="tab-1-class-name"
        >
          <div>This is the content for tab 1</div>
        </Tab>
        <Tab eventKey="tab-2-id" label="tab 2 label">
          <div>This is the content for tab 2</div>
        </Tab>
      </TabGroup>
    );

    const tabs: HTMLElement[] = screen.getAllByRole('tab');
    const tabItems: HTMLElement[] = screen.getAllByRole('presentation');

    fireEvent.click(tabs[1]);

    expect(tabGroupSelectHandler).toHaveBeenCalled();
    expect(tabGroupSelectHandler).toHaveBeenCalledWith('tab-2-id');

    expect(tabs[0]).toBeInTheDocument();
    expect(tabItems[0]).toBeInTheDocument();
    expect(tabItems[0].getAttribute('class')).toBe('tab-1-class-name');

    expect(tabs[1]).toBeInTheDocument();
    expect(tabItems[1]).toBeInTheDocument();
    expect(tabItems[1].getAttribute('class')).toBe('tab-class-active');
  });

  it('should not call the onSelect for a tab group if not provided', () => {
    const tabGroupClickHandler = jest.fn();

    render(
      <TabGroup activeTabClassName="tab-class-active">
        <Tab
          eventKey="tab-1-id"
          label="tab 1 label"
          className="tab-1-class-name"
        >
          <div>This is the content for tab 1</div>
        </Tab>
        <Tab eventKey="tab-2-id" label="tab 2 label">
          <div>This is the content for tab 2</div>
        </Tab>
      </TabGroup>
    );

    const tabs: HTMLElement[] = screen.getAllByRole('tab');
    const tabItems: HTMLElement[] = screen.getAllByRole('presentation');

    expect(tabs[0].getAttribute('tabIndex')).toBeNull();
    expect(tabs[1].getAttribute('tabIndex')).toBe('-1');

    expect(tabItems[0].getAttribute('class')).toBe(
      'tab-1-class-name tab-class-active'
    );
    expect(tabItems[1].getAttribute('class')).toBe('');

    fireEvent.click(tabs[1]);

    expect(tabs[0].getAttribute('tabIndex')).toBe('-1');
    expect(tabs[1].getAttribute('tabIndex')).toBeNull();

    expect(tabGroupClickHandler).not.toHaveBeenCalled();

    expect(tabItems[0].getAttribute('class')).toBe('tab-1-class-name');
    expect(tabItems[1].getAttribute('class')).toBe('tab-class-active');
  });

  it('should not call the onSelect for a tab group if tab is disabled', () => {
    const tabGroupSelectHandler = jest.fn();

    render(
      <TabGroup
        activeTabClassName="tab-class-active"
        disabledClassName="tab-class-disabled"
        onSelect={tabGroupSelectHandler}
      >
        <Tab
          eventKey="tab-1-id"
          label="tab 1 label"
          className="tab-1-class-name"
        >
          <div>This is the content for tab 1</div>
        </Tab>
        <Tab eventKey="tab-2-id" label="tab 2 label">
          <div>This is the content for tab 2</div>
        </Tab>
        <Tab eventKey="tab 3 label" label="tab 3 label" disabled={true}>
          <div>This is the content for tab 3</div>
        </Tab>
      </TabGroup>
    );

    const tabs: HTMLElement[] = screen.getAllByRole('presentation');

    fireEvent.click(tabs[2]);

    expect(tabGroupSelectHandler).not.toHaveBeenCalled();

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
        <Tab eventKey="tab-1-id" label="tab 1 label">
          <div>This is the content for tab 1</div>
        </Tab>
        <Tab eventKey="tab-2-id" label="tab 2 label">
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
        <Tab eventKey="tab-1-id" label="tab 1 label">
          <div>This is the content for tab 1</div>
        </Tab>
        <Tab eventKey="tab-2-id" label="tab 2 label">
          <div>This is the content for tab 2</div>
        </Tab>
      </TabGroup>
    );

    const tabPanel: Element = screen.getByRole('tabpanel');

    expect(tabPanel.getAttribute('id')).toBe('tab-1-id');
  });

  it('should render a tab panel with a default selected tab', () => {
    render(
      <TabGroup activeKey="tab-2-id" activeTabClassName="tab-class-active">
        <Tab
          eventKey="tab-1-id"
          label="tab 1 label"
          className="tab-1-class-name"
        >
          <div>This is the content for tab 1</div>
        </Tab>
        <Tab eventKey="tab-2-id" label="tab 2 label">
          <div>This is the content for tab 2</div>
        </Tab>
      </TabGroup>
    );

    const tabs: HTMLElement[] = screen.getAllByRole('presentation');

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
        <Tab eventKey="tab-1-id" label="tab 1 label">
          This is the content for tab 1
        </Tab>
        <Tab eventKey="tab-2-id" label="tab 2 label">
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
        <Tab eventKey="tab-1-id" label="tab 1 label">
          This is the content for tab 1
        </Tab>
        <Tab eventKey="tab-2-id" label="tab 2 label">
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
        <Tab eventKey="tab-1-id" label="tab 1 label">
          This is the content for tab 1
        </Tab>
        <Tab eventKey="tab-2-id" label="tab 2 label">
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
        <Tab label="tab 1 label" eventKey="tab-pane-1-id">
          <div>This is the content for tab 1</div>
        </Tab>
        <Tab label="tab 2 label" eventKey="tab-pane-2-id">
          <div>This is the content for tab 2</div>
        </Tab>
      </TabGroup>
    );

    const tabPanel: HTMLElement = screen.getByRole('tabpanel');

    expect(tabPanel.getAttribute('tabIndex')).toBe('0');
  });

  it('should change the active tab for a tab group', () => {
    const ref = { current: undefined };
    const useShortcuts = ({ ref }: any) => {
      useEffect(() => {
        ref.current = 1;
      }, []);
    };

    renderHook(() => useShortcuts({ ref }));

    const tabGroupSelectHandler = jest.fn();

    render(
      <>
        <TabGroup
          activeTabClassName="tab-class-active"
          onSelect={tabGroupSelectHandler}
          ref={ref}
        >
          <Tab eventKey="tab-1-id" label="tab 1 label">
            <div>This is the content for tab 1</div>
          </Tab>
          <Tab eventKey="tab-2-id" label="tab 2 label">
            <div>This is the content for tab 2</div>
          </Tab>
          <Tab eventKey="tab-3-id" label="tab 3 label">
            <div>This is the content for tab 3</div>
          </Tab>
        </TabGroup>
        <Button
          onClick={() => {
            //@ts-ignore
            ref.current.updateActiveTab('tab-3-id');
          }}
          label="test label"
        />
      </>
    );

    const tabs: HTMLElement[] = screen.getAllByRole('presentation');

    expect(tabs[0].getAttribute('class')).toBe('tab-class-active');
    expect(tabs[1].getAttribute('class')).toBe('');
    expect(tabs[2].getAttribute('class')).toBe('');

    fireEvent.click(screen.getByRole('button'));

    expect(tabGroupSelectHandler).toHaveBeenCalled();
    expect(tabGroupSelectHandler).toHaveBeenCalledWith('tab-3-id');

    expect(tabs[0].getAttribute('class')).toBe('');
    expect(tabs[1].getAttribute('class')).toBe('');
    expect(tabs[2].getAttribute('class')).toBe('tab-class-active');
  });

  it('should not change the active tab for a tab group', () => {
    let updated = true;
    const ref = { current: undefined };
    const useShortcuts = ({ ref }: any) => {
      useEffect(() => {
        ref.current = 1;
      }, []);
    };

    renderHook(() => useShortcuts({ ref }));

    const tabGroupSelectHandler = jest.fn();

    render(
      <>
        <TabGroup
          activeTabClassName="tab-class-active"
          onSelect={tabGroupSelectHandler}
          ref={ref}
        >
          <Tab eventKey="tab-1-id" label="tab 1 label">
            <div>This is the content for tab 1</div>
          </Tab>
          <Tab eventKey="tab-2-id" label="tab 2 label">
            <div>This is the content for tab 2</div>
          </Tab>
          <Tab eventKey="tab-3-id" label="tab 3 label">
            <div>This is the content for tab 3</div>
          </Tab>
        </TabGroup>
        <Button
          onClick={() => {
            //@ts-ignore
            updated = ref.current.updateActiveTab('unknown-tab-key');
          }}
          label="test label"
        />
      </>
    );

    const tabs: HTMLElement[] = screen.getAllByRole('presentation');

    expect(tabs[0].getAttribute('class')).toBe('tab-class-active');
    expect(tabs[1].getAttribute('class')).toBe('');
    expect(tabs[2].getAttribute('class')).toBe('');

    fireEvent.click(screen.getByRole('button'));

    expect(tabGroupSelectHandler).not.toHaveBeenCalled();

    expect(tabs[0].getAttribute('class')).toBe('tab-class-active');
    expect(tabs[1].getAttribute('class')).toBe('');
    expect(tabs[2].getAttribute('class')).toBe('');

    expect(updated).toBeFalsy();
  });

  it('should change the active tab for a tab group but not call the onSelect handler if not provided', () => {
    let updated = false;
    const ref = { current: undefined };
    const useShortcuts = ({ ref }: any) => {
      useEffect(() => {
        ref.current = 1;
      }, []);
    };

    renderHook(() => useShortcuts({ ref }));

    const tabGroupSelectHandler = jest.fn();

    render(
      <>
        <TabGroup activeTabClassName="tab-class-active" ref={ref}>
          <Tab eventKey="tab-1-id" label="tab 1 label">
            <div>This is the content for tab 1</div>
          </Tab>
          <Tab eventKey="tab-2-id" label="tab 2 label">
            <div>This is the content for tab 2</div>
          </Tab>
          <Tab eventKey="tab-3-id" label="tab 3 label">
            <div>This is the content for tab 3</div>
          </Tab>
        </TabGroup>
        <Button
          onClick={() => {
            //@ts-ignore
            updated = ref.current.updateActiveTab('tab-3-id');
          }}
          label="test label"
        />
      </>
    );

    const tabs: HTMLElement[] = screen.getAllByRole('presentation');

    expect(tabs[0].getAttribute('class')).toBe('tab-class-active');
    expect(tabs[1].getAttribute('class')).toBe('');
    expect(tabs[2].getAttribute('class')).toBe('');

    fireEvent.click(screen.getByRole('button'));

    expect(tabGroupSelectHandler).not.toHaveBeenCalled();

    expect(tabs[0].getAttribute('class')).toBe('');
    expect(tabs[1].getAttribute('class')).toBe('');
    expect(tabs[2].getAttribute('class')).toBe('tab-class-active');

    expect(updated).toBeTruthy();
  });
});
