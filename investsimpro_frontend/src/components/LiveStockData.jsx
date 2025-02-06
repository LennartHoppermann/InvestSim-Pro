import { useState, useEffect } from "react";

export default function LiveStockData() {
    const [stockData, setStockData] = useState({ dax: 0, sp500: 0, bitcoin: 0 });

    useEffect(() => {
        const fetchStockData = async () => {
            // Hier kannst du eine echte API verwenden, z. B. Alpha Vantage oder Yahoo Finance
            const fakeData = { dax: 15980, sp500: 4350, bitcoin: 38750 };
            setStockData(fakeData);
        };

        fetchStockData();
        const interval = setInterval(fetchStockData, 10000); // Update alle 10s

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="stock-ticker">
            <h3>📊 Live Marktdaten</h3>
            <p>DAX: {stockData.dax} Pkt.</p>
            <p>S&P 500: {stockData.sp500} Pkt.</p>
            <p>Bitcoin: {stockData.bitcoin} USD</p>
        </div>
    );
}
