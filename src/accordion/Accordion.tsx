import React from 'react';

type AccordionProps = {
  /**
   * determine if open or collapsed
   */
  isOpen?: boolean;
  /**
   * display heading text
   */
  heading?: string;
  /**
   * display content text
   */
  content?: string;
  /**
   * allow styling of heading section
   */
  headingStyle?: React.CSSProperties;
  /**
   * allow styling of content section
   */
  contentStyle?: React.CSSProperties;
};

export const Accordion = ({
  isOpen = false,
  heading,
  content,
  headingStyle,
  contentStyle,
}: AccordionProps) => {
  const [open, setOpen] = React.useState<boolean>(isOpen);

  const onClickHandler = () => {
    setOpen(!open);
  };
  return (
    <>
      <button
        onClick={onClickHandler}
        style={{
          width: '100%',
          border: 'none',
          textAlign: 'left',
          ...headingStyle,
        }}
      >
        {heading}
      </button>
      <div
        style={{
          display: open ? 'block' : 'none',
          ...contentStyle,
        }}
      >
        {content}
      </div>
    </>
  );
};
