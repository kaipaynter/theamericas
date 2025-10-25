import React from 'react';
import Layout from '../components/Layout';
import titlecard from "../assets/images/new_show.png"
import iins from "../../static/IINS_Legs.jpeg"


const shows = [
  {
    href: "",
    imgSrc: titlecard,
    alt: "Title Card for Upcoming Shows",
  },
  {
    href: "https://ifineededsomeone.carrd.co",
    imgSrc: iins,
    alt: "If I Needed Someone",
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
