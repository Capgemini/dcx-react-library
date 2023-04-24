// https://storybook.js.org/docs/react/writing-stories/parameters#global-parameters
import '../stories/govUkStyle.css';
export const parameters = {
  options: {
    storySort: {
      order: ['DCXLibrary',
        [
          'Introduction',
          'Utils',
          'Form', ['Select', ['documentation', 'live', 'Default', 'Design-System', 'Class-Based']],
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

//It will allow to refresh the iframe all the time you move from one story to another - buggy ... it doesn't work
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
