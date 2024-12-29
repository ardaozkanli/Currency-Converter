import React, { useState } from "react";
import { SiConvertio } from "react-icons/si";
import axios from "axios";
import "./currency.css";
function Currency() {
  let BASE_URL = "https://api.freecurrencyapi.com/v1/latest";
  let API_KEY = "fca_live_Bas8JfNQ8LWTVc8KKd7cyEToNKvZYMRV0TZkj1q7";

  //STATES
  const [amount, setAmount] = useState("");
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("TRY");
  const [result, setResult] = useState("");

  const exchange = async () => {
    const response = await axios.get(
      `${BASE_URL}?apikey=${API_KEY}&base_currency=${fromCurrency}`
    );
    const result = (response.data.data[toCurrency] * amount).toFixed(2);
    setResult(result);
  };
  return (
    <div className="currency-container">
      <h2 className="app-title">Currency Converter</h2>
      <div className="currency-div">
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="amount-input"
          placeholder="Enter the amount"
        />
        <select
          onChange={(e) => setFromCurrency(e.target.value)}
          className="from-currency-option currency-select">
          <option>USD</option>
          <option>EUR</option>
          <option>TRY</option>
        </select>
        <SiConvertio
          style={{ fontSize: "40px", cursor: "pointer", margin: "0px 5px" }}
        />
        <select
          onChange={(e) => setToCurrency(e.target.value)}
          className="to-currency-option currency-select">
          <option>TRY</option>
          <option>USD</option>
          <option>EUR</option>
        </select>
        <input
          type="number"
          className="result-input"
          value={result}
          onChange={(e) => setResult(e.target.value)}
        />
      </div>
      <button onClick={exchange} className="convert-btn">
        Convert
      </button>
    </div>
  );
}

export default Currency;
