import React from 'react';
import data from '../data/navbar.json';
import { Link } from '../generated-components';

const SideNavItems = ({ items }) =>
  items.map(item => {
    const { link, title } = item;
    return (
      <li className="no-bullets" key={title}>
        <Link className="no-bullets" href={link}>
          {title}
        </Link>
      </li>
    );
  });

const AnotherComponent = ({ section }) => {
  const [open, setOpen] = React.useState(false);

  const caretClass = `caret ${open ? 'caret-up' : ''}`;
  return (
    //align it to left
    <div>
      <button
        onClick={() => {
          setOpen(!open);
        }}
      >
        {' '}
        {section.title} <span className={caretClass}> </span>
      </button>
      <ul style={{ display: open ? 'contents' : 'none' }}>
        <SideNavItems items={section.items} />
      </ul>
    </div>
  );
};

export const SideNavBar = () => {
  const navBarItems = data.map((section: any) => (
    <AnotherComponent section={section} key={section.title} />
  ));
  return <div>{navBarItems}</div>;
};
