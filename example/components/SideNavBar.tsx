import * as React from 'react';
import 'react-app-polyfill/ie11';

export const SideNavBar = () => (
  <aside className="sidenav">
    <nav>
      <a href="/login">Login</a>
      <ul>
        forms
        <li>
          <a href="/FormInputMaskedDemo">FormInputDemo</a>
        </li>
        <li>
          <a href="/login">Login Example</a>
        </li>
        <li>
          <a href="/masked">masked</a>
        </li>
        <li>
          <a href="/radio">radio</a>
        </li>
        <li>
          <a href="/checkbox">Checkbox</a>
        </li>
        <li>
          <a href="/AutocompleteDemo">AutocompleteDemo</a>
        </li>
        <li>
          <a href="/ButtonDemo">ButtonDemo</a>
        </li>
        <li>
          <a href="/progress">ProgressDemo</a>
        </li>
        <li>
          <a href="/toggle">ToggleDemo</a>
        </li>
        <li>
          <a href="/select">SelectDemo</a>
        </li>
        <li>
          <a href="/MultiUpload">MultiUploadDemo</a>
        </li>
      </ul>
    </nav>
  </aside>
);
