import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserAccount, getUserBalance } from "../features/walletSlice";
import { getAccessToken, getSingleCoinPrice } from "../constants";
import { FaMoneyBill } from "react-icons/fa";
import { MdCheck } from "react-icons/md";
import Datatable from "../components/wallet/Datatable";
import { Deposit, Swap, Withdrawal } from "../components";
import { btc, doge, eth, ltc, tether } from "../assets";
import { getCoinData } from "../features/coinSlice";

const headers = [
  { id: "date", name: "date" },
  { id: "coin", name: "coin" },
  { id: "amount", name: "amount" },
  { id: "status", name: "status" },
];

const coins = [
  { id: "bitcoin", name: "Bitcoin" },
  { id: "ethereum", name: "Ethereum" },
  { id: "tether", name: "Tether" },
  { id: "dogecoin", name: "Dogecoin" },
  { id: "litecoin", name: "Litecoin" },
];

const Wallet = () => {
  const dispatch = useDispatch();
  const accessToken = getAccessToken();

  const {
    userAccounts,
    getAccountLoading,
    getAccountError,
    getBalLoading,
    getBalError,
    userBalance,
  } = useSelector((state) => state.wallet);

  const [totalBalance, setTotalBalance] = useState(0);
  const [activeSection, setActiveSection] = useState("wallet");
  const [currentIndex, setCurrentIndex] = useState(0);
  const { coinData } = useSelector((state) => state.coin);
  const [activeCoin, setActiveCoin] = useState(false);

  const handleActiveSection = (section) => {
    setActiveSection(section);
  };

  const username = sessionStorage.getItem("username");

  const btcPrice = getSingleCoinPrice("btc", coinData);
  const ethPrice = getSingleCoinPrice("eth", coinData);
  const usdtPrice = getSingleCoinPrice("usdt", coinData);

  const prices = {
    btc: btcPrice?.price || 0,
    eth: ethPrice?.price || 0,
    usdt: usdtPrice?.price || 0,
  };

  useEffect(() => {
    document.title = "Quadx - Wallet";
  }, []);

  useEffect(() => {
    if (accessToken) {
      dispatch(getUserAccount());
      dispatch(getUserBalance());
      dispatch(getCoinData());
    }
  }, [accessToken, dispatch]);

  useEffect(() => {
    const calculateTotal = () => {
      const btc = parseFloat(userBalance.btcBalance);
      const eth = parseFloat(userBalance.ethBalance);
      const usdt = parseFloat(userBalance.usdtBalance);
      const total = btc + eth + usdt;
      setTotalBalance(total.toFixed(2));
    };

    calculateTotal();
  }, [userBalance]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === coins.length - 1 ? 0 : prevIndex + 1
      );
    }, 6000); // Update every minute

    return () => clearInterval(interval);
  }, []);

  // if (getAccountLoading) {
  //   return (
  //     <div className="min-h-screen mt-10 p-6">
  //       <small>Loading...</small>
  //     </div>
  //   );
  // }

  return (
    <div className="min-h-screen overflow-x-hidden">
      <div className="container px-3 font-[Montserrat] space-y-4 mt-10">
        <div className="">
          <h2 className="text-xl font-bold text-slate-700 dark:text-white mb-2">
            Wallet
          </h2>
          <ul className="inline-flex items-center text-xs font-medium text-slate-500 dark:text-slate-300 gap-2">
            <li>Home </li>
            <li className="inline-flex items-center mt-0.5">{`>`}</li>
            <li className="capitalize">{username}</li>
          </ul>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {/* aside */}
          <div className="flex flex-col gap-2 ">
            {userAccounts?.account?.assets?.map((asset, index) => (
              <div key={index} className="text-xs font-medium ">
                {/* coins */}
                <div
                  onClick={() => setActiveCoin(asset.coinName)}
                  className={`flex justify-between items-center cursor-pointer p-6 rounded-sm ${
                    activeCoin === asset.coinName
                      ? "bg-[#805af5] text-white"
                      : "bg-white"
                  }`}
                >
                  <span className="font-semibold flex gap-1 items-center capitalize">
                    <img
                      src={
                        asset.shortName === "btc"
                          ? btc
                          : asset.shortName === "usdt"
                          ? tether
                          : asset.shortName === "eth"
                          ? eth
                          : null
                      }
                      alt=""
                      className="w-[15px]"
                    />

                    <div className="flex flex-col">
                      <small className="uppercase text-sm ">
                        ({asset.shortName})
                      </small>
                      <small className="capitalize text-xs font-normal">
                        {asset.coinName}
                      </small>
                    </div>
                  </span>
                  <span className="flex flex-col items-end">
                    <span className=" uppercase text-sm">{`${(
                      parseFloat(asset.balance) / prices[asset.shortName]
                    ).toFixed(4)} ${asset.shortName}`}</span>
                    <span className="font-normal text-xs">
                      ${asset.balance}
                    </span>
                  </span>
                </div>
                {/* bala */}
              </div>
            ))}
          </div>
          {/* content */}
          <div className="lg:col-span-2">
            <div className="p-6 pb-10  border-b border-slate-200 dark:border-slate-800 dark:text-slate-200 bg-white dark:bg-slate-950 rounded-xl flex flex-col gap-6 w-full">
              <div>
                <h3 className="font-medium ">Balances</h3>
              </div>
              <div className="flex flex-col ">
                <span className="flex justify-between px-5  lg:px-10">
                  <h4 className="capitalize text-xs flex gap-2 items-center text-[#805af5]">
                    <FaMoneyBill /> total balance
                  </h4>
                  <p className=" text-sm font-bold">${totalBalance}</p>
                </span>
                <span className="flex justify-between px-5  lg:px-10">
                  <h4 className="text-[#805af5] capitalize text-xs flex gap-2 items-center">
                    {" "}
                    <MdCheck />
                    safe deposit margin
                  </h4>
                  <p className=" text-sm font-bold">
                    ${userAccounts?.account?.tradingBalance}
                  </p>
                </span>
              </div>
              <div className="flex justify-between md:px-20">
                <button
                  onClick={() => handleActiveSection("deposit")}
                  className="bg-[#805af5] hover:bg-[#cd99ff] rounded-md capitalize font-medium text-white py-2 px-4 md:px-10"
                >
                  deposit
                </button>
                <button
                  onClick={() => handleActiveSection("swap")}
                  className="bg-gray-500 hover:bg-gray-700 rounded-md capitalize font-medium text-white py-2 px-4 md:px-10"
                >
                  swap
                </button>
                <button
                  onClick={() => handleActiveSection("withdraw")}
                  className="bg-red-500 hover:bg-red-700 rounded-md capitalize font-medium text-white py-2 px-4 md:px-10"
                >
                  withdraw
                </button>
              </div>
            </div>
            {/* seperate */}
            <div className="p-6 col-span-2 border-b border-slate-200 dark:border-slate-800 dark:text-slate-200 bg-white dark:bg-slate-950 rounded-xl flex flex-col gap-6 my-6 ">
              <div className="">
                {activeSection === "wallet" ? (
                  <Datatable headers={headers} />
                ) : activeSection === "deposit" ? (
                  <Deposit
                    coinData={coinData}
                    type={activeCoin}
                    userAccount={userAccounts}
                  />
                ) : activeSection === "swap" ? (
                  <Swap />
                ) : activeSection === "withdraw" ? (
                  <Withdrawal />
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wallet;
