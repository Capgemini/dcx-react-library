import { TabGroup, Tab } from '../../src/tabGroup';
import React, { useState } from 'react';

const UnstyledTabs = () => {
  const [activeTab, setActiveTab] = useState('tab-1');

  return (
    <TabGroup
      activeKey={activeTab}
      onSelect={setActiveTab}
    >
      <Tab eventKey="tab-1" label="tab 1">
        This the content for <em>tab 1</em>
      </Tab>
      <Tab eventKey="tab-2" label="tab 2">
        This the content for <em>tab 2</em>
      </Tab>
    </TabGroup>
  );
};

export default {
  title: 'DCXLibrary/Layout/Tabs/Without style',
  component: TabGroup,
  parameters: {
    options: {
      showPanel: true,
    },
  },
};

export const Unstyled = {
  render: () => <UnstyledTabs />,
  args: {},
};
