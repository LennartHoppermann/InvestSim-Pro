import { useEffect, useState } from "react";
import "./InvestmentSimulator.css";

export default function InvestmentSimulator({ onBack }) {
    // State-Variablen
    const [selectedInvestments, setSelectedInvestments] = useState([]);
    const [investmentAmounts, setInvestmentAmounts] = useState({});
    const [annualContributions, setAnnualContributions] = useState({});
    const [investmentPeriod, setInvestmentPeriod] = useState("");
    const [simulationResults, setSimulationResults] = useState(null);
    const [menuOpen, setMenuOpen] = useState(false);
    const [loading, setLoading] = useState(true);
    const [errorMessage, setErrorMessage] = useState("");

    // Verfügbare Investitionsoptionen
    const investmentOptions = [
        { name: "Aktien", risk: "Hoch", return: "8-12%" },
        { name: "Anleihen", risk: "Niedrig", return: "2-5%" },
        { name: "Immobilien", risk: "Mittel", return: "4-7%" },
        { name: "Rohstoffe", risk: "Hoch", return: "5-10%" },
    ];

    // Funktion zum Umschalten der Auswahl einer Investition
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

    // Funktion zum Ändern des Investitionsbetrags
    const handleInvestmentChange = (name, value) => {
        if (!isNaN(value)) {
            setInvestmentAmounts((prev) => ({ ...prev, [name]: parseFloat(value) || "" }));
            setErrorMessage(""); 
        } else {
            setErrorMessage("Bitte geben Sie eine gültige Zahl ein.");
        }
    };

    // Funktion zum Ändern der jährlichen Einzahlung
    const handleContributionChange = (name, value) => {
        if (!isNaN(value)) {
            setAnnualContributions((prev) => ({ ...prev, [name]: parseFloat(value) || "" }));
            setErrorMessage(""); 
        } else {
            setErrorMessage("Bitte geben Sie eine gültige Zahl ein.");
        }
    };

    // Effekt zum Simulieren eines Ladevorgangs
    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 3000);
        return () => clearTimeout(timer);
    }, []);

    // Funktion zum Absenden der Simulationsanfrage
    const handleSubmit = async () => {
        if (!investmentPeriod || selectedInvestments.length === 0) {
            setErrorMessage("Bitte alle Felder ausfüllen!");
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
            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || "Fehler beim Abrufen der Daten");
            }
            const data = await response.json();
            setSimulationResults(data);
            setErrorMessage("");
        } catch (error) {
            console.error("Fehler:", error);
            setErrorMessage(error.message);
        }
    };

    // Anzeige eines Ladescreens während des Ladevorgangs
    if (loading) {
        return (
            <div id="splash-screen">
                <h1 className="glitch-text">Loading...</h1>
                <div className="loading-icon"></div>
            </div>
        );
    }

    // Haupt-Render-Funktion der Komponente
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

                    {errorMessage && <p className="error-message">{errorMessage}</p>}

                    <div className="spacer"></div>
                    <button className="calculate-button" onClick={handleSubmit}>
                        Investitionsberechnung durchführen
                    </button>
                    <div className="spacer"></div>

                    {simulationResults && (
                        <div className="results-container">
                            <h3 className="results-header">Ergebnisse der Investitionssimulation</h3>
                            {Object.entries(simulationResults).map(([investment, results]) => (
                                investment !== "gesamtRendite" && investment !== "gesamtEndkapital" && (
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
                                )
                            ))}
                            <div className="summary">
                                {simulationResults.gesamtRendite !== undefined && !isNaN(simulationResults.gesamtRendite) && (
                                    <p>Gesamtrendite nach {investmentPeriod} Jahren: {simulationResults.gesamtRendite.toFixed(2)} %</p>
                                )}
                                {simulationResults.gesamtEndkapital !== undefined && simulationResults.gesamtEndkapital > 0 && (
                                    <p>Endkapital: {simulationResults.gesamtEndkapital.toFixed(2)} €</p>
                                )}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}