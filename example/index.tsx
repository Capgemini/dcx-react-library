import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
<<<<<<< HEAD
import { FormInputDemo } from './components/FormInputDemo';

const App = () => {
  return (
    <div>
      <FormInputDemo/>
=======
import { GOVUKInputDemo } from './components/gds/FormInputDemo';
const App = () => {
  return (
    <div>
      <h1>GOV UK Style</h1>
      <GOVUKInputDemo/>
>>>>>>> feature/input-part-2
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
