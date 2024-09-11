import React, { useEffect, useState, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TitleContext } from "../contexts/TitleContext";
import { getAccessToken } from "../constants";
import { Link, useNavigate } from "react-router-dom";
import { Section } from "../components";
import { MdArrowDownward } from "react-icons/md";
import { btcs, rew } from "../assets";
import Fundedmodal from "../components/Fundedmodal";

const Rewarcard = ({ img, smallText, bigText }) => {
  return (
    <div className="flex items-center justify-between border border-slate-800 dark:border-none shadow-xl rounded-lg bg-black dark:bg-white p-6">
      <div className="flex gap-10 items-center">
        <img src={img} alt="" className="w-[60px]" />
        <span>
          <h5>{smallText}</h5>
          <h3 className="font-bold text-sm">{bigText}</h3>
        </span>
      </div>
      <Link className="flex underline text-purple-500 items-center">
        Learn more <MdArrowDownward />{" "}
      </Link>
    </div>
  );
};

const Rewards = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { changeTitle } = useContext(TitleContext);
  const accessToken = getAccessToken();
  const [fundedModal, setFundedModal] = useState(false);

  const handleFundModal = () => {
    setFundedModal(true);
  };
  const closeFundModal = () => {
    setFundedModal(false);
  };

  useEffect(() => {
    changeTitle("Quadx - Rewards");

    if (!accessToken) {
      navigate("/signin");
    }
  }, [accessToken]);

  return (
    <Section>
      <div className="lg:max-w-[1100px] lg:mx-auto  font-[Montserrat]">
        <div className="w-full py-10 text-xs flex gap-6 justify-between">
          <span className="flex flex-col md:flex-row justify-between items-center gap-6 ">
            <h3 className="text-sm lg:text-2xl capitalize font-bold">
              Rewards
            </h3>
            <button
              onClick={handleFundModal}
              className="bg-purple-500 rounded-sm text-white py-2.5 px-6 font-medium capitalize"
            >
              get funded
            </button>
          </span>
          <span className="flex items-center gap-2 justify-end">
            Dashboard<span>{">"} Rewards</span>
          </span>
        </div>
        <div className=" w-full py-10 text-xs grid lg:grid-cols-3 gap-6 p-2">
          <div className="flex flex-col md:col-span-2 gap-6">
            <Rewarcard
              img={rew}
              smallText={"Offered by Investments"}
              bigText={"Get a free stock. Limitations apply"}
            />
            <Rewarcard
              img={btcs}
              smallText={"Offered by Investments"}
              bigText={"250k crypto bonus"}
            />
          </div>
          <div className="flex flex-col gap-2 border border-slate-800 dark:border-none shadow-xl rounded-lg bg-black dark:bg-white">
            <h3 className="p-6 text-sm font-bold">Your referral link</h3>
            <hr className="border border-slate-700 dark:border-slate-300" />
            <span className="p-6 flex flex-col gap-4">
              <input
                type="text"
                placeholder="https://quadx.io/register?ref=User"
                readOnly
                className="py-2.5 bg-slate-200 text-slate-950 px-4"
              />
              <button className="bg-green-500 text-white py-2.5 rounded-md font-semibold shadow-xl ">
                Copy link
              </button>
              <hr className="border border-slate-700 dark:border-slate-300" />
              <button className="bg-cyan-400 text-white py-2.5 rounded-md font-semibold shadow-xl ">
                Share on X
              </button>
            </span>
            <hr className="border border-slate-700 dark:border-slate-300" />
            <span className="p-6">
              Stock referral rewards limited to $500 total per user per year
            </span>
          </div>
        </div>
      </div>
      {fundedModal && <Fundedmodal closeModal={closeFundModal} />}
    </Section>
  );
};

export default Rewards;
