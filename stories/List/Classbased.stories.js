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
  name: 'Ordered with value attribute given as 3',
  render: function () {
    return (
      <List type={TYPE_LIST.ORDERED} className="govuk-list govuk-list--number">
        <ListItem value={3}>Coffee</ListItem>
        <ListItem>Tea</ListItem>
      </List>
    );
  },
};

export const OrderedMarkerType1 = {
  name: 'Ordered with MarkerType 1',
  render: function () {
    return (
      <List
        type={TYPE_LIST.ORDERED}
        markerType={'1'}
        className="govuk-list govuk-list--number"
      >
        <ListItem>Coffee</ListItem>
        <ListItem>Tea</ListItem>
        <ListItem>Ice Tea</ListItem>
      </List>
    );
  },
};
export const OrderedMarkerTypea = {
  name: 'Ordered with MarkerType a',
  render: function () {
    return (
      <List
        type={TYPE_LIST.ORDERED}
        markerType={'a'}
        className="govuk-list govuk-list--number"
      >
        <ListItem>Coffee</ListItem>
        <ListItem>Tea</ListItem>
        <ListItem>Ice Tea</ListItem>
      </List>
    );
  },
};
export const OrderedMarkerTypeA = {
  name: 'Ordered with MarkerType A',
  render: function () {
    return (
      <List
        type={TYPE_LIST.ORDERED}
        markerType={'A'}
        className="govuk-list govuk-list--number"
      >
        <ListItem>Coffee</ListItem>
        <ListItem>Tea</ListItem>
        <ListItem>Ice Tea</ListItem>
      </List>
    );
  },
};
export const OrderedMarkerTypei = {
  name: 'Ordered with MarkerType i',
  render: function () {
    return (
      <List
        type={TYPE_LIST.ORDERED}
        markerType={'i'}
        className="govuk-list govuk-list--number"
      >
        <ListItem>Coffee</ListItem>
        <ListItem>Tea</ListItem>
        <ListItem>Ice Tea</ListItem>
      </List>
    );
  },
};
export const OrderedMarkerTypeI = {
  name: 'Ordered with MarkerType I',
  render: function () {
    return (
      <List
        type={TYPE_LIST.ORDERED}
        markerType={'I'}
        className="govuk-list govuk-list--number"
      >
        <ListItem>Coffee</ListItem>
        <ListItem>Tea</ListItem>
        <ListItem>Ice Tea</ListItem>
      </List>
    );
  },
};
