import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import LandingPage from "./components/LandingPage.jsx";
import InvestmentSimulator from "./components/InvestmentSimulator.jsx";
import ImpressumPage from "./components/ImpressumPage.jsx";
import DatenschutzPage from "./components/DatenschutzPage.jsx";
import ÜberUnsPage from "./components/ÜberUnsPage.jsx";
import JobPage from "./components/JobPage.jsx";
import Bewerbungsportal from "./components/Bewerbungsportal.jsx";
import "./App.css";

export default function App() {
    const [showSplash, setShowSplash] = useState(true);
    const [showPopup, setShowPopup] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setShowSplash(false);
        }, 2000); // Splash-Screen wird für 2 Sekunden angezeigt
    }, []);

    const togglePopup = () => {
        setShowPopup(!showPopup);
    };

    return (
        <>
            {showSplash ? (
                <div id="splash-screen">
                    <h1 className="glitch-text">Loading...</h1>
                    <div className="loading-icon"></div>
                </div>
            ) : (
                <Router>
                    <Routes>
                        <Route path="/" element={<LandingPage />} />
                        <Route path="/simulator" element={<InvestmentSimulator />} />
                        <Route path="/impressum" element={<ImpressumPage />} />
                        <Route path="/datenschutz" element={<DatenschutzPage />} />
                        <Route path="/ueber-uns" element={<ÜberUnsPage />} />
                        <Route path="/jobs" element={<JobPage />} />
                        <Route path="/bewerbung" element={<Bewerbungsportal />} />
                    </Routes>
                </Router>
            )}
        </>
    );
}