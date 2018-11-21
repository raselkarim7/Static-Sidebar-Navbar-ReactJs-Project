import React from 'react';
import { Link } from 'react-router-dom';

const SidebarItem = ({ link, title, faIcon, selected }) => {
  const itemClass_list = link === selected ? 'sidebar-item active' : 'sidebar-item';
  const itemClass_Link = link === selected ? 'sidebar-link active' : 'sidebar-link';
  
  return (
      <li className={itemClass_list}>
        <Link to={link} className={itemClass_Link}>
          <i className={`${faIcon} mr-2`}> </i>
          { title }
        </Link>
      </li>
    );
};

export default SidebarItem ;
