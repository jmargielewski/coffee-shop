import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import BackgroundSection from '../components/BackgroundSection';
import SEO from '../components/seo';
import Info from '../components/Home';

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" keywords={['gatsby', 'application', 'react']} />
    <BackgroundSection
      img={data.img.childImageSharp.fluid}
      title="coffee for you"
      styleClass="default-background"
    />
    <Info />
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
  }
`;

export default IndexPage;
