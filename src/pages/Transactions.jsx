import React, { useContext, useEffect } from "react";
import { TitleContext } from "../contexts/TitleContext";
import { getAccessToken } from "../constants";
import { History, Section } from "../components";
import { styles } from "../constants/styles";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getUser } from "../features/userSlice";

const Transactions = () => {
  const dispatch = useDispatch();
  const accessToken = getAccessToken();
  const { changeTitle } = useContext(TitleContext);
  const { user } = useSelector((state) => state.user);
  useEffect(() => {
    changeTitle("Quadx - History");

    if (!accessToken) {
      navigate("/signin");
    } else {
      dispatch(getUser());
    }
  }, [accessToken]);

  if (user?.isKYCVerified !== true) {
    return (
      <Section>
        <div className="flex items-center justify-center flex-col">
          <p>Verify your account to access the full application features.</p>
          <Link className="underline text-xs font-thin" to={"/verify"}>
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
            <h2 className="text-xl font-bold mb-2">History</h2>
            <ul className="inline-flex items-center text-xs font-medium gap-2">
              <li>Home </li>
              <li className="inline-flex items-center mt-0.5">{`>`}</li>
              <li>{user?.username}</li>
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
        <div>
          <History />
        </div>
      </div>
    </Section>
  );
};

export default Transactions;
