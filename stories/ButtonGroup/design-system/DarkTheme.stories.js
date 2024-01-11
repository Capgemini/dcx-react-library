/* eslint-disable import/no-webpack-loader-syntax */
import { ButtonGroup, Button } from '../../../src';

/**
 * This a theme showcases how to customize the component so it can be used on dark backgrounds.
 */
export default {
  title: 'DCXLibrary/Form/ButtonGroup/Design system/Dark',
  component: Button,
  decorators: [
    getStory => {
      require('../../../dist/design-system/index.css');
      require('../../themes/dark.theme.css');
      return getStory();
    },
  ],
  parameters: {
    options: { showPanel: true },
    actions: { disable: true },
  },
  tags: ['autodocs'],
};


export const DarkDefault = {
  name: 'Default',
  parameters: {
    backgrounds: {
      default: 'dark',
      values: [
        { name: 'dark', value: '#333131' },
        { name: 'light', value: '#fff' },
      ],
    },
  },
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

export const DarkVertical = {
  name: 'Vertical',
  parameters: {
    backgrounds: {
      default: 'dark',
      values: [
        { name: 'dark', value: '#333131' },
        { name: 'light', value: '#fff' },
      ],
    },
  },
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

export const DarkDisabled = {
  name: 'Disabled',
  parameters: {
    backgrounds: {
      default: 'dark',
      values: [
        { name: 'dark', value: '#333131' },
        { name: 'light', value: '#fff' },
      ],
    },
  },
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