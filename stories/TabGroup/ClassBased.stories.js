import { TabGroup, Tab } from '../../src/tabGroup';
import { Button } from '../../src/button';
import React, { useRef } from 'react';
import './style.css';
/**
 * In this section we're using the TabGroup component providing the **GovUk style** passing the relative `className.
 * Feel free to use your own css to style the formInput as you prefer.
 */
export default {
  title: 'DCXLibrary/Layout/Tabs/Class based',
  component: TabGroup,
  parameters: {
    options: {
      showPanel: true,
    },
  },
  tags: ['autodocs'],
};

export const Basic = {
  name: 'Basic',
  render: function () {
    return (
      <TabGroup
        containerClassName="govuk-tabs"
        className="govuk-tabs__list"
        tabClassName="govuk-tabs__list-item"
        tabLinkClassName="govuk-tabs__tab"
        activeTabClassName="govuk-tabs__list-item--selected"
        contentClassName="govuk-tabs__panel"
      >
        <Tab eventKey="tab-1" label="Past day">
          <h2>Past day</h2>
          This the content for <em>Past day</em>
        </Tab>
        <Tab eventKey="tab-2" label="Past week">
          <h2>Past week</h2>
          This the content for <em>Past week</em>
        </Tab>
        <Tab eventKey="tab-3" label="Past month">
          <h2>Past month</h2>
          This the content for <em>Past month</em>
        </Tab>
        <Tab eventKey="tab-4" label="Past year">
          <h2>Past year</h2>
          This the content for <em>Past year</em>
        </Tab>
      </TabGroup>
    );
  },
  args: {},
};

export const Disabled = {
  name: 'Disabled',
  render: function () {
    return (
      <TabGroup
        activeTabClassName="tab-list-active"
        disabledClassName="tab-list-disabled"
        tabClassName="tab-list-item"
        className="tab-list"
      >
        <Tab eventKey="tab-1" label="tab 1">
          This the content for <em>tab 1</em>
        </Tab>
        <Tab eventKey="tab-2" label="tab 2">
          This the content for <em>tab 2</em>
        </Tab>
        <Tab eventKey="tab-3" label="tab 3" disabled={true}>
          This the content for <em>tab 3</em>
        </Tab>
      </TabGroup>
    );
  },
  args: {},
};

export const Preselected = {
  name: 'Preselected',
  render: function () {
    return (
      <TabGroup
        activeTabClassName="tab-list-active"
        activeKey="tab 2"
        disabledClassName="tab-list-disabled"
        tabClassName="tab-list-item"
        className="tab-list"
      >
        <Tab eventKey="tab-1" label="tab 1">
          This the content for <em>tab 1</em>
        </Tab>
        <Tab eventKey="tab-2" label="tab 2">
          This the content for <em>tab 2</em>
        </Tab>
        <Tab eventKey="tab-3" label="tab 3">
          This the content for <em>tab 3</em>
        </Tab>
      </TabGroup>
    );
  },
  args: {},
};

export const Event = {
  name: 'Select event',
  render: function () {
    const handleChange = (label) => alert(`${label} selected`);
    return (
      <TabGroup
        activeTabClassName="tab-list-active"
        tabClassName="tab-list-item"
        className="tab-list"
        onClick={handleChange}
      >
        <Tab eventKey="tab-1" label="tab 1">
          This the content for <em>tab 1</em>
        </Tab>
        <Tab eventKey="tab-2" label="tab 2">
          This the content for <em>tab 2</em>
        </Tab>
        <Tab eventKey="tab-3" label="tab 3">
          This the content for <em>tab 3</em>
        </Tab>
      </TabGroup>
    );
  },
  args: {},
};

export const Programmatic = {
  name: 'Programatically controlled',
  render: function () {
    const tabRef = useRef();
    return (
      <>
        <TabGroup
          activeTabClassName="tab-list-active"
          tabClassName="tab-list-item"
          className="tab-list"
          ref={tabRef}
        >
          <Tab label="Tab 1" eventKey="tab-pane-1-id">
            This is content for <em>tab 1</em>
          </Tab>
          <Tab label="Tab 2" eventKey="tab-pane-2-id">
            This is content for <em>tab 2</em>
          </Tab>
          <Tab label="Tab 3" eventKey="tab-pane-3-id">
            This is content for <em>tab 3</em>
          </Tab>
          <Tab label="Tab 4" eventKey="tab-pane-4-id">
            This is content for <em>tab 4</em>
          </Tab>
          <Tab label="Tab 5" eventKey="tab-pane-5-id">
            This is content for <em>tab 5</em>
          </Tab>
        </TabGroup>
        <br />
        <Button
          onClick={() => {
            //@ts-ignore
            const changed = tabRef.current.updateActiveTab('tab-pane-5-id');
          }}
          label="Click to change to Tab 5"
        />
      </>
    );
  },
  args: {},
};

export const CustomLabel = {
  name: 'Custom label',
  render: function () {
    return (
      <TabGroup
        activeTabClassName="tab-list-active"
        tabClassName="tab-list-item"
        className="tab-list"
      >
        <Tab eventKey="tab-1" label="tab 1">
          This the content for <em>tab 1</em>
        </Tab>
        <Tab eventKey="tab-2" label="tab 2">
          This the content for <em>tab 2</em>
        </Tab>
        <Tab
          label={
            <img
              src="https://freesvg.org/img/afaulconbridge-Lightbulb-OnOff-1.png"
              width="20px"
            />
          }
          eventKey="tab-3"
        >
          This is content for <em>tab 3</em>
        </Tab>
      </TabGroup>
    );
  },
  args: {},
};
