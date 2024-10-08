import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { withdraw } from "../../features/walletSlice";

const initialState = {
  amount: "",
  address: "",
};

const Withdrawal = ({ coinData, type, activeSection, setActiveSection }) => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState(initialState);

  const { withdrawError, withdrawSuccess, withdrawLoading } = useSelector(
    (state) => state.wallet
  );

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
    const data = {
      walletType: type,
      amount: formData.amount,
      to: formData.address,
    };
    dispatch(withdraw(data));
    console.log(data);
  };

  useEffect(() => {
    let timeout;
    if (withdrawSuccess) {
      timeout = 1000;
      setTimeout(() => {
        window.location.reload();
        setActiveSection("withdraw");
      }, timeout);
    }
    return () => clearTimeout(timeout);
  }, [withdrawSuccess]);

  return (
    <div className="flex gap-5 flex-col lg:p-6">
      <h5 className="capitalize text-center">request withdrawal</h5>

      <div className="flex flex-col gap-4">
        <small className="font-thin text-center lg:px-20">
          {`input address and request the amount you want to withdraw, ensure the submitted address is correct to avoid loss of funds.`}
        </small>
        <div className="w-full lg:px-24 text-xs flex flex-col gap-4">
          <div>
            <label htmlFor="" className="capitalize">
              {type} Address
            </label>
            <div className="flex items-center">
              <input
                type="text"
                className="bg-transparent border outline-none dark:border-slate-200 px-2 w-full p-2  text-xs font-thin focus:outline-purple-500 focus:border-none"
                placeholder="3ybbMnshjgsdopds672839jhsdj"
                value={formData.address}
                onChange={handleInputChange}
                name="address"
                readOnly
              />
            </div>
          </div>
          <div>
            <label htmlFor="">Amount</label>
            <div className="flex items-center">
              <input
                type="text"
                className="bg-transparent border outline-none dark:border-slate-200 px-2 w-[85%] p-2  text-xs font-thin focus:outline-purple-500 focus:border-none"
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
          {withdrawError && (
            <p className="text-xs font-medium text-red-500">{withdrawError}</p>
          )}
          {withdrawSuccess && (
            <p className="text-xs font-medium text-green-500">
              Withdrawal requested.
            </p>
          )}
          <button
            onClick={createWithdrawal}
            className="bg-[#805af5] text-white py-2 capitalize w-full mt-4"
          >
            {!withdrawLoading ? "request" : "requesting..."}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Withdrawal;
