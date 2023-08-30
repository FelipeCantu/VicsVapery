import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import sanityClient from "../client.js";
import styled from 'styled-components'

export default function EliquidProduct() {
  const [eliqData, setEliq] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "eliquidpost"]{
                title,
                slug,
                price,
                mainImage{
                    asset->{
                        _id,
                        url
                    },
                    alt
                }
            }`
      )
      .then((data) => setEliq(data))
      .catch(console.error);
  }, []);
  if (!EliquidProduct) return <div>Loading...</div>

  return (
    <Posts>
      <main>
        <section>
          <div>
            {eliqData &&
              eliqData.map((eliq, index) => (
                <article>
                  <Link to={"/eliq/" + eliq.slug.current} key={eliq.slug.current}>
                    <span
                      key={index}
                    >
                      <img
                        src={eliq.mainImage.asset.url}
                        alt={eliq.mainImage.alt}
                      />
                      <span>
                        <h3>
                          {eliq.title}
                        </h3>
                        <p>${eliq.price}</p>
                      </span>
                    </span>
                  </Link>
                </article>
              ))}
          </div>
        </section>
      </main>
    </Posts>
  );
}

const Posts = styled.div `
justify-content: center;
width: 70%;
height 100%;
margin: auto;
h3 {
  color: black;
}
p{
  color: black;
}
a {
  text-decoration: none;
}
article {
  margin-bottom: 5px;
  display: inline-grid;
  grid-template: 1fr 1fr 1fr;
  margin-right: 25px;
  img {
    width: 100%;
    height: 150px;
  }
}
  img {
    width: 100px;
    height: 100px;
  }
`