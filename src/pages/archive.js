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
          href="https://beartigerprodmgmt.getform.com/dxjpk"
          target="\_blank"
          rel="noopener noreferrer"
        >	A Behanding in Spokane by Martin McDonagh
        </a>
      </p>
      <p className='align-center'>
        <a
          href="https://diversityaustraliamagazine.com/2025/11/27/the-journey-and-face-behind-australias-first-american-led-theatre-company-interview-w-kai-paynter/"
          target="\_blank"
          rel="noopener noreferrer"
        >	The journey and face behind Australia’s first American-led theatre company: Interview w/ Kai Paynter
        </a>
      </p>
      <p className='align-center'>
        <a
          href="https://www.artshub.com.au/news/reviews/theatre-review-short-sweet-sydney-opening-week-heat-1-2025-2776281/"
          target="\_blank"
          rel="noopener noreferrer"
        >	Megan by Allan Staples
        </a>
      </p>
      <p className='align-center'>
        <a
          href="https://theatrereds.com/2025/03/10/this-is-l-o-v-e/"
          target="\_blank"
          rel="noopener noreferrer"
        >	This Is L-O-V-E Returns to Sydney
        </a>
      </p>
      <p className='align-center'>
        <a
          href="https://diversityaustraliamagazine.com/2024/08/29/l-o-v-e-opens-at-kxt-officially-launching-australias-first-american-led-theatre-company-the-americas/"
          target="\_blank"
          rel="noopener noreferrer"
        >	Touchdown: The Americas Launches in Australia
        </a>
      </p>
    </article>
  </Layout>
);

export default ArchivePage;
