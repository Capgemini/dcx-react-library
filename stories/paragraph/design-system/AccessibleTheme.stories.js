import { Paragraph } from '../../../src/paragraph/Paragraph';
import style from '!raw-loader!../../themes/accessible.theme.css';
import { LiveProvider, LiveEditor} from 'react-live';

/**
* This a theme aimed at easing the vizualization of the different elements of the component in order to improve the experience for people that have visual impairments.
*/
export default {
  title:'DCXLibrary/Typography/Paragraph/Design system/Accessible',
  component: Paragraph,
  decorators:[
    (getStory) => {
      require('../../../dist/design-system/index.css');
      require('../../themes/accessible.theme.css');
      return getStory();
    }
  ],
  parameters:{
    options: { showPanel: true },
    actions: { disable: true },
  },
  tags: ['autodocs'] 
};

export const ShowCase = {
  parameters: {
    backgrounds: {
      default: 'dark',
      values: [
        { name: 'dark', value: '#333131' },
        { name: 'light', value: '#fff' },
      ],
    },
  },
  render: () => {
    const componentStyle = /\.dcx-paragraph {([\s\S]*)}/g.exec(style);
    let themeCode = '';
    if (componentStyle) {
      themeCode = `:root {${componentStyle[0]}}`;
    }
    return (
      <LiveProvider code={themeCode} disabled={true} language="css">
        <LiveEditor className="liveEditor" aria-label="editor" />
      </LiveProvider>
    );
  }
};

export const Default = {  
  name: 'Default',
  args: {
    value: 'This is the content of the paragraph.',
  },
};
