import React from 'react';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import { CharacterCount } from '../../src/characterCount/CharacterCount';
import './style.css';

const CharacterCountDemo = `
function CharacterCountDemo() {
  return (<CharacterCount
    id="123"
    label="Label for text area"
    hint={{ text: 'Optional hint' }}
    name="textarea-name"
    cols={30}
    rows={5}
    maxLength={15}
    ariaDescribedBy="aria-described-by"
    displayError={false}
    errorMessage="error-text"
    errorMessageClassName="error-class-name"
    errorId="error-id"
    errorVisuallyHiddenText={{ text: 'visually-hidden-error-message' }}
    limitType ="characters"
    constrained={false}
    threshold={20}
    customMaxCharMsgFunc={(remainingCount, overLimitBy, hydrated) =>
      "this is a custom message"
    }
      />)
}
`;

const CharacterCountLive = () => {
  const scope = { CharacterCount };
  return (
    <LiveProvider code={CharacterCountDemo} scope={scope}>
      <div className="container">
        <LiveEditor className="liveEditor" aria-label="editor" />
        <LivePreview className="livePreview" aria-label="preview" />
      </div>
      <LiveError className="liveError" aria-label="error" />
    </LiveProvider>
  );
};

export default CharacterCountLive;
