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
} from './components';
import './global-styles.scss';
import { Login } from './pages/Login';
import {Navigation} from 'react-minimal-side-navigation';
import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css';

// function App() {
//     return (
//       <>
//         <Navigation
//             // you can use your own router's api to get pathname
//             activeItemId="/management/members"
//             onSelect={({itemId}) => {
//               // maybe push to the route
//             }}
//             items={[
             
//               {
//                 title: 'Forms',
//                 itemId: '/forms',
//                 // elemBefore: () => <a name="users" />,
//                 subNav: [
//                   {
//                     title: 'Button',
//                     itemId: '',
//                   },
//                   {
//                     title: 'Input',
//                     itemId: '',
//                   },
//                   {
//                     title: 'Autocomplete',
//                     itemId: '',
//                   },
//                   {
//                     title: 'Group',
//                     itemId: '',
//                   },
//                    {
//                     title: 'Toggle',
//                     itemId: '',
//                   },
//                     {
//                     title: 'Select',
//                     itemId: '',
//                   },
//                     {
//                     title: 'Input with mask',
//                     itemId: '',
//                   },
//                      {
//                     title: 'Radio',
//                     itemId: '',
//                   }
//                 ],
//               },
//               {
//                 title: 'Examples',
//                 itemId: '/another',
//                 subNav: [
//                   {
//                     title: 'Login',
//                     itemId: '/management/teams',
//                   },
//                 ],
//               },
//             ]}
//           />
//       </>
//     );
// }
import { Home } from './pages/HomePage';
const App = () => (
  <div>
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/masked" component={FormInputMaskedDemo} />
        <Route path="/radio" exact component={FormRadioDemo} />
        <Route path="/checkbox" exact component={FormCheckboxDemo} />
        <Route path="/AutocompleteDemo" component={AutocompleteDemo} />
        <Route path="/ButtonDemo" component={ButtonDemo} />
        <Route path="/progress" component={ProgressDemo} />
        <Route path="/toggle" component={ToggleDemo} />
        <Route path="/select" component={FormSelectDemo} />
      </Switch>
    </BrowserRouter>
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));
