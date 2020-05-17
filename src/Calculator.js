import React from "react";
// import "./styles.css";

export class Calculator extends React.Component {
  state = { value: "", currency: "", showOutput: false };

  handleINRChange = (e) => {
    this.setState({ value: e.target.value });
  };

  conversionMethod(indianVal, currency) {
    if (currency === "usd") {
      return (indianVal / 75).toFixed(3);
    } else if (currency === "euro") {
      return (indianVal / 85).toFixed(3);
    }
  }

  handleClick = (e) => {
    this.setState((state) => ({ showOutput: !state.showOutput }));
    if (this.state.currency === "") {
      alert("Select currency");
    }

    if (isNaN(Number(this.state.value))) {
      alert("Enter a number");
    }
  };

  render() {
    const { value: indianVal, currency, showOutput } = this.state;

    return (
      <div>
        <h1>Currency Converter</h1>
        <label>INR VALUE:</label>
        <input value={indianVal} onChange={this.handleINRChange} />

        <select
          value={currency}
          onChange={(e) => this.setState({ currency: e.target.value })}
        >
          <option value="">Select Currency</option>
          <option value="usd">USD</option>
          <option value="euro">EURO</option>
        </select>

        <button onClick={this.handleClick}>
          {this.state.showOutput ? "Clear" : "Submit"}
        </button>

        {!isNaN(indianVal) && currency && showOutput ? (
          <p>
            {indianVal} INR in {currency} is =
            {this.conversionMethod(indianVal, currency)}
          </p>
        ) : null}
      </div>
    );
  }
}
