import React from 'react';
import { TabGroup } from 'dcx-react-library';
import './tabGroup.scss';

export const TabGroupDemo = () => (
  <>
    <h1>Tab Group Demo</h1>
    <TabGroup
      tabs={[
        {
          label: 'Tab 1',
        },
        {
          label: 'Tab 2',
        },
        {
          label: 'Tab 3',
        },
        {
          label: 'Tab 4',
          disabled: true,
        },
      ]}
      tabContents={[
        {
          label: 'Tab 1',
          children: (
            <div>
              This is content for <em>tab 1</em>
            </div>
          ),
        },
        {
          label: 'Tab 2',
          children: (
            <div>
              This is content for <em>tab 2</em>
            </div>
          ),
        },
        {
          label: 'Tab 3',
          children: (
            <div>
              This is content for <em>tab 3</em>
            </div>
          ),
        },
      ]}
      defaultActiveTab="Tab 2"
      activeTabClassName="tab-list-active"
      disabledClassName="tab-list-disabled"
      tabClassName="tab-list-item"
      className="tab-list"
    />
  </>
);
