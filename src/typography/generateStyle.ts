export const brandedComponentStyle = (typographyComp: any) => {
  let style: any = {};
  let tag: string = '';
  Object.keys(typographyComp).forEach((key: string) => {
    if (key === 'tag') {
      tag = typographyComp[key];
    } else {
      style = { ...style, [key]: typographyComp[key].value };
    }
  });
  return {
    style,
    tag,
  };
};
