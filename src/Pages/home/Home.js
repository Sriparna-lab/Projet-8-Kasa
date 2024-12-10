import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from "../../Components/header/Header";
import Banner from "../../Components/Banner/Banner";
import Footer from "../../Components/Footer/Footer";
import Card from "../../Components/Card/Card";
import Bannerhome from "../../Assets/Banner/Bannerhome.png";

// Properties component
export function Properties({ children }) {
  const [data, setData] = useState([]);
  const [isDataLoading, setDataLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchData() {
      setDataLoading(true);
      try {
        const response = await fetch("http://localhost:8080/api/properties");
        const data = await response.json();
        setData(data);
      } catch (err) {
        console.log(err);
        setError(true);
      } finally {
        setDataLoading(false);
      }
    }
    fetchData();
  }, []);

  return children({ data, isDataLoading, error });
}

// Home component
function Home() {
  return (
    <Properties>
      {({ data, isDataLoading, error }) => (
        <div>
          <Header />
          <main>
            <Banner
              texte="Chez vous, partout et ailleurs"
              image={Bannerhome}
              className="banner__sombre"
            />
            <div className="home_gallery">
              {isDataLoading ? (
                <p>Loading...</p>
              ) : error ? (
                <p>Error loading data</p>
              ) : (
                data.map((appart, id) => (
                  <article key={id}>
                    <Link to={`/logement/${appart.id}`}>
                      <Card image={appart.cover} title={appart.title} />
                    </Link>
                  </article>
                ))
              )}
            </div>
          </main>
          <Footer />
        </div>
      )}
    </Properties>
  );
}


 







export default Home;

//async function Housing() {
  //const reponse = await fetch("http://localhost:8080/api/properties");
 // const house = await reponse.json();
 // console.log(house);
//}
//Housing()