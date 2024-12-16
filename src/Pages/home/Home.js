import React from 'react';
import { useFetch } from "../../utils/useFetch";
import { Link } from 'react-router-dom';
import Header from "../../Components/header/Header";
import Banner from "../../Components/Banner/Banner";
import Footer from "../../Components/Footer/Footer";
import Card from "../../Components/Card/Card";
import Bannerhome from "../../Assets/Banner/Bannerhome.png";



// Home component
function Home() {
  const data = useFetch('http://localhost:8080/api/properties');
  return (
    <div>
      <Header />
      <main>
        <Banner
          texte="Chez vous, partout et ailleurs"
          image={Bannerhome}
          className="banner__sombre"
        />
        <div className="home_gallery">
          {data.map((appart, id) => (
            <article key={id}>
              <Link to={`/logement/${appart.id}`}>
                <Card image={appart.cover} title={appart.title} />
              </Link>
            </article>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Home;






