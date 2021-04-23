import React from 'react';
import data from '../data/navbar.json';
import { Link } from '../generated-components';

const SideNavItems = ({ items }) =>
  items.map(item => {
    const { link, title } = item;
    return (
      <li key={title}>
        <Link href={link}>{title}</Link>
      </li>
    );
  });

export const SideNavBar = () => {
  const navBarItems = data.map(section => (
    <ul key={section.title}>
      {section.title}
      <SideNavItems items={section.items} />
    </ul>
  ));
  return <div>{navBarItems}</div>;
};
