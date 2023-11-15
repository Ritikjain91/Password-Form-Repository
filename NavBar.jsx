import React from 'react';
import './NavBar.css';
import { BellIcon } from '@chakra-ui/icons';

const NavBar = () => {
  return (
    <div className="Nav">
      <h1 >
        DashBoard
      </h1>
     <p><BellIcon/></p> 
    </div>
  );
}

export default NavBar;
