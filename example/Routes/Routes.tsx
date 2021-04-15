import {
  FormInputMaskedDemo,
  AutocompleteDemo,
  FormRadioDemo,
  FormCheckboxDemo,
  ButtonDemo,
  ProgressDemo,
  ToggleDemo,
  FormSelectDemo,
  SideNavBar,
} from '../components';
import 'react-app-polyfill/ie11';
import * as React from 'react';

import { Login } from '../pages/Login';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const Routes = () => (
  <BrowserRouter>
    <SideNavBar />
    <Switch>
      <Route
        path="/FormInputMaskedDemo"
        exact
        component={FormInputMaskedDemo}
      />
      <Route path="/login" component={Login} />
      <Route path="/radio" component={FormRadioDemo} />
      <Route path="/checkbox" component={FormCheckboxDemo} />
      <Route path="/AutocompleteDemo" component={AutocompleteDemo} />
      <Route path="/ButtonDemo" component={ButtonDemo} />
      <Route path="/progress" component={ProgressDemo} />
      <Route path="/toggle" component={ToggleDemo} />
      <Route path="/select" component={FormSelectDemo} />
    </Switch>
  </BrowserRouter>
);
export default Routes;
