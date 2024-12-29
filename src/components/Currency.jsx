import React from "react";
import { SiConvertio } from "react-icons/si";
import "./currency.css";
function Currency() {
  return (
    <div className="currency-container">
      <h2 className="app-title">Currency Converter</h2>
      <div className="currency-div">
        <input
          type="number"
          className="amount-input"
          placeholder="Enter the amount"
        />
        <select className="from-currency-option currency-select">
          <option>USD</option>
          <option>EUR</option>
          <option>TRY</option>
        </select>
        <SiConvertio
          style={{ fontSize: "40px", cursor: "pointer", margin: "0px 5px" }}
        />
        <select className="to-currency-option currency-select">
          <option>TRY</option>
          <option>USD</option>
          <option>EUR</option>
        </select>
        <input type="number" className="result-input" />
      </div>
      <button className="convert-btn">Convert</button>
    </div>
  );
}

export default Currency;
