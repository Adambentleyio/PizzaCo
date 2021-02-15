import { graphql, Link } from 'gatsby';
import React from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';
import Pagination from '../components/Pagination';

const SliceMasterGrid = styled.div`
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
`;

const PersonGrid = styled.div`
  a {
    text-decoration: none;
  }
  h2 {
    transform: rotate(-2deg);
    text-align: center;
    margin-bottom: -2rem;
    position: relative;
    z-index: 2;
    font-size: 3rem;
  }
  .gatsby-image-wrapper {
    height: 400px;
    object-fit: contain;
  }
  .description {
    background-color: var(--yellow);
    z-index: 2;
    position: relative;
    margin-top: -2rem;
    transform: rotate(2deg);
  }
`;

export default function SlicemastersPage({ data }) {
  const slicemasters = data.slicemasters.nodes;
  console.log(slicemasters);
  return (
    <Pagination>
      <SliceMasterGrid>
        {slicemasters.map((person) => (
          <PersonGrid key={person.id}>
            <Link to={`/slicemasters/${person.slug.current}`}>
              <h2>
                <span className="mark">{person.name}</span>
              </h2>
            </Link>
            <Img fluid={person.image.asset.fluid} />
            <p className="description">{person.description}</p>
          </PersonGrid>
        ))}
      </SliceMasterGrid>
    </Pagination>
  );
}

export const query = graphql`
  query($skip: Int = 0, $pageSize: Int = 4) {
    slicemasters: allSanityPerson(limit: $pageSize, skip: $skip) {
      totalCount
      nodes {
        name
        id
        slug {
          current
        }
        description
        image {
          asset {
            fluid(maxWidth: 410) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  }
`;
