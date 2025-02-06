import { ResponsiveHeatMap } from "@nivo/heatmap";

const heatmapData = [
    { sector: "Technologie", value: 3.5 },
    { sector: "Finanzen", value: -1.2 },
    { sector: "Energie", value: 2.8 },
];

export default function MarketHeatmap() {
    return (
        <div className="market-heatmap">
            <h3>🔥 Börsen-Heatmap</h3>
            <ResponsiveHeatMap
                data={heatmapData}
                keys={["value"]}
                indexBy="sector"
                colors={{ scheme: "red_yellow_green" }}
                margin={{ top: 50, right: 60, bottom: 50, left: 60 }}
            />
        </div>
    );
}
