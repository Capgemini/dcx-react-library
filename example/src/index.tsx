import 'react-app-polyfill/ie11';
import reportWebVitals from './reportWebVitals';
import React from 'react';
import ReactDOM from 'react-dom';
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
  MultiSelectDemo,
  FormDateDemo,
  FormInputDemo,
  TabGroupDemo,
  CopyToClipboardDemo,
  TableDemo,
  TooltipDemo,
  RangeDemo,
  DetailsDemo,
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
        <Route path="/range" component={RangeDemo} />
        <Route path="/toggle" component={ToggleDemo} />
        <Route path="/select" component={FormSelectDemo} />
        <Route path="/multiUpload" component={MultiUploadDemo} />
        <Route path="/multiSelect" component={MultiSelectDemo} />
        <Route path="/formDate" component={FormDateDemo} />
        <Route path="/tabGroup" component={TabGroupDemo} />
        <Route path="/copyToClipboard" component={CopyToClipboardDemo} />
        <Route path="/table" component={TableDemo} />
        <Route path="/tooltipDemo" component={TooltipDemo} />
        <Route path="/details" component={DetailsDemo} />
      </Switch>
    </BrowserRouter>
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
