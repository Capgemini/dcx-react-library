import React, { useReducer, useEffect } from 'react';
import { Autocomplete } from '../autocomplete/Autocomplete';
import { Roles } from '../common/utils/rolesType';

type MultiSelectState = {
  selected: MultiSelectOption[];
  searchTerm?: string;
};

type MultiSelectAction =
  | { type: 'focus' }
  | { type: 'filter'; payload: string }
  | { type: 'add'; payload: MultiSelectOption }
  | { type: 'remove'; payload: MultiSelectOption }
  | { type: 'removeAll' };

export type MultiSelectOption = {
  label: string;
  value: string;
  id?: string;
  selected?: boolean;
};

export type MultiSelectProps = {
  /**
   * Multi Select options
   */
  selectOptions: MultiSelectOption[];
  /**
   * Multi Select class name
   */
  className?: string;
  /**
   * you can style the look and feel of your hint text
   */
  hintClass?: string;
  /**
   * you can specify a description label to provide additional information
   */
  hintText?: string;
  /**
   * Multi Select id
   */
  id?: string;
  /**
   * Multi Select input placeholder
   */
  inputProperties?: React.InputHTMLAttributes<{
    placeholder?: string;
    style?: React.CSSProperties;
  }>;
  /**
   * Multi Select result container id
   */
  resultUlId?: string;
  /**
   * Multi Select result container styling
   */
  resultUlStyle?: React.CSSProperties;
  /**
   * Multi Select result items styling
   */
  resultLiStyle?: React.CSSProperties;
  /**
   * Multi Select remove all button
   */
  removeAllButtonClass?: string;
  /**
   * Multi Select Selected list styling
   */
  selectedListStyle?: React.CSSProperties;
  /**
   * Multi Select Selected list item styling
   */
  selectedListItemStyle?: React.CSSProperties;
  /**
   * Multi Select search container
   */
  searchContainerStyle?: React.CSSProperties;
  /**
   * Multi Select filtering debounce in milliseconds
   */
  searchDebounceMs?: number;
  /**
   * Multi Select onFocus
   */
  onFocus?: () => void;
  /**
   * Multi Select onRemove
   */
  onRemove?: (value: string) => void;
  /**
   * Multi Select onRemoveAll
   */
  onRemoveAll?: () => void;
  /**
   * Multi Select onSelect
   */
  onSelect?: (value: string) => void;
  /**
   * Multi Select onUpdate
   */
  onUpdate?: (selected: MultiSelectOption[]) => void;
};

function multiSelectReducer(
  state: MultiSelectState,
  action: MultiSelectAction
): MultiSelectState {
  switch (action.type) {
    case 'filter': {
      return {
        ...state,
        searchTerm: action.payload.toLowerCase(),
      };
    }
    case 'add': {
      return {
        ...state,
        searchTerm: undefined,
        selected: [
          ...state.selected,
          {
            ...action.payload,
            selected: true,
          },
        ],
      };
    }
    case 'remove': {
      return {
        ...state,
        selected: state.selected.filter(
          (_: MultiSelectOption) => _.value !== action.payload.value
        ),
      };
    }
    case 'removeAll': {
      return {
        ...state,
        selected: [],
      };
    }
    default: {
      return state;
    }
  }
}

export const MultiSelect = ({
  className,
  hintClass,
  hintText,
  id,
  inputProperties,
  resultUlId,
  resultUlStyle,
  resultLiStyle,
  removeAllButtonClass,
  selectOptions,
  selectedListStyle,
  selectedListItemStyle,
  searchContainerStyle,
  searchDebounceMs = 0,
  onFocus,
  onRemove,
  onRemoveAll,
  onSelect,
  onUpdate,
}: MultiSelectProps) => {
  const [state, dispatch] = useReducer(multiSelectReducer, {
    selected: selectOptions
      .filter((option: MultiSelectOption) => option.selected)
      .map((option: MultiSelectOption) => ({
        id: option.id,
        label: option.label,
        value: option.value,
        selected: option.selected,
      })),
  });

  const { searchTerm, selected } = state;

  useEffect(() => {
    if (onUpdate) {
      onUpdate(selected);
    }
  });

  const onRemoveHandler = (option: MultiSelectOption) => {
    dispatch({
      type: 'remove',
      payload: {
        ...option,
      },
    });

    if (onRemove) {
      onRemove(option.value);
    }
  };

  const onRemoveAllHander = () => {
    dispatch({
      type: 'removeAll',
    });

    if (onRemoveAll) {
      onRemoveAll();
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

  const onSelectedHandler = (label: string) => {
    const option: MultiSelectOption | undefined = selectOptions.find(
      (option: MultiSelectOption) => option.label === label
    );

    if (option) {
      dispatch({
        type: 'add',
        payload: {
          ...option,
        },
      });

      if (onSelect) {
        onSelect(option.value);
      }
    }
  };

  const onChangeHandler = (searchTerm: string) => {
    dispatch({
      type: 'filter',
      payload: searchTerm,
    });
  };

  const populateOptions = (): string[] =>
    selectOptions
      .map((_: MultiSelectOption) => _.label)
      .filter(
        (_: string) => !searchTerm || _.toLowerCase().startsWith(searchTerm)
      )
      .filter(
        (_: string) =>
          !selected.some((select: MultiSelectOption) => select.label === _)
      );

  return (
    <div id={id} className={className}>
      <div
        role={Roles.list}
        style={{
          display: 'flex',
          flexDirection: 'column',
          flexWrap: 'wrap',
          ...selectedListStyle,
        }}
      >
        <Autocomplete
          multiSelect={true}
          removeAllButtonClass={removeAllButtonClass}
          searchContainerStyle={{
            display: 'inline-flex',
            justifyContent: 'space-between',
            ...searchContainerStyle,
          }}
          selectedListItemStyle={selectedListItemStyle}
          selected={selected}
          options={populateOptions()}
          hintClass={hintClass}
          hintText={hintText}
          inputProps={{
            role: Roles.combobox,
            ...inputProperties,
          }}
          resultId={resultUlId}
          resultUlStyle={resultUlStyle}
          resultLiStyle={resultLiStyle}
          debounceMs={searchDebounceMs}
          onSelected={onSelectedHandler}
          onChange={onChangeHandler}
          onRemove={onRemoveHandler}
          onRemoveAll={onRemoveAllHander}
          onFocus={onFocusHandler}
        />
      </div>
    </div>
  );
};
