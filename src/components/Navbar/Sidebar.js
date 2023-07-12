import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Sidebar = ({ open }) => {
  return (
    <div>
      <nav>
        <Ul open={open}>
          <li><StyledLink to="/Home">Home</StyledLink></li>
          <li><StyledLink to="/About">About</StyledLink></li>
          <li><StyledLink to="/New">New</StyledLink></li>
          <li><StyledLink to="/Eliquids">E-Liquids</StyledLink></li>
          <li><StyledLink to="/Disposables">Disposables</StyledLink></li>
        </Ul>
      </nav>
    </div>
  )
}

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  margin-left: 35%;
  margin-top: -20px;
  :hover {
    color: gray;
  }
  li {
    color: #fff;
    padding: 18px;
  }
  @media (max-width: 1250px) {
     margin-right: 0;
  }
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #fff;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: -100px;
    height: 110vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    }
`;

const StyledLink = styled(Link)`
  margin: 10px;
  color: black;
  text-decoration: none;
  font-family: Arial, Helvetica, 
    sans-serif;
  :hover {
    color: white;
  }
`;


export default Sidebar