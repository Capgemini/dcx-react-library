const classNames = (classes: any[]): string =>
  classes
    .filter(
      (c: string) => c !== 'undefined' && c !== 'null' && typeof c === 'string'
    )
    .join(' ');

const conditionalClassNames = (classes: any[]) => {
  let result = '';
  classes.forEach((c: any) => {
    if (c !== null && typeof c === 'object') {
      if (Object.values(c)[0] === true) {
        result = result
          .concat(classNames(Object.keys(c)[0].split(' ')))
          .concat(' ');
      }
    } else {
      if (c !== 'undefined' && c !== 'null' && typeof c === 'string') {
        result = result.concat(c + ' ');
      }
    }
  });
  return result.slice(0, -1);
};

export { classNames, conditionalClassNames };
