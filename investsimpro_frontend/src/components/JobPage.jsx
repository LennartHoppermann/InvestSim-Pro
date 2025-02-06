import "./JobPage.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function JobPage() {
    const [showSecretJob, setShowSecretJob] = useState(false);
    const navigate = useNavigate();

    return (
        <div className="job-container">
            <header className="header">
                <h1 className="glowing-title">🚀 Werde Teil unseres Teams!</h1>
                <p>Die Investment-Welt braucht dich! Entdecke unsere einzigartigen Stellenangebote.</p>
            </header>

            <div className="job-list">
                <div className="job-card">
                    <h2>💻 Full-Stack Developer (m/w/d)</h2>
                    <p>Entwickle mit uns die Zukunft des Investierens! Bring deine React- und Java-Skills mit und baue die nächste große Plattform.</p>
                    <button className="apply-button" onClick={() => navigate("/bewerbung")}>Jetzt bewerben</button>
                </div>
                
                <div className="job-card">
                    <h2>📈 Data Scientist (m/w/d)</h2>
                    <p>Analysiere Finanzmärkte mit KI und Big Data. Mach unsere Algorithmen smarter als je zuvor.</p>
                    <button className="apply-button" onClick={() => navigate("/bewerbung")}>Jetzt bewerben</button>
                </div>
                
                <div className="job-card">
                    <h2>🎨 UI/UX Designer (m/w/d)</h2>
                    <p>Gestalte eine futuristische Investment-Plattform mit hypnotisierendem Design. Neon ist dein bester Freund? Dann bist du hier richtig!</p>
                    <button className="apply-button" onClick={() => navigate("/bewerbung")}>Jetzt bewerben</button>
                </div>
            </div>

            <button className="secret-job-button" onClick={() => setShowSecretJob(!showSecretJob)}>🔍 Geheimen Job anzeigen</button>
            
            {showSecretJob && (
                <div className="secret-job">
                    <h2>🕵️ Krypto-Orakel (m/w/d)</h2>
                    <p>Kannst du Kursverläufe lesen wie eine Glaskugel? Hast du eine mystische Verbindung zu Bitcoin? Dann brauchen wir dich als unser Krypto-Orakel!</p>
                    <button className="apply-button" onClick={() => navigate("/bewerbung")}>Jetzt bewerben</button>
                </div>
            )}

            <footer className="footer">
                <nav className="footer-nav">
                    <a href="/">🏠 Zurück zur Startseite</a>
                    <a href="/impressum">📜 Impressum</a>
                    <a href="/datenschutz">🔒 Datenschutz</a>
                </nav>
            </footer>
        </div>
    );
}
