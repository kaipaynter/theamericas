import React from 'react';
import Layout from '../components/Layout';
import loveprogram2025 from "../../static/L-O-V-E_Program_2025.pdf"
import loveprogram2024 from "../../static/L-O-V-E_Program_2024.pdf"
import atlposter from "../assets/images/ATL_NEW_POSTER.jpg"

const ResourcesPage = () => (
    <Layout fullMenu>
        <article id="main">
            <header />
            <p className='align-center'>
                <a
                    href={loveprogram2025}
                    target="\_blank"
                >	L-O-V-E by Kai Paynter & Allan Staples 2025
                </a>
            </p>
            <p className='align-center'>
                <a
                    href={loveprogram2024}
                    target="\_blank"
                >	L-O-V-E by Kai Paynter & Allan Staples 2024
                </a>
            </p>
             <p className='align-center'>
                <a
                    href={atlposter}
                    target="\_blank"
                >	Amongst The Living
                </a>
            </p>
        </article>
    </Layout>
);

export default ResourcesPage;
