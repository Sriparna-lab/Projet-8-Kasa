import React from 'react'
import Header from "../../Components/header/Header";
import Banner from "../../Components/Banner/Banner";
import Footer from "../../Components/Footer/Footer";
import Collapse from "../../Components/Collapse/Collapse";
import BannerAbout from "../../Assets/Banner/BannerAbout.png";
import CollapseData from "../../Data/collapses.json";

function About() {
    return (
        <div>
            <Header />
            <main>
                <Banner 
                    image={BannerAbout} 
                    className= "banner__about"/>
                <div className="collapse">
                    <div className="collapse__dropdown">
                        {CollapseData.map((item) => {
                    return (
                        <div key={item.id}>
                        <Collapse content={item.content} title={item.title} />
                    </div>
                );
            })}
            </div>
        </div>
            </main>
            <Footer />
        </div>
    )
}
export default About