import fs from 'fs';

export function token(name) {
  const tokens = fs.readFileSync('./src/design-system/tokens.json', 'utf8');
  const parsedTokens = JSON.parse(tokens);
  const parsedName = name.replace(/('|")/g, '');
  return `var(--dcx-${parsedName}, ${parsedTokens[parsedName]})`;
}
