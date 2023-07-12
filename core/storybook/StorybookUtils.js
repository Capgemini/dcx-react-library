export class StorybookUtils {
  static getThemeCode(className, stylesheet) {
    const r = new RegExp(`\\.${className} {([\\s\\S]*)}`, 'g');
    const componentStyle = r.exec(stylesheet);
    let themeCode = '';
    if (componentStyle) {
      themeCode = `:root {${componentStyle[1]}}`;
    }
    return themeCode;
  }
}