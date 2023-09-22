/* eslint-disable import/no-webpack-loader-syntax */
import style from '!raw-loader!../../../dist/design-system/list.css';
import TokensDecorator from '../../../core/storybook/TokensDecorator';
import { List } from '../../../src/list/List';
import { ListItem } from '../../../src/list/ListItem';

export default {
  title: 'DCXLibrary/Typography/List/Design system',
  component: List,
  decorators: [
    (getStory) => (
      <TokensDecorator style={style}>
        {getStory()}
      </TokensDecorator>
    ),
  ],
  parameters: {
    options: { showPanel: true },
    actions: { disable: true },
  },
};

export const Playground = {
  name: 'Playground',
  render: function () {
    return (
      <List>
        <ListItem>Coffee</ListItem>
        <ListItem>Tea</ListItem>
      </List>
    );
  },
};
