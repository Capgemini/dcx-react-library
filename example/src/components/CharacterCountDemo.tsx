import React from 'react';
import { CharacterCount } from '@capgeminiuk/dcx-react-library';

export const CharacterCountDemo = () => {
  return (
    <>
      <h1>Character Count Component</h1>
      <CharacterCount maxLength={20} />
    </>
  );
};
