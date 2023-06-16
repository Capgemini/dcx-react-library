import React from 'react';
import { PreformattedText } from '@capgeminiuk/dcx-react-library';

export const PreformattedTextDemo = () => {
  return (
    <>
      <h2>Demo of PreformattedText</h2>
      <PreformattedText
        value="Text in a pre element is displayed in a fixed-width font, and it preserves
  both spaces and line breaks."
      />
    </>
  );
};
