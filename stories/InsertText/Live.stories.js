import { InsertText } from '../../src/insertText/InsertText';
import InsertTextLive from '../liveEdit/InsertTextLive';

export default {
  title: 'DCXLibrary/Form/InsertText/live',
  component: InsertText,

  parameters: {
    options: {
      showPanel: false,
    },
    viewMode: 'docs',
    previewTabs: {
      canvas: { hidden: true },
    },
  },
};

export const Live = {
  render: () => <InsertTextLive />,
};
// />

// // ComponentName

// // In the live editor you can play with all the available properties
// // change the look and feel and interact with the component

// <Canvas>
//   <Story name="live">
//     <ComponentNameLive />
//   </Story>
// </Canvas>

// // Properties

// // below are described the list of all available properties.
// // the one marked with (\*) are mandatory the other instead are optional.

// <Props of={ComponentName} />
