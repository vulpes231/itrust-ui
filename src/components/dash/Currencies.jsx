import React from "react";
import { FaArrowTrendDown, FaArrowTrendUp } from "react-icons/fa6";
const Currencies = ({ coinData }) => {
  return (
    <section className="grid lg:grid-cols-3 gap-5 text-slate-900 dark:text-slate-200">
      {/* my currencies */}
      <div className="lg:col-span-2  bg-white dark:bg-slate-950 rounded-lg border border-slate-200 dark:border-slate-800 p-4 w-full space-y-5 overflow-hidden">
        <span className="flex justify-between items-center">
          <h4>My currencies</h4>
          <span className="flex items-center text-xs font-normal gap-2">
            <button className="bg-gray-200 dark:bg-slate-200 p-2  text-slate-900 dark:text-slate-900">
              24H
            </button>
            <button className="bg-gray-200 dark:bg-slate-200 p-2 text-slate-900 dark:text-slate-900">
              Get report
            </button>
          </span>
        </span>
        <div className="overflow-x-scroll lg:overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
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
            <tbody className=" divide-y divide-gray-200">
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
                      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Trade
                      </button>
                    </td>
                  </tr>
                );
              })}
              {/* <tr>
                <td className="px-4 py-4 whitespace-nowrap text-xs font-medium ">
                  Bitcoin
                </td>
                <td className="px-4 py-4 whitespace-nowrap text-xs ">66,000</td>
                <td className="px-4 py-4 whitespace-nowrap text-xs text-green-500">
                  0.20%
                </td>
                <td className="px-4 py-4 whitespace-nowrap text-xs ">0.00</td>
                <td className="px-4 py-4 whitespace-nowrap text-xs ">0.0000</td>
                <td className="px-4 py-4 whitespace-nowrap text-xs font-medium">
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Trade
                  </button>
                </td>
              </tr> */}
              {/* Additional rows can be added here */}
            </tbody>
          </table>
        </div>
      </div>
      {/* trading */}
      <div className=" bg-white dark:bg-slate-950 rounded-lg border border-slate-200 dark:border-slate-800 p-4 w-full">
        <form action="" className="flex flex-col">
          <span className="flex justify-between items-center">
            <h4>Trading</h4>
            <span>
              <button>buy</button>
              <button>sell</button>
            </span>
          </span>
          <span className="flex justify-between items-center">
            <h4>Buy coin</h4>
            <h4>USD Balance: $0.00</h4>
          </span>
          {/* buy form */}
          <div></div>
          {/* sell form */}
        </form>
      </div>
    </section>
  );
};

export default Currencies;
