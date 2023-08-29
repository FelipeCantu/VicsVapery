import React from 'react'
import EliquidProduct from './EliquidProducts'
import Navigation from './Navigation'
import Footer from './Footer'
import styled from 'styled-components'

function Eliquids() {
  return (
    <div>
      <Eliq>
        <Navigation />
        <h1>E-liquids</h1>
        <EliquidProduct />
        <Footer />
      </Eliq>
    </div>
  )
}

const Eliq = styled.div`
height: 100vh;
overflow: auto;
`

export default Eliquids