
import { DescriptionList, Term, Detail } from '../../../src/descriptionList';

/**
 * Here we display the component in its natural abbreviate, importing only the base Design System styles.
 */
export default {
  title: 'DCXLibrary/Typography/DescriptionList/Design system/Default',
  component: DescriptionList,
  decorators: [
    getStory => {
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
  render: function () {
    return (
      <DescriptionList>
        <Term className="myStyle">Coffee</Term>
        <Detail className="myStyle">black hot drink</Detail>
        <Term className="myStyle">Milk</Term>
        <Detail className="myStyle">white cold drink</Detail>
      </DescriptionList>
    );
  },
};
