import { Dispatch, SetStateAction } from 'react';

import { ICurrentButton } from './Paginator';
export const pageHandler = (
  page: ICurrentButton,
  setCurrent: Dispatch<SetStateAction<ICurrentButton>>
): number => {
  setCurrent(page);
  return page.page;
};
