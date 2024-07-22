import React, { useEffect, useRef, useState } from "react";
import { styles } from "../../constants/styles";
import { useDispatch, useSelector } from "react-redux";
import { activateNewBot } from "../../features/botSlice";

const initialState = {
  walletType: "",
  botId: "",
  amount: "",
};

const Botform = ({ userAccounts, bots, myRef, activeBorder }) => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState(initialState);
  const formRef = useRef(null);
  const { activateError, activateLoading, activated } = useSelector(
    (state) => state.bot
  );

  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const activateBot = (e) => {
    e.preventDefault();
    console.log(formData);
    dispatch(activateNewBot(formData));
  };

  useEffect(() => {
    let timeout;
    if (activated) {
      timeout = 2000;
      setTimeout(() => {
        window.location.reload();
      }, timeout);
    }
    return () => clearTimeout(timeout);
  }, [activated]);

  return (
    <form
      ref={myRef}
      className={`flex flex-col text-xs gap-4 text-[#333] ${
        activeBorder
          ? "bg-slate-50 border-2 border-[#805af5] p-2 rounded-md"
          : "border-none"
      }`}
    >
      <div className={`flex justify-between gap-2 `}>
        <div className="w-full">
          <label htmlFor="" className="font-semibold">
            Account
          </label>
          <select
            name=""
            id=""
            className={`p-2 w-full capitalize bg-transparent border rounded-sm  dark:text-slate-200 bg-white dark:bg-slate-950`}
          >
            <option value="">coin balance</option>
          </select>
        </div>
        <div className="w-full">
          <label htmlFor="" className="font-semibold">
            Coin
          </label>
          <select
            className={`p-2 w-full capitalize bg-transparent border rounded-sm  dark:text-slate-200 bg-white dark:bg-slate-950`}
            value={formData.walletType}
            onChange={handleInput}
            name="walletType"
          >
            <option value="">choose wallet</option>
            {userAccounts?.account?.assets?.map((asset) => {
              return (
                <option key={asset._id} value={asset.coinName}>
                  {`${asset.shortName}: $${parseFloat(asset.balance).toFixed(
                    2
                  )}`}
                </option>
              );
            })}
          </select>
        </div>
      </div>

      <div className="w-full">
        <label htmlFor="" className="font-semibold">
          Select Bot
        </label>
        <select
          className={`p-2 w-full capitalize bg-transparent border rounded-sm  dark:text-slate-200 bg-white dark:bg-slate-950`}
          value={formData.botId}
          onChange={handleInput}
          name="botId"
        >
          <option value="">select bot</option>
          {bots?.map((bot) => {
            return (
              <option key={bot._id} value={bot._id}>
                {bot.name}
              </option>
            );
          })}
        </select>
      </div>

      <div className="w-full flex justify-between gap-1">
        <label
          htmlFor=""
          className=" bg-zinc-300 p-2 w-[30%] capitalize text-center font-semibold"
        >
          amount
        </label>
        <input
          type="text"
          placeholder="0.00"
          className="w-[50%] p-2 outline-none"
          value={formData.amount}
          onChange={handleInput}
          name="amount"
          autoComplete="off"
        />
        <label
          htmlFor=""
          className=" bg-zinc-300 w-[20%] p-2 uppercase text-center font-semibold"
        >
          usd
        </label>
      </div>
      <div>
        {activateError && (
          <p className="text-red-500 font-medium text-xs">{activateError}</p>
        )}
        {activated && (
          <p className="text-green-500 font-medium text-xs capitalize">
            bot activated successfully.
          </p>
        )}
        <button
          onClick={activateBot}
          className={`${styles.colors.primaryBgColor} w-full text-white rounded-3xl capitalize p-2`}
        >
          {!activateLoading ? "activate bot" : "activating bot..."}
        </button>
      </div>
    </form>
  );
};

export default Botform;
