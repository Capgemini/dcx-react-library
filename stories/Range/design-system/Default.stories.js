import { Range } from '../../../src/range/Range';
// import '../style.css';
 
/**
 * Here we display the component in its natural form, importing only the base Design System styles.
 */
export default {
  title: 'DCXLibrary/Form/Range/Design system/Default',
  component: Range,
  decorators: [
    (getStory) => {
      require('../../../dist/design-system/index.css');
      return getStory();
    },
  ],
  parameters: {
    options: { showPanel: true },
    actions: { disable: true },
  },
  tags: ['autodocs'],
};
 
export const Default = {
  name: 'Default',
  args: {
    min: 0,
    max: 100,
    ariaLabel: 'Range',
    value: 50,
  },
};
 
export const Disabled = {
  name: 'Disabled',
  args: {
    min: 0,
    max: 100,
    ariaLabel: 'Range',
    value: 75,
    disabled: true
  },
};
 
export const Tooltip = {
  name: 'Tooltip',
  args: {
    min: 0,
    max: 100,
    ariaLabel: 'Range',
    value: 61,
    showTooltip: true
  },
};
 
export const SuffixAndPrefix = {
  name: 'SuffixAndPrefix',
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
    )
  },
};
