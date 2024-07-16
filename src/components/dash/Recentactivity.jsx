import React, { useEffect, useState } from "react";
import { FiArrowDownCircle, FiArrowUpCircle } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { getUsertrnxs } from "../../features/transactionSlice";
import { getAccessToken, getSingleCoinPrice } from "../../constants";
import { getCoinData } from "../../features/coinSlice";

const RecentActivity = () => {
  const { userTrnxs } = useSelector((state) => state.transaction);
  const { coinData } = useSelector((state) => state.coin);
  // const [coinPrice, setCoinPrice] = useState(prices);

  // console.log(coinPrice);

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

  const myTrnx = userTrnxs?.trnx?.map((trans) => {
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
          <h4 className="text-green-500">{trans.amount} USD</h4>
          <small>
            {(parseFloat(trans.amount) / prices[trans.walletType]).toFixed(4)}{" "}
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
  }, [accessToken]);

  return (
    <div className="h-64 bg-white dark:bg-slate-950 rounded-lg border border-slate-200 dark:border-slate-800  overflow-auto text-slate-950 dark:text-slate-200">
      <div className="flex justify-between items-center p-4 capitalize">
        <h2 className="text-xl font-bold">recent activity</h2>
        <small>sort by: current week</small>
      </div>
      <hr />
      <div className=" h-full p-4 ">
        <div className="px-4 py-2 space-y-4">{myTrnx}</div>
      </div>
    </div>
  );
};

export default RecentActivity;
