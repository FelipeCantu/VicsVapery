import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import sanityClient from "../client.js";
import imageUrlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react";
import styled from 'styled-components'



const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}
const SinglePost = ({ product }) => {
  const [singlePost, setSinglePost] = useState(null);
  const { slug } = useParams();
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (newQuantity) => {
    setQuantity(newQuantity);
  };

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  useEffect(() => {
    sanityClient
      .fetch(
        `*[slug.current == "${slug}"]{
            title,
            _id,
            slug,
            price,
            inStock,
            flavors,
            mainImage{
                asset->{
                    _id,
                    url
                }
            },
            body,
            "name": author->name,
            "authorImage": author->image
        }`
      )
      .then((data) => setSinglePost(data[0]))
      .catch(console.error);
  }, [slug]);

  if (!singlePost) return <Load><div>Loading...</div></Load>

  return (
    <Single>
      <main>
        <article>
          <header>
            <div>
              <div>
                <h1>
                  {singlePost.title}
                </h1>
                <div>
                  <p>${singlePost.price}</p>
                  <p>Flavors:
                    <label for='flavors'>
                      <select name='flavors' id="flavors">
                        {singlePost.flavors.map((flavor, index) => (
                          <option key={index}>{flavor} </option>
                        ))}
                      </select>
                    </label>
                  </p>
                  <p>{singlePost.inStock ? 'In Stock' : 'Out of Stock'}</p>
                </div>
              </div>
            </div>
            <img
              src={singlePost.mainImage.asset.url}
              alt={singlePost.title}
            />
          </header>
          <div>
            <BlockContent
              blocks={singlePost.body}
              projectId="9la5iz9r"
              dataset="production"
            />
          </div>
          <ProductContainer>
            <div>
              <button onClick={handleDecrement}>-</button>
              <input
                type="number"
                value={quantity}
                onChange={(e) => handleQuantityChange(e.target.value)}
              />
              <button onClick={handleIncrement}>+</button>
            </div>
          </ProductContainer>
          <Button><button>Add to Cart</button></Button>
        </article>
      </main>
    </Single>
  );
}

const Load = styled.div`

`

const Single = styled.div`
border: 1px solid #ccc;
padding: 20px;
margin: auto;
max-width: 500px;
box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  img {
    width: 200px;
    height: 200px;
  }
`

const ProductContainer = styled.div`
  align-items: center;
  margin-top: 10px;
  button {
    padding: 5px 10px;
    border: none;
    background-color: #f0f0f0;
    cursor: pointer;
  }
  input {
    padding: 5px;
    width: 40px;
    text-align: center;
    border: 1px solid #ccc;
  }
`;

const Button = styled.div`
  button {
    background: red;
    padding: 15px 30px;
    border-radius: 25px;
    color: white;
    font-weight: bold;
    margin-top: 20px;
  }
`


export default SinglePost;