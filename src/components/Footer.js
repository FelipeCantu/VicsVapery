import React from 'react'
import styled from 'styled-components'
import { EnvelopeIcon, ArrowRightIcon } from '@heroicons/react/24/outline'
import bandage from '../assets/bandage.png'


function Footer() {
  return (
    <Footers>
      <News>
        <h1>Sign Up for Newsletter</h1>
        <EnvelopeIcon width="20px" height="20px" />
        <form action="">
          <input type="email" id="email" name="user" placeholder='Email goes here' />
          <button type="submit"><ArrowRightIcon width="20px" height="10px;" /></button>
        </form>
        <h4>Get special offers and find out what’s new in the store.</h4>
        <img src={bandage} width="250px" height="80px" />
      </News>
      <Foot>

      </Foot>
      <p>WARNING: Our products contain nicotine,
        a poisonous and addictive substance.
        Our products are only intended for committed smokers of legal
        smoking age and not by non-smokers, children,
        women who are pregnant or may become pregnant or any
        person with an elevated risk of, or preexisting condition of,
        any medical condition which includes, but is not limited to,
        heart disease, diabetes, high blood pressure or asthma.
        If you experience any side effects or possible side effects,
        stop using the product immediately and consult a physician.
        Product may be poisonous if orally ingested.
        Our products are not smoking cessation products and have
        not been tested or guaranteed as such. Our products have
        not been evaluated by the Food and Drug Administration nor
        is it intended to treat, prevent or cure any disease or
        condition. For their protection, please keep out of reach
        of children and pets. Read our terms of use page before
        purchasing our products.</p>
    </Footers>
  )
}

export default Footer

const Footers = styled.div`
  background: yellow;
  font-size: 12px;
  width: 100%;
  height: 600px;
  p {
    width: 70%;
    margin: auto;
    padding-top: 15px;
  }
  form {
    width: 250px;
    height: 60px;
  }
  input {
    border: none;
    border-bottom: 2px solid black;
    height: 30px;
    width: 200px;
  }
`


const Foot = styled.div`
    background: black;
    height: 300px;
    width: 100%;    
    
`
const News = styled.div`
  display: flex;
  width: 70%;
  margin: auto;
`