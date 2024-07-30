import React from 'react';
import Layout from '../components/Layout';
import qr from "../assets/images/program_qr_code.png"

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

    </article>
  </Layout>
);

export default VirtualProgramPage;