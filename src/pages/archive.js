import React from 'react';
import Layout from '../components/Layout';
import lovepressrelease from "../assets/images/L-O-V-E_Gala_Press_release.png"
import TIL_program from "../../static/L-O-V-E_Program_2025.pdf"

const ArchivePage = () => (
  <Layout fullMenu>
    <article id="main">
      <header />
      <p className='align-center'>
        <a
          href={lovepressrelease}
          target="\_blank"
        >	L-O-V-E by Kai Paynter & Allan Staples 2024
        </a>
      </p>
      <p className='align-center'>
        <a
          href={TIL_program}
          target="\_blank"
        >	This is L-O-V-E by Kai Paynter & Allan Staples 2025
        </a>
      </p>
    </article>
  </Layout>
);

export default ArchivePage;
