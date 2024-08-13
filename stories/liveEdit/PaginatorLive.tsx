import { LiveEditor, LiveError, LivePreview, LiveProvider } from 'react-live';

import { Paginator } from '../../src/paginator/Paginator';
import React from 'react';

const PaginatorDemo = `
function PaginatorDemo() {
  return (
    <Paginator 
    paginatorClassName= ""
    currentPage = {
      page: 5,
      className: ""
    }
    totalPages = {10}
    previousButton = {
      text: "test back",
      className: ""
    }
    nextButton = {
      text: "test next",
      calssName: ""
    }
    pageNumbersClassName = "buttons"
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
