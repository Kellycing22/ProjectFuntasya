import React, { useState, useEffect} from 'react';
import './Main.css';
import Sidemenu from '../components/Sidemenu';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Header from './Header';
import Home from './Home';

function Main() {
  const [active, setActive] = useState(false);
  const [games, setGames] = useState([]);

  const handleToggleActive = () => {
    setActive(!active);
  };

  const fetchData = () => {
      fetch('http://localhost:5173/api/gamesData.json')
      .then(response => response.json())
      .then(data => {
        setGames(data)
        console.log(data);
      })
      .catch(e => console.log(e.message));
    };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <main>
      <Sidemenu active={active} />
      <div className={`banner ${active ? 'active' : ''}`}>
        <Header toggleActive={handleToggleActive} />
        <div className="container-fluid">
          <Home games = {games}/>
        </div>
      </div>
    </main>
  );
}

export default Main;
