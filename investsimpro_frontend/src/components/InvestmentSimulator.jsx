import { useEffect, useState, useRef } from "react";
import "./InvestmentSimulator.css";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

export default function InvestmentSimulator({ onBack }) {
    const [selectedInvestments, setSelectedInvestments] = useState([]);
    const [simulationCount, setSimulationCount] = useState("");
    const [investmentAmounts, setInvestmentAmounts] = useState({});
    const [annualContributions, setAnnualContributions] = useState({});
    const [investmentPeriod, setInvestmentPeriod] = useState("");
    const [menuOpen, setMenuOpen] = useState(false);
    const [loading, setLoading] = useState(true);
    const [musicPlaying, setMusicPlaying] = useState(true);
    const audioRef = useRef(null);

    const investmentOptions = [
        { name: "Aktien", risk: "Hoch", return: "8-12%" },
        { name: "Anleihen", risk: "Niedrig", return: "2-5%" },
        { name: "Immobilien", risk: "Mittel", return: "4-7%" },
        { name: "Rohstoffe", risk: "Hoch", return: "5-10%" },
    ];

    const toggleInvestment = (name) => {
        setSelectedInvestments((prev) =>
            prev.includes(name) ? prev.filter((item) => item !== name) : [...prev, name]
        );
    };

    const handleInvestmentChange = (name, value) => {
        setInvestmentAmounts((prev) => ({ ...prev, [name]: parseFloat(value) || "" }));
    };

    const handleContributionChange = (name, value) => {
        setAnnualContributions((prev) => ({ ...prev, [name]: parseFloat(value) || "" }));
    };

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 3000);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.play().then(() => {
                audioRef.current.volume = 0.4;
            }).catch((error) => console.error("Musik kann nicht automatisch abgespielt werden:", error));
        }
    }, []);

    const toggleMusic = () => {
        if (audioRef.current) {
            if (musicPlaying) {
                audioRef.current.pause();
            } else {
                audioRef.current.play();
            }
            setMusicPlaying(!musicPlaying);
        }
    };

    const portfolioData = selectedInvestments.map((investment) => ({
        name: investment,
        value: investmentAmounts[investment] ? parseFloat(investmentAmounts[investment]) : 0,
    }));

    const colors = ["#ffcc00", "#ff6600", "#33cc33", "#0099ff"];

    if (loading) {
        return (
            <div id="splash-screen">
                <h1 className="glitch-text">Loading...</h1>
                <div className="loading-icon"></div>
            </div>
        );
    }

    return (
        <div className="page-container">
            <nav className="navbar">
                <div className="nav-title">
                    <span className="highlighted-title" onClick={onBack}>InvestSim Pro</span>
                </div>
                <div className="menu-container">
                    <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)}>☰</button>
                    {menuOpen && (
                        <div className="menu-dropdown">
                            <a href="/">🏠 Homepage</a>
                            <a href="/memepage">😂 Memepage</a>
                            <a href="/simulator">📊 InvestSim Pro</a>
                            <a href="/impressum">📜 Impressum</a>
                        </div>
                    )}
                </div>
            </nav>

            <div className="investment-layout">
                <div className="investment-container">
                    <h1 className="quote">„Wer den Verlust fürchtet, der kann keine Gewinne machen.“ <br /> - George Soros</h1>

                    <div className="investment-options">
                        {investmentOptions.map(({ name, risk, return: rendite }) => (
                            <button
                                key={name}
                                className={`investment-card ${selectedInvestments.includes(name) ? "selected" : ""}`}
                                onClick={() => toggleInvestment(name)}
                            >
                                <h2 className="investment-title">{name}</h2>
                                <p className="investment-info">Risiko: {risk}</p>
                                <p className="investment-info">Erwartete Rendite: {rendite}</p>
                            </button>
                        ))}
                    </div>

                    <p className="tax-info">Steuern werden in der Berechnung nicht berücksichtigt.</p>

                    <div className="input-container">
                        <label className="label-title">Wie viele Simulationen sollen durchgeführt werden?</label>
                        <p className="small-info">Wählen Sie die Anzahl der Durchläufe zur besseren Analyse von Schwankungen.</p>
                        <div className="spacer"></div>
                        <input
                            type="number"
                            min="1"
                            value={simulationCount || ""}
                            onChange={(e) => setSimulationCount(Number(e.target.value))}
                            className="simulation-input"
                        />
                    </div>

                    {simulationCount > 0 && selectedInvestments.length > 0 && (
                        <>
                            <div className="investment-input-group">
                                <label className="label-title">Laufzeit (Jahre):</label>
                                <input
                                    type="number"
                                    min="1"
                                    value={investmentPeriod}
                                    onChange={(e) => setInvestmentPeriod(e.target.value)}
                                    className="input-field"
                                />
                            </div>

                            {selectedInvestments.map((investment) => (
                                <div key={investment} className="investment-row">
                                    <label>Wie viel möchten Sie in {investment} investieren?</label>
                                    <input
                                        type="number"
                                        min="0"
                                        value={investmentAmounts[investment] || ""}
                                        onChange={(e) => handleInvestmentChange(investment, e.target.value)}
                                        className="input-field"
                                    />
                                    <label>Möchten Sie auch jährlich etwas einsparen in {investment}?</label>
                                    <input
                                        type="number"
                                        min="0"
                                        value={annualContributions[investment] || ""}
                                        onChange={(e) => handleContributionChange(investment, e.target.value)}
                                        className="input-field"
                                    />
                                </div>
                            ))}
                        </>
                    )}

                    <div className="spacer"></div>
                    <label className="label-title">Soll eine Datei erstellt werden?</label>
                    <div className="checkbox-group">
                        <label><input type="checkbox" /> .txt</label>
                        <label><input type="checkbox" /> .csv</label>
                    </div>
                    <div className="spacer"></div>
                    <button className="calculate-button">Investitionsberechnung durchführen</button>

                    <footer className="footer2">Made by Lennart Hoppermann</footer>
                </div>

                {portfolioData.some((data) => data.value > 0) && (
                    <div className="chart-section">
                        <h3 className="chart-title">Portfoliodiversifikation</h3>
                        <div className="chart-container">
                            <PieChart width={400} height={300}>
                            <Pie data={portfolioData} dataKey="value" outerRadius={100} label>
                            {portfolioData.map((_, index) => (
                            <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                            ))}
                            </Pie>
                            <Tooltip />
                            <Legend />
                            </PieChart>
                        </div>
                    </div>
                )}
                <footer className="footer-container">
                    <button className="music-button" onClick={toggleMusic}>
                        {musicPlaying ? "🔇 Musik aus" : "🔊 Musik an"}
                    </button>
                    <div className="footer-links">
                        <a href="/impressum">Impressum</a>
                        <a href="/datenschutz">Datenschutz</a>
                        <a href="/ueber-uns">Über uns</a>
                        <a href="/jobs">Jobs</a>
                    </div>
                </footer>
            </div>
        </div>
    );
}