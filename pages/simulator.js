import { useState } from "react";

export default function Simulator() {
  const [balance, setBalance] = useState(100000);
  const [portfolio, setPortfolio] = useState([]);
  const [symbol, setSymbol] = useState("");
  const [quantity, setQuantity] = useState("");

  const buyStock = () => {
    const cost = quantity * 100; // dummy price = 100 per share
    if (cost > balance) {
      alert("Insufficient balance");
      return;
    }
    setBalance(balance - cost);
    setPortfolio([...portfolio, { symbol, quantity, price: 100 }]);
    setSymbol("");
    setQuantity("");
  };

  const sellStock = (index) => {
    const stock = portfolio[index];
    const value = stock.quantity * stock.price;
    setBalance(balance + value);
    setPortfolio(portfolio.filter((_, i) => i !== index));
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Paper Trading Simulator</h1>
      <p className="mb-2">Balance: ${balance}</p>
      <div className="flex gap-2 mb-4">
        <input className="p-2 border rounded" placeholder="Stock Symbol" value={symbol} onChange={(e) => setSymbol(e.target.value)} />
        <input className="p-2 border rounded" placeholder="Quantity" type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
        <button onClick={buyStock} className="bg-green-500 text-white py-2 px-4 rounded">Buy</button>
      </div>
      <h2 className="text-xl font-semibold mb-2">Portfolio</h2>
      <ul>
        {portfolio.map((stock, index) => (
          <li key={index} className="flex justify-between bg-white p-2 mb-2 rounded shadow">
            {stock.symbol} - {stock.quantity} @ ${stock.price}
            <button onClick={() => sellStock(index)} className="bg-red-500 text-white px-2 py-1 rounded">Sell</button>
          </li>
        ))}
      </ul>
    </div>
  );
}