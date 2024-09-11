import React, { useEffect, useState } from "react";
import Box from "./Box";
import Balance from "./Balance";
import { getAccessToken } from "../../constants";
import { useDispatch, useSelector } from "react-redux";
import { getUserAccount, getUserBalance } from "../../features/walletSlice";

const Account = ({ username }) => {
  const dispatch = useDispatch();
  const [totalBalance, setTotalBalance] = useState(0);

  const accessToken = getAccessToken();

  const {
    userAccounts,
    getAccountLoading,
    getAccountError,
    getBalLoading,
    getBalError,
    userBalance,
  } = useSelector((state) => state.wallet);

  useEffect(() => {
    if (accessToken) {
      dispatch(getUserAccount());
      dispatch(getUserBalance());
    }
  }, [accessToken, dispatch]);

  useEffect(() => {
    const calculateTotal = () => {
      const btc = parseFloat(userBalance.btcBalance);
      const eth = parseFloat(userBalance.ethBalance);
      const usdt = parseFloat(userBalance.usdtBalance);
      const total = btc + eth + usdt;
      setTotalBalance(total.toFixed(2));
    };

    calculateTotal();
  }, [userBalance]);
  return (
    <div className="flex flex-wrap -m-3">
      <div className="bg-slate-800 rounded-md border border-slate-800 p-5 w-full md:max-w-[50%]  lg:max-w-[25%]">
        <div className="flex flex-col">
          <div className="flex items-center gap-3">
            <h6 className="font-bold text-xl w-max bg-gradient-to-r from-blue-300 to-pink-500 text-transparent bg-clip-text">
              Welcome
            </h6>
            <span className="font-bold text-white capitalize">{username}</span>
          </div>

          <div className="flex gap-x-6 mt-4">
            <div className="">
              <div className="text-xs text-slate-300 mt-1 capitalize">
                overall balance
              </div>
              <div className="text-base font-bold text-slate-100 mt-1">
                ${totalBalance}
              </div>
            </div>
            <div className="">
              <div className="text-xs text-slate-300 mt-1 capitalize">
                trading balance
              </div>
              <div className="text-base font-bold text-slate-100 mt-1">
                ${userAccounts?.account?.tradingBalance.toFixed(2)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
