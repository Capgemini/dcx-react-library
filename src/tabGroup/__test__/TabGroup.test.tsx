import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { TabGroup, TabContentProps } from '../TabGroup';
import { TabProps } from '../components/Tab';
import { Roles } from '../../common';

describe('TabGroup', () => {
  it('should render a tab group', () => {
    const tabClickHandler = jest.fn();

    const tabs: TabProps[] = [
      {
        activeTab: 'tab 1',
        activeTabClassName: 'active tab',
        label: 'tab 1 label',
        onClick: tabClickHandler,
      },
    ];

    const contents: TabContentProps[] = [
      {
        label: 'tab 1 label',
        children: <div></div>,
      },
    ];

    render(<TabGroup tabs={tabs} tabContents={contents} />);

    expect(screen.getByRole('tabpanel')).toBeInTheDocument();
  });

  it('should render a tab group with a container class name', () => {
    const tabClickHandler = jest.fn();

    const tabs: TabProps[] = [
      {
        activeTab: 'tab 1',
        activeTabClassName: 'active tab',
        label: 'tab 1 label',
        onClick: tabClickHandler,
      },
    ];

    const contents: TabContentProps[] = [
      {
        label: 'tab 1 label',
        children: <div></div>,
      },
    ];

    const { container } = render(
      <TabGroup
        tabs={tabs}
        tabContents={contents}
        containerClassName="container-class"
      />
    );

    expect(container.getElementsByClassName('container-class')).toBeDefined();
  });

  it('should render a tab group with a content class name', () => {
    const tabClickHandler = jest.fn();

    const tabs: TabProps[] = [
      {
        activeTab: 'tab 1',
        activeTabClassName: 'active tab',
        label: 'tab 1 label',
        onClick: tabClickHandler,
      },
    ];

    const contents: TabContentProps[] = [
      {
        label: 'tab 1 label',
        children: <div></div>,
      },
    ];

    const { container } = render(
      <TabGroup
        tabs={tabs}
        tabContents={contents}
        contentClassName="content-class"
      />
    );

    expect(container.getElementsByClassName('content-class')).toBeDefined();
  });

  it('should render a tab group with first tab being active', () => {
    const tabClickHandler = jest.fn();

    const tabs: TabProps[] = [
      {
        activeTabClassName: 'active tab',
        label: 'tab 1 label',
        onClick: tabClickHandler,
      },
      {
        activeTabClassName: 'active tab',
        label: 'tab 2 label',
        onClick: tabClickHandler,
      },
    ];

    const contents: TabContentProps[] = [
      {
        label: 'tab 1 label',
        children: <div></div>,
      },
    ];

    render(<TabGroup tabContents={contents} tabs={tabs} />);

    expect(screen.getAllByRole('tab')[0]).toBeInTheDocument();
    expect(screen.getAllByRole('tab')[0].getAttribute('class')).toBe(
      'active tab'
    );
  });

  it('should render a tab group with first tab being active with current class names', () => {
    const tabClickHandler = jest.fn();

    const tabs: TabProps[] = [
      {
        activeTabClassName: 'active tab',
        className: 'tab-1-class-name',
        label: 'tab 1 label',
        onClick: tabClickHandler,
      },
      {
        activeTabClassName: 'active tab',
        label: 'tab 2 label',
        onClick: tabClickHandler,
      },
    ];

    const contents: TabContentProps[] = [
      {
        label: 'tab 1 label',
        children: <div role={Roles.presentation}>tab 1 content</div>,
      },
      {
        label: 'tab 2 label',
        children: <div role={Roles.presentation}>tab 2 content</div>,
      },
    ];

    render(<TabGroup tabs={tabs} tabContents={contents} />);

    expect(screen.getAllByRole('tab')[0]).toBeInTheDocument();
    expect(screen.getAllByRole('tab')[0].getAttribute('class')).toBe(
      'tab-1-class-name active tab'
    );

    expect(screen.getByRole('presentation')).toBeInTheDocument();
    expect(screen.getByRole('presentation').innerHTML).toBe('tab 1 content');
  });

  it('should render a tab group with a default selected tab', () => {
    const tabClickHandler = jest.fn();

    const tabs: TabProps[] = [
      {
        activeTabClassName: 'active tab',
        className: 'tab-1-class-name',
        label: 'tab 1 label',
        onClick: tabClickHandler,
      },
      {
        activeTabClassName: 'active tab',
        label: 'tab 2 label',
        onClick: tabClickHandler,
      },
    ];

    const contents: TabContentProps[] = [
      {
        label: 'tab 1 label',
        children: <div role={Roles.presentation}>tab 1 content</div>,
      },
      {
        label: 'tab 2 label',
        children: <div role={Roles.presentation}>tab 2 content</div>,
      },
    ];

    render(
      <TabGroup
        tabs={tabs}
        tabContents={contents}
        defaultActiveTab="tab 2 label"
      />
    );

    expect(screen.getAllByRole('tab')[0]).toBeInTheDocument();
    expect(screen.getAllByRole('tab')[0].getAttribute('class')).toBe(
      'tab-1-class-name'
    );

    expect(screen.getAllByRole('tab')[1]).toBeInTheDocument();
    expect(screen.getAllByRole('tab')[1].getAttribute('class')).toBe(
      'active tab'
    );

    expect(screen.getByRole('presentation')).toBeInTheDocument();
    expect(screen.getByRole('presentation').innerHTML).toBe('tab 2 content');
  });

  it('should call the onClick for a tab group', () => {
    const tabGroupClickHandler = jest.fn();
    const tabClickHandler = jest.fn();

    const tabs: TabProps[] = [
      {
        activeTabClassName: 'active tab',
        className: 'tab-1-class-name',
        label: 'tab 1 label',
        onClick: tabClickHandler,
      },
      {
        activeTabClassName: 'active tab',
        label: 'tab 2 label',
        onClick: tabClickHandler,
      },
    ];

    const contents: TabContentProps[] = [
      {
        label: 'tab 1 label',
        children: <div></div>,
      },
    ];

    render(
      <TabGroup
        tabs={tabs}
        tabContents={contents}
        onClick={tabGroupClickHandler}
      />
    );

    fireEvent.click(screen.getAllByRole('tab')[1]);

    expect(tabGroupClickHandler).toHaveBeenCalled();

    expect(screen.getAllByRole('tab')[0]).toBeInTheDocument();
    expect(screen.getAllByRole('tab')[0].getAttribute('class')).toBe(
      'tab-1-class-name'
    );

    expect(screen.getAllByRole('tab')[1]).toBeInTheDocument();
    expect(screen.getAllByRole('tab')[1].getAttribute('class')).toBe(
      'active tab'
    );
  });

  it('should not call the onClick for a tab group if not provided', () => {
    const tabGroupClickHandler = jest.fn();
    const tabClickHandler = jest.fn();

    const tabs: TabProps[] = [
      {
        activeTabClassName: 'active tab',
        className: 'tab-1-class-name',
        label: 'tab 1 label',
        onClick: tabClickHandler,
      },
      {
        activeTabClassName: 'active tab',
        label: 'tab 2 label',
        onClick: tabClickHandler,
      },
    ];

    const contents: TabContentProps[] = [
      {
        label: 'tab 1 label',
        children: <div></div>,
      },
    ];

    render(<TabGroup tabs={tabs} tabContents={contents} />);

    fireEvent.click(screen.getAllByRole('tab')[1]);

    expect(tabGroupClickHandler).not.toHaveBeenCalled();

    expect(screen.getAllByRole('tab')[0]).toBeInTheDocument();
    expect(screen.getAllByRole('tab')[0].getAttribute('class')).toBe(
      'tab-1-class-name'
    );

    expect(screen.getAllByRole('tab')[1]).toBeInTheDocument();
    expect(screen.getAllByRole('tab')[1].getAttribute('class')).toBe(
      'active tab'
    );
  });
});
