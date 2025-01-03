import React from 'react';
import { StaticImage } from 'gatsby-plugin-image'
import Layout from '../components/Layout';
import newsletter from "../../static/The_Americas_Newsletter_Jan_2025.pdf"

const UpcomingShowsPage = () => (
  <Layout fullMenu>
    <article id="main">
      <header />
      <span className="image fit">
        <p className='align-center'>
          <a
            href={newsletter}
            target="\_blank"
          >	Click here for our newsletter
          </a>
        </p>
        <StaticImage
          src="../assets/images/new_show_3.png"
          alt="Summer/Fall Season"
          placeholder="blurred"
          objectFit="contain"
        />
        <StaticImage
          src="../assets/images/new_show_1.png"
          alt="Megan"
          placeholder="blurred"
          objectFit="contain"
        />
        <StaticImage
          src="../assets/images/new_show_4.png"
          alt="No Direction Home"
          placeholder="blurred"
          objectFit="contain"
        />
      </span>
    </article>
  </Layout>
);

export default UpcomingShowsPage;