import { Button } from '../../src/button/Button';
import { ButtonGroup } from '../../src/buttonGroup/ButtonGroup';
import { action } from '@storybook/addon-actions';

import './style.css';

/**
 * In this section we're using the ButtonGroup component providing a **Generic style** passing the relative className.
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
        type="single"
        onClick={action('on-click')}
        className="dcx-button-toggle-group dcx-button-toggle-group-appearance-standard "
        buttonsClassName="ripple-button dcx-button-toggle-button dcx-focus-indicator"
      >
        <div className="dcx-button-toggle dcx-button-toggle-appearance-standard">
          <Button>
            <span className="dcx-button-toggle-label-content">Bold</span>
          </Button>
        </div>

        <div className="dcx-button-toggle dcx-button-toggle-appearance-standard">
          <Button>
            <span className="dcx-button-toggle-label-content">Itallic</span>
          </Button>
        </div>
        <div className="dcx-button-toggle dcx-button-toggle-appearance-standard">
          <Button>
            <span className="dcx-button-toggle-label-content">Underline</span>
          </Button>
        </div>
      </ButtonGroup>
    );
  },
};

export const VerticalLayout = {
  name: 'Vertical Layout',
  render: function () {
    return (
      <ButtonGroup
        layout="vertical"
        onClick={action('on-click')}
        className="dcx-button-toggle-group dcx-button-toggle-group-appearance-standard "
        buttonsClassName="ripple-button dcx-button-toggle-button dcx-focus-indicator"
      >
        <div className="dcx-button-toggle dcx-button-toggle-appearance-standard">
          <Button>
            <span className="dcx-button-toggle-label-content">Bold</span>
          </Button>
        </div>

        <div className="dcx-button-toggle dcx-button-toggle-appearance-standard">
          <Button>
            <span className="dcx-button-toggle-label-content">Itallic</span>
          </Button>
        </div>
        <div className="dcx-button-toggle dcx-button-toggle-appearance-standard">
          <Button>
            <span className="dcx-button-toggle-label-content">Underline</span>
          </Button>
        </div>
      </ButtonGroup>
    );
  },
};

export const MultipleType = {
  name: 'Select Multiple',
  render: function () {
    return (
      <ButtonGroup
        type="multiple"
        onClick={action('on-click')}
        className="dcx-button-toggle-group dcx-button-toggle-group-appearance-standard "
        buttonsClassName="ripple-button dcx-button-toggle-button dcx-focus-indicator"
      >
        <div className="dcx-button-toggle dcx-button-toggle-appearance-standard">
          <Button>
            <span className="dcx-button-toggle-label-content">Bold</span>
          </Button>
        </div>

        <div className="dcx-button-toggle dcx-button-toggle-appearance-standard">
          <Button>
            <span className="dcx-button-toggle-label-content">Itallic</span>
          </Button>
        </div>
        <div className="dcx-button-toggle dcx-button-toggle-appearance-standard">
          <Button>
            <span className="dcx-button-toggle-label-content">Underline</span>
          </Button>
        </div>
      </ButtonGroup>
    );
  },
};

export const SelectedButtons = {
  name: 'Pre Selected items',
  render: function () {
    return (
      <ButtonGroup
        selected={['value', 'id', 1]}
        type="multiple"
        onClick={action('on-click')}
        className="dcx-button-toggle-group dcx-button-toggle-group-appearance-standard "
        buttonsClassName="ripple-button dcx-button-toggle-button dcx-focus-indicator"
      >
        <div className="dcx-button-toggle dcx-button-toggle-appearance-standard">
          <Button value={'value'}>
            <span className="dcx-button-toggle-label-content">Bold</span>
          </Button>
        </div>

        <div className="dcx-button-toggle dcx-button-toggle-appearance-standard">
          <Button>
            <span className="dcx-button-toggle-label-content">Itallic</span>
          </Button>
        </div>
        <div className="dcx-button-toggle dcx-button-toggle-appearance-standard">
          <Button id="id">
            <span className="dcx-button-toggle-label-content">Underline</span>
          </Button>
        </div>
      </ButtonGroup>
    );
  },
};

export const Disabled = {
  name: 'Disabled',
  render: function () {
    return (
      <ButtonGroup
        disabled
        onClick={action('on-click')}
        className="dcx-button-toggle-group dcx-button-toggle-group-appearance-standard "
        buttonsClassName="ripple-button dcx-button-toggle-button dcx-focus-indicator"
      >
        <div className="dcx-button-toggle dcx-button-toggle-appearance-standard">
          <Button value={'value'}>
            <span className="dcx-button-toggle-label-content">Bold</span>
          </Button>
        </div>

        <div className="dcx-button-toggle dcx-button-toggle-appearance-standard">
          <Button>
            <span className="dcx-button-toggle-label-content">Itallic</span>
          </Button>
        </div>
        <div className="dcx-button-toggle dcx-button-toggle-appearance-standard">
          <Button id="id">
            <span className="dcx-button-toggle-label-content">Underline</span>
          </Button>
        </div>
      </ButtonGroup>
    );
  },
};
