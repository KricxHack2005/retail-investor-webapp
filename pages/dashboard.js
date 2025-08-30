import { useEffect, useState } from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";
import axios from "axios";

export default function Dashboard() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchSensex = async () => {
      try {
        const res = await axios.get(
          "https://api.polygon.io/v2/aggs/ticker/XBOM:500112/prev?apiKey=demo"
        );
        // Replace with real Sensex API later
        const prices = res.data.results.map((item, idx) => ({
          time: idx,
          price: item.c,
        }));
        setData(prices);
      } catch (err) {
        console.error(err);
      }
    };
    fetchSensex();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">📊 Retail Investor Dashboard</h1>
      <div className="bg-white shadow-lg p-4 rounded-lg">
        <LineChart width={800} height={400} data={data}>
          <XAxis dataKey="time" />
          <YAxis />
          <Tooltip />
          <CartesianGrid stroke="#eee" />
          <Line type="monotone" dataKey="price" stroke="#3b82f6" />
        </LineChart>
      </div>
    </div>
  );
}
