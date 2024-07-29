import React from 'react';
import Layout from '../components/Layout';
import program from "../../static/L-O-V-E_Program.pdf"
import qr from "../assets/images/pic01.jpg"

const VirtualProgramPage = () => (
  <Layout fullMenu>
    <article id="main">
      <header />
      <p className='align-center'>
        <object
          data={program}
          type="application/pdf"
          frameborder="1"
          scrolling="auto"
          height="800"
          width="900"
          alt="L-O-V-E Program"
        >
          <embed src={program} type="application/pdf" />
        </object>
      </p>
      <p className='align-center'>
        QR code for Program PDF
      </p>
      <p className='align-center'>

        <img
          src={qr}
          alt="L-O-V-E Gala Press Release 1"
          width="300"
          height="300"
        />
      </p>

    </article>
  </Layout>
);

export default VirtualProgramPage;