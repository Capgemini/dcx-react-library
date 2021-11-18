import React from 'react';
import {
  DynamicComponent,
  brandedComponentStyle,
} from '@capgeminiuk/dcx-react-library';
import jsonStyle from '../component-template/link.json';
export const Link = ({ href, text, classes, ...props }: any) => {
  const branded: any = brandedComponentStyle(jsonStyle.link);
  const newProps = { href, text, classes, ...props };
  return (
    <DynamicComponent
      dynamicStyle={branded.style}
      tag={branded.tag}
      className={['btn', 'btn-sm', 'btn-link', classes].join(' ')}
      {...newProps}
    >
      {props.children}
    </DynamicComponent>
  );
};
