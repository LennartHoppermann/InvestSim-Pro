import { useState } from "react";

export default function FinanceChatbot() {
    const [question, setQuestion] = useState("");
    const [response, setResponse] = useState("");

    const handleAsk = async () => {
        // Hier OpenAI- oder GPT-API nutzen.
        const fakeResponses = {
            "Soll ich jetzt in Tech-Aktien investieren?": "Tech-Aktien zeigen aktuell hohe Volatilität. Diversifikation empfohlen!",
            "Wie entwickelt sich Gold?": "Gold bleibt stabil aufgrund wirtschaftlicher Unsicherheiten.",
            "Sind Immobilien noch eine gute Anlage?": "Immobilien sind langfristig solide, aber Zinssätze sind entscheidend."
        };

        setResponse(fakeResponses[question] || "Bitte geben Sie eine spezifischere Frage ein.");
    };

    return (
        <div className="finance-chatbot">
            <h3>🤖 Finanz-Chatbot</h3>
            <input
                type="text"
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                placeholder="Stellen Sie eine Finanzfrage..."
            />
            <button onClick={handleAsk}>Fragen</button>
            {response && <p>💬 {response}</p>}
        </div>
    );
}
