import React, { useRef } from 'react';
import { faMoneyBillWave } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, TabGroup, Tab } from 'dcx-react-library';
import './tabGroup.scss';

export const TabGroupDemo = () => {
  const tabRef = useRef();
  //@ts-ignore
  const handleSelectedTab = (id) => {
    document.getElementsByTagName(
      'label'
    )[0].innerText = `The selected tab is: ${id}`;
  };

  return (
    <>
      <h1>Tab Group Demo</h1>
      <label>The selected tab is: Tab 2</label>
      <br />
      <TabGroup
        activeTabClassName="tab-list-active"
        activeKey="tab-pane-2-id"
        disabledClassName="tab-list-disabled"
        tabClassName="tab-list-item"
        className="tab-list"
        onSelect={handleSelectedTab}
        ref={tabRef}
      >
        <Tab label="Tab 1" eventKey="tab-pane-1-id">
          <>
            This is content for <em>tab 1</em>
          </>
        </Tab>
        <Tab label="Tab 2" eventKey="tab-pane-2-id">
          <>
            This is content for <em>tab 2</em>
          </>
        </Tab>
        <Tab label="Tab 3" eventKey="tab-pane-3-id">
          <>
            This is content for <em>tab 3</em>
          </>
        </Tab>
        <Tab label="Tab 4" eventKey="tab-pane-4-id" disabled={true}>
          <>
            This is content for <em>tab 4</em>
          </>
        </Tab>
        <Tab
          label={<FontAwesomeIcon icon={faMoneyBillWave} />}
          eventKey="tab-pane-5-id"
        >
          <>
            This is content for <em>tab 5</em>
          </>
        </Tab>
      </TabGroup>
      <br />
      <Button
        onClick={() => {
          //@ts-ignore
          const changed = tabRef.current.updateActiveTab('tab-pane-5-id');
          if (changed) {
            alert('Tab 5 updated');
          }
        }}
        label="Click to change to Tab 5"
      />
    </>
  );
};
