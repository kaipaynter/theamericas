import Layout from '../components/Layout';
import lovepressrelease from "../assets/images/L-O-V-E_Gala_Press_release.png"
import meg from "../assets/images/megan.jpg"
import ndh from "../../static/NDH_Program.pdf"
import wslm from "../assets/images/When_She_Loves_Me.png"
import TIL_program from "../../static/L-O-V-E_Program_2025.pdf"
import abis from "../assets/images/ABIS_poster_v2.jpg"
import React from 'react';

const ArchivePage = () => (
  <Layout fullMenu>
    <article id="main">
      <header />
      <p className='align-center'>
        <a
          href={lovepressrelease}
          target="\_blank"
          rel="noopener noreferrer"
        >	L-O-V-E by Kai Paynter & Allan Staples 2024
        </a>
      </p>
      <p className='align-center'>
        <a
          href={TIL_program}
          target="\_blank"
          rel="noopener noreferrer"
        >	This is L-O-V-E by Kai Paynter & Allan Staples 2025
        </a>
      </p>
      <p className='align-center'>
        <a
          href={meg}
          target="\_blank"
          rel="noopener noreferrer"
        >	Megan by Allan Staples 2025
        </a>
      </p>
      <p className='align-center'>
        <a
          href={ndh}
          target="\_blank"
          rel="noopener noreferrer"
        >	No Direction Home by Allan Staples 2025
        </a>
      </p>
      <p className='align-center'>
        <a
          href={wslm}
          target="\_blank"
          rel="noopener noreferrer"
        >	When She Loves Me by Kai Paynter 2025
        </a>
      </p>
      <p className='align-center'>
        <a
          href="https://beartigerprodmgmt.getform.com/lopnk"
          target="\_blank"
          rel="noopener noreferrer"
        >	The Australian Premiere of The Money Shot by Neil LaBute 2025
        </a>
      </p>
      <p className='align-center'>
        <a
          href="https://beartigerprodmgmt.getform.com/9dn98"
          target="\_blank"
          rel="noopener noreferrer"
        >	Amongst The Living 2025
        </a>
      </p>
      <p className='align-center'>
        <a
          href="https://beartigerprodmgmt.getform.com/p5l47"
          target="\_blank"
          rel="noopener noreferrer"
        >	The Australian Premiere of All The Ways to Say I Love You by Neil LaBute 2025
        </a>
      </p>
      <p className='align-center'>
        <a
          href={abis}
          target="\_blank"
          rel="noopener noreferrer"
        >	A Behanding in Spokane by Martin McDonagh
        </a>
      </p>

    </article>
  </Layout>
);

export default ArchivePage;
