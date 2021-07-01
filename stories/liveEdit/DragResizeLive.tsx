import React from 'react';
import { LiveProvider, LiveEditor, LivePreview, LiveError } from 'react-live';
import { DragResize } from '../../src/dragResize/DragResize';

const DragResizeDemo = `function() {
   return (
      <DragResize 
        orientation="vertical"
        firstPane={<div>Left</div>}
        secondPane={<div>Right</div>}
        firstPaneMinSize={150}
        containerClassName="container-class"
        dividerClassName="divider-class"
        firstPaneClassName="first-pane-class"
        secondPaneClassName="second-pane-class"
      />
  );
}`;

const DragResizeLive = () => {
  const scope = { DragResize };
  return (
    <LiveProvider code={DragResizeDemo} scope={scope}>
      <div className="container">
        <LiveEditor className="liveEditor" aria-label="editor" />
      </div>

      <LivePreview className="livePreview" aria-label="preview" />
      <LiveError className="liveError" aria-label="error" />
    </LiveProvider>
  );
};

export default DragResizeLive;
