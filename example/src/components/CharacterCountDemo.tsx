import React, { useRef } from 'react';
import { Button, CharacterCount } from '@capgeminiuk/dcx-react-library';

export const CharacterCountDemo = () => {
  const textRef = useRef<any>(null);
  const [value, setValue] = React.useState<string>('');
  const edit = () => {
    setValue('prefill value');
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
          value={value}
          onChange={(evt) => setValue(evt.currentTarget.value)}
        />
        <Button onClick={() => textRef.current.reset()} label="Cancel" />
        <Button onClick={edit} label="edit" />
      </form>

      <h2>Constrained</h2>
      <CharacterCount
        label="Label for text area"
        hint={{
          text: 'Type more than 15 characters to see the limitation',
        }}
        maxLength={15}
        constrained={true}
        rows={5}
        cols={50}
      />
      <h2>Threshold</h2>
      <CharacterCount
        label="Label for text area"
        hint={{
          text: 'Type more than 12 characters to see the message',
        }}
        maxLength={15}
        threshold={80}
        rows={5}
        cols={50}
      />
      <h2>Word Count</h2>
      <CharacterCount
        label="Label for text area"
        hint={{
          text: 'Type more than 15 words to see the message change',
        }}
        maxLength={15}
        limitType="words"
        rows={5}
        cols={50}
      />
    </>
  );
};
