import React from 'react';
import { StaticImage } from 'gatsby-plugin-image'
import Layout from '../components/Layout';
import newsletter from "../../static/The_Americas_Newsletter_April_2025.pdf"
import moneyshot from "../../static/The_Money_Shot_MEDIA_KIT.pdf"

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

        {/* The Money Shot */}
        <a href={moneyshot} target='\blank'>
          <StaticImage
            src="../assets/images/money_shot_poster_qr_v2.jpg"
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
