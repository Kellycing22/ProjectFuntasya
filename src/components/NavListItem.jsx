import React from 'react';

function NavListItem({ item }) {
  return (
            <li>
            < a href="#">
            <i className={`bi ${item.icon}`}></i> {item.name}
            </a>
        </li>
  )
}

export default NavListItem;