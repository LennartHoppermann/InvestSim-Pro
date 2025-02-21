import { useEffect, useState } from "react";
import "./InvestmentSimulator.css";

export default function InvestmentSimulator({ onBack }) {
    const [selectedInvestments, setSelectedInvestments] = useState([]);
    const [investmentAmounts, setInvestmentAmounts] = useState({});
    const [annualContributions, setAnnualContributions] = useState({});
    const [investmentPeriod, setInvestmentPeriod] = useState("");
    const [simulationResults, setSimulationResults] = useState(null);
    const [menuOpen, setMenuOpen] = useState(false);
    const [loading, setLoading] = useState(true);

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

        setInvestmentAmounts((prev) => ({
            ...prev,
            [name]: prev[name] !== undefined ? prev[name] : "",
        }));

        setAnnualContributions((prev) => ({
            ...prev,
            [name]: prev[name] !== undefined ? prev[name] : "",
        }));
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

    const handleSubmit = async () => {
        if (!investmentPeriod || selectedInvestments.length === 0) {
            alert("Bitte alle Felder ausfüllen!");
            return;
        }

        const requestBody = {
            laufzeit: parseInt(investmentPeriod, 10),
            investitionen: selectedInvestments.reduce((acc, investment) => {
                acc[investment] = {
                    startkapital: investmentAmounts[investment] || 0,
                    jaehrlicheEinzahlung: annualContributions[investment] || 0
                };
                return acc;
            }, {}),
        };

        try {
            const response = await fetch("http://localhost:8080/api/simulation/run", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(requestBody),
            });
            if (!response.ok) throw new Error("Fehler beim Abrufen der Daten");
            const data = await response.json();
            setSimulationResults(data);
        } catch (error) {
            console.error("Fehler:", error);
            alert("Fehler beim Laden der Simulationsergebnisse.");
        }
    };

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
                        <label className="label-title">Laufzeit (Jahre):</label>
                        <input
                            type="number"
                            min="1"
                            value={investmentPeriod}
                            onChange={(e) => setInvestmentPeriod(e.target.value)}
                            className="input-field"
                        />
                    </div>

                    {selectedInvestments.length > 0 && (
                        <>
                            {selectedInvestments.map((investment) => (
                                <div key={investment} className="investment-row">
                                    <label>Investitionsbetrag für {investment}:</label>
                                    <input
                                        type="number"
                                        min="0"
                                        value={investmentAmounts[investment] || ""}
                                        onChange={(e) => handleInvestmentChange(investment, e.target.value)}
                                        className="input-field"
                                    />
                                    <label>Jährliche Einzahlung für {investment}:</label>
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
                    <button className="calculate-button" onClick={handleSubmit}>
                        Investitionsberechnung durchführen
                    </button>

                    {simulationResults && (
                        <div className="results-container">
                            <h3>Ergebnisse der Investitionssimulation</h3>
                            {Object.entries(simulationResults).map(([investment, results]) => (
                                <div key={investment}>
                                    <h4>{investment}</h4>
                                    {Array.isArray(results) ? (
                                        <table className="results-table">
                                            <thead>
                                                <tr>
                                                    <th>Jahr</th>
                                                    <th>Startkapital (€)</th>
                                                    <th>Rendite (%)</th>
                                                    <th>Endkapital (€)</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {results.map(({ jahr, startkapital, rendite, endkapital }) => (
                                                    <tr key={jahr}>
                                                        <td>{jahr}</td>
                                                        <td>{startkapital !== undefined ? startkapital.toFixed(2) : "N/A"} €</td>
                                                        <td>{rendite !== undefined ? rendite.toFixed(2) : "N/A"} %</td>
                                                        <td>{endkapital !== undefined ? endkapital.toFixed(2) : "N/A"} €</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    ) : (
                                        <p>Keine Ergebnisse verfügbar</p>
                                    )}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}