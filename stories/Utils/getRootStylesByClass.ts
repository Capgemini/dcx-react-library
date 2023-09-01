const PATTERN = '/*SPLITTER*/';

export const getRootStylesByClass = (
  styles: string,
  className: string
): string => {
  const replaceStyles = styles.replaceAll(/{|}/g, PATTERN);
  const computedStyles = replaceStyles.split(PATTERN).map(el => el.trim());
  const elements = computedStyles.reduce((acc, curr, index) => {
    if (className && curr.startsWith(className)) {
      acc[curr] = computedStyles[index + 1];
    }
    return acc;
  }, {} as Record<string, string>);
  return formatWithRoot(elements[className]);
};

const formatWithRoot = (styles: string): string => `:root { \n  ${styles}\n}`;
