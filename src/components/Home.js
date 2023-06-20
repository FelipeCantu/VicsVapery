import React from 'react'
import styled from 'styled-components'
import MainImg from '../assets/mainim.png'
import Elibut from '../assets/elibut.png'
import Dispbut from '../assets/dispbut.gif'

function Home() {
  return (
    <Main>
      <hr />
      <p>
          graegkjrdaklfgjadrl;kg graegkjrdaklfgjadrl
          graegkjrdaklfgjadrlx graegkjrdaklfgjadrl f graegkjrdaklfgjadrl graegkjrdaklfgjadrl graegkjrdaklfgjadrl
          graegkjrdaklfgjadrlgraegkjrdaklfgjadrlgraegkjrdaklfgjadrlgraegkjrdaklfgjadrlgraegkjrdaklfgjadrl
          
        </p>
        <img src={MainImg} width="700px" height="400px" />
        <img src={Elibut} width="700px" height="400px" />
        <img src={Dispbut} width="700px" height="400px" />
        <p>
          graegkjrdaklfgjadrl;kg graegkjrdaklfgjadrl
          graegkjrdaklfgjadrlx graegkjrdaklfgjadrl f graegkjrdaklfgjadrl graegkjrdaklfgjadrl graegkjrdaklfgjadrl
          graegkjrdaklfgjadrlgraegkjrdaklfgjadrlgraegkjrdaklfgjadrlgraegkjrdaklfgjadrlgraegkjrdaklfgjadrl
          
          v
        </p>
    </Main>
  )
}

const Main = styled.div`
  height: 100vh;
  overflow: auto;
  p {
    font-size: 50px;
    color: black;
  }
`;


export default Home