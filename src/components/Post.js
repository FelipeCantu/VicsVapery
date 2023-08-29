import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import sanityClient from "../client.js";
import styled from 'styled-components'

export default function Post() {
  const [postData, setPost] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "post"]{
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
      .then((data) => setPost(data))
      .catch(console.error);
  }, []);

  return (
    <Posts>
      <main>
        <section>
          <div>
            {postData &&
              postData.map((post, index) => (
                <article>
                  <Link to={"/post/" + post.slug.current} key={post.slug.current}>
                    <span
                      key={index}
                    >
                      <img
                        src={post.mainImage.asset.url}
                        alt={post.mainImage.alt}
                      />
                      <span>
                        <h3>
                          {post.title}
                        </h3>
                        <p>${post.price}</p>
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
  background: blue;
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
    background: purple;
    margin-bottom: 5px;
    display: inline-grid;
    grid-template: 1fr 1fr 1fr;
    margin-right: 25px;
    img {
      width: 100%;
      height: 150px;
    }
  }
`