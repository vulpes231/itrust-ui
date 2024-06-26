import React from "react";

const Status = {
  pending: "pending",
  completed: "completed",
  failed: "failed",
};

const Datatable = ({ headers, data }) => {
  return (
    <div className="overflow-hidden border border-gray-200 rounded-lg shadow-md">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 text-xs text-center">
          <thead className="bg-white dark:bg-slate-950 dark:text-slate-200">
            <tr className="divide-x divide-gray-200">
              {headers?.map((header) => (
                <th
                  key={header.id}
                  className="px-4 py-2 text-sm font-medium capitalize text-gray-800"
                >
                  {header.name}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white dark:bg-slate-950 dark:text-slate-200 divide-y divide-gray-200">
            {data?.map((dt) => (
              <tr key={dt.id} className="divide-x divide-gray-200 ">
                {headers?.map((header) => (
                  <td
                    key={`${dt.id}-${header.id}`}
                    className="px-4 py-3 text-sm capitalize"
                  >
                    {header.name === "date"
                      ? dt.date
                      : header.name === "coin"
                      ? dt.method.toUpperCase()
                      : header.name === "amount"
                      ? `$${dt.amount}`
                      : header.name === "status" && (
                          <span
                            className={`inline-block px-2 py-1 rounded-full text-xs font-semibold ${
                              dt.status === Status.pending
                                ? "bg-yellow-200 text-yellow-800"
                                : dt.status === Status.failed
                                ? "bg-red-200 text-red-800"
                                : dt.status === Status.completed
                                ? "bg-green-200 text-green-800"
                                : ""
                            }`}
                          >
                            {dt.status}
                          </span>
                        )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Datatable;
