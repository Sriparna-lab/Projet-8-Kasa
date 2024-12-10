import React from 'react'
import Header from "../../Components/header/Header";
import Banner from "../../Components/Banner/Banner";
import Footer from "../../Components/Footer/Footer";
import BannerAbout from "../../Assets/Banner/BannerAbout.png";

function About() {
    return (
        <div>
            <Header />
            <main>
                <Banner 
                image={BannerAbout} 
                className= "banner__about"/>
            </main>
            <Footer />
        </div>
    )
}
export default About