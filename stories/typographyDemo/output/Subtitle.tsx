
import React from 'react';
import { DynamicComponent, brandedComponentStyle } from 'dcx-react-library';
import jsonStyle from './stories/typographyDemo/input/subtitle.json';
export const Subtitle = (props: any) => {
  const style: any = brandedComponentStyle(jsonStyle.subtitle);

  return (
    <DynamicComponent {...style} {...props}>
      {props.children}
    </DynamicComponent>
  );
};
