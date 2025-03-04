import React from 'react';
import { StaticImage } from 'gatsby-plugin-image'
import Layout from '../components/Layout';
import newsletter from "../../static/L-O-V-E_Program_latest.pdf"

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
          src="../assets/images/new_show.png"
          alt="Summer/Fall Season"
          placeholder="blurred"
          objectFit="contain"
        />
        <StaticImage
          src="../assets/images/megan.png"
          alt="Megan"
          placeholder="blurred"
          objectFit="contain"
        />
        <StaticImage
          src="../assets/images/no_direction_home_with_qr.png"
          alt="No Direction Home"
          placeholder="blurred"
          objectFit="contain"
        />
        <StaticImage
          src="../assets/images/in_convo.png"
          alt="In Convo"
          placeholder="blurred"
          objectFit="contain"
        />
        <StaticImage
          src="../assets/images/this_is_love.png"
          alt="This is Love"
          placeholder="blurred"
          objectFit="contain"
        />
        <StaticImage
          src="../assets/images/the_money_shot.png"
          alt="The Money Shot"
          placeholder="blurred"
          objectFit="contain"
        />
      </span>
    </article>
  </Layout>
);

export default UpcomingShowsPage;