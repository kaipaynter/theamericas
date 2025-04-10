import React from 'react';
import { StaticImage } from 'gatsby-plugin-image'
import Layout from '../components/Layout';
import newsletter from "../../static/The_Americas_Newsletter_Jan_2025.pdf"
import wslm from "../assets/images/When_She_Loves_Me.png"
import megan from "../assets/images/megan.jpg"
import convo from "../assets/images/CONVO_poster.jpg"
import til from "../assets/images/TIL_poster.png"
import ndh from "../assets/images/ndh.jpg"
import moneyshot from "../assets/images/money_shot_poster_qr_v2.jpg"

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

        {/* When She Loves Me */}
        <a href={wslm} target='\blank'>
          <StaticImage
            src="../assets/images/new_show.png"
            alt="Summer/Fall Season"
            placeholder="blurred"
            objectFit="contain"
          />
        </a>

        {/* Megan */}
        <a href={megan} target='\blank'>
          <StaticImage
            src="../assets/images/megan.png"
            alt="Megan"
            placeholder="blurred"
            objectFit="contain"
          />
        </a>

        {/* No direction home */}
        <a href={ndh} target='\blank'>
          <StaticImage
            src="../assets/images/no_direction_home_with_qr.png"
            alt="No Direction Home"
            placeholder="blurred"
            objectFit="contain"
          />
        </a>

        {/* In Convo */}
        <a href={convo} target='\blank'>
          <StaticImage
            src="../assets/images/in_convo.png"
            alt="In Convo"
            placeholder="blurred"
            objectFit="contain"
          />
        </a>

        {/* This is Love */}
        <a href={til} target='\blank'>
          <StaticImage
            src="../assets/images/this_is_love.png"
            alt="This is Love"
            placeholder="blurred"
            objectFit="contain"
          />
        </a>

        {/* The Money Shot */}
        <a href={moneyshot} target='\blank'>
          <StaticImage
            src="../assets/images/the_money_shot.png"
            alt="The Money Shot"
            placeholder="blurred"
            objectFit="contain"
          />
        </a>
      </span>
    </article>
  </Layout>
);

export default UpcomingShowsPage;
