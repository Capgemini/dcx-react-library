import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { FormInputDemo } from './components/FormInputDemo';
import { FormInputMaskedDemo } from './components/FormInputMaskedDemo';
import { FormRadioDemo } from './components/FormRadioDemo';

const App = () => (
  <div>
    <FormInputDemo />
    <FormInputMaskedDemo />
    <FormRadioDemo />
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));
