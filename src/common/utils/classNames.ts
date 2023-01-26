const classNames = (classes: any[]): string =>
  classes
    .filter(
      (c: string) =>
        c !== 'undefined' &&
        c !== undefined &&
        c !== 'null' &&
        c !== null &&
        typeof c === 'string'
    )
    .join(' ');

const conditionalClassNames = (classes: any[]) => {
  let result = '';
  classes.forEach((c: any) => {
    if (c !== null && typeof c === 'object') {
      for (const v in c) {
        if (c[v] === true) {
          result = result.concat(classNames(v.split(' '))).concat(' ');
        }
      }
    } else {
      if (
        c !== 'undefined' &&
        c !== undefined &&
        c !== 'null' &&
        c !== null &&
        typeof c === 'string'
      )
        result = result.concat(c).concat(' ');
    }
  });
  return result.slice(0, -1);
};

export { classNames, conditionalClassNames };
