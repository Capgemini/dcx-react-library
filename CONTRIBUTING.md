# Contributing to Capgemini React Library

Please take a moment to review this document in order to make the contribution
process easy and effective for everyone involved.

Following these guidelines help to communicate that you respect the time of the
developers managing and developing this project.

## Setting Up a Local Copy

1. Clone the repo
   `git clone git@github.com:Capgemini/dcx-react-library.git`
2. Run `./setup.sh` in the root `dcx-react-library` folder

this command will install all the dependencies and it will links the dcx-react-library to the example folder.

## Commands

DCX Component Library scaffolds your new library inside the `/src` folder and also sets up a [Create-React-App](https://reactjs.org/docs/create-a-new-react-app.html) playground for it inside the `/example` folder.

The recommended workflow is to run DCX Component Library in one terminal:

```bash
yarn dev #to run the library
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
yarn start #to run the examples
```

The default example imports and live reloads whatever is in the `/dist` folder, so if you are seeing an out of date component, make sure DCX Component Library is running in watch mode as recommended above.

- To do a one-off build, use `yarn build` at the root of your project;

- To run tests, use `yarn test` at the root of your project;

- To check the code coverage use `yarn test: coverage at the root of your project;

- To fix all the linting errors use `yarn lint: fix` at the root of your project.

## Submit your PR

To create a new component the following must be satisfied before adding
`READY TO MERGE` labels on PR:

1. we usually have a base branch to branch from based on the release we currently are: release/x.x
2. create a branch called: feature/7-input (where 7 is the git issue number) from the base branch (release/x.x)
3. create a folder under `src` for the component-name
4. create the test under `__tests__` within the component-name folder
5. create or edit a demo in the `example/src`
6. create or edit the story in the `stories`

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

## Documentation

All the stories created in Storybook are deployed in [Chromatic](main--6069a6f47f4b9f002171f8e1.chromatic.com). You can also see a preview of your PR before requesting a merge looking on the circle-ci pipline.

### Jest

Jest tests are set up to run with `yarn test`. PR with a coverage less than **100%** will not be merged.
