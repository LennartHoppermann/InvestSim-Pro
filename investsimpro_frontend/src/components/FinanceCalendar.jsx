const financeEvents = [
    { date: "14. März 2024", title: "FED-Zinsentscheid" },
    { date: "28. März 2024", title: "Inflationsdaten EU" },
    { date: "10. April 2024", title: "Arbeitsmarktdaten USA" },
];

export default function FinanceCalendar() {
    return (
        <div className="finance-calendar">
            <h3>📅 Wirtschaftskalender</h3>
            <ul>
                {financeEvents.map((event, index) => (
                    <li key={index}>{event.date}: {event.title}</li>
                ))}
            </ul>
        </div>
    );
}
