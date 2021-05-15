import React from 'react';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import { TabGroup } from '../../src/tabGroup/TabGroup';
import './style.css';

const TabGroupDemo = `
function TabGroupDemo() {
    return (
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
    );
}
`.trim();

const TabGroupDemoLive = () => {
    const scope = { TabGroup };
    return (
        <LiveProvider code={TabGroupDemo} scope={scope}>
        <div className="container">
          <LiveEditor className="liveEditor" aria-label="editor" />
          <LivePreview className="livePreview" aria-label="preview" />
        </div>
        <LiveError className="liveError" aria-label="error" />
      </LiveProvider>
    )
}

export default TabGroupDemoLive;