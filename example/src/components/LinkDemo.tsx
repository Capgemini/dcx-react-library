import React from 'react';
import { Link } from '@capgeminiuk/dcx-react-library';

export const LinkDemo = () => {
  const link = 'https://www.google.com/';
  return (
    <>
      <h1>Demo of Link</h1>
      <Link value="Google" to={link} props={{ target: '_blank' }} />
    </>
  );
};
