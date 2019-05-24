import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import BackgroundSection from '../components/BackgroundSection';
import SEO from '../components/seo';
import Info from '../components/Home';
import Menu from '../components/Menu';

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" keywords={['gatsby', 'application', 'react']} />
    <BackgroundSection
      img={data.img.childImageSharp.fluid}
      title="coffee for you"
      styleClass="default-background"
    />
    <Info />
    <Menu items={data.menu} />
  </Layout>
);

export const query = graphql`
  {
    img: file(relativePath: { eq: "default-background.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    menu: allContentfulCoffeeItem {
      edges {
        node {
          id
          title
          description {
            description
          }
          price
          category
          image {
            fixed(width: 50, height: 50) {
              ...GatsbyContentfulFixed_tracedSVG
            }
          }
        }
      }
    }
  }
`;

export default IndexPage;
