import { Paginator } from '../../src/paginator/Paginator';

export default {
  title: 'DCXLibrary/Layout/Paginator/Without style',
  component: Paginator,
  parameters: {
    options: {
      showPanel: true,
    },
  },
};

/**
 * For a list of all the possible usage please look the Class based folder
 */
export const Unstyled = {
  name: 'Un-styled',
  args: {
    paginatorSectionClassName: '',
    paginatorClassName: '',
    currentPage: {
      page: 5,
      className: '',
    },
    totalPages: 18,
    previousButton: {
      text: '< Previous ',
      className: '',
    },
    nextButton: {
      text: 'Next >',
      className: '',
    },
    pageNumbersClassName: '',
  },
};
