import React from 'react';
import { StaticImage } from 'gatsby-plugin-image'
import Layout from '../components/Layout';


const UpcomingShowsPage = () => (
  <Layout fullMenu>
    <article id="main">
      <header />
      <span className="image fit">
        

        {/* Title Card */}

          <StaticImage
            src="../assets/images/new_show.png"
            alt="Title Card for Upcoming Shows"
            placeholder="blurred"
            objectFit="contain"
          />

        {/* Amongst the living */}
        <a href="https://beartigerprodmgmt.getform.com/9dn98" target='\blank'>
          <StaticImage
            src="../assets/images/atl_new_poster.jpg"
            alt="Amongst The Living"
            placeholder="blurred"
            objectFit="contain"
          />
        </a>

        {/* All the ways to say I love you */}
        <a href="https://beartigerprodmgmt.getform.com/9dn98" target='\blank'>
          <StaticImage
            src="../assets/images/atwtsily.jpg"
            alt="All the ways to say I love you"
            placeholder="blurred"
            objectFit="contain"
          />
        </a>

        {/* Behanding in Spokane */}
        <a href="https://beartigerprodmgmt.getform.com/9dn98" target='\blank'>
          <StaticImage
            src="../assets/images/bis.jpg"
            alt="Behanding in Spokane"
            placeholder="blurred"
            objectFit="contain"
          />
        </a>

        {/* Johnny Frankie in the Clair De Lune */}
        <a href="https://beartigerprodmgmt.getform.com/9dn98" target='\blank'>
          <StaticImage
            src="../assets/images/jfitcdl.jpg"
            alt="Johnny Frankie in the Clair De Lune"
            placeholder="blurred"
            objectFit="contain"
          />
        </a>
      </span>
    </article>
  </Layout>
);

export default UpcomingShowsPage;
