import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsertrnxs } from "../../features/transactionSlice";
import { getAccessToken, getSingleCoinPrice } from "../../constants";
import { btc, eth, tether } from "../../assets";

const Trans = ({ activeSection }) => {
  const dispatch = useDispatch();
  const { userTrnxs } = useSelector((state) => state.transaction);
  const { coinData } = useSelector((state) => state.coin);
  const accessToken = getAccessToken();

  useEffect(() => {
    if (accessToken) {
      dispatch(getUsertrnxs());
    }
  }, [dispatch, accessToken]);

  const filteredTrns = userTrnxs?.trnx?.filter((trn) =>
    trn.trnxType.includes(activeSection)
  );

  const btcPrice = getSingleCoinPrice("btc", coinData);
  const ethPrice = getSingleCoinPrice("eth", coinData);
  const usdtPrice = getSingleCoinPrice("usdt", coinData);

  const prices = {
    bitcoin: btcPrice?.price,
    ethereum: ethPrice?.price,
    tether: usdtPrice?.price,
  };

  const myTrns = filteredTrns?.map((trn, index) => {
    return (
      <tr
        key={trn._id}
        className={`capitalize text-xs font-light ${
          index % 2 ? "bg-gray-100" : "bg-white "
        }`}
      >
        <td className="px-2 py-3 text-center whitespace-nowrap">{trn.date}</td>
        <td className="px-2 py-3 text-center whitespace-nowrap flex items-center justify-center">
          {trn.walletType.includes("bitcoin") ? (
            <span className="flex gap-2 items-center">
              <img src={btc} alt="" className="w-[25px]" />
              <p>BTC</p>
            </span>
          ) : trn.walletType.includes("ethereum") ? (
            <span className="flex gap-2 items-center">
              <img src={eth} alt="" className="w-[20px]" />
              <p>ETH</p>
            </span>
          ) : trn.walletType.includes("tether") ? (
            <span className="flex gap-2 items-center">
              <img src={tether} alt="" className="w-[25px]" />
              <p>USDT</p>
            </span>
          ) : null}
        </td>

        <td className="px-2 py-3 text-center whitespace-nowrap">{trn._id}</td>
        <td className="px-2 py-3 text-center whitespace-nowrap">
          {trn.trnxType}
        </td>
        <td className="px-2 py-3 text-center whitespace-nowrap">
          <span>
            <p
              className={`${
                trn.trnxType.includes("deposit")
                  ? "text-green-500"
                  : trn.trnxType.includes("withdrawal")
                  ? "text-red-500"
                  : trn.trnxType.includes("swap")
                  ? "text-blue-500"
                  : ""
              } font-medium`}
            >
              ${trn.amount}
            </p>
            <small>
              {(parseFloat(trn.amount) / prices[trn.walletType]).toFixed(2)}{" "}
              {trn.walletType.includes("bitcoin")
                ? "BTC"
                : trn.walletType.includes("ethereum")
                ? "ETH"
                : trn.walletType.includes("tether")
                ? "USDT"
                : null}
            </small>
          </span>
        </td>
        <td className="px-2 py-3 text-center ">
          <span
            className={` px-4 py-1 text-xs font-medium rounded-xl ${
              trn.status.includes("completed")
                ? "bg-green-100 text-green-500"
                : trn.status.includes("pending")
                ? "bg-yellow-100 text-yellow-500"
                : "bg-red-100 text-red-500"
            }`}
          >
            {trn.status}
          </span>
        </td>
      </tr>
    );
  });

  return (
    <div className="flex flex-col gap-4 border dark:bg-white bg-slate-900 dark:border-slate-200 border-slate-800 rounded-xl">
      <div className="flex justify-between items-center capitalize py-2 px-5">
        <h3 className="text-sm lg:text-lg font-medium">Recent transactions</h3>
        <span className="flex gap-2 items-center">
          <small>sort by</small>
          <select name="" className="p-1 capitalize text-xs bg-transparent">
            <option value="">all</option>
          </select>
        </span>
      </div>
      <div className="overflow-auto">
        <table className="min-w-full text-xs divide-x-2 divide-gray-200 border-collapse ">
          <thead>
            <tr className="capitalize font-medium">
              <th className="px-2 py-3">date</th>
              <th className="px-2 py-3">coin</th>
              <th className="px-2 py-3">transaction ID</th>
              <th className="px-2 py-3">type</th>
              <th className="px-2 py-3">amount</th>
              <th className="px-2 py-3">status</th>
            </tr>
          </thead>
          <tbody>{myTrns}</tbody>
        </table>
      </div>
    </div>
  );
};

export default Trans;
