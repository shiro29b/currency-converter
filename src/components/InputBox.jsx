import React, { useId } from "react";

export const InputBox = ({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOption = ["usd", "inr"],
  selectCurrency = "lsd",
  amountDisable = false,
  currencyDisable = false,
  className = "",
}) => {
  const amountInputId = useId();
  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex `}>
      <div className="w-1/2">
        <label
          label={amountInputId}
          className="text-black/40 mb-2 inline-block"
        >
          {label}
        </label>
        <input
          id={amountInputId}
          className="outline-none w-full bg-transparent py-1.5"
          type="number"
          placeholder="Amount"
          disabled={amountDisable}
          value={amount}
          onChange={(e) => {
            onAmountChange(Number(e.target.value));
          }}
        />
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black/40 mb-2 w-full">Currency Type</p>
        <select
          value={selectCurrency}
          onChange={(e) => {
            onCurrencyChange(e.target.value);
          }}
          disabled={currencyDisable}
          className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
        >
          {currencyOption.map((curr) => (
            <option key={curr} value={curr}>
              {curr}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};
