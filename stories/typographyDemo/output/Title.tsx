
import React from 'react';
import { DynamicComponent, brandedComponentStyle } from 'dcx-react-library';
import jsonStyle from './stories/typographyDemo/input/title.json';
export const Title = (props: any) => {
  const style: any = brandedComponentStyle(jsonStyle.title);

  return (
    <DynamicComponent {...style} {...props}>
      {props.children}
    </DynamicComponent>
  );
};
