import React from 'react';
import { StaticImage } from 'gatsby-plugin-image'
import Layout from '../components/Layout';
import moneyshot from "../../static/The_Money_Shot_MEDIA_KIT.pdf"

const UpcomingShowsPage = () => (
  <Layout fullMenu>
    <article id="main">
      <header />
      <span className="image fit">
        

        {/* The Money Shot */}
        <a href={moneyshot} target='\blank'>
          <StaticImage
            src="../assets/images/money_shot_poster_qr_v2.jpg"
            alt="The Money Shot"
            placeholder="blurred"
            objectFit="contain"
          />
        </a>

        {/* The Money Shot */}
        <a href="https://www.factorytheatre.com.au/event/the-money-shot/" target='\blank'>
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
