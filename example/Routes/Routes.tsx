
import {
    FormInputMaskedDemo,
    AutocompleteDemo,
    FormRadioDemo,
    FormCheckboxDemo,
    ButtonDemo,
    ProgressDemo,
    ToggleDemo,
    FormSelectDemo,
} from '../components';
import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Home } from '../pages/HomePage';
import { Login } from '../pages/Login';
import { BrowserRouter, Route, Switch } from 'react-router-dom';



const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/login" component={Login} />
                <Route path="/radio" exact component={FormRadioDemo} />
                <Route path="/checkbox" exact component={FormCheckboxDemo} />
                <Route path="/AutocompleteDemo" component={AutocompleteDemo} />
                <Route path="/ButtonDemo" component={ButtonDemo} />
                <Route path="/progress" component={ProgressDemo} />
                <Route path="/toggle" component={ToggleDemo} />
                <Route path="/select" component={FormSelectDemo} />
            </Switch>
        </BrowserRouter>
    )
};
export default Routes;
