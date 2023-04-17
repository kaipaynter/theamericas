import React from 'react';

import Layout from '../components/Layout';

const AboutPage = () => (
  <Layout fullMenu>
    <article id="main">
      <header>
        <h2>About</h2>
      </header>
      <p className='center'>
        Founded by Kai Paynter in January 2023, The Americas is an American-led (Canada, US, & South America) theatre company, operating out of Sydney, Australia.
        The Americas hold the distinction of being the only American professional theatre company, (crew, talent, and works) in Australia.
        Under the leadership of Producing Artistic Director, Kirk Carrington-Hastings and Managing Director, Kai Paynter, The America's commitment is to bring diverse, high-standard, American shows to the beautiful Syndey stages.
      </p>
      <p className='center'>
        <h4>Mission</h4>

        The Americas Theatre Company creates exceptional theatrical experiences by using the arts to articulate messages that inspire freedom and hope - the cornerstones of American culture.
      </p>
      <p className='center'>
        <h4>Values</h4>

        The Americas Theatre Company believes the arts are essential because they foster the hero within, create a greater understanding of cultural and political differences and continue to provide a forum in which the larger community can gather live, in-person, and even online. We value theatre as a place where people can be accepted regardless of race, creed, orientation, or color.
      </p>

    </article>
  </Layout>
);

export default AboutPage;