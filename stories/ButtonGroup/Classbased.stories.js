import { Button } from '../../src/button/Button';
import { ButtonGroup } from '../../src/buttonGroup/ButtonGroup';
import { action } from '@storybook/addon-actions';

import './style.css';

/**
 * In this section we're using the ButtonGroup component providing the **GovUk style** passing the relative className.
 * Feel free to use your own css to style the formInput as you prefer.
 */
export default {
  title: 'DCXLibrary/Form/ButtonGroup/Class based',
  component: ButtonGroup,
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

export const VerticalLayout = {
  name: 'When the layout is vertical',
  render: function () {
    return (
      <ButtonGroup layout="vertical" onClick={action('on-click')}>
        <Button label="Button 1" />
        <Button label="Button 2" />
        <Button label="Button 3" />
      </ButtonGroup>
    );
  },
};

export const MultipleType = {
  name: 'When the type is Multiple',
  render: function () {
    return (
      <ButtonGroup type="multiple" onClick={action('on-click')}>
        <Button label="Button 1" />
        <Button label="Button 2" />
        <Button label="Button 3" />
      </ButtonGroup>
    );
  },
};

export const SelectedButtons = {
  name: 'When Selected prop is used',
  render: function () {
    return (
      <ButtonGroup
        selected={['id', 0, 'value']}
        type="multiple"
        onClick={action('on-click')}
      >
        <Button label="Button 1" />
        <Button label="Button 2" id="id" />
        <Button label="Button 3" value={'value'} />
      </ButtonGroup>
    );
  },
};

export const Disabled = {
  name: 'When disabled prop is used',
  render: function () {
    return (
      <ButtonGroup disabled>
        <Button label="Button 1" />
        <Button label="Button 2" id="id" />
        <Button label="Button 3" value={'value'} />
      </ButtonGroup>
    );
  },
};

export const ButtonsClassname = {
  name: 'When ButtonsClassname is vertical',
  render: function () {
    return (
      <ButtonGroup buttonsClassName="myStyle" onClick={action('on-click')}>
        <Button label="Button 1" />
        <Button label="Button 2" />
        <Button label="Button 3" />
      </ButtonGroup>
    );
  },
};
