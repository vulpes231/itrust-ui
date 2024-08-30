import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAccessToken } from "../../constants";
import { getUserTrades } from "../../features/tradeSlice";

const Tradinghistory = () => {
  const dispatch = useDispatch();
  const { trades } = useSelector((state) => state.trade);

  const accessToken = getAccessToken();

  const myTrades = trades?.trades?.map((trade) => {
    const [date, time] = trade.date.split(" ");
    return (
      <tr key={trade._id} className="capitalize">
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
    <div className="dark:bg-white bg-slate-950 rounded-lg border border-slate-700 dark:border-none">
      <div className="flex justify-between items-center p-4">
        <h3 className="capitalize font-medium text-md">recent trades</h3>
        <button
          className={`text-xs bg-purple-500 text-white px-2 py-1 rounded-sm `}
        >
          See all
        </button>
      </div>
      {/* <hr /> */}
      <div className="overflow-x-scroll">
        <table className="text-xs min-w-full">
          <thead className="text-left">
            <tr className=" capitalize bg-slate-700 dark:bg-slate-200">
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
