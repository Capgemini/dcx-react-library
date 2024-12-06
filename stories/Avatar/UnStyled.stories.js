import { Avatar } from '../../src/avatar/Avatar';
import { FormSelect } from '../../src/formSelect/FormSelect';

export default {
  title: 'DCXLibrary/Form/Avatar/Without style',
  component: Avatar,
  parameters: {
    options: {
      showPanel: true,
    },
  },
  argTypes: {
    children: {
      description: 'Allows you to add an element as children',
    },
  },
};

export const Unstyled = {
  args: {
    children: [
      'JB',
    ],
    style:{
      background: 'lightGrey',
      border: '1px solid #326fa9'
    },
    shape: 'circle',
    width: '3em',
    height: '3em',
    avatarLink: 'http://localhost/',
    avatarLinkTarget: '_blank',
    alt: 'A sample avatar element',
  },
};

export const Rounded = {
  args: {
    children: [
      'JB',
    ],
    style:{
      background: 'lightGrey',
      border: '1px solid #326fa9'
    },
    shape: 'rounded',
    avatarLink: 'http://localhost/',
    avatarLinkTarget: '_blank',
    alt: 'A sample rounded avatar element',
  },
};

export const Square = {
  args: {
    children: [
      'JB',
    ],
    style:{
      background: 'lightGrey',
      border: '1px solid #326fa9'
    },
    shape: 'square',
    avatarLink: 'http://localhost/',
    avatarLinkTarget: '_blank',
    alt: 'A sample square avatar element',
  },
};

export const WithImage = {
  name: 'With Image',
  args: {
    style: {
      border: '1px solid #326fa9'
    },  
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

export const BorderColor = {
  name: 'Border Color',
  args: {
    children: 'JB',
    borderWidth: '2px',
    borderStyle: 'solid',
    borderColor: '#66CC00',
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
      >JB</a>
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
