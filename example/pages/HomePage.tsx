import 'react-app-polyfill/ie11';
import * as React from 'react';
import { Link } from 'react-router-dom';

export const Home = () => (
  <>
    <h1>List of release 0.1 DCX library components</h1>
    <nav>
      <ul>
        <li>
          <Link to="/formInput">FormInputDemo</Link>
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
          <Link to="/range">RangeDemo</Link>
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
          <Link to="/multiSelect">MultiSelectDemo</Link>
        </li>
        <li>
          <Link to="/formDate">FormDateDemo</Link>
        </li>
        <li>
          <Link to="/tabgroup">TabGroupDemo</Link>
        </li>
        <li>
          <Link to="/copyToClipboard">CopyToClipboardDemo</Link>
        </li>
        <li>
          <Link to="/table">TableDemo</Link>
        </li>
        <li>
          <Link to="/tooltipDemo">TooltipDemo</Link>
        </li>
      </ul>
    </nav>
    <h1>Example pages using 0.1 DCX library components</h1>
    <nav>
      <ul>
        <li>
          <Link to="/login">Login Example</Link>
        </li>
        <li>
          <Link to="/register">Registration form Example</Link>
        </li>
      </ul>
    </nav>
  </>
);
