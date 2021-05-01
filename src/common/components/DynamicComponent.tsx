import React from 'react';
import { createUseStyles } from 'react-jss';

type DynamicComponentProps = {
  tag: keyof JSX.IntrinsicElements;
  dynamicStyle?: React.CSSProperties;
  children: JSX.Element;
};

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
export const DynamicComponent = ({
  tag,
  dynamicStyle,
  ...props
}: DynamicComponentProps) => {
  const Component = tag;
  const styles: any = createUseStyles({
    style: {
      ...dynamicStyle,
    },
  });
  const classes = styles();
  return (
    <Component className={classes.style} {...props}>
      {props.children}
    </Component>
  );
};

DynamicComponent.defaultProps = {
  tag: 'div',
};
