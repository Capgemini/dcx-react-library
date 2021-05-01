import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import {
  FormInputMaskedDemo,
  AutocompleteDemo,
  FormRadioDemo,
  FormCheckboxDemo,
  ButtonDemo,
  ProgressDemo,
  ToggleDemo,
  FormSelectDemo,
  MultiUploadDemo,
  FormDateDemo,
  FormInputDemo,
} from './components';
import './global-styles.scss';
import { Login } from './pages/Login';
import { Home } from './pages/HomePage';
import { Register } from './pages/Register';
const App = () => (
  <div>
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/formInput" component={FormInputDemo} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/masked" component={FormInputMaskedDemo} />
        <Route path="/radio" exact component={FormRadioDemo} />
        <Route path="/checkbox" exact component={FormCheckboxDemo} />
        <Route path="/AutocompleteDemo" component={AutocompleteDemo} />
        <Route path="/ButtonDemo" component={ButtonDemo} />
        <Route path="/progress" component={ProgressDemo} />
        <Route path="/toggle" component={ToggleDemo} />
        <Route path="/select" component={FormSelectDemo} />
        <Route path="/multiUpload" component={MultiUploadDemo} />
        <Route path="/formDate" component={FormDateDemo} />
      </Switch>
    </BrowserRouter>
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));
