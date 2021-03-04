import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { FormInputDemo } from './components/FormInputDemo';
const App = () => {
  return (
    <div>
      <FormInputDemo/>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
