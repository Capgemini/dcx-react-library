import React from 'react';
import {
  DynamicComponent,
  brandedComponentStyle,
} from '@capgeminiuk/dcx-react-library';
import jsonStyle from '../component-template/headingOne.json';
export const HeadingOne = ({ ...props }: any) => {
  const branded: any = brandedComponentStyle(jsonStyle.headingOne);
  const newProps = { ...props };
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
