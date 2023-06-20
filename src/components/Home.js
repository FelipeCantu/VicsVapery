import React from 'react'
import styled from 'styled-components'
import MainImg from '../assets/mainim.png'
import Elibut from '../assets/elibut.png'
import Dispbut from '../assets/dispbut.gif'
import SmokeBg from '../assets/smokebg.jpeg'

function Home() {
  return (
    <Main>
      <hr />
      <img src={MainImg} width="70%" height="400px" />
      <ImgButton>
        <button>
          <h1>E-liquids</h1>
          <img src={Elibut} width="700px" height="400px" />
        </button>
        <BlackButton>
          <button>
            <h1>Disposables</h1>
            <img src={Dispbut} width="700px" height="400px" />
          </button>
        </BlackButton>
      </ImgButton>
      <Section>
        <div>
          <Grade>
            <div>
              <img src={SmokeBg} />
            </div>
          </Grade>
        </div>
      </Section>
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

const ImgButton = styled.button`
  position: relative;
  width: 70%;
  height: 400px;
  display: flex;
  margin: 0 auto;
  button {
    color: black;
    background: red;
  }
  h1 {
    position: absolute;
    display: block;
  }
`

const BlackButton = styled.button`
  padding-right: 200px;
  h1 {
    position: absolute;
    color: white;
  }
`

const Section = styled.div`
  img {
    width: 100%;
    margin: 0;
    opacity: 0.3;
  }
`

const Grade = styled.div`
  background: linear-gradient(90deg, rgba(255,0,245,1) 0%, rgba(29,128,253,0.33659401260504207) 50%, rgba(69,233,252,1) 100%);  width: 70%;
  height: 400px;
  margin: auto;
  position: relative;
  z-index: 3;
`

export default Home