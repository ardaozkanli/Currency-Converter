import React, { useEffect, useState } from "react";
import { SiConvertio } from "react-icons/si";
import axios from "axios";
import "./currency.css";
function Currency() {
  let BASE_URL = "https://api.freecurrencyapi.com/v1/latest";
  let API_KEY = "fca_live_Bas8JfNQ8LWTVc8KKd7cyEToNKvZYMRV0TZkj1q7";

  //STATES
  const [values, setValues] = useState([]);
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

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`${BASE_URL}?apikey=${API_KEY}`);
      console.log(response.data.data);
      setValues(Object.keys(response.data.data));
    };
    fetchData();
  }, []);
  return (
    <div className="currency-container">
      <h2 className="app-title">Currency Converter</h2>
      <div className="currency-div">
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="amount-input"
          placeholder="Enter thee amount"
        />
        <select
          value={fromCurrency}
          onChange={(e) => setFromCurrency(e.target.value)}
          className="from-currency-option currency-select">
          {Array.isArray(values) &&
            values.map((item, index) => <option key={index}>{item}</option>)}
        </select>
        <SiConvertio
          style={{ fontSize: "40px", cursor: "pointer", margin: "0px 5px" }}
        />
        <select
          value={toCurrency}
          onChange={(e) => setToCurrency(e.target.value)}
          className="to-currency-option currency-select">
          {Array.isArray(values) &&
            values.map((item, index) => <option key={index}>{item}</option>)}
        </select>
        <input
          type="number"
          className="result-input"
          value={result}
          readOnly
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
