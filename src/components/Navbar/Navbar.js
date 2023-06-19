import React from 'react';
import Logo from '../../assets/vicslogo.jpg'
import Menu from './Menu'
import styled from 'styled-components'
import {
  MagnifyingGlassIcon, UserCircleIcon, ShoppingCartIcon
} from '@heroicons/react/24/outline'


const Navbar = () => {
  return (
    <Nav>
      <Warn>
        <h1>Warning:</h1>
        <p>This Product contains nicotine. Nicotine is an addictive chemical </p>
        <hr />
      </Warn>
      <img src={Logo} alt="logo" />
      <Icons>
          <div>
            <ShoppingCartIcon />
          </div>
          <div>
            <UserCircleIcon />
          </div>
          <div>
            <MagnifyingGlassIcon />
          </div>
      </Icons>
      <Menu />
    </Nav>
  );
}

const Nav = styled.div`
  position: sticky;
  img {
    float: left;
    margin-top: -2px;
    width: 102px;
  }
`

const Warn = styled.div`
  color: black;  
`

const Icons = styled.div`
  margin-right: 15%;
  div {
    width: 45px;
    height: 45px;
    float: right;
    padding: 5px;
  }
`

export default Navbar;