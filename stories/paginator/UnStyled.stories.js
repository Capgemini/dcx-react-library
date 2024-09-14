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
    paginatorClassName: '',
    currentPage: 5,
    currentPageClassName: '',
    totalPages: 18,
    previousButton: <>Prev</>,
    previousButtonClassName: '',
    nextButton: <>Next</>,
    nextButtonClassName: '',
    pageNumbersClassName: '',
    onPageChange: (page) => page,
    startElipseFromPage: 5,
  },
};
