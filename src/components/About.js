import React from 'react'
import smoke from '../assets/smoke.jpeg'
import styled from 'styled-components'
import store from '../assets/store.jpeg'
import translogo from '../assets/translogo.png'
import store2 from '../assets/vapestore2.webp'

function About() {
  return (
    <AboutMain>
      <MainSection>
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
      </MainSection>

      <AboutSection>

        <AboutUs>
          <img src={store2} alt="" />
          <TextSection>
            <h1>Our Vision</h1>
            <p>Welcome to our vape website! We are dedicated to providing you with a comprehensive resource for all things vape-related. Whether you're new to vaping or an experienced enthusiast, we have everything you need to enhance your vaping experience.
              At our vape website, we aim to offer a wide range of high-quality vaping products to suit every preference and budget. We carefully curate our selection, ensuring that we only stock products from reputable and trusted brands in the industry. From starter kits and mods to tanks, coils, and e-liquids, we have you covered.
              Our team consists of passionate vapers who are knowledgeable about the latest trends, products, and safety measures in the vaping world. We strive to provide accurate and up-to-date information, empowering you to make informed decisions about your vaping journey. Whether you're seeking advice on choosing the right device, troubleshooting an issue, or looking for tips and tricks, we are here to help.
              We prioritize customer satisfaction and aim to provide exceptional service. Our user-friendly website offers a seamless browsing and shopping experience, with detailed product descriptions and customer reviews to assist you in making the best choice. We also provide prompt shipping and a hassle-free return policy, ensuring that your shopping experience is enjoyable from start to finish.
              Safety is of utmost importance to us, and we are committed to promoting responsible vaping practices. We provide educational resources on battery safety, proper usage, and maintenance to ensure that you can enjoy vaping safely. Additionally, we adhere to all applicable regulations and age verification requirements to prevent the sale of vaping products to minors.
              Join our vaping community by subscribing to our newsletter and following us on social media platforms. We regularly share informative articles, industry news, product updates, and exclusive offers to keep you connected and engaged.
              Thank you for choosing our vape website as your go-to resource for all things vape-related. We look forward to serving you and helping you make the most out of your vaping experience.</p>
          </TextSection>
        </AboutUs>
      </AboutSection>
    </AboutMain>

  )
}

const AboutMain = styled.div`
  position: relative;
  height: 100vh;
  overflow: auto;
`

const MainSection = styled.div`
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
      left: 25%;
      background: red;
      color: white;
      font-weight: bold;
      border-radius: 14px;
      border: none;
      @media (min-width: 1820px) {
        left: 40%;
      }
      @media (max-width: 1244px)
      {
        left: 5%;
      }
      @media (min-width: 1245px) {
        left: 5%;
      }
      @media (min-width: 1300px) {
        left: 8%;
      }
      @media(min-width: 1400px) {
        left: 15%;
      }
      @media( min-width: 1600px) {
        left: 20%;
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

const AboutSection = styled.div`
  height: 100vh;
  margin-top: 350px;
`

const AboutUs = styled.div`
  display: flex;
  width: 70%;
  margin: auto;
  img {
    width: 500px;
    height: 500px;
    padding-right: 40px;
    object-fit: cover;

  }
  p{
    font-size: 14px;
    justify-content: right; 
  }
  h1 {
    padding-bottom: 35px;
  }
`

const TextSection = styled.div`
  width: 50%;
`

export default About