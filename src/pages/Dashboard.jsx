import React, { useContext, useEffect, useState } from "react";
import { TitleContext } from "../contexts/TitleContext";
import { Account } from "../components";
import { Link, useNavigate } from "react-router-dom";
import Slider from "../components/dash/Slider";
import Section from "../components/Section";
import Currencies from "../components/dash/Currencies";

import { coins, getAccessToken } from "../constants";
import { useDispatch, useSelector } from "react-redux";
import { getCoinData } from "../features/coinSlice";
import { styles } from "../constants/styles";
import { getUser } from "../features/userSlice";

const Dashboard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { changeTitle } = useContext(TitleContext);
  const { coinData } = useSelector((state) => state.coin);
  const { user } = useSelector((state) => state.user);
  const [currentIndex, setCurrentIndex] = useState(0);

  const accessToken = getAccessToken();

  // console.log(user);

  useEffect(() => {
    changeTitle("Quadx - Dashboard");
    if (!accessToken) {
      // window.location.href = "/signin";
      navigate("/signin");
    } else {
      dispatch(getCoinData());
      dispatch(getUser());
    }
  }, [accessToken]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === coins.length - 1 ? 0 : prevIndex + 1
      );
    }, 6000); // Update every minute

    return () => clearInterval(interval);
  }, []);

  return (
    <Section>
      <div className="container px-3 font-[Montserrat] space-y-4">
        <div className="mb-7 flex justify-between items-center -mx-3">
          <div className="px-3">
            <h2 className="text-xl font-bold  mb-2">Overview</h2>
            <ul className="inline-flex items-center text-xs font-medium text-slate-500 dark:text-slate-300 gap-2">
              <li>Home </li>
              <li className="inline-flex items-center mt-0.5">{`>`}</li>
              <li className="capitalize">{user?.username}</li>
            </ul>
          </div>
          {!user?.isKYCVerified && (
            <p className="flex flex-col items-center">
              <span className="text-red-500">
                {" "}
                Account status: Not verified
              </span>
              <Link to={"/verify"} className="underline text-xs cursor-pointer">
                complete verification.
              </Link>
            </p>
          )}
          <div className="px-3">
            <button
              className={`inline-flex justify-center items-center font-medium transition-all text-sm px-5 py-2 gap-3 rounded-md ${styles.hover.lightBg}  text-white ${styles.colors.primaryBgColor} `}
            >
              Deposit
            </button>
          </div>
        </div>
        <>
          <Account username={user?.username} />
        </>
        <>
          <Slider coinData={coinData} currentIndex={currentIndex} />
        </>
        <>
          <Currencies coinData={coinData} />
        </>
      </div>
    </Section>
  );
};

export default Dashboard;
