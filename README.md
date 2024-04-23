[![CircleCI](https://circleci.com/gh/Capgemini/dcx-react-library.svg?style=svg)](https://circleci.com/gh/Capgemini/dcx-react-library)

# DCX React library

## Motivation

`dcx-react-library` is a React library with a set of components ready to use in your project.  
There are plenty of libraries available in React that can help to increase your productivity however most of them contain lots of css and are hard to style based on your project's requirements.  
dcx-react-library is **UI/UX agnostic**, this allows the dcx-react-library to be easily integrated into any project.  
You have few options to make your components good looking :lipstick::

1. You provide the styling to match the look and feel of your application passing the class to every component :construction_worker:
2. :fire: :fire:You use the design system tokens that we built for you (from version 1.0.0) :fire: :fire:

## Components

To see the full list of components built in dcx-react-library, and how to use it, have a look on our [storybook-showcase](https://main--6069a6f47f4b9f002171f8e1.chromatic.com)
In Storybook, each component is presented with 4 main sections:

- **documentation**: describes the list of properties available, optional and mandatory;
- **live**: you can play directly with all the properties and see the component's behaviour;
- **unstyled**: the bare component without any styling applied;
- **styled**: an example (mainly based on GDS) of how to style the component and the final result.
- **design system**: an example of how to style the component using the tokens exposed by the design system.

## How to use it

Using dcx-react-library should not require any particular setup.  
You only need to import the component and use it :smiley:

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

We don't ship `dcx-react-library` with any included CSS. However, some stylesheet is required to use some components (for example, `toggle` and `tooltip`).

```js
/* The following line can be included in your src/index.js or App.js file */
import '@capgeminiuk/dcx-react-library/dist/dcx-react-library.css';
```

## Design System

The `dcx-react-library` supports opt-in styling customizable via [CSS custom properties](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties).

To keep the library **UI/UX agnostic** the styles are not shipped by default. In order to include them in your project you can import them as follows:

```jsx
/* main.jsx */

import '@capgeminiuk/dcx-react-library/design-system/index.css';
```

Note that this will setup the styling for all the components in the library. You may want to fine-tune the imports if performance is critical for your application.

All the components have their own stylesheet and can be imported individually when needed:

```jsx
/* Needed for core styles */
import '@capgeminiuk/dcx-react-library/design-system/base.css';

/* Individual imports, works well with tree-shaking */
import '@capgeminiuk/dcx-react-library/design-system/form-control.css';
import '@capgeminiuk/dcx-react-library/design-system/button.css';
// ...
```

Don't forget to add the `base.css` import before loading the individual stylesheets. It contains the core definitions used for the design system to work.

## Contributing

If you'd like to contribute, please follow our [CONTRIBUTING section](https://github.com/Capgemini/dcx-react-library/blob/main/CONTRIBUTING.md).

## Blog posts

- For an introduction to the DCX React Library please read our [Introducing the DCX React Library blog post](https://capgemini.github.io/development/dcx-react-library/).
- For tips on how you can contribute to the DCX React Library please read our [Contributing to the DCX React Library blog post](https://capgemini.github.io/development/contributing-to-dcx-react-library/).
- If you want to know more about our DCX React Library 1.0.0 release please read our [DCX React Library 1.0.0 is here](https://capgemini.github.io/development/dcx-react-library-v1-is-here)

## Raise a bug or enhancement

If you find a bug or you would like to recommend an improvement, please raise an _issue_ and use the appropriate template. We will be more than happy to improve the library, smashing all the bugs found and improve the functionality.

## Contributors ✨ ✨

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
  <tr>
    <td align="center">
      <a href="https://github.com/ybayraktutan">
        <img src="https://avatars.githubusercontent.com/u/74928622?v=4" width="100px;" alt="ybayraktutan"/>
        <br />
        <sub><b>Bayraktutan Yasemin</b></sub>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/shivammuttoo">
        <img src="https://avatars.githubusercontent.com/u/5648449?v=4" width="100px;" alt="shivammuttoo"/>
        <br />
        <sub><b>Muttoo Shivam</b></sub>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/josepholdfield">
        <img src="https://avatars.githubusercontent.com/u/48091537?v=4" width="100px;" alt="Joseph-Oldfield"/>
        <br />
        <sub><b>Joseph Oldfield</b></sub>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/AranzazuVM">
        <img src="https://avatars.githubusercontent.com/u/148540415?v=4" width="100px;" alt="AranzazuVM"/>
        <br />
        <sub><b>Aranzazu Vázquez Moreno</b></sub>
      </a>
    </td>
  </tr>
</table>
