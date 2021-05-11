import React from 'react';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import { MultiSelect } from '../../src/multiSelect/MultiSelect';

const MultiSelectDemo = `
function MultiSelectDemo() {
    const multiSelectOptions = [{
        id: 'myId-1',
        label: 'option 1 label',
        value: 'option 1 value',
        selected: true,
      },
      {
        id: 'myId-2',
        label: 'option 2 label',
        value: 'option 2 value',
        selected: true,
      },
      {
        id: 'myId-3',
        label: 'option 3 label',
        value: 'option 3 value',
      },
      {
        id: 'myId-4',
        label: 'option 4 label',
        value: 'option 4 value',
      },
      {
        id: 'myId-5',
        label: 'option 5 label',
        value: 'option 5 value',
      },
      {
        id: 'myId-6',
        label: 'option 6 label',
        value: 'option 6 value',
      }
    ];

    const [selected, setSelected] = React.useState(
      multiSelectOptions
        .filter(_ => _.selected)
        .map(_ => _.label)
    );
  
    const handleRemove = (value) =>
      setSelected((prevState) =>
        prevState.filter(_ => _ !== value)
      );
  
    const handleSelect = (value) => {
      setSelected((prevState) => [...prevState, value]);
    };
  
    const handleRemoveAll = () => {
      setSelected([]);
    };
  
    return (
      <div>
        <MultiSelect
          id="demo-multi-select"
          inputProperties={{
            placeholder: 'Select...',
            style: {
              border: 'none',
              padding: '3px 8px',
              margin: '2px 6px 2px 0px',
            }
          }}
          resultUlStyle={{
            maxHeight: '400px',
            overflow: 'scroll',
            width: '100%',
            listStyleType: 'none',
            padding: '5px 0',
            border: 'solid 1px #aaa',
            margin: 0
          }}
          resultLiStyle={{
            padding: '0 15px',
          }}
          selectOptions={multiSelectOptions}
          selectedListItemStyle={{
            backgroudColor: '#F5F7F8',
            border: '1px solid #C1C7CF',
            borderRadius: '3px',
            padding: '3px 8px',
            margin: '2px 6px 2px 0px',
          }}
          searchContainerStyle={{
            border: '1px solid #A6A6A6',
            padding: '4px 6px',
            borderRadius: '3px'
          }}
          searchDebounceMs={0}
          hintText="Enter your search term to add a selection"
          inputPlaceholder="Select..."
          inputPlaceholder="Select..."
          onRemove={handleRemove}
          onSelect={handleSelect}
          onRemoveAll={handleRemoveAll}
        />
      </div>
    )
}`.trim();

const MultiSelectLive = () => {
  const scope = { MultiSelect };
  return (
    <LiveProvider code={MultiSelectDemo} scope={scope}>
      <div className="container">
        <LiveEditor className="liveEditor" aria-label="editor" />
        <LivePreview className="livePreview" aria-label="preview" />
      </div>
      <LiveError className="liveError" aria-label="error" />
    </LiveProvider>
  );
};

export default MultiSelectLive;
