import React, { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Copymodal from "./Copymodal";
import { MdCheckCircle } from "react-icons/md";
import { deposit } from "../../features/walletSlice";
import { useNavigate } from "react-router-dom";

const initialState = {
  amount: "",
};

const Deposit = ({ coinData, type, userAccount }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState(initialState);
  const [copy, setCopy] = useState(false);
  const inputRef = useRef(null);

  const handleCopyClick = () => {
    if (inputRef.current && inputRef.current.value) {
      inputRef.current.select();
      setCopy(true);
    }
  };

  const getCoinAddress = (coin) => {
    let address;
    userAccount?.account?.assets?.forEach((asset) => {
      if (asset.coinName === coin) {
        address = asset.address;
      }
    });
    return address;
  };

  const placeholderAddress = getCoinAddress(type) || "No address found";
  const { depositSuccess, depositError, depositLoading } = useSelector(
    (state) => state.wallet
  );

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const createDeposit = (e) => {
    e.preventDefault();
    const data = {
      amount: formData.amount,
      walletType: type,
    };
    dispatch(deposit(data));
    console.log(data);
  };

  useEffect(() => {
    if (depositSuccess) {
      navigate("/wallet");
    }
  }, [navigate, depositSuccess]);

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

  return (
    <div className="flex gap-5 flex-col p-6">
      <div className="flex justify-between items-center">
        <h5 className="capitalize">wallet deposit address</h5>
      </div>
      <div className="grid md:grid-cols-3 ">
        <div className="col-span-2 text-xs">
          <div className="flex flex-col gap-4 ">
            <small className="font-normal leading-5 ">
              {`Kindly send payment to the address below and click " I have sent payment" to process your deposit. Your deposit amount will be credited to your balance once payment is confirmed on the blockchain network`}
            </small>
            <div>
              <label htmlFor="" className="capitalize">
                {type} Address
              </label>
              <div className="flex items-center">
                <input
                  type="text"
                  className="w-[85%] p-2 border placeholder:text-slate-950 dark:text-slate-200 outline-none"
                  readOnly
                  placeholder={placeholderAddress}
                  ref={inputRef}
                />
                <button
                  onClick={handleCopyClick}
                  className="w-[15%] py-[9.2px] bg-gray-500 px-1 cursor-pointer text-white"
                >
                  {copy ? "copied" : "copy"}
                </button>
              </div>
            </div>
            <div>
              <label htmlFor="">Amount</label>
              <div className="flex items-center">
                <input
                  type="text"
                  className="w-[85%] py-2 px-4 border outline-none text-slate-950"
                  placeholder="0.00"
                  value={formData.amount}
                  onChange={handleInputChange}
                  name="amount"
                />
                <button className="w-[15%] py-[9.2px] bg-gray-500 px-1 cursor-pointer text-white outline-none">
                  USD
                </button>
              </div>
            </div>
            {type && (
              <div className="flex items-center text-gray-500 font-medium">
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
            {depositSuccess && <p className="text-green-500">Success.</p>}
            {copy && (
              <Copymodal
                copy={copy}
                msg={"Copied to clipboard."}
                icon={<MdCheckCircle />}
              />
            )}
            <button
              onClick={createDeposit}
              className="bg-[#805af5] text-white py-2 mt-4"
            >
              {depositLoading ? "wait..." : "I have sent payment."}
            </button>
          </div>
        </div>
        <span className=" flex items-center justify-center">
          <img src="" alt="QR CODE" />
        </span>
      </div>
    </div>
  );
};

export default Deposit;
