import { LiveEditor, LiveError, LivePreview, LiveProvider } from 'react-live';

import { Paginator } from '../../src/paginator/Paginator';
import React from 'react';

const PaginatorDemo = `
function PaginatorDemo() {
  return (
    <Paginator 
    paginatorClassName="paginator"
    currentPage={5}
    currentPageClassName="current-page"
    totalPages ={15}
    previousButton={<>&laquo;</>}
    previousButtonClassName="previous-button"
    nextButton= {<>&raquo;</>}
    nextButtonClassName= "next-button"
    pageNumbersClassName = "buttons"
    sibilingCount= {1}
    boundaryCount= {2}
    />
  );
}
`.trim();

const PaginatorLive = () => {
  const scope = { Paginator };
  return (
    <LiveProvider code={PaginatorDemo} scope={scope}>
      <div className="container">
        <LiveEditor className="liveEditor" aria-label="editor" />
        <LivePreview className="livePreview" aria-label="preview" />
      </div>
      <LiveError className="liveError" aria-label="error" />
    </LiveProvider>
  );
};

export default PaginatorLive;
