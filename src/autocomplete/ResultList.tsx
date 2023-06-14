import React from 'react';
import { classNames } from '../common';

type ResultListProps = {
  resultLiRef: React.MutableRefObject<HTMLLIElement[]>;
  list: string[];
  listId?: string;
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
  resultLiRef,
  list,
  listId,
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
}: ResultListProps) => (
  <ul
    id={ulContainerId}
    className={ulContainerClass}
    style={ulContainerStyle}
    aria-live="polite"
  >
    {userInput && list.length > 0
      ? list.map((optionName: string, index: number) => (
          <li
            id={listId ? `${listId}--${index + 1}` : undefined}
            className={classNames([
              liContainerClass,
              {
                [`${activeClass}`]: index === activeOption,
                [`${liContainerClass}--even`]:
                  index !== activeOption && index % 2 === 0,
                [`${liContainerClass}--odd`]:
                  index !== activeOption && index % 2 !== 0,
              },
            ])}
            key={optionName}
            onClick={onClick}
            style={liContainerStyle}
            ref={(ref: HTMLLIElement) => {
              resultLiRef.current = { ...resultLiRef.current, [index]: ref };
            }}
          >
            {optionName}
          </li>
        ))
      : noElFoundText && (
          <li className={classNames([liContainerClass, noOptionClass])}>
            {noElFoundText}
          </li>
        )}
  </ul>
);
