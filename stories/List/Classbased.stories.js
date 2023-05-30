import { ListItem } from '../../src/list';
import { List, TYPE_LIST } from '../../src/list/List';

/**
 * In this section we're using the List component providing the **GovUk style** passing the relative className.
 * Feel free to use your own css to style the formInput as you prefer.
 */
export default {
  title: 'DCXLibrary/Typography/List/Class based',
  component: List,
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
      <List className="govuk-list">
        <ListItem>Coffee</ListItem>
        <ListItem>Tea</ListItem>
      </List>
    );
  },
};

export const Unordered = {
  name: 'Unordered',
  render: function () {
    return (
      <List
        type={TYPE_LIST.UNORDERED}
        className="govuk-list govuk-list--bullet"
      >
        <ListItem>Coffee</ListItem>
        <ListItem>Tea</ListItem>
      </List>
    );
  },
};

export const Ordered = {
  name: 'Ordered',
  render: function () {
    return (
      <List type={TYPE_LIST.ORDERED} className="govuk-list govuk-list--number">
        <ListItem>Coffee</ListItem>
        <ListItem>Tea</ListItem>
      </List>
    );
  },
};

export const ExtraProperties = {
  name: 'Passing extra properties',
  render: function () {
    return (
      <List
        type={TYPE_LIST.ORDERED}
        listProps={{ style: { color: 'red' } }}
        className="govuk-list govuk-list--number"
      >
        <ListItem>Coffee</ListItem>
        <ListItem>Tea</ListItem>
      </List>
    );
  },
};

export const OrderedRev = {
  name: 'Ordered with reversed attribute',
  render: function () {
    return (
      <List
        type={TYPE_LIST.ORDERED}
        reversed
        className="govuk-list govuk-list--number"
      >
        <ListItem>Coffee</ListItem>
        <ListItem>Tea</ListItem>
      </List>
    );
  },
};

export const OrderedStart = {
  name: 'Ordered with start attribute given as 2',
  render: function () {
    return (
      <List
        type={TYPE_LIST.ORDERED}
        start={2}
        className="govuk-list govuk-list--number"
      >
        <ListItem>Coffee</ListItem>
        <ListItem>Tea</ListItem>
      </List>
    );
  },
};

export const OrderedVal = {
  name: 'Ordered with value attribute given as 2',
  render: function () {
    return (
      <List type={TYPE_LIST.ORDERED} className="govuk-list govuk-list--number">
        <ListItem value={2}>Coffee</ListItem>
        <ListItem>Tea</ListItem>
      </List>
    );
  },
};

export const OrderedMarkerType = {
  name: 'Ordered with MarkerType attribute with possible values a, i, 1, A, I',
  render: function () {
    const arr = ['a', 'i', '1', 'A', 'I'];
    const renderedComponents = arr.map((element) => (
      <List
        type={TYPE_LIST.ORDERED}
        markerType={element}
        className="govuk-list govuk-list--number"
      >
        <ListItem>Coffee</ListItem>
        <ListItem>Tea</ListItem>
        <ListItem>Ice Tea</ListItem>
      </List>
    ));
    return <div>{renderedComponents}</div>;
  },
};
