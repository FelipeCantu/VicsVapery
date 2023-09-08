import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import sanityClient from "../client.js";
import styled from 'styled-components'
import ReactPaginate from 'react-paginate';

export default function EliquidProduct() {
  const [eliqData, setEliq] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const postsPerPage = 4; // Number of posts to display per page

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

  // Calculate the current page posts
  const indexOfLastPost = (currentPage + 1) * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = eliqData?.slice(indexOfFirstPost, indexOfLastPost);

  // Handle page change
  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  if (!eliqData) return <div>Loading...</div>;

  return (
    <Posts>
      <main>
        <section>
          <div>
            {currentPosts &&
              currentPosts.map((eliq, index) => (
                <article key={index}>
                  <Link to={"/eliq/" + eliq.slug.current}>
                    <span>
                      <img
                        src={eliq.mainImage.asset.url}
                        alt={eliq.mainImage.alt}
                      />
                      <span>
                        <h3>{eliq.title}</h3>
                        <p>${eliq.price}</p>
                      </span>
                    </span>
                  </Link>
                </article>
              ))}
          </div>
        </section>
        <ReactPaginate
          previousLabel={'Previous'}
          nextLabel={'Next'}
          pageCount={Math.ceil(eliqData.length / postsPerPage)}
          onPageChange={handlePageChange}
          containerClassName={'pagination'}
          activeClassName={'active'}
        />
      </main>
    </Posts>
  );
}

const Posts = styled.div`
  justify-content: center;
  width: 70%;
  height: 100%;
  margin: auto;
  h3 {
    color: black;
  }
  p {
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
  .pagination {
    display: flex;
    justify-content: center;
    margin-top: 20px;
  }
  .pagination a {
    padding: 5px;
  }
  .pagination .active a {
    background-color: #007bff;
    color: white;
  }
`;
