import React from "react";
import ErrorPage from "../../Components/Error/ErrorPage";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/header/Header";

const NoPage = () => {
    return (
    <div>
        <Header />
        <main>
            <ErrorPage />
        </main>
        <Footer />
    </div>
   );
}
export default NoPage;