import { Avatar } from '../../src/avatar/Avatar';
import { Badge } from '../../src/badge/Badge';
import '../Badge/badgeStoryStyles.css';

export default {
  title: 'DCXLibrary/Form/Badge/Class based',
  component: Badge,
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
    badgeContents: '5',
    badgeClassName: 'badge',
  },
};

export const Dot = {
  args: {
    children: <Avatar
        style={{
          border: '1px solid blue'
        }}
        src={'https://avatars.githubusercontent.com/u/1049773?s=40'}
    />,
    badgeClassName: 'badge',
    dot: true,
  }
}

export const LeftAligned = {
  args: {
    children: <Avatar
        style={{
          border: '1px solid blue'
        }}
        src={'https://avatars.githubusercontent.com/u/1049773?s=40'}
    />,
    badgeClassName: 'badge',
    badgeContents: '5',
    horizontalAlignment: 'left'
  }
}

export const RightAligned = {
  args: {
    children: <Avatar
        style={{
          border: '1px solid blue'
        }}
        src={'https://avatars.githubusercontent.com/u/1049773?s=40'}
    />,
    badgeClassName: 'badge',
    badgeContents: '5',
    horizontalAlignment: 'right'
  }
}

export const TopAligned = {
  args: {
    children: <Avatar
        style={{
          border: '1px solid blue'
        }}
        src={'https://avatars.githubusercontent.com/u/1049773?s=40'}
    />,
    badgeClassName: 'badge',
    badgeContents: '5',
    verticalAlignment: 'top'
  }
}

export const BottomAligned = {
  args: {
    children: <Avatar
        style={{
          border: '1px solid blue'
        }}
        src={'https://avatars.githubusercontent.com/u/1049773?s=40'}
    />,
    badgeClassName: 'badge',
    badgeContents: '5',
    verticalAlignment: 'bottom'
  }
}