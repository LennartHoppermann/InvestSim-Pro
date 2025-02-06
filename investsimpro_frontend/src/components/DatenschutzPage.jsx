import "./DatenschutzPage.css";

export default function DatenschutzPage() {
    return (
        <div className="datenschutz-container">
            <div className="scrollable-content">
                <header className="header">
                    <h1 className="glowing-title">🔒 Datenschutz</h1>
                    <p>Ihre Daten sind uns wichtig. Erfahren Sie mehr über unsere Datenschutzrichtlinien.</p>
                </header>

                <main className="content">
                    <section className="info-box">
                        <h2>Allgemeine Hinweise</h2>
                        <p>Diese Datenschutzerklärung klärt Sie über die Art, den Umfang und Zweck der Verarbeitung personenbezogener Daten auf unserer Website auf.</p>
                    </section>
                    
                    <section className="info-box">
                        <h2>Verantwortliche Stelle</h2>
                        <p><strong>Investment-Hub GmbH</strong></p>
                        <p>Musterstraße 42, 12345 Musterstadt</p>
                        <p>E-Mail: datenschutz@investment-hub.de</p>
                    </section>

                    <section className="info-box">
                        <h2>Welche Daten wir erheben</h2>
                        <p>Wir verarbeiten personenbezogene Daten wie Name, E-Mail-Adresse und IP-Adresse, wenn Sie unsere Website besuchen oder unseren Service nutzen.</p>
                        <p>Zusätzlich erfassen wir:</p>
                        <ul>
                            <li>Investitionsvolumen und gewählte Anlageklassen</li>
                            <li>Gewünschte Laufzeit der Investitionen</li>
                            <li>Nutzungsverhalten auf der Website (z. B. Aufenthaltsdauer, Interaktionen)</li>
                            <li>Technische Hintergrunddaten wie Gerätetyp und Browser</li>
                        </ul>
                    </section>

                    <section className="info-box">
                        <h2>Wie wir Ihre Daten nutzen</h2>
                        <p>Die gesammelten Daten helfen uns, unsere Dienstleistungen zu optimieren und Ihnen maßgeschneiderte Investitionssimulationen anzubieten.</p>
                        <p>Wir verwenden die Daten unter anderem für:</p>
                        <ul>
                            <li>Personalisierte Investmentvorschläge</li>
                            <li>Analyse von Marktentwicklungen und Nutzertrends</li>
                            <li>Verbesserung der Benutzererfahrung durch Datenanalyse</li>
                        </ul>
                    </section>

                    <section className="info-box">
                        <h2>Ihre Rechte</h2>
                        <p>Sie haben das Recht auf Auskunft, Berichtigung, Löschung und Einschränkung der Verarbeitung Ihrer Daten.</p>
                        <p>Für Anfragen oder Widerruf Ihrer Einwilligung wenden Sie sich bitte an: <strong>datenschutz@investment-hub.de</strong></p>
                    </section>
                </main>
            </div>
            
            <footer className="footer">
                <nav className="footer-nav">
                    <a href="/">🏠 Zurück zur Startseite</a>
                    <a href="/impressum">📜 Impressum</a>
                    <a href="/kontakt">📩 Kontakt</a>
                </nav>
            </footer>
        </div>
    );
}
