import React, { useEffect, useState, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TitleContext } from "../contexts/TitleContext";
import { getAccessToken } from "../constants";
import { Link, useNavigate } from "react-router-dom";
import { Section } from "../components";
import { getUserDocuments } from "../features/docuSlice";

const Nocontent = () => {
  return (
    <div className="flex items-center justify-center h-full ">
      <img src="" alt="" />
      <small>you have no documents.</small>
    </div>
  );
};

const Docs = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const accessToken = getAccessToken();
  const { changeTitle } = useContext(TitleContext);

  const { userDocs } = useSelector((state) => state.docu);

  useEffect(() => {
    changeTitle("Quadx - Documents");

    if (!accessToken) {
      navigate("/signin");
    }
  }, [accessToken]);

  useEffect(() => {
    if (accessToken) {
      dispatch(getUserDocuments());
    }
  }, [dispatch, accessToken]);
  return (
    <Section>
      <div className="lg:max-w-[1100px] lg:mx-auto flex flex-col gap-5 ">
        <div className="flex justify-between items-center">
          <h3>My Documents</h3>
          <p>Total: {userDocs?.length}</p>
        </div>
        <div className="min-h-[500px] capitalize bg:slate-900 dark:bg-white">
          {userDocs?.length < 1 ? (
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

export default Docs;
