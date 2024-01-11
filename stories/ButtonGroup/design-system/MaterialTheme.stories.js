/* eslint-disable import/no-webpack-loader-syntax */
import { ButtonGroup, Button } from '../../../src';
/**
 * This a theme showcases an appearance similar to Material UI can be achieved.
 * If you copy paste this snippet inside your css file you'll get a material design style
 */
export default {
  title: 'DCXLibrary/Form/ButtonGroup/Design system/Material',
  component: Button,
  decorators: [
    getStory => {
      require('../../../dist/design-system/index.css');
      require('../../themes/material.theme.css');
      return getStory();
    },
  ],
  parameters: {
    options: { showPanel: true },
    actions: { disable: true },
  },
  tags: ['autodocs'],
};

export const MaterialDefault = {
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

export const MaterialVertical = {
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

export const MaterialDisabled = {
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

