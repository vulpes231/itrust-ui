import React, { useContext, useEffect, useRef, useState } from "react";
import { TitleContext } from "../contexts/TitleContext";
import { getAccessToken } from "../constants";
import { Analytics, Section } from "../components";
import { styles } from "../constants/styles";
import Bots from "../components/dash/Bots";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { getAllBots, getUserBots } from "../features/botSlice";
import { getUserAccount } from "../features/walletSlice";
import Botform from "../components/trading/Botform";
import Activebot from "../components/trading/Activebots";
import { getUser } from "../features/userSlice";

const Tradingbot = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const accessToken = getAccessToken();
  const { changeTitle } = useContext(TitleContext);
  const [showBorder, setShowBorder] = useState(false);

  const { user } = useSelector((state) => state.user);

  const { userBots, bots } = useSelector((state) => state.bot);
  const { userAccounts, getAccountLoading, getAccountError } = useSelector(
    (state) => state.wallet
  );

  const formRef = useRef(null);

  const handleBotClick = (e) => {
    e.preventDefault();
    console.log("bot clicked");
    if (formRef.current) {
      // console.log(formRef.current);
      setShowBorder(true);
    }
  };

  const username = sessionStorage.getItem("username");

  useEffect(() => {
    changeTitle("Quadx - Trading Bots");

    if (!accessToken) {
      navigate("/signin");
    } else {
      dispatch(getAllBots());
      dispatch(getUserBots());
      dispatch(getUserAccount());
      dispatch(getUser());
    }
  }, [accessToken]);

  useEffect(() => {
    let timeout;
    if (showBorder) {
      timeout = 10000;
      setTimeout(() => {
        setShowBorder(false);
      }, timeout);
      return () => clearTimeout(timeout);
    }
  }, [showBorder]);

  if (user?.isKYCVerified !== true) {
    return (
      <Section>
        <div className="flex items-center justify-center flex-col">
          <p>Verify your account to access the full application features.</p>
          <Link
            className={`"underline text-xs font-thin ${
              user?.KYCStatus !== "not verified" ? "hidden" : "flex"
            }`}
            to={"/verify"}
          >
            complete verification now
          </Link>
        </div>
      </Section>
    );
  }

  return (
    <Section>
      <div className="container px-3 font-[Montserrat] space-y-4">
        <div className="mb-7 flex justify-between items-center -mx-3">
          <div className="px-3">
            <h2 className="text-xl font-bold mb-2">Trading Bots</h2>
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
        <div className="grid md:grid-cols-4 gap-6 ">
          <div className="grid sm:grid-cols-3 col-span-3 gap-4">
            <Bots
              title={"Available BOTS"}
              name={"add bot"}
              botData={bots}
              handleClick={handleBotClick}
            />
            <Bots
              title={"Available BOTS"}
              name={"add bot"}
              botData={bots}
              handleClick={handleBotClick}
            />
            <Activebot
              title={"Active BOTS"}
              name={"active"}
              botData={userBots}
            />
          </div>
          <div className="flex flex-col gap-4 ">
            <h3 className="bg-white text-slate-900 text-center p-3 rounded shadow font-medium text-sm capitalize">
              add bot
            </h3>
            <Botform
              userAccounts={userAccounts}
              bots={bots}
              myRef={formRef}
              activeBorder={showBorder}
            />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Tradingbot;
