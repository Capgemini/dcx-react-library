import React from 'react';
import { DynamicComponent, brandedComponentStyle } from 'dcx-react-library';
import jsonStyle from '../../typography-template/label.json';
export const Label = (props: any) => {
  const style: any = brandedComponentStyle(jsonStyle.label);
  debugger;
  return (
    <DynamicComponent {...style} {...props}>
      {props.children}
    </DynamicComponent>
  );
};
