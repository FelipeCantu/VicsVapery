import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import sanityClient from "../client.js";
import styled from 'styled-components'

export default function DisposablesProduct() {
  const [dispData, setDisp] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "disposablepost"]{
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
      .then((data) => setDisp(data))
      .catch(console.error);
  }, []);
  if (!DisposablesProduct) return <div>Loading...</div>

  return (
    <Posts>
      <main>
        <section>
          <div>
            {dispData &&
              dispData.map((disp, index) => (
                <article>
                  <Link to={"/disp/" + disp.slug.current} key={disp.slug.current}>
                    <span
                      key={index}
                    >
                      <img
                        src={disp.mainImage.asset.url}
                        alt={disp.mainImage.alt}
                      />
                      <span>
                        <h3>
                          {disp.title}
                        </h3>
                        <p>${disp.price}</p>
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
  img {
    width: 100px;
    height: 100px;
  }
`