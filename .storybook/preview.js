// https://storybook.js.org/docs/react/writing-stories/parameters#global-parameters
import '../stories/govUkStyle.css';
export const parameters = {
  options: {
    storySort: {
      order: ['DCXLibrary',
        [
          'Introduction',
          'Utils',
          'Form', [
            'Button', ['Documentation', 'Live', 'Without style', 'Class based'],
            'CharacterCount', ['Documentation', 'Live', 'Without style', 'Class based'],
            'Checkbox', ['Documentation', 'Live', 'Without style', 'Class based'],
            'CheckboxGroup', ['Documentation', 'Live', 'Without style', 'Class based'],
            'RadioGroup', ['Documentation', 'Live', 'Without style', 'Class based'],
            'Select', ['Documentation', 'live', 'Default', 'Design-System', 'Class-Based'],
            'Toggle', ['Documentation', 'Live', 'Without style', 'Class based'],
            'Tooltip', ['Documentation', 'Live', 'Class based'],
            'Range', ['Documentation', 'Live', 'Without style', 'Class based', ],
          ],
          'CopyToClipboard',
          'Details',
          'Tabs',
          'Table',
          'Changelog'
        ]
      ]
    },
  }
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
      console.log('first')
    } else if (storyId && context.id !== storyId && context.title !== storyTitle) {
      document.location.reload();
      console.log('second')
    }
    storyId = context.id;
    storyTitle = context.title;
    return storyFn();
  }
];
