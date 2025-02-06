import "./Bewerbungsportal.css";
import { useState } from "react";

export default function Bewerbungsportal() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
        file: null
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleFileChange = (e) => {
        setFormData((prev) => ({ ...prev, file: e.target.files[0] }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Bewerbung erfolgreich eingereicht!");
    };

    return (
        <div className="bewerbungs-container">
            <h1 className="glowing-title">📄 Bewerbungsportal</h1>
            <p>Reiche hier deine Bewerbung ein und werde Teil unseres Teams!</p>
            <form className="bewerbungs-form" onSubmit={handleSubmit}>
                <label>Name:</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} required />
                
                <label>Email:</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                
                <label>Warum möchtest du bei uns arbeiten?</label>
                <textarea name="message" value={formData.message} onChange={handleChange} required></textarea>
                
                <label>Lebenslauf hochladen:</label>
                <input type="file" onChange={handleFileChange} accept=".pdf,.doc,.docx" required />
                
                <button type="submit" className="apply-button">Bewerbung absenden</button>
            </form>

            <footer className="footer">
                <nav className="footer-nav">
                    <a href="/jobs">🔙 Zurück zu den Jobs</a>
                </nav>
            </footer>
        </div>
    );
}
