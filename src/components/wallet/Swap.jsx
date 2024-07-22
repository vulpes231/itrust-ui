import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAccessToken } from "../../constants";
import { swap } from "../../features/walletSlice";

const initialState = {
  amount: "",
  to: "",
  from: "",
};

const Swap = ({ userAccount, coinData, type, userBalance }) => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState(initialState);

  const { swapError, swapped, swapLoading } = useSelector(
    (state) => state.wallet
  );

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const createSwap = (e) => {
    e.preventDefault();
    console.log(formData);
    dispatch(swap(formData));
  };

  const calculateCoinAmount = () => {
    const { amount } = formData;
    if (formData.from && amount) {
      const selectedCoin = coinData.find((coin) => coin.id === formData.from);
      if (selectedCoin) {
        const price = selectedCoin.price;
        if (price) {
          return (parseFloat(amount) / price).toFixed(4);
        }
      }
    }
    return "";
  };

  useEffect(() => {
    let timeout;
    if (swapped) {
      timeout = 1000;
      setTimeout(() => {
        window.location.reload();
      }, timeout);
    }
    return () => clearTimeout(timeout);
  }, [swapped]);

  return (
    <div className="flex gap-5 flex-col p-6">
      <h5 className="capitalize text-center">swap trading funds</h5>

      <div className="flex flex-col gap-4">
        <small className="font-thin text-center lg:px-20">
          {`swap traded funds to supported cryptocurrencies for instant withdrawals`}
        </small>
        <div className="w-full lg:px-24 text-xs flex flex-col gap-4">
          <div className="flex gap-2 items-center">
            <div className="w-full">
              <label htmlFor="">Account</label>
              <select
                name="to"
                className="bg-transparent border dark:border-slate-200 px-2 w-full p-2 font-thin"
                value={formData.to}
                onChange={handleInputChange}
              >
                <option value="">Choose Account</option>
                <option value="tradingBalance">
                  {` Trading Balance: ${userAccount?.account?.tradingBalance}`}
                </option>
              </select>
            </div>
            <div className="w-full">
              <label htmlFor="">Coin</label>
              <select
                name="from"
                className="bg-transparent border dark:border-slate-200 px-2 w-full p-2  text-xs font-thin"
                value={formData.from}
                onChange={handleInputChange}
              >
                <option value="">Choose Wallet</option>
                <option value="bitcoin">
                  btc: {parseFloat(userBalance?.btcBalance).toFixed(2)}
                </option>
                <option value="ethereum">
                  eth: {parseFloat(userBalance?.ethBalance).toFixed(2)}
                </option>
                <option value="tether">
                  usdt: {parseFloat(userBalance?.usdtBalance).toFixed(2)}
                </option>
              </select>
            </div>
          </div>
          <div>
            <label htmlFor="">Amount</label>
            <div className="flex items-center">
              <input
                type="text"
                className="w-[85%] p-2 border outline-none"
                placeholder="0.00"
                value={formData.amount}
                name="amount"
                onChange={handleInputChange}
                autoComplete="off"
              />
              <button className="w-[15%] py-[9.2px] bg-gray-500 px-1 cursor-pointer">
                USD
              </button>
            </div>
          </div>
        </div>
        <div className="w-full lg:px-24">
          {formData.from && (
            <div className="flex items-center text-gray-500 font-medium text-xs">
              <label>Amount:</label>
              <span className="ml-2 capitalize">
                {calculateCoinAmount()}{" "}
                {formData.from.includes("bitcoin")
                  ? "BTC"
                  : formData.from.includes("ethereum")
                  ? "ETH"
                  : formData.from.includes("tether")
                  ? "USDT"
                  : null}
              </span>
            </div>
          )}
          {swapError && (
            <p className="text-xs font-medium text-red-500">{swapError}</p>
          )}
          {swapped && (
            <p className="text-xs font-medium text-green-500">
              Swap successful.
            </p>
          )}
          <button
            onClick={createSwap}
            className="bg-[#805af5] text-white py-2 capitalize w-full mt-4"
          >
            {!swapLoading ? "swap" : "perfoming swap..."}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Swap;
