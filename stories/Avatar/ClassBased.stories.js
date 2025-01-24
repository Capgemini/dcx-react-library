import { Avatar } from '../../src/avatar/Avatar';
import { Button } from '../../src/button/Button';
import { Badge } from '../../src/badge/Badge';

export default {
  title: 'DCXLibrary/Form/Avatar/Class based',
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
      background: '#F3F4F6',
    },
    childStyle: {
      color: '#4B5563',
      textDecoration: 'none'
    },
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
      background: '#66CC00',
      color: 'white',
    },
    childStyle: {
      color: 'white',
      textDecoration: 'none'
    },
    borderWidth: '2px',
    borderStyle: 'solid',
    borderColor: '#8bc34a',
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
      background: '#ff5722',
    },
    childStyle: {
      color: 'white',
      textDecoration: 'none'
    },
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: 'cornsilk',
    shape: 'square',
    avatarLink: 'http://localhost/',
    avatarLinkTarget: '_blank',
    alt: 'A sample square avatar element',
  },
};

export const Circle = {
  args: {
    children: [
      'JB',
    ],
    style:{
      background: 'white',
    },
    childStyle: {
      color: '#4B5563',
      textDecoration: 'none'
    },
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: '#326fa9',
    shape: 'circle',
    avatarLink: 'http://localhost/',
    avatarLinkTarget: '_blank',
    alt: 'A sample circle avatar element',
  },
};

export const WithImage = {
  name: 'With Image',
  args: {
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: '#326fa9',  
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

export const WithBadge = {
  render: () => (
    <Badge badgeContents={<div style={{
      color: 'white',
      borderRadius: '12px',
      background: '#FFC107',
      padding: '3px 7px',
    }}>2</div>}>  
      <Avatar
        style={{
          backgroundColor: '#663399',
          color: 'white'
        }}
      >JB</Avatar>
    </Badge>
  )
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

export const BorderStyles = {
  name: 'Border Styles',
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
      <Button>+</Button>
    </>,
  },
};
