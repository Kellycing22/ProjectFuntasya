import React from 'react'
import './Main.css'
import Sidemenu from '../components/Sidemenu';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Header from './Header';

function Main() {
  const [active, setActive] = useState(false);
    
  const handleToggleActive = () => {
    setActive(!active);
  };

  return (
        <main>
        <Sidemenu active = {active}/>
        <div className={`banner ${active ? 'active' : undefined}`}>
          <Header toggleActive = {handleToggleActive} />
        </div>
        </main>
    );
      
  }


export default Main;