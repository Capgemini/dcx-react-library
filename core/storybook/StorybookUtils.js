export class StorybookUtils {
  static getThemeCode(className, stylesheet) {
    const r = new RegExp(`\\.${className} {([\\s\\-\\w\\:#;\\"\\'\\(\\)]*)}`, 'g');
    const componentStyle = r.exec(stylesheet);
    if (!componentStyle) {
      return '/** No additional properties needed */';
    }
    return `:root {${componentStyle[1]}}`;
  }
}