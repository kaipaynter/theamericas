import React from 'react';
import { StaticImage } from 'gatsby-plugin-image'
import Layout from '../components/Layout';
import program from "../../static/L-O-V-E_Program.pdf"

const UpcomingShowsPage = () => (
  <Layout fullMenu>
    <article id="main">
      <header />
      <span className="image fit">
        <p className='align-center'>
          <a
            href={program}
            target="\_blank"
          >	Click here for our virtual program
          </a>
        </p>
        <StaticImage
          src="../assets/images/L-O-V-E_Gala_Press_release.png"
          alt="L-O-V-E Gala Press Release"
          placeholder="blurred"
          objectFit="contain"
        />
      </span>
    </article>
  </Layout>
);

export default UpcomingShowsPage;