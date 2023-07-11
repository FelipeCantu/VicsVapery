import React from 'react'
import styled from 'styled-components'
import { EnvelopeIcon, ArrowRightIcon } from '@heroicons/react/24/outline'
import bandage from '../assets/bandage.png'
import { SocialIcon } from 'react-social-icons'

function Footer() {
  return (
    <Footers>
      <News>
        <div>
          <NewsLetter>
            <h1>Sign Up for Newsletter</h1>
            <EnvelopeIcon width="20px" height="20px" />
            <form action="">
              <input type="email" id="email" name="user" placeholder='Email Goes Here...' />
              <button type="submit"><ArrowRightIcon width="20px" height="10px;" /></button>
            </form>
          </NewsLetter>
          <h4>Get special offers and find out what’s new in the store.</h4>
          <img src={bandage} width="250px" height="80px" />
        </div>
      </News>
      <Foot>
        <div>
          <h1>Follow Us</h1>
          <SocialIcon
            url='https://www.facebook.com/groups/1466920987379618'
            target="_blank"
            fgColor='transparent'
            bgColor='white'
            style={{ height: 30, width: 30 }}
          />
        </div>
        <div>
          <h1>Contact Us</h1>
          <h4>Phone</h4>
          <p>1-345-2345</p>
          <h4>Email</h4>
          <p>example@gmail.com</p>
        </div>
        <div>
          <h1>Support</h1>
          <p>Check Order Status</p>
          <p>Payment Options</p>
          <p>Shipping Policies</p>
          <p>Refund Policies</p>
          <p>Zip Code Check</p>
        </div>
        <div>
          <h1>Info</h1>
          <p>About Us</p>
          <p>Contact Us</p>
          <p>Coupons</p>
          <p>Terms of Service</p>
          <p>Rewards</p>
        </div>
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
      <hr />
      <p>Copyright © 2023 Vics Vapery. All Rights Reserved.</p>
    </Footers>
  )
}

export default Footer

const Footers = styled.div`
  font-size: 12px;
  width: 100%;
  height: 680px;
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
  hr {
    margin-top: 20px;
  }
`


const Foot = styled.div`
    background: black;
    height: 300px;
    color: white;
    display: flex;
    div {
      width: 70%;
      display: block;
      padding-top: 30px;
    }  
`

const News = styled.div`
  div {
    display: flex;
    width: 70%;
    margin: auto;
  h4 {
    width: 150px;
    margin: auto;
  }
  img {
    margin-left: 50px; 
    width: 50%;
  }
  }
`
const NewsLetter = styled.div `
  padding: 10px;
  button {
    background: white;
    border: none;
  }
`