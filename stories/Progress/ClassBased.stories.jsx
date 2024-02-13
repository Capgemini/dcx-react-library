import { Progress } from '../../src/progress/Progress';
import './style.css';

export default {
  title: 'DCXLibrary/Form/Progress/Class Based',
  component: Progress,
  parameters: {
    options: {
      showPanel: true,
    },
  },
  tags: ['autodocs'] 
};
/**
 * In this section we are using the progress component providing styling passing the relative `className`. Feel free to use your own css and style the progress as you prefer
 */
export const Customised = {
  name: "Progress",
  args: {
    label: 'Progress',
    max:100,
    value:80,
    className: "progress1"
  },
};

export const GradientBackground = {
  name: "Gradient",
  render: function ({ onClick, ...args }) {
    const animate = () => {
      const p = document.querySelector('#progress-2');
      if (p) {
        p.setAttribute('value', 80);
      }
    };
    const timerId = setInterval(() => {
      animate();
    }, 2000);
    window.unload = function() {
      clearInterval(timerId);
    };

    return <Progress {...args}/>
  },
  args: {
    label: 'Gradient',
    max:100,
    value:0,
    className:"progress2",
    id:"progress-2",
    labelClassName:"myLabel"
  },
};