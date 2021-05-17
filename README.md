[![CircleCI](https://circleci.com/gh/Capgemini/dcx-react-library.svg?style=svg&circle-token=c05d3eb49441c9985f5424f28f788f1a31556503)](LINK)

# DCX React library

`dcx-react-library` is a react library with a set of components ready to use in your project.

There're plenty of libraries available in react that will help you to increase your productivity however most of them contain a lot of css and are really hard to style based on your project's requirements.

dcx-react-library is **UI/UX agnostic** so you need to provide styling for the look and feel of your preference.

To see the full list of components built in dcx-react-library, and how to use it, have a look on our [storybook-showcase](https://www.chromatic.com/library?appId=6069a6f47f4b9f002171f8e1) (Click on View Storybook to see the list of components)
Each component, described in storybook, will provide you 3 main sections:

- documentation: it will describe the list of properties available, optional and mandatory;
- live: you can play directly with all the properties and see how the component will behave;
- unstyled: the bare component without any style available;
- styled: an exaple (mainly based on GDS) of how to style the component and the final result.

![Image of dcx-react-library showcase](https://github.com/Capgemini/dcx-react-library/blob/main/stories/img/storybook-doc.png)

## How to use it

Using dcx-react-library should not require any particular setup:

- `yarn add dcx-react-library`
- Import the component you need and use it. For example:

```js
import { Button } from 'dcx-react-library';

const App = () => {
  return <Button label="start" onClick={() => {}} />;
};
```

## Contributing

If you'd like to contribute, please follow our CONTRIBUTING.md[https://github.com/Capgemini/dcx-react-library/blob/main/CONTRIBUTING.md] section.

## Raise a bug or enhancement

If you find a bug or you would like an improvement please raise an _issue_ and use the appropriate template we will be more than happy to improve the library smashing all the bugs found and improving the functionality. d

## Contributors ✨

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
