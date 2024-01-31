import React from 'react';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import { Button } from '../../src/button/Button';

const ButtonDemo = `
function ButtonDemo() {
   
  const style = {
    backgroundColor: '#0070ad',
    color: 'white',
    border: 0,
    padding: '6px',
    width: '80px',
    height: '53px',
    borderRadius: '3px',
    cursor: 'pointer'
  }

  const [isLoading, setIsLoading] = React.useState(false);

  const handleClick = (evt) => {
    setTimeout(() => {setIsLoading(true)}, 1000)
  }

  return (
    <Button
        disabled={false} 
        onClick={handleClick}
        ariaLabel='submitButton' 
        disableClickForMs={0} 
        customPostfixImg={<></>} 
        customPrefixImg={<></>} 
        isLoading={isLoading} 
        loadingLabel="saving..." 
        customLoadingPreImage={<></>} 
        customLoadingPostImage={<></>}
        formAction="URL"
        className=""
        variant="primary"
        style={style}
        name=""
        value=""
    >
    /* here you can pass a children element */
      <strong>child</strong>
    </Button>
  )
}
`.trim();

const ButtonLive = () => {
  const scope = { Button };
  return (
    <LiveProvider code={ButtonDemo} scope={scope}>
      <div className="container">
        <LiveEditor className="liveEditor" aria-label="editor" />
        <LivePreview className="livePreview" aria-label="preview" />
      </div>
      <LiveError className="liveError" aria-label="error" />
    </LiveProvider>
  );
};

export default ButtonLive;
