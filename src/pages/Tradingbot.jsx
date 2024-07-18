import React, { useContext, useEffect } from "react";
import { TitleContext } from "../contexts/TitleContext";
import { getAccessToken } from "../constants";
import { Analytics, Section } from "../components";
import { styles } from "../constants/styles";
import Bots from "../components/dash/Bots";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getAllBots, getUserBots } from "../features/botSlice";

const Tradingbot = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const accessToken = getAccessToken();
  const { changeTitle } = useContext(TitleContext);

  const { userBots, bots } = useSelector((state) => state.bot);

  const username = sessionStorage.getItem("username");

  useEffect(() => {
    changeTitle("Quadx - Trading Bots");

    if (!accessToken) {
      navigate("/signin");
    } else {
      dispatch(getAllBots());
      dispatch(getUserBots());
    }
  }, [accessToken]);

  return (
    <Section>
      <div className="container px-3 font-[Montserrat] space-y-4">
        <div className="mb-7 flex justify-between items-center -mx-3">
          <div className="px-3">
            <h2 className="text-xl font-bold text-slate-700 dark:text-white mb-2">
              Trading Bots
            </h2>
            <ul className="inline-flex items-center text-xs font-medium text-slate-500 dark:text-slate-300 gap-2">
              <li>Home </li>
              <li className="inline-flex items-center mt-0.5">{`>`}</li>
              <li>{username}</li>
            </ul>
          </div>
          <div className="px-3">
            <button
              className={`inline-flex justify-center items-center font-medium transition-all text-sm px-5 py-2 gap-3 rounded-md ${styles.hover.lightBg}  text-white ${styles.colors.primaryBgColor} `}
            >
              Deposit
            </button>
          </div>
        </div>
        {/* content */}
        <>
          <Analytics />
        </>
        <div className="grid md:grid-cols-4 gap-6 p-6">
          <div className="grid sm:grid-cols-3 col-span-3 gap-4">
            <Bots title={"Available BOTS"} name={"add bot"} botData={bots} />
            <Bots title={"Available BOTS"} name={"add bot"} botData={bots} />
            <Bots title={"Active BOTS"} name={"active"} botData={userBots} />
          </div>
          <div className="flex flex-col gap-4">
            <h5 className="bg-white dark:bg-slate-950 dark:text-slate-200 p-2 capitalize text-center text-xs">
              add bots
            </h5>
            <form action="" className="flex flex-col gap-4 text-xs ">
              <div className="flex justify-between gap-2">
                <div className="w-full">
                  <label htmlFor="">Account</label>
                  <select
                    name=""
                    id=""
                    className="bg-white p-2 dark:bg-slate-950 dark:text-slate-200 w-full"
                  >
                    <option value="balance">account balance</option>
                  </select>
                </div>
                <div className="w-full">
                  <label htmlFor="" className="font-medium">
                    Coin
                  </label>
                  <select
                    name=""
                    id=""
                    className="bg-white p-2 dark:bg-slate-950 dark:text-slate-200 w-full uppercase"
                  >
                    <option value="btc">btc</option>
                    <option value="eth">eth</option>
                    <option value="usdt">usdt</option>
                  </select>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Tradingbot;
