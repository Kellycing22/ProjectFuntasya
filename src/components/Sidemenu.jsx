import React, {useState} from 'react'
import './Sidemenu.css'
import navListData from '../data/navListData'
import NavListItem from './NavListItem.jsx'
import SocialIcons from "./SocialIcons";

function Sidemenu() {
  const [navData, setNavData] = useState(navListData);
  return (
  <div className={`Sidemenu ${active ? 'active' : undefined}`}>
    <a href="#" className="logo">
        <i className="bi bi-controller"></i>
        <span className="brand">Play</span>
    </a>
    <ul className="nav">
      {
        navData.map(item => (
          <NavListItem key ={item._id} item={item}/>
        ))
      }
    </ul>
      <SocialIcons />
  </div>
  );
}

export default Sidemenu;