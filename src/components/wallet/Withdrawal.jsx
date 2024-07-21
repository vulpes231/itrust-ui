import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const initialState = {
  amount: "",
  address: "",
};

const Withdrawal = ({ coinData, type }) => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState(initialState);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const calculateCoinAmount = () => {
    const { amount } = formData;
    if (type && amount) {
      const selectedCoin = coinData.find((coin) => coin.id === type);
      if (selectedCoin) {
        const price = selectedCoin.price;
        if (price) {
          return (parseFloat(amount) / price).toFixed(4);
        }
      }
    }
    return "";
  };

  const createWithdrawal = (e) => {
    e.preventDefault();

    // dispatch(withdraw(formData));
    console.log(formData);
  };

  return (
    <div className="flex gap-5 flex-col p-6">
      <h5 className="capitalize text-center">request withdrawal</h5>

      <div className="flex flex-col gap-4">
        <small className="font-thin text-center lg:px-20">
          {`input address and request the amount you want to withdraw, ensure the submitted address is correct to avoid loss of funds.`}
        </small>
        <div className="w-full lg:px-24 text-xs flex flex-col gap-4">
          <div>
            <label htmlFor="" className="capitalize">
              {" "}
              {type} Address
            </label>
            <div className="flex items-center">
              <input
                type="text"
                className="w-full p-2 border outline-none"
                placeholder="3ybbMnshjgsdopds672839jhsdj"
                value={formData.address}
                onChange={handleInputChange}
                name="address"
              />
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
                onChange={handleInputChange}
                name="amount"
              />
              <button className="text-white w-[15%] py-[9.2px] bg-gray-500 px-1 cursor-pointer">
                USD
              </button>
            </div>
          </div>
        </div>

        <div className="w-full lg:px-24">
          {type && (
            <div className="flex items-center text-xs text-gray-500 font-medium">
              <label>Amount:</label>
              <span className="ml-2 capitalize">
                {calculateCoinAmount()}{" "}
                {type === "bitcoin"
                  ? "BTC"
                  : type === "ethereum"
                  ? "ETH"
                  : type === "tether"
                  ? "USDT"
                  : null}
              </span>
            </div>
          )}
          <button
            onClick={createWithdrawal}
            className="bg-[#805af5] text-white py-2 capitalize w-full mt-4"
          >
            request
          </button>
        </div>
      </div>
    </div>
  );
};

export default Withdrawal;
