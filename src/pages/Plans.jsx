import React, { useEffect, useState, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TitleContext } from "../contexts/TitleContext";
import { getAccessToken } from "../constants";
import { Link, useNavigate } from "react-router-dom";
import { Section } from "../components";

const Plans = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const accessToken = getAccessToken();
  const { changeTitle } = useContext(TitleContext);

  useEffect(() => {
    changeTitle("Quadx - Plans");

    if (!accessToken) {
      navigate("/signin");
    }
  }, [accessToken]);
  return (
    <Section>
      <div className="lg:max-w-[1100px] lg:mx-auto">
        <h3>My Plans</h3>
      </div>
    </Section>
  );
};

export default Plans;
