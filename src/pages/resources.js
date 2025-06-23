import React from 'react';
import Layout from '../components/Layout';
import loveprogram2025 from "../../static/L-O-V-E_Program_2025.pdf"
import loveprogram2024 from "../../static/L-O-V-E_Program_2024.pdf"
import atlposter from "../assets/images/atl_new_poster.jpg"
import atwtsily from "../assets/images/atwtsily_synopsis.jpg"
import bis from "../assets/images/bis_synopsis.jpg"
import jfitcdl from "../assets/images/jfitcdl_synopsis.jpg"

const resources = [
  {
    href: loveprogram2025,
    label: "L-O-V-E by Kai Paynter & Allan Staples 2025",
  },
  {
    href: loveprogram2024,
    label: "L-O-V-E by Kai Paynter & Allan Staples 2024",
  },
  {
    href: atlposter,
    label: "Amongst The Living",
  },
  {
    href: atwtsily,
    label: "All the ways to say I love you",
  },
  {
    href: bis,
    label: "Behanding in Spokane",
  },
  {
    href: jfitcdl,
    label: "Johnny Frankie in the Clair De Lune",
  },
];

const ResourcesPage = () => (
  <Layout fullMenu>
    <article id="main">
      <header />
      {resources.map((item, idx) => (
        <p className="align-center" key={idx}>
          <a
            href={item.href}
            target="_blank"
            rel="noreferrer"
          >
            {item.label}
          </a>
        </p>
      ))}
    </article>
  </Layout>
);

export default ResourcesPage;
