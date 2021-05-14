import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { TabGroup, TabProps, TabContentProps } from '../TabGroup';
import { Roles } from '../../common';

describe('TabGroup', () => {
  it('should render a tab group', () => {
    const tabs: TabProps[] = [
      {
        label: 'tab 1 label',
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
    const tabs: TabProps[] = [
      {
        label: 'tab 1 label',
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
    const tabs: TabProps[] = [
      {
        label: 'tab 1 label',
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

  it('should render a tab group with a group class name', () => {
    const tabs: TabProps[] = [
      {
        label: 'tab 1 label',
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
        tabClassName="tab-class-name"
        activeTabClassName="tab-class-active"
      />
    );

    expect(screen.getAllByRole('tab')[0].getAttribute('class')).toBe(
      'tab-class-name tab-class-active'
    );
  });

  it('should render a tab group with first tab being active', () => {
    const tabs: TabProps[] = [
      {
        label: 'tab 1 label',
      },
      {
        label: 'tab 2 label',
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
        tabContents={contents}
        tabs={tabs}
        activeTabClassName="active tab"
      />
    );

    expect(screen.getAllByRole('tab')[0]).toBeInTheDocument();
    expect(screen.getAllByRole('tab')[0].getAttribute('class')).toBe(
      'active tab'
    );
  });

  it('should render a tab group with first tab being active with current class names', () => {
    const tabs: TabProps[] = [
      {
        label: 'tab 1 label',
      },
      {
        label: 'tab 2 label',
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
        activeTabClassName="active tab"
        tabClassName="tab-1-class-name"
      />
    );

    expect(screen.getAllByRole('tab')[0]).toBeInTheDocument();
    expect(screen.getAllByRole('tab')[0].getAttribute('class')).toBe(
      'tab-1-class-name active tab'
    );

    expect(screen.getByRole('presentation')).toBeInTheDocument();
    expect(screen.getByRole('presentation').innerHTML).toBe('tab 1 content');
  });

  it('should render a tab group with a default selected tab', () => {
    const tabs: TabProps[] = [
      {
        label: 'tab 1 label',
        className: 'tab-1-class-name',
      },
      {
        label: 'tab 2 label',
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
        activeTabClassName="active tab"
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

    const tabs: TabProps[] = [
      {
        className: 'tab-1-class-name',
        label: 'tab 1 label',
      },
      {
        label: 'tab 2 label',
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
        activeTabClassName="active tab"
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

    const tabs: TabProps[] = [
      {
        className: 'tab-1-class-name',
        label: 'tab 1 label',
      },
      {
        label: 'tab 2 label',
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
        activeTabClassName="active tab"
      />
    );

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
