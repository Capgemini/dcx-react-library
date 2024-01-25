import { ButtonGroup } from '../../src/buttonGroup/ButtonGroup';
import { Button } from '../../src/button/Button';
import { action } from '@storybook/addon-actions';

export default {
  title: 'DCXLibrary/Form/ButtonGroup/Without style',
  component: ButtonGroup,
  parameters: {
    options: {
      showPanel: true,
    },
  },
};

export const Unstyled = {
  render: function () {
    return (
      <ButtonGroup
        buttonVariant="primary"
        layout="horizontal"
        onClick={action('on-click')}
      >
        <Button label="Button 1" />
        <Button label="Button 2" />
        <Button label="Button 3" />
      </ButtonGroup>
    );
  },
};
