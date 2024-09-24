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
    previousButton: <>&laquo;</>,
    previousButtonClassName: '',
    nextButton: <>&raquo;</>,
    nextButtonClassName: '',
    pageNumbersClassName: '',
    sibilingCount: 2,
    boundaryCount: 1,
  },
};
