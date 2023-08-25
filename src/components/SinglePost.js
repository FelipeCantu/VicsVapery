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

export default function SinglePost() {
  const [singlePost, setSinglePost] = useState(null);
  const { slug } = useParams();

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
        </article>
      </main>
    </Single>
  );
}

const Load = styled.div`

`

const Single = styled.div`
  img {
    width: 200px;
    height: 200px;
  }
`