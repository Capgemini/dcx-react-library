# Contributing to Capgemini React Library

Please take a moment to review this document in order to make the contribution
process easy and effective for everyone involved.

Following these guidelines help to communicate that you respect the time of the
developers managing and developing this project.

## Setting Up a Local Copy

1. Clone the repo
   `git clone git@github.com:Capgemini/capgemini-react-library.git`
2. Run `npm i` in the root `capgemini-react-library` folder
3. Run `npm i` within `./demo` folder

Once this is done, you can modify any file locally and run `npm start`,
`npm test` or `npm run build`.

If you want to test your component you can import the component into the
`./demo` application once you have `npm run built` the `capgemini-react-library`
root project and run `npm start` within the `./demo` folder

## Contributing

To create a new component the following must be satisfied before adding
`READY TO MERGE` labels on PR:

1. create a branch called: feature/7-input (where 7 is the git issue number)
2. create a folder under `src` for the component-name
3. create the test under `__tests__` within the component-name folder
4. create a demo in the `demo/src`
5. create a story within `stories`
6. create a README.md detailing information within that component

Example folder structure with component `SnackBar`:

```sh
├── demo
│   └── src
│       ├── components # add example usage of component
│       │   ├── SnackDemo.css
│       │   └── SnackDemo.jsx
├── doc
│   └── screenshot # add screenshot of component for README documentation
├── src
│   ├── snackBar # the actual component itself
│   │   ├── README.md
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

## Submitting a Pull Request

- when adding a new component, include a screenshot of the component in the PR
- when adding new components, try to keep 1 component per PR, unless there are
  unavoidable interdependencies
- when fixing a visual issue, include a unit test or snapshot test that proves
  the issue, and include a screenshot of the component before and after in the
  PR
- when fixing a functional issue, include a unit test that proves the issue
  (fails before PR is merged and succeeds after)
