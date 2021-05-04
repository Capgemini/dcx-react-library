[![CircleCI](https://circleci.com/gh/Capgemini/dcx-react-library.svg?style=svg&circle-token=c05d3eb49441c9985f5424f28f788f1a31556503)](LINK)

# DCX Component library

To see the full list of components built in dcx-react-library have a look on our [storybook-showcase](https://6069a6f47f4b9f002171f8e1-uspqianljz.chromatic.com/?path=/story/dcxlibrary-introduction--page) (Click on View Storybook to see the list of components)

![Image of dcx-react-library showcase](https://github.com/Capgemini/dcx-react-library/blob/main/stories/img/storybook-doc.png)

## Commands

DCX Component Library scaffolds your new library inside `/src`, and also sets up a [Parcel-based](https://parceljs.org) playground for it inside `/example`.

The recommended workflow is to run DCX Component Library in one terminal:

```bash
yarn install #to install dependencies
yarn start #to run the library
```

This builds to `/dist` and runs the project in watch mode so any edits you save inside `src` causes a rebuild to `/dist`.

Then run either Storybook or the example playground:

### Storybook

Run inside another terminal:

```bash
yarn storybook
```

This loads the stories from `./stories`.

> NOTE: Stories should reference the components as if using the library, similar to the example playground. This means importing from the root project directory. This has been aliased in the tsconfig and the storybook webpack config as a helper.

### Example

Then run the example inside another:

```bash
cd example
yarn install #to install dependencies
yarn start #to run the examples
```

The default example imports and live reloads whatever is in `/dist`, so if you are seeing an out of date component, make sure DCX Component Library is running in watch mode like we recommend above. **No symlinking required**, we use [Parcel's aliasing](https://parceljs.org/module_resolution.html#aliases).

To do a one-off build, use `yarn build`.

To run tests, use `yarn test`.

## Configuration

Code quality is set up for you with `prettier`, `husky`, and `lint-staged`.

### Jest

Jest tests are set up to run with `yarn test`.

### Bundle analysis

Calculates the real cost of your library using [size-limit](https://github.com/ai/size-limit) with `yarn run size` and visulize it with `yarn run analyze`.

### Rollup

DCX Component Library uses [Rollup](https://rollupjs.org) as a bundler and generates multiple rollup configs for various module formats and build settings. See [Optimizations](#optimizations) for details.

### TypeScript

`tsconfig.json` is set up to interpret `dom` and `esnext` types, as well as `react` for `jsx`. Adjust according to your needs.

## Continuous Integration

we use circleCi for continous integration. CircleCi configuration is stored under `.circleci` folder and it will check:

- test
- code coverage
- lint
- build the library
- deploy the latest storybook

### Commit Messages

Commit message MUST be prefixed with one of the following depending on the content of the commit. See [what-is-commitlint](https://github.com/conventional-changelog/commitlint/#) for details.

```
[build, chore, ci, docs, feat, fix, perf, refactor, revert, style, test] [type-enum]

git commit -m "build: {{ name of build config change }}"
git commit -m "feat: {{ name of feature }}"
git commit -m "fix: {{ name of bug }}"
git commit -m "test: {{ name of test }}"
```

## Module Formats

CJS, ESModules, and UMD module formats are supported.

The appropriate paths are configured in `package.json` and `dist/index.js` accordingly. Please report if any issues are found.

## Contributors ✨

If you want to contribute please refer to the CONTRIBUTING.md[https://github.com/Capgemini/dcx-react-library/blob/main/CONTRIBUTING.md] section.

Thanks goes to these wonderful people

<table>
  <tr>
    <td align="center">
      <a href="https://github.com/daniele-zurico">
        <img src="https://avatars.githubusercontent.com/u/3193095?v=4" width="100px;" alt="daniele-zurico"/>
        <br />
        <sub><b>Daniele Zurico</b></sub>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/Ibabalola">
        <img src="https://avatars.githubusercontent.com/u/11960286?v=4" width="100px;" alt="isaac-babalola"/>
        <br />
        <sub><b>Isaac Babalola</b></sub>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/alexwbbr">
        <img src="https://avatars.githubusercontent.com/u/12614684?v=4" width="100px;" alt="alex-webber"/>
        <br />
        <sub><b>Alex Webber</b></sub>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/nikkialgar">
        <img src="https://avatars.githubusercontent.com/u/229638?v=4" width="100px;" alt="nikki-algar"/>
        <br />
        <sub><b>Nikki Algar</b></sub>
      </a>
    </td>
  </tr>
</table>
