import React from 'react';
import { StaticImage } from 'gatsby-plugin-image'

import Layout from '../components/Layout';

const SubmissionsPage = () => (
  <Layout fullMenu>
    <article id="main">
      <header />
      <span className="image fit">
        <StaticImage
          src="../assets/images/The_Americas_Submission_Info.jpg"
          alt="The Americas Submission Info"
          placeholder="blurred"
          objectFit="contain"
        />
      </span>
    </article>
  </Layout>
);

export default SubmissionsPage;