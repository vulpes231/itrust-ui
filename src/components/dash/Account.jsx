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
      <Box>
        <div className="bg-slate-800 rounded-md border border-slate-800 p-5 h-full">
          <div className="flex flex-col isolate relative h-full">
            <div className=" absolute end-0 top-0"></div>
            <div className="mb-auto">
              <h6 className="font-bold text-xl w-max bg-gradient-to-r from-blue-300 to-pink-500 text-transparent bg-clip-text">
                Welcome
              </h6>
              <div className="font-bold text-sm text-white mt-2 capitalize">
                Mr. {username}
              </div>
              <div></div>
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
      </Box>
    </div>
  );
};

export default Account;
