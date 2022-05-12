import React from 'react';

export const Label = ({ ...props }: any) => {
  return <div {...props}>{props.children}</div>;
};
