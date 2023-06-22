import { Paragraph } from '../../../src/paragraph/Paragraph';
import { LiveProvider, LiveEditor} from 'react-live';
import style from '!raw-loader!../../themes/material.theme.css';

/**
 * This a theme showcases an appearance similar to Material UI can be achieved.  
 * If you copy paste this snippet inside your css file you'll get a material design style
*/
export default {
  title:"DCXLibrary/Typography/Paragraph/Design system/Material",
  component: Paragraph,
  decorators:[
    (getStory) => {
      require('../../../dist/design-system/index.css');
      require('../../themes/material.theme.css');
      return getStory();
    }
  ],
  parameters:{
    options: { showPanel: true },
    actions: { disable: true },
  },
  tags: ['autodocs'] 
}


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
  args: {
    className: 'govuk-body',
    value: 'This is the content of the paragraph.',
  },
};
