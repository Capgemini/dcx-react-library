/* eslint-disable import/no-webpack-loader-syntax */
import style from '!raw-loader!../../../dist/design-system/list.css';
import TokensDecorator from '../../../core/storybook/TokensDecorator';
import { DescriptionList, Term, Detail } from '../../../src/descriptionList';

export default {
  title: 'DCXLibrary/Typography/DescriptionList/Design system',
  component: DescriptionList,
  decorators: [
    (getStory) => <TokensDecorator style={style}>{getStory()}</TokensDecorator>,
  ],

  parameters: {
    options: { showPanel: true },
    actions: { disable: true },
  },
};

export const Playground = {
  name: 'Playground',
  parameters: {
    options: { showPanel: true },
    actions: { disable: true },
  },
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
