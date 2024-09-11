import React, { useEffect, useState } from "react";
import { FaArrowTrendDown, FaArrowTrendUp } from "react-icons/fa6";
import Bots from "./Bots";
import RecentActivity from "./Recentactivity";
import { styles } from "../../constants/styles";
import { useDispatch, useSelector } from "react-redux";
import { getAllBots } from "../../features/botSlice";
import { getAccessToken } from "../../constants";
import { useNavigate } from "react-router-dom";
import { getUser } from "../../features/userSlice";
import Unverified from "../Unverified";

const Currencies = ({ coinData }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [verifyError, setVerifyError] = useState(false);
  const { bots } = useSelector((state) => state.bot);
  const { user } = useSelector((state) => state.user);

  const accessToken = getAccessToken();
  useEffect(() => {
    if (accessToken) {
      dispatch(getAllBots());
      dispatch(getUser());
    }
  }, [accessToken, dispatch]);

  const handleLinkClick = (e, path) => {
    e.preventDefault();

    if (user?.KYCstatus == "verified") {
      navigate(path);
    } else {
      setVerifyError(true);
    }
  };

  useEffect(() => {
    let timeout;
    if (verifyError) {
      timeout = 2000;
      setTimeout(() => {
        setVerifyError(false);
      }, timeout);
    }
    () => clearTimeout(timeout);
  }, [verifyError]);

  return (
    <section className="grid lg:grid-cols-3 gap-5 ">
      {/* my currencies */}
      <div className="lg:col-span-2 w-full space-y-5 overflow-hidden ">
        <div className="space-y-6 mt-5">
          <span className="flex justify-between items-center capitalize">
            <h2 className="text-sm lg:text-lg font-medium lg:pl-5">
              my currencies
            </h2>
            <span className="flex items-center text-xs font-normal gap-2">
              <button className="bg-[#805af5] hover:bg-[#cd99ff] text-white px-4 py-2 cursor-pointer  rounded-3xl">
                24H
              </button>
              <button className="bg-[#805af5] hover:bg-[#cd99ff] text-white px-4 py-2 cursor-pointer rounded-3xl">
                Get report
              </button>
            </span>
          </span>
          <div className="overflow-auto lg:overflow-hidden shadow-lg">
            <table className="min-w-full divide-y divide-slate-800 dark:divide-slate-200  bg-black dark:bg-white border border-slate-800 dark:border-none">
              <thead>
                <tr className="">
                  <th className="whitespace-nowrap px-4 py-3 text-left text-xs font-medium  uppercase tracking-tight">
                    Coin Name
                  </th>
                  <th className="whitespace-nowrap px-4 py-3 text-left text-xs font-medium  uppercase tracking-tight">
                    Price
                  </th>
                  <th className="whitespace-nowrap px-4 py-3 text-left text-xs font-medium  uppercase tracking-tight">
                    24H Change
                  </th>
                  <th className="whitespace-nowrap px-4 py-3 text-left text-xs font-medium  uppercase tracking-tight">
                    Total Balance (USD)
                  </th>
                  <th className="whitespace-nowrap px-4 py-3 text-left text-xs font-medium  uppercase tracking-tight">
                    Total Balance (COIN)
                  </th>
                  <th className="whitespace-nowrap px-4 py-3 text-left text-xs font-medium  uppercase tracking-tight">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className=" divide-y divide-slate-800 dark:divide-slate-200">
                {coinData?.map((coin, index) => {
                  return (
                    <tr key={coin.id}>
                      <td className="px-4 py-4 whitespace-nowrap text-xs font-medium ">
                        <span className="flex items-center gap-3 capitalize ">
                          <img
                            src={coin.icon}
                            alt=""
                            className="w-[20px] h-[20px]"
                          />
                          <small>{coin.name}</small>
                        </span>
                      </td>
                      <td className="px-4 py-4 whitespace-nowrap text-xs ">
                        {" "}
                        {new Intl.NumberFormat("en-US", {
                          style: "currency",
                          currency: "USD",
                        }).format(coin.price)}
                      </td>
                      <td className="px-4 py-4 whitespace-nowrap text-xs text-green-500 flex items-center gap-1">
                        <span>
                          {coin.isPositive ? (
                            <FaArrowTrendUp style={{ color: "green" }} />
                          ) : (
                            <FaArrowTrendDown style={{ color: "red" }} />
                          )}
                        </span>
                        <small
                          className={
                            coin.isPositive ? "text-green-500" : "text-red-500"
                          }
                        >
                          {`${coin.change.toFixed(2)}% (${coin.abbr})`}
                        </small>
                      </td>
                      <td className="px-4 py-4 whitespace-nowrap text-xs ">
                        $0.00
                      </td>
                      <td className="px-4 py-4 whitespace-nowrap text-xs ">
                        0.0000
                      </td>
                      <td className="px-4 py-4 whitespace-nowrap text-xs font-medium">
                        <button
                          className={`${styles.hover.lightBg} ${styles.colors.primaryBgColor} text-white font-bold py-2 px-4 rounded-3xl`}
                        >
                          Trade
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
        {/* recent */}
        <div className="grid ">
          <RecentActivity />
        </div>
      </div>

      {/* trading */}
      <div className="p-5 w-full overflow-auto">
        <Bots
          title={"Available BOTS"}
          name={"add bot"}
          botData={bots}
          handleClick={handleLinkClick}
        />
      </div>
      {verifyError && <Unverified />}
    </section>
  );
};

export default Currencies;
