import React, { MutableRefObject } from 'react';
type CopyToClipboardProps = Omit<
  React.HTMLAttributes<HTMLButtonElement>,
  'onCopy'
> & {
  icon?: JSX.Element;
  onCopy: (value: string) => void;
  children?: JSX.Element;
  text?: string;
};

export const CopyToClipboard = React.forwardRef<
  HTMLElement,
  CopyToClipboardProps
>(({ icon, onCopy, text, children, tabIndex = 0, ...props }, ref) => {
  const onClickHandler = () => {
    const inputRef = ref as MutableRefObject<HTMLElement>;
    document.execCommand('copy');
    text
      ? onCopy(text)
      : onCopy(
          (inputRef.current as HTMLInputElement).value ||
            inputRef.current.innerHTML
        );
  };
  return (
    <button onClick={onClickHandler} {...props} tabIndex={tabIndex}>
      {icon}
      {children}
    </button>
  );
});
