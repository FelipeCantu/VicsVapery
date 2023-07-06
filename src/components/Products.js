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
    <Prod>
        {productData?.map((setProduct) => (
          <div>
             <img src={setProduct.image.asset.url} alt={setProduct.image.alt} />
             <p>{setProduct.name}</p>
             <p>{setProduct.price}</p>
          </div>
        ))}

    </Prod>
  )
}


const Prod = styled.div `
  display: flex;
  flex-column: 3fr;
  width: 70%;
  margin: auto;
  height: 100%;
  div {
    width: 300px;
    height: 300px;
  }
  img {
    width: 100%;
  }
  p {
    font-size: 14px;
  }
`

export default Products