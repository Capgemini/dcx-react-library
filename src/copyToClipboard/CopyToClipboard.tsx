import React, { MutableRefObject } from 'react';
type CopyToClipboardProps = {
  icon?: JSX.Element;
  onCopy: (value: string) => void;
  children?: JSX.Element;
};

export const CopyToClipboard = React.forwardRef<
  HTMLInputElement,
  CopyToClipboardProps
>(({ icon, onCopy, children }, ref) => {
  const onClickHandler = () => {
    const inputRef = ref as MutableRefObject<HTMLInputElement>;
    inputRef.current.select();
    document.execCommand('copy');
    onCopy(inputRef.current.value);
  };
  return (
    <button onClick={onClickHandler}>
      {icon}
      {children}
    </button>
  );
});
