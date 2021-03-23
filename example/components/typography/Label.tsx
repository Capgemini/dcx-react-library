import React from 'react';
import { DynamicComponent, brandedComponentStyle } from 'dcx-react-library';
import jsonStyle from '../../typography-template/label.json';
export const Label = (props: any) => {
  const branded: any = brandedComponentStyle(jsonStyle.label);

  return (
    <DynamicComponent dynamicStyle={branded.style} tag={branded.tag}>
      {props.children}
    </DynamicComponent>
  );
};
