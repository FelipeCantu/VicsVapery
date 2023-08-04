import React from 'react'
import styled from 'styled-components'
import MainImg from '../assets/mainim.png'
import Elibut from '../assets/elibut.png'
import Dispbut from '../assets/dispbut.gif'
import SmokeBg from '../assets/smokebg.jpeg'
import Products from './Products'
import Brand from '../assets/Brand.png'
import Brand2 from '../assets/Brand2.jpeg'
import Footer from './Footer'

function Home() {
  return (
    <Main>
      <hr />
      <img src={MainImg} width="70%" height="400px" />
      <ImgButton>
        <WhiteButton>
          <h1>Disposables</h1>
          <img src={Elibut} width="700px" height="400px" />
          <button>Shop Here</button>
        </WhiteButton>
        <BlackButton>
          <h1>E-Liquids</h1>
          <img src={Dispbut} width="700px" height="400px" />
          <button>Shop Here</button>
        </BlackButton>
      </ImgButton>
      <Section>
        <Wrapper>
          <Grade>
            <img src={SmokeBg} />
          </Grade>
          <Brands>
            <img src={Brand} alt="brand logos" />
            <img src={Brand2} alt="brand2 logo" />
            <img src={Brand} alt="brand logos" />
            <img src={Brand2} alt="brand2 logo" />
          </Brands>
        </Wrapper>
      </Section>
      <Products />
      <Footer />
    </Main>
  )
}

const Main = styled.div`
  height: 100vh;
  overflow: auto;
  @media (max-width: 768px) {
    img {
      width: 100%;
    }
  }
`;

const ImgButton = styled.div`
  position: relative;
  width: 70%;
  height: 400px;
  display: flex;
  margin: 0 auto;
  h1 {
    position: absolute;
    display: block;
    padding: 40px;
  }
  button {
    position: absolute;
    display: flex;
    bottom: 25%;
    background: red;
    padding: 15px 30px;
    border-radius: 25px;
    color: white;
    font-weight: bold;
    @media (max-width: 768px) {
 
    }
  }
  @media (max-width: 768px) {
    height: 800px;
    display: grid;
    width: 100%;  
  }
`

const BlackButton = styled.div`
  padding-right: 200px;
  h1 {
    position: absolute;
    color: white;
  }
  button {
    left: 63%;
    @media (max-width: 768px) {
      position: absolute;
      left: 35%;
      bottom: 100px;
    }
  }
  }
`
const WhiteButton = styled.div`
  display: flex;
  button {
    left: 10%;
    @media (max-width: 768px) {
      position: absolute;
      left: 35%;
      top: 33%;
      height: 50px;
    }
  }
  @media (max-width: 768px) {
    width: 1000px;

  }
`

const Section = styled.div`
  img {
    width: 100%;
    margin: 0;
    height: 250px;
  }

`
const Wrapper = styled.div`
    position: relative;
    top: 0;
`

const Grade = styled.div`
background: linear-gradient(90deg, rgba(255,0,245,1) 0%, rgba(29,128,253,0.33659401260504207) 50%, rgba(69,233,252,1) 100%);  width: 70%;
margin: auto;
img {
  opacity: 0.3;
}
@media (max-width: 768px) {
  width: 100%;
}
`

const Brands = styled.div`
  position: absolute;
  top: 0;
  padding: 50px;
  padding-right: 20%;
  padding-left: 25%;
  img{
    margin-right: 50px;
    width: 150px;
    height: 150px;
  }
  @media (max-width: 768px) {
    display: flex;
    right: -50%;
  }
`

export default Home