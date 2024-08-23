import React, { useEffect, useState, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TitleContext } from "../contexts/TitleContext";
import { getAccessToken } from "../constants";
import { Link, useNavigate } from "react-router-dom";
import { Section } from "../components";
import { getPlans } from "../features/planSlice";
import { getUser } from "../features/userSlice";

const Nocontent = () => {
  return (
    <div className="flex items-center justify-center h-full ">
      <img src="" alt="" />
      <small>error fetching plans</small>
    </div>
  );
};

const Plans = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const accessToken = getAccessToken();
  const { changeTitle } = useContext(TitleContext);

  const { plans } = useSelector((state) => state.plan);
  const { user } = useSelector((state) => state.user);

  useEffect(() => {
    changeTitle("Quadx - Plans");

    if (!accessToken) {
      navigate("/signin");
    }
  }, [accessToken]);

  useEffect(() => {
    if (accessToken) {
      dispatch(getPlans());
      dispatch(getUser());
    }
  }, [dispatch, accessToken]);
  return (
    <Section>
      <div className="lg:max-w-[1100px] lg:mx-auto flex flex-col gap-5 ">
        <div className="flex justify-between items-center capitalize">
          <h3>My Plan</h3>
          <p>current plan: {user?.plan}</p>
        </div>

        <div className="min-h-[500px] capitalize bg:slate-900 dark:bg-white">
          {plans?.length < 1 ? (
            <Nocontent />
          ) : (
            <div className="bg:slate-900 dark:bg-white">
              <table className="min-w-full font-thin text-xs">
                <thead>
                  <tr>
                    <th> title</th>
                    <th> subtitle</th>
                    <th> more info</th>
                  </tr>
                </thead>
              </table>
            </div>
          )}
        </div>
      </div>
    </Section>
  );
};

export default Plans;
