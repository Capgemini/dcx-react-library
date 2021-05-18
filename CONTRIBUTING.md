# Contributing to Capgemini React Library

Please take a moment to review this document in order to make the contribution
process easy and effective for everyone involved.

Following these guidelines help to communicate that you respect the time of the
developers managing and developing this project.

## Setting Up a Local Copy

1. Clone the repo
   `git clone git@github.com:Capgemini/dcx-react-library.git`
2. Run `yarn` in the root `dcx-react-library` folder
3. Run `yarn` within `./example` folder

Once this is done, you can modify any file locally and run `yarn start`,
`yarn test` or `yarn run build`.

If you want to test your component you can import the component into the
`./example` application once you have `yarn start` the `cdcx-react-library`
root project and run `yarn start` within the `./example` folder

## Commands

DCX Component Library scaffolds your new library inside the `/src` folder and also sets up a [Parcel-based](https://parceljs.org) playground for it inside the `/example` folder.

The recommended workflow is to run DCX Component Library in one terminal:

```bash
yarn install #to install dependencies
yarn start #to run the library
```

This builds to `/dist` and runs the project in watch mode so any edits you save inside `src` causes a rebuild to `/dist`.

Then run either Storybook or the example playground:

### Storybook

Run storybook inside another terminal:

```bash
yarn storybook
```

This loads the stories from `./stories`.

> NOTE: Stories should reference the components as if using the library, similar to the example playground. This means importing from the root project directory. This has been aliased in the tsconfig and the storybook webpack config as a helper.

### Example

Run the example inside another terminal:

```bash
cd example
yarn install #to install dependencies
yarn start #to run the examples
```

The default example imports and live reloads whatever is in the `/dist` folder, so if you are seeing an out of date component, make sure DCX Component Library is running in watch mode as recommend above. **No symlinking required**, we use [Parcel's aliasing](https://parceljs.org/module_resolution.html#aliases).

- To do a one-off build, use `yarn build`;

- To run tests, use `yarn test`;

- To check the code coverage use `yarn test: coverage;

- To fix all the linting errors use `yarn lint: fix`.

## Submit your PR

To create a new component the following must be satisfied before adding
`READY TO MERGE` labels on PR:

1. create a branch called: feature/7-input (where 7 is the git issue number)
2. create a folder under `src` for the component-name
3. create the test under `__tests__` within the component-name folder
4. create a demo in the `example/src`

Example folder structure with component `SnackBar`:

```sh
├── example
│    ├── components # add example usage of component
│    │   ├── SnackDemo.css
│    │   └── SnackDemo.tsx
├── src
│   ├── snackBar # the actual component itself
│   │   ├── __tests__
│   │   │   └── SnackBar.test.tsx
│   │   ├── SnackBar.module.css # avoid using a css file the component should not have any specific UI/UX
│   │   ├── SnackBar.tsx
│   │   └── index.ts
├── stories # the story demo for component
│   ├── snackBar
│   │   └── Documentation.stories.mdx
│   │   └── Live.stories.mdx
│   │   └── Styled.stories.mdx
│   │   └── Unstyled.stories.mdx
```

## Commit your branch

Commit message MUST be prefixed with one of the following depending on the content of the commit. See [what-is-commitlint](https://github.com/conventional-changelog/commitlint/#) for details.

```
[build, chore, ci, docs, feat, fix, perf, refactor, revert, style, test] [type-enum]

git commit -m "build: {{ name of build config change }}"
git commit -m "feat: {{ name of feature }}"
git commit -m "fix: {{ name of bug }}"
git commit -m "test: {{ name of test }}"
```

## Submitting a Pull Request

- when adding a new component, include a screenshot of the component in the PR
- when adding new components, try to keep 1 component per PR, unless there are
  unavoidable interdependencies
- when fixing a visual issue, include a unit test or snapshot test that proves
  the issue, and include a screenshot of the component before and after in the
  PR
- when fixing a functional issue, include a unit test that proves the issue
  (fails before PR is merged and succeeds after)

## Continuous Integration

We use circleCi for continuous integration. CircleCi configuration is stored under `.circleci` folder and it will check:

- test
- code coverage
- lint
- build the library
- deploy the latest storybook

## Configuration

Code quality is set up for you with `prettier`, `husky`, and `lint-staged`.

### Jest

Jest tests are set up to run with `yarn test`. PR with a coverage less than **100%** will not be merged.
