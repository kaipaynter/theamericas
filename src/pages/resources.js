import React from 'react';
import Layout from '../components/Layout';
import loveprogram2025 from "../../static/L-O-V-E_Program_2025.pdf"
import loveprogram2024 from "../../static/L-O-V-E_Program_2024.pdf"
import winterspringmediakit from "../../static/2025_Winter_Spring_Media_Kit.pdf"
import themoneyshotmediakit from "../../static/The_Money_Shot_MEDIA_KIT.pdf"
import atlposter from "../assets/images/atl_poster_latest.jpg"
import atwtsily from "../assets/images/atwtsily_synopsis.jpg"
import bis from "../assets/images/bis_synopsis.jpg"
import jfitcdl from "../assets/images/jfitcdl_synopsis.jpg"
import atwtsilyposter from "../../static/ATWTSILY_Poster_All_Info_Blue.pdf"

const ResourcesPage = () => (
    <Layout fullMenu>
        <article id="main">
            <header />
            <p className='align-center'>
                <a
                    href={winterspringmediakit}
                    target="\_blank"
                >	2025 Winter Spring Media Kit
                </a>
            </p>
            <p className='align-center'>
                <a
                    href={atwtsilyposter}
                    target="\_blank"
                >	All the ways to say I love you poster
                </a>
            </p>
            <p className='align-center'>
                <a
                    href={themoneyshotmediakit}
                    target="\_blank"
                >	The Money Shot Media Kit
                </a>
            </p>
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
            <p className='align-center'>
                <a
                    href={atwtsily}
                    target="\_blank"
                >	All the ways to say I love you
                </a>
            </p>
            <p className='align-center'>
                <a
                    href={bis}
                    target="\_blank"
                >	Behanding in Spokane
                </a>
            </p>
            <p className='align-center'>
                <a
                    href={jfitcdl}
                    target="\_blank"
                >	Johnny Frankie in the Clair De Lune
                </a>
            </p>
        </article>
    </Layout>
);

export default ResourcesPage;
