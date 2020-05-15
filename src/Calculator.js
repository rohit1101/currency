import React from "react";
// import logo from './logo.svg';
import "./App.css";
// import { InputEl } from "./InputEl";

export class Calculator extends React.Component {
  state = { value: "", currency: "USD" };

  handleUSDChange = (e) => {
    this.setState({ value: e.target.value, currency: "USD" });
  };

  handleINRChange = (e) => {
    this.setState({ value: e.target.value, currency: "INR" });
  };

  usdToInr(usd) {
    const input = Number(usd);
    if (isNaN(input)) {
      return "";
    }
    const output = parseFloat(input * 75.42);
    return output.toString();
  }

  inrToUsd(inr) {
    const input = Number(inr);
    if (isNaN(input)) {
      return "";
    }
    const output = parseFloat(input * 75.42);
    return output.toString();
  }

  render() {
    const val = this.state.value;

    const currency = this.state.currency;
    const ind = currency === "USD" ? this.usdToInr(val) : Number(val);
    const usd = currency === "INR" ? this.inrToUsd(val) : Number(val);
    return (
      <div>
        <h1>Currency Converter</h1>
        <label>USD VALUE:</label>
        <input value={usd} onChange={this.handleUSDChange} />
        <hr />
        <label>INR VALUE:</label>
        <input value={ind} onChange={this.handleINRChange} />
      </div>
    );
  }
}
