import { TabGroup, Tab } from '../../src/tabGroup';

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
  render: function () {
    return (
      <TabGroup>
        <Tab eventKey="tab-1" label="tab 1">
          This the content for <em>tab 1</em>
        </Tab>
        <Tab eventKey="tab-2" label="tab 2">
          This the content for <em>tab 2</em>
        </Tab>
      </TabGroup>
    );
  },
  args: {},
};
