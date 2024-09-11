import React from "react";

const Trade = () => {
  return (
    <div className="flex flex-col gap-4 dark:bg-white bg-slate-950 border-slate-800">
      <div className="flex justify-between items-center capitalize py-2 px-5">
        <h3 className="text-lg font-medium">trade history</h3>
        <span className="flex gap-2 items-center">
          <small>sort by</small>
          <select name="" className="p-1 capitalize text-xs bg-transparent">
            <option value="">all</option>
          </select>
        </span>
      </div>
      <div className="overflow-auto min-h-[400px]">
        <table className="min-w-full text-xs divide-y divide-gray-800 border-collapse border bg-black">
          <thead>
            <tr className="capitalize bg-white text-black dark:bg-slate-800 dark:text-white font-medium ">
              <th className="px-2 py-3">copy bot</th>
              <th className="px-2 py-3">date</th>
              <th className="px-2 py-3">amount traded</th>
              <th className="px-2 py-3">account</th>
              <th className="px-2 py-3">pair</th>
              <th className="px-2 py-3">ROI</th>
              <th className="px-2 py-3">status</th>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
      </div>
    </div>
  );
};

export default Trade;
