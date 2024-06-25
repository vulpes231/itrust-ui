import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserAccounts } from "../features/walletSlice";
import { getAccessToken } from "../constants";

const Wallet = () => {
  const dispatch = useDispatch();
  const accessToken = getAccessToken();
  const { userAccounts, getAccountLoading, getAccountError } = useSelector(
    (state) => state.wallet
  );

  const [totalBalance, setTotalBalance] = useState(0);

  useEffect(() => {
    document.title = "Quadx - Wallet";
  }, []);

  useEffect(() => {
    if (accessToken) {
      dispatch(getUserAccounts());
    }
  }, [accessToken, dispatch]);

  // useEffect(() => {
  //   if (userAccounts) {
  //     calculateTotalBalance(userAccounts);
  //   }
  // }, [userAccounts]);

  // const calculateTotalBalance = (account) => {
  //   let total = parseFloat(account.tradingBalance);
  //   account.assets.forEach((asset) => {
  //     total += parseFloat(asset.balance);
  //   });
  //   setTotalBalance(total.toFixed(2));
  // };

  if (getAccountLoading) {
    return <div className="min-h-screen mt-10 p-6">Loading...</div>; // Display loading indicator while fetching data
  }

  if (getAccountError) {
    return (
      <div className="min-h-screen mt-10 p-6">Error: {getAccountError}</div>
    ); // Display error message if fetching fails
  }

  return (
    <div className="min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Total Balance */}
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-4">Total Balance</h2>
          <p className="text-xl font-bold">${totalBalance}</p>
        </div>

        {/* Trading Balance */}
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-4">Trading Balance</h2>
          <p className="text-xl font-bold">${userAccounts?.tradingBalance}</p>
        </div>

        {/* Assets */}
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-4">Assets</h2>
          {/* {userAccounts?.assets.map((asset, index) => (
            <div key={index} className="flex justify-between">
              <span className="font-semibold">
                {asset.coinName} ({asset.shortName})
              </span>
              <span className="font-bold">${asset.balance}</span>
            </div>
          ))} */}
        </div>
      </div>
    </div>
  );
};

export default Wallet;
