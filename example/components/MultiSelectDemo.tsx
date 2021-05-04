import * as React from 'react';
import { MultiSelect } from 'dcx-react-library';

export const MultiSelectDemo = () => (
  <>
    <h1>Basic Multi Select</h1>
    <MultiSelect
      options={[
        {
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
          selected: true,
        },
      ]}
      selectedListStyle={{
        border: '1px solid #A6A6A6',
        padding: '4px 6px',
        borderRadius: '3px',
      }}
      selectedListItemStyle={{
        backgroudColor: '#F5F7F8',
        border: '1px solid #C1C7CF',
        borderRadius: '3px',
        padding: '3px 8px',
        margin: '2px 6px 2px 0px',
      }}
    />
  </>
);
