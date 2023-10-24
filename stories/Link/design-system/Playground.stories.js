/* eslint-disable import/no-webpack-loader-syntax */
import style from '!raw-loader!../../../dist/design-system/link.css';
import TokensDecorator from '../../../core/storybook/TokensDecorator';
import { Link } from '../../../src/link/Link';

export default {
  title: 'DCXLibrary/Typography/Link/Design system',
  component: Link,
  decorators: [
    (getStory) => <TokensDecorator style={style}>{getStory()}</TokensDecorator>,
  ],
  parameters: {
    options: { showPanel: true },
    actions: { disable: true },
  },
};

const timestamp = new Date().getTime();
const link = `https://www.google.com?time=${timestamp}`;

export const Playground = {
  name: 'Playground',
  render: function () {
    return <Link value="Google" to={link} props={{ target: '_blank' }} />;
  },
};
