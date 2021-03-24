import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

import {
  FormInputDemo,
  FormInputMaskedDemo,
  AutocompleteDemo,
  FormRadioDemo,
  FormCheckboxDemo,
} from './components';

const App = () => (
  <div>
    <FormInputDemo />
    <FormInputMaskedDemo />
    <FormRadioDemo />
    <AutocompleteDemo />
    <FormCheckboxDemo />
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));
