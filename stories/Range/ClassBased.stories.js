import { Range } from '../../src/range/Range';
import './style.css';

export default {
  title: 'DCXLibrary/Form/Range/Class based',
  component: Range,
  parameters: {
    options: {
      showPanel: true,
    },
  },
  tags: ['autodocs'],
};

export const Basic = {
  name: 'Basic',
  args: {
    min: 0,
    max: 100,
    ariaLabel: 'Range',
    value: 75,
  },
};

export const Disabled = {
  name: 'Disabled',
  args: {
    min: 0,
    max: 100,
    ariaLabel: 'Range',
    value: 75,
    disabled: true,
  },
};

export const Tooltip = {
  name: 'Tooltip',
  args: {
    min: 0,
    max: 100,
    ariaLabel: 'Range',
    value: 75,
    showTooltip: true,
  },
};

export const SuffixAndPrefix = {
  name: 'Suffix and prefix',
  args: {
    min: 0,
    max: 100,
    ariaLabel: 'Range',
    prefix: (
      <div>
        <h6>Low</h6>
      </div>
    ),
    suffix: (
      <div>
        <h6>High</h6>
      </div>
    ),
  },
};

/**
 * feel free to add a custom icon before or after the label using the attributes **customLoadingPostImage** and/or **customLoadingPreImage**
 */
export const Custom = {
  name: 'Custom',
  args: {
    min: 0,
    max: 100,
    ariaLabel: 'Range',
    inputClass: 'customRange',
  },
};
