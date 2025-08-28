import React from 'react';
import Layout from '../components/Layout';
import atwtsily from "../assets/images/atwtsily_synopsis.jpg"
import bis from "../assets/images/bis_synopsis.jpg"
import jfitcdl from "../assets/images/jfitcdl_synopsis.jpg"
import atwtsilyPoster from "../assets/images/ABIS_poster.jpg"
import bisPoster from "../assets/images/bis.jpg"
import jfitcdlPoster from "../assets/images/jfitcdl.jpg"
import titlecard from "../assets/images/new_show.png"


const shows = [
  {
    href: "",
    imgSrc: titlecard,
    alt: "Title Card for Upcoming Shows",
  },
  {
    href: "https://beartigerprodmgmt.getform.com/dxjpk",
    imgSrc: atwtsilyPoster,
    alt: "All the ways to say I love you",
  },
  {
    href: bis,
    imgSrc: bisPoster,
    alt: "Behanding in Spokane",
  },
  {
    href: jfitcdl,
    imgSrc: jfitcdlPoster,
    alt: "Johnny Frankie in the Clair De Lune",
  },
];

const UpcomingShowsPage = () => (
  <Layout fullMenu>
    <article id="main">
      <header />
      <span className="image fit">

        <ul style={{ listStyle: "none", padding: 0 }}>
          {shows.map((show, idx) => (
            <li key={idx} style={{ marginBottom: "2rem" }}>
              <a href={show.href} target="_blank" rel="noreferrer">
                <img
                  src={show.imgSrc}
                  alt={show.alt}
                  style={{ width: "100%", height: "auto", objectFit: "contain" }}
                />
              </a>
            </li>
          ))}
        </ul>
      </span>
    </article>
  </Layout>
);

export default UpcomingShowsPage;
