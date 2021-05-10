// https://storybook.js.org/docs/react/writing-stories/parameters#global-parameters
export const parameters = {
  // https://storybook.js.org/docs/react/essentials/actions#automatically-matching-args
  actions: { argTypesRegex: '^on.*' },
  options: {
    storySort: (a, b) => {
      if (a[0].includes('dcxlibrary-form')) {
        return 2000;
      } else if (a[0].includes('progress')) {
        return 1000;
      } else {
        return 0;
      }
    }
  }
};
