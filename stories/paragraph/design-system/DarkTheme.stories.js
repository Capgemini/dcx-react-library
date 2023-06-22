import { Paragraph } from '../../../src/paragraph/Paragraph';
import style from '!raw-loader!../../themes/dark.theme.css';
import { LiveProvider, LiveEditor} from 'react-live';

/**
* This a theme showcases how to customize the component so it can be used on dark backgrounds.
*/
export default {
  title:"DCXLibrary/Typography/Paragraph/Design system/Dark",
  component: Paragraph,
  decorators:[
    (getStory) => {
      require('../../../dist/design-system/index.css');
      require('../../themes/dark.theme.css');
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
  render: () => (
    <LiveProvider code={style.replace('.dcx-paragraph', ':root')} disabled={true} language="css">
      <LiveEditor className="liveEditor" aria-label="editor" />
    </LiveProvider>
  )
}


export const Default = {  
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
  args: {
    className: 'govuk-body',
    value: 'This is the content of the paragraph.',
  },
};

