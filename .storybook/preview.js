// https://storybook.js.org/docs/react/writing-stories/parameters#global-parameters
import '../stories/govUkStyleOfficial.css';
import '../stories/liveEdit/style.css';
import {
  Title,
  Subtitle,
  Description,
  Primary,
  Controls,
  Stories,
} from '@storybook/blocks';

export const parameters = {
  options: {
    storySort: {
      order: [
        'DCXLibrary',
        [
          'Introduction',
          'Utils',
          'Form',
          [
            'Autocomplete',
            ['Documentation', 'Live', 'Without style', 'Class based'],
            'Button',
            ['Documentation', 'Live', 'Without style', 'Class based'],
            'CharacterCount',
            ['Documentation', 'Live', 'Without style', 'Class based'],
            'Checkbox',
            ['Documentation', 'Live', 'Without style', 'Class based'],
            'CheckboxGroup',
            ['Documentation', 'Live', 'Without style', 'Class based'],
            'RadioGroup',
            ['Documentation', 'Live', 'Without style', 'Class based'],
            'Input',
            ['Documentation', 'Live', 'Without style', 'Class based'],
            'InputMasked',
            ['Documentation', 'Live', 'Without style', 'Class based'],
            'Select',
            [
              'Documentation',
              'Live',
              'Without style',
              'Class based',
              'Design system',
              [
                'Playground',
                'Default',
                'Accessible',
                'Dark',
                'Material',
                'Floating',
              ],
            ],
            'MultiSelect',
            ['Documentation', 'Live', 'Without style', 'Class based'],
            'Date',
            ['Documentation', 'Live', 'Without style', 'Class based'],
            'MultiUpload',
            ['Documentation', 'Live', 'Without style', 'Class based'],
            'Progress',
            ['Documentation', 'Live', 'Without style', 'Class based'],
            'Range',
            ['Documentation', 'Live', 'Without style', 'Class based'],
            'Toggle',
            ['Documentation', 'Live', 'Without style', 'Class based'],
            'Tooltip',
            ['Documentation', 'Live', 'Class based'],
          ],
          'Breadcrumb',
          ['Documentation', 'Live', 'Without style', 'Class based'],
          'CopyToClipboard',
          ['Documentation', 'Live', 'Without style', 'Class based'],
          'Details',
          ['Documentation', 'Live', 'Without style', 'Class based'],
          'Tabs',
          ['Documentation', 'Live', 'Without style', 'Class based'],
          'Table',
          ['Documentation', 'Live', 'Without style', 'Class based'],
          'Typography',
          [
            'Abbreviate',
            ['Documentation', 'Live', 'Without style', 'Class based'],
            'Blockquote',
            ['Documentation', 'Live', 'Without style', 'Class based'],
            'Heading',
            ['Documentation', 'Live', 'Without style', 'Class based'],
            'Paragraph',
            ['Documentation', 'Live', 'Without style', 'Class based'],
            'Label',
            ['Documentation', 'Live', 'Without style', 'Class based'],
            'Link',
            ['Documentation', 'Live', 'Without style', 'Class based'],
            'InsertText',
            ['Documentation', 'Live', 'Without style', 'Class based'],
            'KeyboardInput',
            ['Documentation', 'Live', 'Without style', 'Class based'],
            'Highlight',
            ['Documentation', 'Live', 'Without style', 'Class based'],
            'List',
            ['Documentation', 'Live', 'Without style', 'Class based'],
          ],
          'Changelog',
        ],
      ],
    },
  },
  //with this custom configuration we removed the <Controls/> (the properties table) from the page. By default it sits between Primary and Stories
  docs: {
    page: () => (
      <>
        <Title />
        <Subtitle />
        <Description />
        <Primary />
        <Stories includePrimary={false} />
      </>
    ),
  },
};

//It will allow to refresh the iframe all the time you move from one story to another - https://github.com/storybookjs/storybook/issues/16016
let storyId;
let storyTitle;
export const decorators = [
  (storyFn, context) => {
    console.log('context.title:', context.title);
    console.log('storyTitle:', storyTitle);
    if (storyTitle && context.title !== storyTitle) {
      document.location.reload();
      console.log('first');
    } else if (
      storyId &&
      context.id !== storyId &&
      context.title !== storyTitle
    ) {
      document.location.reload();
      console.log('second');
    }
    storyId = context.id;
    storyTitle = context.title;
    return storyFn();
  },
];
