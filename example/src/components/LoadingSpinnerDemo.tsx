import { LoadingSpinner } from '@capgeminiuk/dcx-react-library';
import '@capgeminiuk/dcx-react-library/dist/dcx-react-library.css';

export const LoadingSpinnerDemo = () => (
  <>
    <LoadingSpinner />
    <LoadingSpinner color="black" background="#89CFF0" />
    <LoadingSpinner color="#1d70b8" speed="0.5s" message="Loading..." />
    <LoadingSpinner diameter="120px" />
  </>
);
