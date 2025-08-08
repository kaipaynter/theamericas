import React from 'react';
import Layout from '../components/Layout';
import qr from "../assets/images/virtual_program_QR.png"
import ms_program from "../../static/The_Money_Shot_Program.pdf"
import atl_program from "../../static/AmongstTheLivingProgram.pdf"
import atwtsily_program from "../../static/ATWTSILY_Program.pdf"

const VirtualProgramPage = () => (
  <Layout fullMenu>
    <article id="main">
      <header />
      <p className='align-center'>

        <img
          src={qr}
          alt="L-O-V-E Program QR Code"
          width="300"
          height="300"
        />
      </p>

      <p className='align-center'>
              <a
                href={ms_program}
                target="\_blank"
              >	The Money Shot
              </a>
            </p>

      <p className='align-center'>
              <a
                href={atl_program}
                target="\_blank"
              >	Amongst the Living
              </a>
            </p>

      <p className='align-center'>
              <a
                href={atwtsily_program}
                target="\_blank"
              >	All The Ways To Say I Love You
              </a>
            </p>

    </article>
  </Layout>
);

export default VirtualProgramPage;
