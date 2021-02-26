import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Example } from '../.';

const App = () => {
  return (
    <div>
      <Example />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
