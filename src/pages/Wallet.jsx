import React, { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserAccount, getUserBalance } from "../features/walletSlice";
import { getAccessToken, getSingleCoinPrice } from "../constants";
import { FaMoneyBill } from "react-icons/fa";
import { MdCheck } from "react-icons/md";
import { TitleContext } from "../contexts/TitleContext";
import { Deposit, Swap, Withdrawal } from "../components";
import { btc, doge, eth, ltc, tether } from "../assets";
import { getCoinData } from "../features/coinSlice";
import Trnx from "../components/history/Trnx";
import Trans from "../components/wallet/Trans";
import { getUser } from "../features/userSlice";
import { useNavigate } from "react-router-dom";
import { styles } from "../constants/styles";
import Connectwallet from "../components/wallet/Connectwallet";

const headers = [
  { id: "date", name: "date" },
  { id: "coin", name: "coin" },
  { id: "_id", name: "transactionID" },
  { id: "type", name: "type" },
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
  const navigate = useNavigate();
  const accessToken = getAccessToken();
  const { changeTitle } = useContext(TitleContext);

  const {
    userAccounts,
    getAccountLoading,
    getAccountError,
    getBalLoading,
    getBalError,
    userBalance,
  } = useSelector((state) => state.wallet);

  const [totalBalance, setTotalBalance] = useState(0);
  const [activeSection, setActiveSection] = useState("deposit");
  const [currentIndex, setCurrentIndex] = useState(0);
  const { coinData } = useSelector((state) => state.coin);
  const [activeCoin, setActiveCoin] = useState("bitcoin");
  const [showConnect, setShowConnect] = useState(false);

  const handleActiveSection = (section) => {
    setActiveSection(section);
  };

  const { user } = useSelector((state) => state.user);

  const btcPrice = getSingleCoinPrice("btc", coinData);
  const ethPrice = getSingleCoinPrice("eth", coinData);
  const usdtPrice = getSingleCoinPrice("usdt", coinData);

  const prices = {
    btc: btcPrice?.price || 0,
    eth: ethPrice?.price || 0,
    usdt: usdtPrice?.price || 0,
  };

  useEffect(() => {
    changeTitle("Quadx - Wallet");
    if (!accessToken) {
      // console.log(accessToken);
      navigate("/signin");
    }
  }, [accessToken]);

  useEffect(() => {
    if (accessToken) {
      dispatch(getUserAccount());
      dispatch(getUserBalance());
      dispatch(getCoinData());
      dispatch(getUser());
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

  if (getAccountLoading) {
    return (
      <div className="min-h-screen mt-10 p-6">
        <small>Fetching wallet data...</small>
      </div>
    );
  }

  const handleConnect = () => {
    setShowConnect(true);
  };

  const closeConnect = () => {
    console.log("Closed");
    setShowConnect(false);
  };

  return (
    <div className="min-h-screen">
      <div className="container px-3 font-[Montserrat] space-y-4 mt-10">
        <div className="flex justify-between items-start">
          <span>
            <h2 className="text-xl font-bold mb-2">Wallet</h2>
            <ul className="inline-flex items-center text-xs font-medium gap-2">
              <li>Home </li>
              <li className="inline-flex items-center mt-0.5">{`>`}</li>
              <li className="capitalize">{user?.username}</li>
            </ul>
          </span>
          <span>
            <button
              className={`inline-flex justify-center items-center font-medium transition-all text-sm px-5 py-2 gap-3 rounded-md ${styles.hover.lightBg}  text-white ${styles.colors.primaryBgColor} `}
              onClick={handleConnect}
            >
              Connect wallet
            </button>
          </span>
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
                      ? "bg-[#805af5] text-white "
                      : "dark:bg-white bg-black border border-slate-800 dark:border-none"
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
                    ).toFixed(2)} ${asset.shortName}`}</span>
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
          <div className="lg:col-span-2 overflow-auto">
            <div className="p-6 pb-10  border dark:border-slate-200 border-slate-800  dark:bg-white bg-black rounded-xl flex flex-col gap-6 w-full">
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
                    ${userAccounts?.account?.tradingBalance.toFixed(2)}
                  </p>
                </span>
              </div>

              <div className="flex justify-between md:px-20">
                <button
                  onClick={() => handleActiveSection("deposit")}
                  className={`${
                    activeSection === "wallet" || activeSection === "deposit"
                      ? "bg-[#805af5] hover:bg-[#cd99ff] text-white"
                      : "border border-[#805af5] bg-transparent text-[#805af5]"
                  } rounded-md capitalize font-medium py-2 px-4 md:px-10`}
                >
                  deposit
                </button>
                <button
                  onClick={() => handleActiveSection("swap")}
                  className={`${
                    activeSection === "swap"
                      ? "bg-[#805af5] hover:bg-[#cd99ff] text-white"
                      : "border border-[#805af5] bg-transparent text-[#805af5]"
                  } rounded-md capitalize font-medium py-2 px-4 md:px-10`}
                >
                  swap
                </button>
                <button
                  onClick={() => handleActiveSection("withdrawal")}
                  className={`${
                    activeSection === "withdrawal"
                      ? "bg-[#805af5] hover:bg-[#cd99ff] text-white"
                      : "border border-[#805af5] bg-transparent text-[#805af5]"
                  } rounded-md capitalize font-medium py-2 px-4 md:px-10`}
                >
                  withdraw
                </button>
              </div>
            </div>
            {/* seperate */}
            <div className="p-6 col-span-2 border dark:border-slate-200 border-slate-800  dark:bg-white bg-black rounded-xl flex flex-col gap-6 my-6 ">
              <div>
                {activeSection === "deposit" ? (
                  <Deposit
                    coinData={coinData}
                    type={activeCoin}
                    userAccount={userAccounts}
                  />
                ) : activeSection === "swap" ? (
                  <Swap
                    coinData={coinData}
                    type={activeCoin}
                    userAccount={userAccounts}
                    userBalance={userBalance}
                  />
                ) : activeSection === "withdrawal" ? (
                  <Withdrawal
                    coinData={coinData}
                    type={activeCoin}
                    activeSection={activeSection}
                    setActiveSection={handleActiveSection}
                  />
                ) : null}
              </div>
            </div>
            <div className="mb-10">
              <Trans activeSection={activeSection} />
            </div>
          </div>
        </div>
        {showConnect && <Connectwallet closeConnect={closeConnect} />}
      </div>
    </div>
  );
};

export default Wallet;
