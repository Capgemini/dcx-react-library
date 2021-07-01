import React from 'react';
import { DragResize } from 'dcx-react-library';

export const DragResizeVerticalDemo = () => (
  <DragResize
    firstPane={<div>first item</div>}
    secondPane={<div>second item</div>}
  />
);
