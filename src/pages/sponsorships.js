import React from 'react';
import { StaticImage } from 'gatsby-plugin-image'
import Layout from '../components/Layout';

const SponsorshipsPage = () => (
  <Layout fullMenu>
    <article id="main">
    <header />
      <span className="image fit">
        <StaticImage
          src="../assets/images/sponsorships.png"
          alt="The Americas Sponsorships Info"
          placeholder="blurred"
          objectFit="contain"
        />
      </span>
    </article>
  </Layout>
);

export default SponsorshipsPage;