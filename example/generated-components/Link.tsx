import React from 'react';
import { DynamicComponent, brandedComponentStyle } from 'dcx-react-library';
import jsonStyle from '../component-template/link.json';
export const Link = ({ href, text, ariaLabel, ...props }: any) => {
  const branded: any = brandedComponentStyle(jsonStyle.link);
  const newProps = { href, text, 'aria-label': ariaLabel, ...props };
  return (
    <DynamicComponent
      dynamicStyle={branded.style}
      tag={branded.tag}
      {...newProps}
    >
      {props.children}
    </DynamicComponent>
  );
};
