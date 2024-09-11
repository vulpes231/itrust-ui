import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAccessToken } from "../../constants";
import { getUserTrades } from "../../features/tradeSlice";

const Tradinghistory = () => {
  const dispatch = useDispatch();
  const { trades } = useSelector((state) => state.trade);

  const accessToken = getAccessToken();

  const myTrades = trades?.trades?.map((trade, index) => {
    const [date, time] = trade.date.split(" ");
    return (
      <tr
        key={trade._id}
        className={`capitalize text-xs font-light ${
          index % 2 !== 0
            ? `bg-black dark:bg-white`
            : `bg-slate-900 dark:bg-slate-100`
        }`}
      >
        <td className="px-4 py-3 whitespace-nowrap ">{trade.botName}</td>
        <td className="px-4 py-3 whitespace-nowrap ">
          <span className="flex flex-col">
            <span>{date}</span>
            <span>{time}</span>
          </span>
        </td>
        <td className="px-4 py-3 whitespace-nowrap ">{trade.amountTraded}</td>
        <td className="px-4 py-3 whitespace-nowrap ">{trade.pair}</td>
        <td className="px-4 py-3 whitespace-nowrap ">{trade.roi}</td>
        <td className="px-4 py-3 whitespace-nowrap ">{trade.status}</td>
      </tr>
    );
  });

  useEffect(() => {
    dispatch(getUserTrades());
  }, [accessToken]);
  return (
    <div className="flex flex-col gap-4 dark:bg-white bg-slate-950 border-slate-800">
      <div className="flex justify-between items-center p-4">
        <h3 className="text-lg font-medium capitalize">recent trades</h3>
        <button
          className={`text-xs bg-purple-500 text-white px-4 py-1 rounded-3xl `}
        >
          See all
        </button>
      </div>
      {/* <hr /> */}
      <div className="overflow-x-scroll">
        <table className="min-w-full text-xs divide-y divide-gray-800 border-collapse border bg-black">
          <thead className="text-left">
            <tr className="capitalize bg-white text-black dark:bg-slate-800 dark:text-white font-medium ">
              <th className="px-4 py-3 whitespace-nowrap ">copy bot</th>
              <th className="px-4 py-3 whitespace-nowrap">date</th>
              <th className="px-4 py-3 whitespace-nowrap">amount traded</th>
              <th className="px-4 py-3 whitespace-nowrap">pair</th>
              <th className="px-4 py-3 whitespace-nowrap">roi</th>
              <th className="px-4 py-3 whitespace-nowrap">status</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {trades ? myTrades : <tr>You have no trades</tr>}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Tradinghistory;
