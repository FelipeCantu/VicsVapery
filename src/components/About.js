import React from 'react'
import smoke from '../assets/smoke.jpeg'
import styled from 'styled-components'
import store from '../assets/store.jpeg'
import translogo from '../assets/translogo.png'

function About() {
  return (
    <AboutMain>
      <Grade>
        <img src={smoke} alt="smoke" />
        <h1>About Us</h1>
      </Grade>
      <StoreSection>
        <img src={store} alt="store" />
        <div>
          <img src={translogo} alt="logo" />
          <button>Shop Here</button>
        </div>
      </StoreSection>
      <AboutUs>
      </AboutUs>

    </AboutMain>

  )
}

const AboutMain = styled.div`
  position: relative;
  height: 100vh;
  overflow: auto;
  img {
    width: 100%;
    height: 250px;
  }
  h1 {
    position: absolute;
    top: 50px;
    right: 45%;
  }

`

const Grade = styled.div`
  background: linear-gradient(90deg, rgba(255,0,245,1) 0%, rgba(29,128,253,0.33659401260504207) 50%, rgba(69,233,252,1) 100%);
  height: 250px;
  img {
    opacity: 0.3;
    object-fit: cover;
  }
`
const StoreSection = styled.div`
  img{
    position: absolute;
    filter: brightness(40%);
    width: 70%;
    top: 125px;
    height: 400px;
    left: 15%;
    object-fit: cover;
  }
  div {
    // background: yellow;
    position: absolute;
    width: 900px;
    height: 300px;
    top: 150px;
    margin-left: 20%;
    display: flex;
    img {
      position: relative;
      left: 0;
      width: 400px;
      height: 400px;
      top: 0;
      filter: brightness(100%);
    }
    button {
      position: relative;
      width: 130px;
      height: 50px;
      top: 150px;
      left: 20%;
      background: red;
      color: white;
      font-weight: bold;
      border-radius: 14px;
      border: none;
      @media (max-width: 1244px)
      {
        left: 5%;
      }
      @media (max-width: 998px) {
        left: 0;
      }
      @media (max-width: 885px) {
        display: none;
      }
    }
  }
`

const AboutUs = styled.div `
  height: 500px;
`

export default About