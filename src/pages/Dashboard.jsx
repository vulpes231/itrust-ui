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
import Identitystepone from "./Identitystepone";
import Verify from "./Verify";

const Dashboard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { changeTitle } = useContext(TitleContext);
  const { coinData } = useSelector((state) => state.coin);
  const { user } = useSelector((state) => state.user);
  const [currentIndex, setCurrentIndex] = useState(0);

  const accessToken = getAccessToken();

  const [verifyIdentityModal, setVerifyIdentityModal] = useState(false);
  const [verifyStepTwo, setVerifyStepTwo] = useState(false);

  const handleStep = (e) => {
    e.preventDefault();
    setVerifyIdentityModal(false);
    setVerifyStepTwo(true);
  };
  const cancelVerify = () => {
    setVerifyStepTwo(false);
  };

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

          <div className="px-3">
            <Link
              to={"/wallet"}
              className={`inline-flex justify-center items-center font-medium transition-all text-sm px-5 py-2 gap-3 rounded-md ${styles.hover.lightBg}  text-white ${styles.colors.primaryBgColor} `}
            >
              Deposit
            </Link>
          </div>
        </div>
        <div className={`grid md:grid-cols-3  `}>
          {!user?.isKYCVerified && (
            <span
              className={`capitalize rounded-lg flex flex-col gap-4 col-span-2 `}
            >
              {user?.KYCStatus == "not verified" ? (
                <div className="flex flex-col gap-4 border-red-500 border p-4">
                  <h4 className="font-bold">verify your identity</h4>
                  <p className="w-[80%] lowercase text-white dark:text-slate-900 text-sm">
                    Kindly complete your profile and upload a photo of your
                    state ID, driver's license or passport so we can finish
                    processing your application.
                  </p>
                  <button
                    type="button"
                    onClick={() => setVerifyIdentityModal(true)}
                    className={`text-xs cursor-pointer text-purple-500 capitalize ${
                      user?.KYCStatus === "not verified" ? "flex" : "hidden"
                    }  `}
                  >
                    upload document now
                  </button>
                </div>
              ) : (
                <div className="border-yellow-500 border p-4 font-medium text-sm md:text-lg lg:w-[60%]">
                  <p>Document uploaded and pending approval</p>
                </div>
              )}
            </span>
          )}
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
        {verifyIdentityModal && <Identitystepone step={handleStep} />}
        {verifyStepTwo && <Verify cancelVerify={cancelVerify} />}
      </div>
    </Section>
  );
};

export default Dashboard;
