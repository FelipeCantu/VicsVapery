import React from 'react';
import Logo from '../../assets/vicslogo.jpg'
import Menu from './Menu'
import styled from 'styled-components'

const Navbar = () => {
  return (
    <nav>
        <Warn>
          <h1>Warning:</h1>
          <p>This Product contains nicotine. Nicotine is an addictive chemical </p>
        </Warn>
        <img src={Logo}  alt="logo" width="100px" height="100px"/>
      <Menu />
    </nav>
  );
}

const Warn = styled.div`
  color: black;
`


export default Navbar;