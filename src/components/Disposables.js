import React from 'react'
import DisposablesProduct from './DisposableProduct'
import Navigation from './Navigation'
import Footer from './Footer'
import styled from 'styled-components'

function Disposables() {
  return (
    <div>
      <Dis>
        <Navigation />
        <h1>Disposables</h1>
        <DisposablesProduct />
        <Footer />
      </Dis>
    </div>
  )
}

const Dis = styled.div`
height: 100vh;
overflow: auto;
`

export default Disposables