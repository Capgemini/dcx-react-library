import { background } from '@storybook/theming';
import { Avatar } from '../../src/avatar/Avatar';
import { FormSelect } from '../../src/formSelect/FormSelect';
import { useArgs } from '@storybook/preview-api';

export default {
  title: 'DCXLibrary/Form/Avatar/Class based',
  component: Avatar,
  parameters: {
    options: {
      showPanel: true,
    },
  },
  tags: ['autodocs'],
};

export const Basic = {
  name: 'Basic',
  args: {
    children: 'JB'
  },
};

export const WithLogo = {
  name: 'With Logo',
  args: {
    src: 'https://avatars.githubusercontent.com/u/1049773?s=40',
  },
};

export const Initials = {
  name: 'Initials',
  args: {
    children: 'JB',
    style: {
      backgroundColor: '#663399',
      color: 'white'
    }
  }
}

export const InitialsLarge = {
  name: 'Initials Large',
  args: {
    children: 'JB',
    style: {
      backgroundColor: '#ff5722',
      color: 'white'
    },
    width: '4em',
    height: '4em'
  }
}

/**
 * Avatar can be passed in different child properties such as links to external websites or custom components.
 */
export const CustomContent = {
  args: {
    shape: 'square',
    width: '12em',
    height: '4em',
    children: <>
      <a href="#" target="_blank" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        borderRadius: '50%',
        width: '2em',
        height: '2em',
        backgroundColor: 'rebeccapurple',
        color: 'white'
      }}
      >EL</a>
      <FormSelect 
        onChange={ e => { e.preventDefault() } }
        options={[
          {
            label: 'Away from keyboard',
            value: 'AFK'
          },
          {
            label: 'Online',
            value: 'online'
          },
          {
            label: 'Offline',
            value: 'offline'
          }
        ]}
      />
      
    </>,
  },
};
