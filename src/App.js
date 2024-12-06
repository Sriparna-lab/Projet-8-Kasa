import React from "react"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import "./Style/app.scss";
import Header from "./Pages/home/Home";
import About from "./Pages/about/About";

function Display() {
    return (
        <React.StrictMode>
            <Router>
                <Routes>
                    <Route path="/"header element={<Header />} />
                    <Route path="/about" element={<About />} />
                </Routes>
            </Router>
        </React.StrictMode>
    )
}
export default Display




