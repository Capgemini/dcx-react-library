import React from 'react';
import { TabGroup, Tab } from 'dcx-react-library';
import './tabGroup.scss';

export const TabGroupDemo = () => (
  <>
    <h1>Tab Group Demo</h1>
    <TabGroup
      activeTabClassName="tab-list-active"
      disabledClassName="tab-list-disabled"
      tabClassName="tab-list-item"
      className="tab-list"
    >
      <Tab label="Tab 1" tabPaneId="tab-pane-1-id">
        This is content for <em>tab 1</em>
      </Tab>
      <Tab label="Tab 2" tabPaneId="tab-pane-2-id" activeTab="Tab 2">
        This is content for <em>tab 2</em>
      </Tab>
      <Tab label="Tab 3" tabPaneId="tab-pane-3-id">
        This is content for <em>tab 3</em>
      </Tab>
      <Tab label="Tab 4" tabPaneId="tab-pane-4-id" disabled={true}>
        This is content for <em>tab 4</em>
      </Tab>
    </TabGroup>
  </>
);
