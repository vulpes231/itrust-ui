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
            <Link
              to={"/wallet"}
              className={`inline-flex justify-center items-center font-medium transition-all text-sm px-5 py-2 gap-3 rounded-md ${styles.hover.lightBg}  text-white ${styles.colors.primaryBgColor} `}
            >
              Deposit
            </Link>
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
