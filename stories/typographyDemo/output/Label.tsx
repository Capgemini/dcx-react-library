
import React from 'react';
import { DynamicComponent, brandedComponentStyle } from 'dcx-react-library';
import jsonStyle from './stories/typographyDemo/input/label.json';
export const Label = (props: any) => {
  const style: any = brandedComponentStyle(jsonStyle.label);

  return (
    <DynamicComponent {...style} {...props}>
      {props.children}
    </DynamicComponent>
  );
};
