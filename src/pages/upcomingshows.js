import React from 'react';
import { StaticImage } from 'gatsby-plugin-image'
import Layout from '../components/Layout';

const UpcomingShowsPage = () => (
  <Layout fullMenu>
    <article id="main">
      <header />
      <span className="image fit">
        <p className='align-center'>
          <a
            href='/virtualprogram'
          >	Click here for our virtual program
          </a>
        </p>
        <StaticImage
          src="../assets/images/L-O-V-E_Gala_Press_release_v2.png"
          alt="L-O-V-E Gala Press Release 1"
          placeholder="blurred"
          objectFit="contain"
        />
      </span>
    </article>
  </Layout>
);

export default UpcomingShowsPage;