import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

import './global-styles.scss';
import Routes from '../example/Routes/Routes';
import { SideNavBar } from '../example/components/';
import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css';

const App = () => (
  <>
    <Routes />
    <SideNavBar />
  </>
);
ReactDOM.render(<App />, document.getElementById('root'));
