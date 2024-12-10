import React from "react"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import "./Style/app.scss";
import Home from "./Pages/home/Home";
import About from "./Pages/about/About";
import NoPage from "./Pages/Error/NoPage";


function Display() {
    return (
        <React.StrictMode>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="*" element={<NoPage />} />
                </Routes>
            </Router>
        </React.StrictMode>
    )
}
export default Display




