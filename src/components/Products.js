import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import SanityClient from '../client'

function Products() {
  const [productData, setProduct] = useState()

  useEffect(() => {
    SanityClient.fetch(
      `*[_type == "product"]{
        name,
        price,
        image {
          asset -> {
            _id,
            url
          }
        }
      }`
    )
      .then((data) => setProduct(data))
      .catch(console.error)
  }, [])
  return (
    <Product>
      <h1>Featured Products</h1>
      <Prod>
        {productData?.map((setProduct) => (
          <div>
            <img src={setProduct.image.asset.url} alt={setProduct.image.alt} />
            <p>{setProduct.name}</p>
            <p>{setProduct.price}</p>
          </div>
        ))}
      </Prod>
    </Product>
  )
}

const Product = styled.div`
  
`

const Prod = styled.div`
  width: 70%;
  margin: auto;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr; 
  grid-template-rows: 400px;

  div {
    width: 100%;
    height: 100%;
  }
  img {
    width: 100%;
  }
  p {
    font-size: 14px;
  }
`

export default Products