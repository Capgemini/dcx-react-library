import React from 'react';
import { DynamicComponent, brandedComponentStyle } from 'dcx-react-library';
import jsonStyle from '../component-template/headingOne.json';
export const HeadingOne = (props: any) => {
  const branded: any = brandedComponentStyle(jsonStyle.headingOne);

  return (
    <DynamicComponent dynamicStyle={branded.style} tag={branded.tag} {...props}>
      {props.children}
    </DynamicComponent>
  );
};
