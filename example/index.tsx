import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

import './global-styles.scss';
import  Routes  from '../example/Routes/Routes';
import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css';

const App = () => {
  return <Routes />;
};
ReactDOM.render(<App />, document.getElementById('root'));
