import React from 'react';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import { TabGroup } from '../../src/tabGroup/TabGroup';
import { Tab } from '../../src/tabGroup/components/Tab';
import './style.css';

const TabGroupDemo = `
function TabGroupDemo() {
    return (
      <TabGroup
        activeTabClassName="tab-list-active"
        disabledClassName="tab-list-disabled"
        tabClassName="tab-list-item"
        className="tab-list"
      >
        <Tab label="Tab 1">This is content for <em>tab 1</em></Tab>
        <Tab label="Tab 2" activeTab="Tab 2">This is content for <em>tab 2</em></Tab>
        <Tab label="Tab 3">This is content for <em>tab 3</em></Tab>
        <Tab label="Tab 4" disabled={true}>This is content for <em>tab 4</em></Tab>
      </TabGroup>
    );
}
`.trim();

const TabGroupDemoLive = () => {
  const scope = { TabGroup, Tab };
  return (
    <LiveProvider code={TabGroupDemo} scope={scope}>
      <div className="container">
        <LiveEditor className="liveEditor" aria-label="editor" />
        <LivePreview className="livePreview" aria-label="preview" />
      </div>
      <LiveError className="liveError" aria-label="error" />
    </LiveProvider>
  );
};

export default TabGroupDemoLive;
