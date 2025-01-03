import React from 'react';

import Layout from '../components/Layout';

const AboutPage = () => (
  <Layout fullMenu>
    <article id="main">
      <header>
      </header>
      <p className='center'>
        <h4>Mission</h4>
        Founded in 2023, The Americas is an American-led theatre company, operating out of Sydney, Australia. It holds the distinction of being the only American-led theatre company in Australia. The Americas commitment is to bring diverse, high-standard shows to the beautiful Australian stages.
      </p>
      <p className='center'>
        <h4>Vision</h4>
        To be the premier producer of transformative American theatre in Australia by telling authentic and multifaceted stories of the U.S. experience. The Americas also creates exceptional theatrical experiences by providing an individualistic and intensive growth approach for all artists - cast & crew, alike - honoring a commitment to excellence.
      </p>
      <p className='center'>
        <h4>Values</h4>
        The Americas Theatre Company believes the arts are essential and create a greater understanding of cultural and political differences. We value theatre as a place where people can be accepted regardless of race, creed, orientation, or color.
      </p>
    </article>
  </Layout>
);

export default AboutPage;