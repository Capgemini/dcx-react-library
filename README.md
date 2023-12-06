[![CircleCI](https://circleci.com/gh/Capgemini/dcx-react-library.svg?style=svg&circle-token=c05d3eb49441c9985f5424f28f788f1a31556503)](LINK)

# DCX React library

## Motivation

`dcx-react-library` is a React library with a set of components ready to use in your project.

Numerous React libraries are accessible to enhance productivity, yet many of them come with extensive CSS styles that can be challenging to customize according to your project's specific requirements.

The dcx-react-library is designed to be **UI/UX agnostic**, requiring you to supply styling to align with the visual aesthetics of your application. This flexibility enables seamless integration of the dcx-react-library into any project.

## Components

To explore the complete array of components within the dcx-react-library and learn how to implement them, check out our [storybook-showcase](https://main--6069a6f47f4b9f002171f8e1.chromatic.com). In Storybook, each component is presented with four main sections:

- **documentation:** provides details on available properties, highlighting optional and mandatory ones.
- **live:** allows direct interaction with all properties to observe the component's behavior.
- **unstyled:** showcases the bare component without any applied styling.
- **styled:** presents an example (primarily based on GDS) of how to style the component and the expected final result.

Utilizing the dcx-react-library should be straightforward without requiring any specific setup. Simply import the desired component and incorporate it into your project.

## How to use it

Incorporating the dcx-react-library into your project is hassle-free and doesn't demand any specific setup. Simply import the desired component, and you're good to go! 😃

Steps:

- `yarn add @capgeminiuk/dcx-react-library`
- Import the component you need and use it. For example:

```js
import { Button } from '@capgeminiuk/dcx-react-library';

const App = () => {
  return <Button label="start" onClick={() => {}} />;
};
```

## Styling

`dcx-react-library` doesn't come bundled with any predefined CSS. Nevertheless, certain components, such as `toggle` and `tooltip`, necessitate the inclusion of stylesheets for proper functionality.

```js
/* The following line can be included in your src/index.js or App.js file */
import '@capgeminiuk/dcx-react-library/dist/dcx-react-library.css';
```

## Contributing

If you're interested in contributing, kindly adhere to the guidelines outlined in our [CONTRIBUTING section](https://github.com/Capgemini/dcx-react-library/blob/main/CONTRIBUTING.md).

## Blog posts

For an introduction to the DCX React Library, please refer to our [Introducing the DCX React Library blog post](https://capgemini.github.io/development/dcx-react-library/).
To discover tips on contributing to the DCX React Library, explore our [Contributing to the DCX React Library blog post](https://capgemini.github.io/development/contributing-to-dcx-react-library/).

## Raise a bug or enhancement

If you come across a bug or wish to suggest an improvement, kindly open an _issue_ and make use of the relevant template. We are enthusiastic about enhancing the library, addressing any identified bugs, and improving its functionality.

## Contributors ✨

Special thanks to these wonderful individuals:

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
      <a href="https://github.com/cg-mmirca">
        <img src="https://avatars.githubusercontent.com/u/92944005?v=4" width="100px;" alt="marius-mirca"/>
        <br />
        <sub><b>Marius Mirca</b></sub>
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
    <td align="center">
      <a href="https://github.com/nikusharmadcx">
        <img src="https://avatars.githubusercontent.com/u/85119492?v=4" width="100px;" alt="niku-sharma"/>
        <br />
        <sub><b>Niku Sharma</b></sub>
      </a>
    </td>
  </tr>
  <tr>
    <td align="center">
      <a href="https://github.com/ClaudioRicciCG">
        <img src="https://avatars.githubusercontent.com/u/77390776?v=4" width="100px;" alt="claudio-ricci"/>
        <br />
        <sub><b>Claudio Ricci</b></sub>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/SandraRoDiaz">
        <img src="https://avatars.githubusercontent.com/u/68821446?v=4" width="100px;" alt="sandra-ro-diaz"/>
        <br />
        <sub><b>Sandra Ro Diaz</b></sub>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/ellietms">
        <img src="https://avatars.githubusercontent.com/u/59767576?v=4" width="100px;" alt="ellie-tahmasebi"/>
        <br />
        <sub><b>Ellie Tahmasebi</b></sub>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/sri-viswanathan">
        <img src="https://avatars.githubusercontent.com/u/27343753?v=4" width="100px;" alt=sri-viswanathan"/>
        <br />
        <sub><b>Sri Viswanathan</b></sub>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/cg-julian-taylor">
        <img src="https://avatars.githubusercontent.com/u/107050226?v=4" width="100px;" alt=julian-taylor"/>
        <br />
        <sub><b>Julian Taylor</b></sub>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/SergioBanderaGarcia">
        <img src="https://avatars.githubusercontent.com/u/113599747?v=4" width="100px;" alt=sergio-bandera-garcia"/>
        <br />
        <sub><b>Sergio Bandera Garcia</b></sub>
      </a>
    </td>
  </tr>
  <tr>
  <td align="center">
    <a href="https://github.com/szilvihorvath">
      <img src="https://avatars.githubusercontent.com/u/50360435?v=4" width="100px;" alt="szilvi-horvath"/>
      <br />
      <sub><b>Szilvi Horvath</b></sub>
    </a>
  </td>
    <td align="center">
      <a href="https://github.com/Jaya-Rathore">
        <img src="https://avatars.githubusercontent.com/u/119496797?v=4" width="100px;" alt="jaya-rathore"/>
        <br />
        <sub><b>Jaya Rathore</b></sub>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/arpakuma">
        <img src="https://avatars.githubusercontent.com/u/128031818?v=4" width="100px;" alt="arpana-kumari"/>
        <br />
        <sub><b>Arpana Kumari</b></sub>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/CanerShefik">
        <img src="https://avatars.githubusercontent.com/u/24546769?v=4" width="100px;" alt="caner-shefik"/>
        <br />
        <sub><b>Caner Shefik</b></sub>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/JadhavJeet">
        <img src="https://avatars.githubusercontent.com/u/100856152?v=4" width="100px;" alt="jadhav-jeet"/>
        <br />
        <sub><b>Jadhav Jeet</b></sub>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/SOUNDAR-A">
        <img src="https://avatars.githubusercontent.com/u/24546769?v=4" width="100px;" alt="soundar-arumugam"/>
        <br />
        <sub><b>Soundar Arumugam</b></sub>
      </a>
    </td>
  </tr>
  <tr>
    <td align="center">
      <a href="https://github.com/jgonza16">
        <img src="https://avatars.githubusercontent.com/u/93665374?v=4" width="100px;" alt="j-gonzales"/>
        <br />
        <sub><b>Javier Gonzalez Moya</b></sub>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/KavithaKurella">
        <img src="https://avatars.githubusercontent.com/u/122851121?v=4" width="100px;" alt="kavitha-kurella"/>
        <br />
        <sub><b>Kavitha Kurella</b></sub>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/yunusfirat">
        <img src="https://avatars.githubusercontent.com/u/38798014?v=4" width="100px;" alt="yunus-firat"/>
        <br />
        <sub><b>Yunus Firat</b></sub>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/byohannes">
        <img src="https://avatars.githubusercontent.com/u/42332389?v=4" width="100px;" alt="yohannes-berhane"/>
        <br />
        <sub><b>Yohannes Berhane</b></sub>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/Ahmet-K">
        <img src="https://avatars.githubusercontent.com/u/45479018?v=4" width="100px;" alt="ahmet-kucukibrahimoglu"/>
        <br />
        <sub><b>Ahmet Kucukibrahimoglu</b></sub>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/aismaelcap">
        <img src="https://avatars.githubusercontent.com/u/121889403?v=4" width="100px;" alt="ismael-akhtaab"/>
        <br />
        <sub><b>Ismael Akhtaab</b></sub>
      </a>
    </td>
  </tr>
</table>
