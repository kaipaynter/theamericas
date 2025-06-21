import Layout from '../components/Layout';
import lovepressrelease from "../assets/images/L-O-V-E_Gala_Press_release.png"
import meg from "../assets/images/MEG.jpg"
import ndh from "../../static/NDH_Program.pdf"
import wslm from "../assets/images/When_She_Loves_Me.png"
import TIL_program from "../../static/L-O-V-E_Program_2025.pdf"
import React from 'react';

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
      <p className='align-center'>
        <a
          href={meg}
          target="\_blank"
        >	Megan by Allan Staples 2025
        </a>
      </p>
      <p className='align-center'>
        <a
          href={ndh}
          target="\_blank"
        >	No Direction Home by Allan Staples 2025
        </a>
      </p>
      <p className='align-center'>
        <a
          href={wslm}
          target="\_blank"
        >	When She Loves Me by Kai Paynter 2025
        </a>
      </p>
      <p className='align-center'>
        <a
          href="https://beartigerprodmgmt.getform.com/lopnk"
          target="\_blank"
        >	The Australian Premiere of The Money Shot by Neil LaBute 2025
        </a>
      </p>
    </article>
  </Layout>
);

export default ArchivePage;
