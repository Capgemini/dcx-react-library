// https://storybook.js.org/docs/react/writing-stories/parameters#global-parameters
export const parameters = {
  // https://storybook.js.org/docs/react/essentials/actions#automatically-matching-args
  actions: { argTypesRegex: '^on.*' },
  options: {
    storySort: (a, b) => {
      let order = 2000;
      if (a[0].includes('dcxlibrary-form')) {
        return order;
      } else if (a[0].includes('progress')) {
        return order--;
      } else if (a[0].includes('copy')) {
        return order--;
      } else if (a[0].includes('tabs')) {
        return order--;
      } else if (a[0].includes('table')) {
        return order--;
      } else {
        return 0;
      }
    }
  }
};
