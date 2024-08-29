import React, { useContext, useEffect, useState } from "react";
import { TitleContext } from "../contexts/TitleContext";
import { coins, getAccessToken } from "../constants";
import { getCoinData } from "../features/coinSlice";
import { useDispatch, useSelector } from "react-redux";
import {
  Balances,
  Piechart,
  Section,
  Slider,
  Tradinghistory,
  Userchart,
} from "../components";
import { Link, useNavigate } from "react-router-dom";
import { styles } from "../constants/styles";
import Bots from "../components/dash/Bots";
import { getUserAccount, getUserBalance } from "../features/walletSlice";
import { getUser } from "../features/userSlice";

const Porfolio = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const accessToken = getAccessToken();
  const { changeTitle } = useContext(TitleContext);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [totalBalance, setTotalBalance] = useState(0);

  const { user } = useSelector((state) => state.user);

  const { coinData } = useSelector((state) => state.coin);

  const {
    userAccounts,
    getAccountLoading,
    getAccountError,
    getBalLoading,
    getBalError,
    userBalance,
  } = useSelector((state) => state.wallet);

  // console.log(userAccounts);

  useEffect(() => {
    changeTitle("Quadx - Porfolio");

    if (!accessToken) {
      navigate("/signin");
    }
  }, [accessToken]);

  useEffect(() => {
    if (accessToken) {
      dispatch(getCoinData());
      dispatch(getUserAccount());
      dispatch(getUserBalance());
      dispatch(getUser());
    }
  }, []);

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
  return (
    <Section>
      <div className="container px-3 font-[Montserrat] space-y-4 ">
        <div className="mb-7 flex justify-between items-center -mx-3">
          <div className="px-3">
            <h2 className="text-xl font-bold mb-2">Portfolio</h2>
            <ul className="inline-flex items-center text-xs font-medium text-slate-500 dark:text-slate-300 gap-2">
              <li>Home </li>
              <li className="inline-flex items-center mt-0.5">{`>`}</li>
              <li className="capitalize">{user?.username}</li>
            </ul>
          </div>
          <div className="px-3">
            <Link
              to={"/wallet"}
              className={`inline-flex justify-center items-center font-medium transition-all text-sm px-5 py-2 gap-3 rounded-md ${styles.hover.lightBg}  text-white ${styles.colors.primaryBgColor} `}
            >
              Deposit
            </Link>
          </div>
        </div>
        {/* content */}
        <div className="grid gap-4 ">
          {/* assets */}
          <div className="grid lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 flex flex-col gap-4 ">
              <Balances
                totalBalance={totalBalance}
                userAccount={userAccounts}
              />
              <Userchart />
            </div>
            <>
              <Piechart userBalance={userBalance} coinData={coinData} />
            </>
          </div>
          {/* slider */}
          <>
            <Slider coinData={coinData} currentIndex={currentIndex} />
          </>
          {/* history */}
          <div className="grid sm:grid-cols-3 gap-6 ">
            <div className="sm:col-span-2 overflow-auto">
              <Tradinghistory />
            </div>
            <div>
              <Bots title={"Active BOTS"} name={"active"} />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Porfolio;
