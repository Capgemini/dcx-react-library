import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import {
  FormInputDemo,
  FormInputMaskedDemo,
  AutocompleteDemo,
  FormRadioDemo,
  FormCheckboxDemo,
  ButtonDemo,
  ProgressDemo,
} from './components';
import { Login } from './pages/Login';
const App = () => (
  <div>
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <Link to="/">FormInputDemo</Link>
          </li>
          <li>
            <Link to="/login">Login Example</Link>
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
        </ul>
      </nav>
      <Switch>
        <Route path="/" exact component={FormInputDemo} />
        <Route path="/login" component={Login} />
        <Route path="/masked" component={FormInputMaskedDemo} />
        <Route path="/radio" exact component={FormRadioDemo} />
        <Route path="/checkbox" exact component={FormCheckboxDemo} />
        <Route path="/AutocompleteDemo" component={AutocompleteDemo} />
        <Route path="/ButtonDemo" component={ButtonDemo} />
        <Route path="/progress" component={ProgressDemo} />
      </Switch>
    </BrowserRouter>
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));
