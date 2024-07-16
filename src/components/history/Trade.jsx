import React from "react";

const Trade = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between items-center">
        <h3>trade history</h3>
        <span className="flex gap-2 items-center">
          <small>sort by</small>
          <select name="" id="">
            <option value="">all</option>
          </select>
        </span>
      </div>
      <div className="overflow-auto min-h-[400px]">
        <table className="min-w-full text-xs divide-x-2 divide-gray-200 border-collapse border border-gray-300">
          <thead>
            <tr className="capitalize bg-gray-300 font-medium text-gray-500 ">
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
