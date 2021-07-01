import React from 'react';
import { DragResize } from 'dcx-react-library';

export const DragResizeHorizontalDemo = () => (
  <DragResize
    firstPaneMinSize={120}
    orientation="horizontal"
    firstPane={<div>first item</div>}
    secondPane={<div>second item</div>}
  />
);
