import "./ÜberUnsPage.css";

export default function UeberUnsPage() {
    return (
        <div className="ueber-uns-container">
            <header className="header">
                <h1 className="glowing-title">🚀 Über Uns</h1>
                <p>Die Geschichte von Investment-Hub – Vom Garagen-Startup zur führenden Investment-Plattform.</p>
            </header>

            <div className="story-wrapper">
                <main className="story-scroll-container">
                    <section className="story-box">
                        <h2>Unsere Anfänge</h2>
                        <img src="/Garage.png" alt="Gründungsstandort" className="story-image" />
                        <p>
                            Alles begann in einer kleinen Garage. Ein paar mutige Visionäre mit Laptops, Kaffeetassen und einer großen Idee: 
                            Die Welt der Investitionen für jeden zugänglich zu machen. Wir starteten mit einem einfachen Algorithmus und einer klaren Mission – 
                            die Investmentwelt transparenter und smarter zu gestalten.
                        </p>
                    </section>

                    <section className="story-box">
                        <h2>Unser Team</h2>
                        <img src="/Teamfoto.png" alt="Unser Team" className="story-image" />
                        <p>
                            Heute besteht unser Team aus Experten in Finanzen, Technologie und Design. Gemeinsam arbeiten wir daran, 
                            die besten Lösungen für Investoren zu entwickeln. Unsere Stärken? Innovation, Datenanalyse und ein unaufhaltsamer Teamgeist.
                        </p>
                    </section>

                    <section className="story-box">
                        <h2>Unser Investor</h2>
                        <img src="/Investor.png" alt="Unser Investor" className="story-image" />
                        <p>
                            Als alles auf der Kippe stand, trat unser erster und einziger Investor ins Spiel. Mit seinem unerschütterlichen Glauben an unsere 
                            Vision hat er uns nicht nur finanziell unterstützt, sondern auch strategisch beraten. Ohne ihn wäre Investment-Hub nicht das, was es heute ist.
                        </p>
                    </section>
                </main>
            </div>

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
