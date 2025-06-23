import React from 'react';
import Layout from '../components/Layout';
import lovepressrelease from "../assets/images/L-O-V-E_Gala_Press_release.png"
import meg from "../assets/images/megan.jpg"
import ndh from "../../static/NDH_Program.pdf"
import wslm from "../assets/images/When_She_Loves_Me.png"
import TIL_program from "../../static/L-O-V-E_Program_2025.pdf"

const archiveLinks = [
  {
    href: lovepressrelease,
    label: "L-O-V-E by Kai Paynter & Allan Staples 2024",
  },
  {
    href: TIL_program,
    label: "This is L-O-V-E by Kai Paynter & Allan Staples 2025",
  },
  {
    href: meg,
    label: "Megan by Allan Staples 2025",
  },
  {
    href: ndh,
    label: "No Direction Home by Allan Staples 2025",
  },
  {
    href: wslm,
    label: "When She Loves Me by Kai Paynter 2025",
  },
  {
    href: "https://beartigerprodmgmt.getform.com/lopnk",
    label: "The Australian Premiere of The Money Shot by Neil LaBute 2025",
  },
];

const ArchivePage = () => (
  <Layout fullMenu>
    <article id="main">
      <header />
      {archiveLinks.map((item, idx) => (
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

export default ArchivePage;
