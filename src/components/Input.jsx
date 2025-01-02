import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const Input = () => {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [info, setInfo] = useState([]);
  const [option, setOption] = useState([]);
  const [fromVal, setFromVal] = useState("");
  const [toVal, setToFromVal] = useState("");
  const [converted_amount, setConverted_amount] = useState();

  useEffect(() => {
    axios
      .get(
        `https://api.currencyapi.com/v3/latest?apikey=cur_live_5A7H9IHWy08TkyePmpB0mVD9GjFIvFd0ucWxwVe2`
      )
      .then((res) => {
        setInfo(res.data.data);
        setFromVal(info[from].value);
        setToFromVal(info[to].value);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [from,to]);
  useEffect(() => {
    setOption(Object.keys(info));

    var allVal = Object.values(info);
    var tot = allVal.map((data) => {
      return data.value;
    });
    convertCurrency();
  }, [info]);

  const convertCurrency = (from_data) => {
    const rate = fromVal * toVal;
    setConverted_amount(Number(amount * rate));
  };
  return (
    <>
      <div className="converter-container">
        <h1>Currency Converter</h1>

        <div className="input-container">
          <label htmlFor="amount">Amount:</label>
          <input
            type="number"
            id="amount"
            placeholder="Enter amount"
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>

        <div className="input-container">
          <label htmlFor="fromCurrency">From Currency:</label>
          <select
            id="fromCurrency"
            onChange={(e) => setFrom(e.target.value)}
            value={from}>
            {option.map((o, i) => (
              <option key={i} value={o}>
                {o}
              </option>
            ))}
          </select>
        </div>

        <div className="input-container">
          <label htmlFor="toCurrency">To Currency:</label>
          <select
            id="toCurrency"
            onChange={(e) => setTo(e.target.value)}
            value={to}>
            {option.map((o, i) => (
              <option key={i} value={o}>
                {o}
              </option>
            ))}
          </select>
        </div>

        <button className="btn" onClick={convertCurrency}>
          Convert
        </button>

        <div className="result-container">
          <p id="convertedAmount">Converted Amount: </p>
          <p>
            {" "}
            {amount +
              " " +
              from +
              " = " +
              Number(converted_amount) +
              " " +
              to}{" "}
          </p>
        </div>
      </div>
    </>
  );
};

export default Input;
