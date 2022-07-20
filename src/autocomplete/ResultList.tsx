import React from 'react';

type ResultListProps = {
  list: string[];
  userInput: string;
  activeOption: number;
  ulContainerId?: string;
  ulContainerStyle?: React.CSSProperties;
  ulContainerClass?: string;
  liContainerStyle?: React.CSSProperties;
  liContainerClass?: string;
  noOptionClass?: string;
  activeClass?: string;
  noElFoundText?: string;
  onClick: any;
};

export const ResultList = ({
  list,
  userInput,
  activeOption,
  ulContainerId,
  ulContainerStyle,
  ulContainerClass,
  liContainerClass,
  liContainerStyle,
  activeClass,
  noOptionClass,
  noElFoundText,
  onClick,
}: ResultListProps) => {
  if (userInput && list.length) {
    return (
      <ul
        id={ulContainerId}
        className={ulContainerClass}
        style={ulContainerStyle}
        aria-live="polite"
      >
        {list.map((optionName: string, index: number) => (
          <li
            className={
              index === activeOption && activeClass
                ? [activeClass, liContainerClass].join(' ')
                : [
                    liContainerClass,
                    index % 2 === 0
                      ? `${liContainerClass}--even`
                      : `${liContainerClass}--odd`,
                  ].join(' ')
            }
            key={optionName}
            onClick={onClick}
            style={liContainerStyle}
          >
            {optionName}
          </li>
        ))}
      </ul>
    );
  } else {
    return (
      <div className={noOptionClass}>
        <em>{noElFoundText || 'No Option!'}</em>
      </div>
    );
  }
};
