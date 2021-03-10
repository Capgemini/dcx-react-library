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

## Contributing

To create a new component the following must be satisfied before adding
`READY TO MERGE` labels on PR:

1. create a branch called: feature/7-input (where 7 is the git issue number)
2. create a folder under `src` for the component-name
3. create the test under `__tests__` within the component-name folder
4. create a demo in the `example/src`
5. create a story within `stories`
6. create a README.md detailing information within that component

Example folder structure with component `SnackBar`:

```sh
├── demo
│   └── src
│       ├── components # add example usage of component
│       │   ├── SnackDemo.css
│       │   └── SnackDemo.tsx
├── src
│   ├── snackBar # the actual component itself
│   │   ├── SnackBar.module.css
│   │   ├── SnackBar.tsx
│   │   ├── __tests__
│   │   │   └── SnackBar.test.tsx
│   │   └── index.ts
├── stories # the story demo for component
│   ├── snackBar
│   │   ├── SnackDemo.css
│   │   └── snackBar.stories.jsx
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
