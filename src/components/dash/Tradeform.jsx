import React, { useEffect, useState } from "react";

const coinOptions = [
  { id: "btc", name: "bitcoin", abbr: "BTC" },
  { id: "eth", name: "ethereum", abbr: "ETH" },
  { id: "usdt", name: "tether", abbr: "USDT" },
];

const paymentOptions = [
  { id: "wallet", name: "wallet balance" },
  { id: "paypal", name: "paypal" },
  { id: "credit", name: "credit / debit card" },
];

const initialState = {
  currency: "",
  paymentMethod: "",
  amount: "",
  price: "",
  transactionFee: "",
  total: "",
  estimatedRate: `1 BTC ~`,
};

const Tradeform = ({ coinData }) => {
  const [trnxFee, setTrnxFee] = useState();
  const [formData, setFormData] = useState(initialState);
  const [coinPrice, setCoinPrice] = useState(0);
  const [totalAMount, setTotalAmount] = useState(0);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));

    // Call handleSelect when currency changes
    handleSelect(value);
  };

  const getCoinPrice = (coinName) => {
    let price = 0;
    coinData?.forEach((coin) => {
      //   console.log(coinName);
      if (coin.id === coinName) {
        // console.log("yes");
        price = coin.price;
      }
    });
    return price;
  };

  const handleSelect = (cName) => {
    const price = getCoinPrice(cName);
    setCoinPrice(price);
  };

  useEffect(() => {
    if (formData.currency && coinPrice && formData.amount) {
      console.log("Executing...");
      const amt = formData.amount;

      console.log(amt);
      const total = coinPrice * parseFloat(amt);
      setTotalAmount(total.toFixed(2));
    }
    // getCoinPrice("bitcoin");
  }, [formData.amount, coinPrice, formData.currency]);

  //   console.log(totalAMount);

  return (
    <form action="" className="flex flex-col text-xs gap-4 capitalize">
      <span className="flex justify-between items-center py-2">
        <h4 className="font-semibold">Trading</h4>
        <div className="flex gap-2 ">
          <button className="capitalize">buy</button>
          <button className="capitalize">sell</button>
        </div>
      </span>
      <span className="flex justify-between items-center py-2">
        <h4>Buy coin</h4>
        <h4>USD Balance: $0.00</h4>
      </span>
      {/* buy form */}
      <div className="flex flex-col gap-4">
        <div className="flex justify-between items-center gap-2">
          <span className="w-full flex flex-col gap-1">
            <label htmlFor="currency" className="font-semibold">
              currency
            </label>
            <select
              name="currency"
              value={formData.currency}
              onChange={handleChange}
              onSelect={handleSelect}
              className="border capitalize font-medium bg-white p-2 focus-within:border-[#333] focus:border-2 dark:bg-slate-950 dark:text-slate-200"
            >
              <option value="" defaultChecked>
                select currency
              </option>
              {coinOptions.map((coin) => {
                return (
                  <option key={coin.id} value={coin.name}>
                    {coin.abbr}
                  </option>
                );
              })}
            </select>
          </span>
          <span className="w-full flex flex-col gap-1">
            <label htmlFor="payment" className="font-semibold">
              payment method
            </label>
            <select
              name="paymentMethod"
              value={formData.paymentMethod}
              onChange={handleChange}
              className="border capitalize font-medium bg-white p-2 focus:border-2 focus-within:border-[#333] dark:bg-slate-950 dark:text-slate-200"
            >
              {paymentOptions.map((pmt) => {
                return (
                  <option key={pmt.id} value={pmt.name}>
                    {pmt.name}
                  </option>
                );
              })}
            </select>
          </span>
        </div>
        <div className="flex">
          <label
            htmlFor="amount"
            className="w-[25%] bg-zinc-50 p-2 text-center font-semibold border dark:bg-slate-950 dark:text-slate-200"
          >
            amount
          </label>
          <input
            type="text"
            className="w-[60%] border p-2 outline-none focus-within:border-[#333] focus:border-2 dark:bg-slate-950 dark:text-slate-200"
            placeholder="0.00"
          />
          <label
            htmlFor="amount"
            className="w-[15%] bg-zinc-50 p-2 text-center text-xs font-semibold border dark:bg-slate-950 dark:text-slate-200"
          >
            {`${
              formData.currency === "bitcoin"
                ? "BTC"
                : formData.currency === "ethereum"
                ? "ETH"
                : formData.currency === "tether"
                ? "USDT"
                : "USD"
            }`}
          </label>
        </div>
        <div className="flex">
          <label
            htmlFor="amount"
            className="w-[25%] bg-zinc-50 p-2 text-center font-semibold border dark:bg-slate-950 dark:text-slate-200"
          >
            price
          </label>
          <input
            type="text"
            className="w-[65%] border p-2 outline-none focus-within:border-[#333] focus:border-2 placeholder:text-xs dark:bg-slate-950 dark:text-slate-200"
            placeholder={`Price: ${totalAMount}`}
            readOnly
          />
          <label
            htmlFor="amount"
            className="w-[10%] bg-zinc-50 p-2 text-center font-semibold border dark:bg-slate-950 dark:text-slate-200"
          >
            $
          </label>
        </div>
        <div className="flex justify-between text-xs font-medium text-slate-300">
          <small>Transaction Fee(0.05%)</small>
          <small>$1.08</small>
        </div>
        <div className="flex justify-between text-xs font-medium text-slate-300">
          <small>Estimated rate</small>
          <small>{`1${
            formData.currency === "bitcoin"
              ? "BTC"
              : formData.currency === "ethereum"
              ? "ETH"
              : formData.currency === "tether"
              ? "USDT"
              : null
          }/ $${coinPrice}`}</small>
        </div>
        <button className="capitalize font-medium text-sm p-2 bg-blue-500 rounded-md text-white">
          buy coin
        </button>
      </div>
      {/* sell form */}
    </form>
  );
};

export default Tradeform;
