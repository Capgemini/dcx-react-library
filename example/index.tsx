import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { FormInput } from '../.';

const App = () => {
  return (
    <div>
      <FormInput/>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
