import React, { useRef } from 'react';
import { Button, CharacterCount } from '@capgeminiuk/dcx-react-library';

export const CharacterCountDemo = () => {
  const textRef = useRef<any>(null);
  const [txtValue, setTxtValue] = React.useState<string>('');
  const edit = () => {
    console.log('im in the edit action');
    setTxtValue('Arpana');
  };

  return (
    <>
      <h1>Character Count Component</h1>
      <form style={{ padding: '10px' }}>
        <CharacterCount
          label="Label for text area"
          hint={{
            text: 'Type more than 15 characters to see the message change',
          }}
          maxLength={15}
          rows={5}
          cols={50}
          ref={textRef}
          value={txtValue}
          onChange={(evt) => setTxtValue(evt.currentTarget.value)}
        />
        <Button onClick={() => textRef.current.reset()} label="Cancel" />
        <Button onClick={edit} label="edit" />
      </form>
    </>
  );
};
