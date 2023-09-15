import { MultiUpload } from '../../src/multiUpload/MultiUpload';

export default {
  title: 'DCXLibrary/Form/MultiUpload/Without style',
  component: MultiUpload,
  parameters: {
    options: {
      showPanel: true,
    },
  },
};
export const Unstyled = {
  render: function ({onChange,...args}) {
    const handleChange = file => {
      onChange(file);
      alert(`${file.name} was uploaded, it was last modified at ${new Date(file.lastModified).toLocaleDateString("en-us")}`);
    }
    return (<MultiUpload {...args} onChange={handleChange}/>);
  },
  args: {
    name:"file-upload", 
    label:"Upload File" 
  },
  argTypes: { onChange: { action: 'onChange' } },

};