import React, { useEffect } from "react";
import { FiArrowDownCircle, FiArrowUpCircle } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { getUsertrnxs } from "../../features/transactionSlice";
import { getAccessToken, getSingleCoinPrice } from "../../constants";
import { getCoinData } from "../../features/coinSlice";

const RecentActivity = () => {
  const { userTrnxs } = useSelector((state) => state.transaction);
  const { coinData } = useSelector((state) => state.coin);

  // console.log(userTrnxs);

  const dispatch = useDispatch();
  const accessToken = getAccessToken();

  const btcPrice = getSingleCoinPrice("btc", coinData);
  const ethPrice = getSingleCoinPrice("eth", coinData);
  const usdtPrice = getSingleCoinPrice("usdt", coinData);

  const prices = {
    bitcoin: btcPrice?.price,
    ethereum: ethPrice?.price,
    tether: usdtPrice?.price,
  };

  // Get the 5 most recent transactions
  const recentTrnxs = userTrnxs?.trnx
    ?.slice(-5) // Slice to get the last 5 transactions
    .map((trans) => {
      return (
        <div
          key={trans._id}
          className="flex justify-between items-center text-xs"
        >
          <span className="flex items-center gap-4">
            <FiArrowDownCircle className="w-5 h-5 text-green-600" />
            <span>
              <h4 className="capitalize">
                {trans.trnxType} {trans.walletType}
              </h4>
              <small>wallet balance</small>
            </span>
          </span>

          <span className="text-end text-gray-500">
            <h4
              className={`${
                trans.trnxType.includes("deposit")
                  ? "text-green-500"
                  : trans.trnxType.includes("withdrawal")
                  ? "text-red-500"
                  : trans.trnxType.includes("swap")
                  ? "text-blue-500"
                  : ""
              } font-medium`}
            >
              {trans.amount} USD
            </h4>
            <small>
              {(parseFloat(trans.amount) / prices[trans.walletType]).toFixed(2)}{" "}
              {trans.walletType.includes("bitcoin")
                ? "BTC"
                : trans.walletType.includes("ethereum")
                ? "ETH"
                : trans.walletType.includes("tether")
                ? "USDT"
                : null}
            </small>
          </span>
        </div>
      );
    });

  useEffect(() => {
    if (accessToken) {
      dispatch(getUsertrnxs());
      dispatch(getCoinData());
    }
  }, [accessToken, dispatch]);

  return (
    <div className="h-64 rounded-xl border border-slate-800 dark:border-none bg-black dark:bg-white shadow-xl">
      <div className="flex justify-between items-center p-4 capitalize">
        <h2 className="text-sm lg:text-lg font-medium whitespace-nowrap">
          recent activity
        </h2>
        <small>sort by: current week</small>
      </div>
      <hr className="border border-slate-700 dark:border-slate-300" />
      <div className=" h-full p-4 ">
        <div className="px-4 py-2 space-y-4">
          {recentTrnxs?.length === 0 ? (
            <p>You have no transactions.</p>
          ) : (
            recentTrnxs
          )}
        </div>
      </div>
    </div>
  );
};

export default RecentActivity;
