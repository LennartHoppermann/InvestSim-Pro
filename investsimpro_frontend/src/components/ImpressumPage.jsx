import "./ImpressumPage.css";

export default function Impressum() {
    return (
        <div className="impressum-container">
            <header className="header">
                <h1 className="glowing-title">📜 Impressum</h1>
                <p>Transparenz und rechtliche Hinweise</p>
            </header>

            <main className="content">
                <section className="info-box">
                    <h2>Angaben gemäß § 5 TMG</h2>
                    <p><strong>Investment-Hub GmbH</strong></p>
                    <p>Musterstraße 42, 12345 Musterstadt</p>
                    <p>Geschäftsführer: Lennart Hoppermann</p>
                </section>
                
                <section className="info-box">
                    <h2>Kontakt</h2>
                    <p>📧 E-Mail: kontakt@investment-hub.de</p>
                    <p>📞 Telefon: +49 123 456 789</p>
                    <p>🌐 Webseite: www.investment-hub.de</p>
                </section>

                <section className="info-box">
                    <h2>Handelsregister & Steuernummer</h2>
                    <p>Handelsregister: Amtsgericht Musterstadt, HRB 987654</p>
                    <p>USt-ID: DE123456789</p>
                </section>

                <section className="info-box">
                    <h2>Haftungsausschluss</h2>
                    <p>Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen.</p>
                </section>
            </main>

            <footer className="footer">
                <nav className="footer-nav">
                    <a href="/">🏠 Zurück zur Startseite</a>
                    <a href="/datenschutz">📜 Datenschutz</a>
                    <a href="/kontakt">📩 Kontakt</a>
                </nav>
            </footer>
        </div>
    );
}
