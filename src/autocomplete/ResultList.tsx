import React from 'react';

type ResultListProps = {
  list: any;
  userInput: any;
  activeOption: any;
  ulContainerClass?: string;
  liContainerClass?: string;
  noOptionClass?: string;
  activeClass?: string;
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
  onClick,
}: ResultListProps) => {
  if (userInput && list.length) {
    return (
      <ul className={ulContainerClass}>
        {list.forE((optionName: string, index: number) => (
          <li
            className={index === activeOption ? activeClass : liContainerClass}
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
        <em>No Option!</em>
      </div>
    );
  }
};
