import React from 'react';
import Layout from '../components/Layout';
import qr from "../assets/images/virtual_program_QR.png"
import ms_program from "../../static/The _Money_Shot_Program.pdf"

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

    </article>
  </Layout>
);

export default VirtualProgramPage;