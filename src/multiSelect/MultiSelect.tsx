import React, { useReducer } from 'react';
import { OptionProps } from '../common/components/Option';
import { Roles } from '../common/utils/rolesType';
import { Selected } from './components/Selected';

type MultiSelectState = {
  selected: SelectValue[];
};

type MultiSelectAction =
  | { type: 'focus' }
  | { type: 'remove'; payload: SelectValue };

export type SelectValue = {
  id?: string;
  label: string;
  value: string;
};

export type MultiSelectProps = {
  /**
   * Multi Select options
   */
  options: OptionProps[];
  /**
   * Multi Select class name
   */
  className?: string;
  /**
   * Multi Select id
   */
  id?: string;
  /**
   * Multi Select Selected list styling
   */
  selectedListStyle?: React.CSSProperties;
  /**
   * Multi Select Selected list item styling
   */
  selectedListItemStyle?: React.CSSProperties;
  /**
   * Multi Select onClick
   */
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
  /**
   * Multi Select onFocus
   */
  onFocus?: () => void;
  /**
   * Multi Select onRemove
   */
  onRemove?: (select: SelectValue) => void;
};

function multiSelectReducer(
  state: MultiSelectState,
  action: MultiSelectAction
) {
  if (action.type === 'remove') {
    return {
      ...state,
      selected: state.selected.filter(
        (_: SelectValue) => _.value !== action.payload.value
      ),
    };
  }

  return state;
}

export const MultiSelect = ({
  className,
  id,
  options,
  selectedListStyle,
  selectedListItemStyle,
  onClick,
  onFocus,
  onRemove,
}: MultiSelectProps) => {
  const [state, dispatch] = useReducer(multiSelectReducer, {
    selected: options
      .filter((option: OptionProps) => option.selected)
      .map((option: OptionProps) => ({
        id: option.id,
        label: option.label,
        value: option.value,
      })),
  });

  const { selected } = state;

  const onClickHandler = (event: React.MouseEvent<HTMLDivElement>) => {
    if (onClick) {
      onClick(event);
    }
  };

  const onRemoveHandler = (selected: SelectValue) => {
    dispatch({
      type: 'remove',
      payload: {
        ...selected,
      },
    });

    if (onRemove) {
      onRemove(selected);
    }
  };

  const onFocusHandler = () => {
    dispatch({
      type: 'focus',
    });

    if (onFocus) {
      onFocus();
    }
  };

  return (
    <div id={id} className={className} onClick={onClickHandler}>
      <div
        role={Roles.list}
        style={{
          ...selectedListStyle,
          display: 'flex',
          flexWrap: 'wrap',
        }}
      >
        {selected.map((select: SelectValue, index: number) => (
          <Selected
            key={index}
            select={{ id: select.id, label: select.label, value: select.value }}
            onRemove={onRemoveHandler}
            onFocus={onFocusHandler}
            style={{
              ...selectedListItemStyle,
              display: 'inline-flex',
            }}
          />
        ))}
      </div>
      <div>Search Input Field</div>
      <div>Options</div>
    </div>
  );
};
