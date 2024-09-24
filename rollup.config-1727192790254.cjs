'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var postcss = require('rollup-plugin-postcss');
var postcssFunctions = require('postcss-functions');
var postcssImport = require('postcss-import');
var postcssNesting = require('postcss-nesting');
var cssnano = require('cssnano');
var cssnanoPreset = require('cssnano-preset-default');
var fs = require('fs');
var glob = require('glob');
var path = require('path');

function token(name) {
  const tokens = fs.readFileSync('./src/design-system/tokens.json', 'utf8');
  const parsedTokens = JSON.parse(tokens);
  const parsedName = name.replace(/('|")/g, '');
  return `var(--dcx-${parsedName}, ${parsedTokens[parsedName]})`;
}

var customFunctions = /*#__PURE__*/Object.freeze({
  __proto__: null,
  token: token
});

const INPUT_FOLDER = 'src/design-system';
const OUTPUT_FOLDER = 'dist/design-system';

/**
 * Cleanup dist folder
 */
const distPath = path.join(__dirname, OUTPUT_FOLDER);
if (fs.existsSync(distPath)) {
  fs.rmSync(distPath, { recursive: true });
}

function generateTokens() {
  const presenters = {
    color: 'Color'
  };
  const getHeading = (name) => {
    const presenter = presenters[name] ? `\t * @presenter ${presenters[name]}\n` : '';
    return '\t/**\n' +
      `\t * @tokens ${name}\n` +
      presenter +
      '\t */\n';
  };
  return {
    name: 'copy-file',
    transform(code, id) {
      return `export const tokens = ${code};`;
    },
    generateBundle(opts, bundle) {
      const files = new Map();
      for (const file in bundle) {
        const bundleEntry = bundle[file];
        files.set(bundleEntry.fileName, bundleEntry.code);
      }

      Array.from(files.entries())
        .forEach(([fileName, code]) => {
          const tokensJson = code
            .replace('const tokens = ', '')
            .replace('export { tokens };', '')
            .replace(';', '')
            .trim();
          const parsedTokens = JSON.parse(tokensJson);

          const tokenKeys = Object.keys(parsedTokens)
            .sort();

          const tokenKeysByCategory = new Map();
          tokenKeys.forEach(token => {
            const parts = token.split('-');
            if (!tokenKeysByCategory.get(parts[0])) {
              tokenKeysByCategory.set(parts[0], []);
            }
            tokenKeysByCategory.get(parts[0]).push(token);
          });

          let source = ':root {\n';
          Array.from(tokenKeysByCategory.entries())
            .forEach(([category, tokenKeys]) => {
              const cssTokens = tokenKeys
                .map((tokenKey) => `\t--dcx-${tokenKey}: ${parsedTokens[tokenKey]};\n`)
                .join('');
              source = source +
                getHeading(category) +
                cssTokens;
            });
          source = source + '};';

          this.emitFile({ type: 'asset', fileName, source });
        });
    }
  };
}


const getBaseConfig = () => ({
  input: `${INPUT_FOLDER}/input.css.json`,
  output: {
    file: `${OUTPUT_FOLDER}/input.css`,
    format: 'es'
  },
  plugins: [
    postcss({
      modules: false,
      extract: true,
      plugins: [
        postcssImport(),
        postcssNesting(),
        postcssFunctions({
          functions: {
            ...customFunctions
          }
        }),
        cssnano(cssnanoPreset())
      ]
    })
  ]
});

const config = glob.sync(`${INPUT_FOLDER}/*.css`).reduce((acc, file) => {
  acc.push({
    ...getBaseConfig(),
    input: file,
    output: {
      file: file.replace(`${INPUT_FOLDER}/`, `${OUTPUT_FOLDER}/`),
      format: 'es'
    }
  });
  return acc;
}, [
  {
    input: `${INPUT_FOLDER}/tokens.json`,
    output: {
      file: `${OUTPUT_FOLDER}/tokens.css`,
      format: 'es'
    },
    plugins: [generateTokens(),]
  }
]);

exports.default = config;
