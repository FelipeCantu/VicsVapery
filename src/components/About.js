import React from 'react'
import smokebg from '../assets/smokebg.jpeg'
import styled from 'styled-components'

function About() {
  return (
    <AboutMain>
      <Grade>
        <img src={smokebg} alt="smoke" />
        <h1>About Us</h1>
      </Grade>
    </AboutMain>
  )
}

const AboutMain = styled.div`
  
  img {
    width: 100%;
    height: 250px;
    opacity: 0.3;
  }
  h1 {
    position: absolute;
    top: 0;
    padding: 260px;
    right: 0;
  }
`

const Grade = styled.div `
background: linear-gradient(90deg, rgba(255,0,245,1) 0%, rgba(29,128,253,0.33659401260504207) 50%, rgba(69,233,252,1) 100%);

`

export default About