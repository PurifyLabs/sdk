import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { getMarketData } from "../services/api";
import { formatCurrency } from "../utils/formatter";

export default function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const result = await getMarketData();
      setData(result);
    }
    fetchData();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="container">
        <h1>Crypto Market</h1>

        {data.length === 0 ? (
          <p>Loading...</p>
        ) : (
          data.map((coin, index) => (
            <div key={index} className="card">
              <h3>{coin.name}</h3>
              <p>{formatCurrency(coin.price)}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
