export const brandedComponentStyle = (typographyComp: any) => {
  let style: any = {};
  Object.keys(typographyComp).forEach((key: string) => {
    style =
      key === 'tag'
        ? { ...style, [key]: typographyComp[key] }
        : { ...style, [key]: typographyComp[key].value };
  });
  return style;
};
