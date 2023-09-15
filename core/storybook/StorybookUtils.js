export class StorybookUtils {
  static getThemeCode(className, stylesheet) {
    const r = new RegExp(`\\.${className} {([\\s\\-\\w\\:#;\\"\\'\\(\\)]*)}`, 'g');
    const componentStyle = r.exec(stylesheet);
    if (!componentStyle) {
      return '/**' + '\n** This version of the component do not require any token to be configured.' + '\n*/';
    }
    return `:root {${componentStyle[1]}}`;
  }
}