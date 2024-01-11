/* eslint-disable import/no-webpack-loader-syntax */
import { ButtonGroup, Button } from '../../../src';
/**
 * This a theme aimed at easing the vizualization of the different elements of the component in order to improve the experience for people that have visual impairments.
 */
export default {
  title: 'DCXLibrary/Form/ButtonGroup/Design system/Accessible',
  component: ButtonGroup,
  decorators: [
    getStory => {
      require('../../../dist/design-system/index.css');
      require('../../themes/accessible.theme.css');
      return getStory();
    },
  ],
  parameters: {
    options: { showPanel: true },
    actions: { disable: true },
  },
  tags: ['autodocs'],
};

export const AccessibleDefault = {
  name: 'Default',
  render: function () {
    return (
      <ButtonGroup buttonVariant="primary" layout="horizontal">
        <Button label="Button 1" />
        <Button label="Button 2" />
        <Button label="Button 3" />
      </ButtonGroup>
    );
  }
};

export const DefaultVertical = {
  name: 'Vertical',
  render: function () {
    return (
      <ButtonGroup buttonVariant="primary" layout="vertical">
        <Button label="Button 1" />
        <Button label="Button 2" />
        <Button label="Button 3" />
      </ButtonGroup>
    );
  }
};

export const AccessibleDisabled = {
  name: 'Disabled',
  render: function () {
    return (
      <ButtonGroup buttonVariant="primary" layout="horizontal" disabled>
        <Button label="Button 1" />
        <Button label="Button 2" />
        <Button label="Button 3" />
      </ButtonGroup>
    );
  }
};