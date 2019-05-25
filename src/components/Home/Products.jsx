import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Product from './Product';
import Title from '../Title';

const getProducts = graphql`
  {
    products: allContentfulCoffeeProduct {
      edges {
        node {
          id
          title
          price
          image {
            fluid(maxHeight: 426) {
              src
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`;

const Products = () => (
  <StaticQuery
    query={getProducts}
    render={data => (
      <section className="py-5">
        <div className="container">
          <Title title="our products" />
          <div className="row">
            {data.products.edges.map(({ node: product }) => (
              <Product key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    )}
  />
);

export default Products;
