import React from 'react';

type ResultListProps = {
  list: string[];
  userInput: string;
  activeOption: number;
  ulContainerClass?: string;
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
  ulContainerClass,
  liContainerClass,
  activeClass,
  noOptionClass,
  noElFoundText,
  onClick,
}: ResultListProps) => {
  if (userInput && list.length) {
    return (
      <ul className={ulContainerClass} aria-live="polite">
        {list.map((optionName: string, index: number) => (
          <li
            className={
              index === activeOption
                ? [activeClass, liContainerClass].join(' ')
                : liContainerClass
            }
            key={optionName}
            onClick={onClick}
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
