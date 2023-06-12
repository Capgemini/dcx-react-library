import 'react-app-polyfill/ie11';
import reportWebVitals from './reportWebVitals';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {
  FormInputMaskedDemo,
  AutocompleteDemo,
  FormRadioDemo,
  FormCheckboxDemo,
  ButtonDemo,
  ProgressDemo,
  ToggleDemo,
  FormSelectDemo,
  MultiUploadDemo,
  MultiSelectDemo,
  FormDateDemo,
  FormInputDemo,
  TabGroupDemo,
  CopyToClipboardDemo,
  TableDemo,
  TooltipDemo,
  RangeDemo,
  DetailsDemo,
  CharacterCountDemo,
  LinkDemo,
  ListDemo,
} from './components';
import './global-styles.scss';
import { Login } from './pages/Login';
import { Home } from './pages/HomePage';
import { Register } from './pages/Register';
import { InsertTextDemo } from './components/InsertTextDemo';

import { LabelDemo } from './components/LabelDemo';
import { KeyboardInputDemo } from './components/KeyboardInputDemo';
import { BreadcrumbDemo } from './components/BreadcrumbDemo';
const App = () => (
  <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/formInput" element={<FormInputDemo />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/masked" element={<FormInputMaskedDemo />} />
        <Route path="/radio" element={<FormRadioDemo />} />
        <Route path="/checkbox" element={<FormCheckboxDemo />} />
        <Route path="/AutocompleteDemo" element={<AutocompleteDemo />} />
        <Route path="/ButtonDemo" element={<ButtonDemo />} />
        <Route path="/progress" element={<ProgressDemo />} />
        <Route path="/range" element={<RangeDemo />} />
        <Route path="/toggle" element={<ToggleDemo />} />
        <Route path="/select" element={<FormSelectDemo />} />
        <Route path="/multiUpload" element={<MultiUploadDemo />} />
        <Route path="/multiSelect" element={<MultiSelectDemo />} />
        <Route path="/formDate" element={<FormDateDemo />} />
        <Route path="/tabGroup" element={<TabGroupDemo />} />
        <Route path="/copyToClipboard" element={<CopyToClipboardDemo />} />
        <Route path="/table" element={<TableDemo />} />
        <Route path="/tooltipDemo" element={<TooltipDemo />} />
        <Route path="/details" element={<DetailsDemo />} />
        <Route path="/characterCount" element={<CharacterCountDemo />} />
        <Route path="/insertText" element={<InsertTextDemo />} />
        <Route path="/link" element={<LinkDemo />} />
        <Route path="/label" element={<LabelDemo />} />
        <Route path="/keyBoard" element={<KeyboardInputDemo />} />
        <Route path="/list" element={<ListDemo />} />
        <Route path="/breadcrumb" element={<BreadcrumbDemo />} />
      </Routes>
    </BrowserRouter>
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
