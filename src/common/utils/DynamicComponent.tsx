import React from 'react';
import { createUseStyles } from 'react-jss';

/**
 *  will generate a new component that will accept whatever property or tag. If a tag is not specified will default as div
 *  @example:
 * <DynamicComponent {{
      tag: 'h1',
      color: 'red,
      fontWietght: 'bold
    }} {...props}> Test </DynamicComponent
    will return:
    <H1 class={class}> test </H1> with the correct look and feel
 **/
export const DynamicComponent = ({ tag, children, ...props }: any) => {
  const Component = tag;
  const styles: any = createUseStyles({
    style: {
      ...props,
    },
  });
  const classes = styles();
  return <Component className={classes.style}>{children}</Component>;
};

DynamicComponent.defaultProps = {
  tag: 'div',
};
