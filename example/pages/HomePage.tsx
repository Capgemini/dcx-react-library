import 'react-app-polyfill/ie11';
import * as React from 'react';
import { Link } from 'react-router-dom';

import { AutocompleteDemo } from '../components';

export const Home = () => (
  <>
    <nav>
      <ul>
        <li>
          <Link to="/">FormInputDemo</Link>
        </li>
        <li>
          <Link to="/login">Login Example</Link>
        </li>
        <li>
          <Link to="/register">Registration form Example</Link>
        </li>
        <li>
          <Link to="/masked">masked</Link>
        </li>
        <li>
          <Link to="/radio">radio</Link>
        </li>
        <li>
          <Link to="/checkbox">Checkbox</Link>
        </li>
        <li>
          <Link to="/AutocompleteDemo">AutocompleteDemo</Link>
        </li>
        <li>
          <Link to="/ButtonDemo">ButtonDemo</Link>
        </li>
        <li>
          <Link to="/progress">ProgressDemo</Link>
        </li>
        <li>
          <Link to="/toggle">ToggleDemo</Link>
        </li>
        <li>
          <Link to="/select">SelectDemo</Link>
        </li>
        <li>
          <Link to="/multiUpload">MultiUploadDemo</Link>
        </li>
        <li>
          <Link to="/formDate">FormDateDemo</Link>
        </li>
      </ul>
    </nav>
    <h1>Home</h1>
    <AutocompleteDemo />
  </>
);
