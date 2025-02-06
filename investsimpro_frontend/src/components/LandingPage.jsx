import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./LandingPage.css";

export default function LandingPage() {
    const navigate = useNavigate();
    const videoRef = useRef(null);
    const audioRef = useRef(null);
    const [displayedText, setDisplayedText] = useState("");
    const [musicPlaying, setMusicPlaying] = useState(true);
    const fullText = "Willkommen auf dem\nInvestment Hub";

    useEffect(() => {
        let i = 0;
        const interval = setInterval(() => {
            setDisplayedText(fullText.slice(0, i));
            i++;
            if (i > fullText.length) clearInterval(interval);
        }, 100);
        return () => clearInterval(interval);
    }, []);
    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.play().then(() => {
                videoRef.current.playbackRate = 0.6; // Setzt die Geschwindigkeit auf 50%
            }).catch((error) => console.error("Video kann nicht automatisch abgespielt werden:", error));
        }
        if (audioRef.current) {
            audioRef.current.volume = 0.4; // Setzt die Lautstärke auf 40%
            audioRef.current.play().catch((error) => console.error("Musik kann nicht automatisch abgespielt werden:", error));
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
        
    return (
        <div className="landing-container">
            <audio ref={audioRef} src="/background_music.mp3" loop autoPlay />

            {/* 🔹 Linke Seite - Über mich & Rezensionen */}
            <div className="about-container">
                <div className="about-card">
                    <img src="/Mein Bild.jpg" alt="Lennart Hoppermann" className="founder-image" />
                    <p className="founder-text">
                        Lennart Hoppermann <br />
                        👨‍💼 Gründer & Visionär von <strong>Investment-Hub</strong>. 
                    </p>
                    <div className="spacer"></div>
                    <p className="founder-quote">
                        „Die Zukunft gehört denen, die ihre Investments heute optimieren.“
                    </p>
                    <div className="spacer"></div>
                    {/* Bewertungen mit grauem Hintergrund & Sterne */}
                    <h3 className="customer-reviews-title">📢 Kundenmeinungen</h3>
                    <div className="review">
                        <div className="review-item">
                            <p>⭐⭐⭐⭐⭐</p>
                            <p>„Beste Investment-Plattform, die ich je genutzt habe!“ - <strong>Max M.</strong></p>
                        </div>
                        <div className="review-item">
                            <p>⭐⭐⭐⭐⭐</p>
                            <p>„Übersichtlich, modern und extrem hilfreich!“ - <strong>Lisa S.</strong></p>
                        </div>
                        <div className="review-item">
                            <p>⭐⭐⭐⭐⭐</p>
                            <p>„Hier investiere ich mit Strategie, nicht mit Bauchgefühl.“ - <strong>David R.</strong></p>
                        </div>
                    </div>
                </div>
            </div>

            {/* 🔹 Mittlerer Bereich - Willkommen & Video */}
            <div className="center-content">
                <h1 className="welcome-title">{displayedText.split("\n").map((line, index) => (
                    <span key={index}>{line}<br /></span>
                ))}</h1>
                <p>Entdecken Sie die Zukunft der Investitionen mit modernster Simulationstechnik.</p>
                <div className="spacer"></div>
                <button className="start-button" onClick={() => navigate("/simulator")}>🚀 Jetzt starten</button>
                <div className="video-container">
                    <video ref={videoRef} src="/welt.mp4" autoPlay loop muted playsInline></video>
                </div>
            </div>

            {/* 🔹 Rechter Bereich - Finanz-Updates */}
            <div className="finance-container">
                <div className="market-data">
                    <h3>📊 Live Marktdaten</h3>
                    <p>DAX: 15,980 Pkt.</p>
                    <p>S&P 500: 4,350 Pkt.</p>
                    <p>Bitcoin: 38,750 USD</p>
                </div>

                <div className="economic-calendar">
                    <h3>📅 Wirtschaftskalender</h3>
                    <p>14. März 2024: FED-Zinsentscheid</p>
                    <p>28. März 2024: Inflationsdaten EU</p>
                    <p>10. April 2024: Arbeitsmarktdaten USA</p>
                </div>

                <div className="finance-chatbot">
                    <h3>🤖 Finanz-Chatbot</h3>
                    <input type="text" placeholder="Stellen Sie eine Finanzfrage..." />
                    <button className="ask-button">Fragen</button>
                </div>

                <div className="heatmap-link">
                    <h3>🔥 Börsen-Heatmap</h3>
                </div>
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