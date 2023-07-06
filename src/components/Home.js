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
import stock from '../assets/stock.jpg'
import stock2 from '../assets/stock2.jpeg'

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
      <Stock>
        <img src={stock} alt="stock image" />
        <img src={stock2} alt="stock image" />
      </Stock>
      <Footer />
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
`

const Stock = styled.div`
  width: 70%;
  height: 300px;
  margin: auto;
  display: flex;

`

export default Home