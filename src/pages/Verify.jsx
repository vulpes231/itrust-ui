import React, { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { verifyAccount } from "../features/verifySlice";
import { Link, useNavigate } from "react-router-dom";
import { TitleContext } from "../contexts/TitleContext";
import { getAccessToken } from "../constants";
import { MdCancel, MdCheck } from "react-icons/md";
import Fileupload from "../components/Fileupload";

const initialState = {
  passport: null,
};

const whats = [
  "Be a clear, color image",
  "Show the entire page, including your face",
  "Show all four corners",
];
const whatnots = [
  "Scans, copies, or screenshots",
  "U.S. military ID and trusted traveller cards",
  "Employment authorization documents",
  "Documents not from the U.S. government",
];

const Verify = ({ cancelVerify }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [form, setForm] = useState(initialState);
  const { changeTitle } = useContext(TitleContext);

  const [file, setFile] = useState(null);

  const accessToken = getAccessToken();

  const { verifyLoading, verifyError, verified } = useSelector(
    (state) => state.verify
  );

  const handleFileUpload = (uploadedFile) => {
    setFile(uploadedFile);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (file) {
      const formData = new FormData();
      formData.append("passport", file);

      dispatch(verifyAccount(formData));
    }
  };

  const resetForm = () => {
    setForm(initialState);
    setFile(null);
  };

  useEffect(() => {
    let timeout;
    if (verified) {
      timeout = 2000;
      resetForm();
      setTimeout(() => {
        navigate("/dash");
      }, timeout);
    }
    return () => clearTimeout(timeout);
  }, [verified]);

  useEffect(() => {
    changeTitle("Quadx - Verify Account");

    if (!accessToken) {
      navigate("/signin");
    }
  }, [accessToken]);

  return (
    <div className="w-full h-screen flex items-center justify-center bg-black bg-opacity-40 absolute top-0 left-0 overflow-hidden font-[Montserrat]">
      <div className="flex flex-col dark:bg-white bg-black border border-slate-700 dark:border-none w-full md:w-[700px] lg:-mt-20">
        <h3 className="capitalize font-bold p-4">
          Upload a photo of your ID/ Driver's License / Passport
        </h3>
        <div className="p-4">
          <p>
            Please ensure the entire document is in the frame and information is
            legible.{" "}
          </p>
          <div className="flex flex-col md:flex-row gap-10 font-thin text-xs">
            <ul className="flex flex-col gap-1">
              <li>Your photo must:</li>
              {whats.map((wh, index) => {
                return (
                  <li className="flex items-center gap-1" key={index}>
                    {
                      <MdCheck className="bg-green-500 text-white rounded-full w-4 h-4" />
                    }{" "}
                    {wh}
                  </li>
                );
              })}
            </ul>
            <ul className="flex flex-col gap-1">
              <li>we can't accept:</li>
              {whatnots.map((wh, index) => {
                return (
                  <li className="flex items-center gap-1" key={index}>
                    {
                      <MdCancel className="bg-red-500 text-white rounded-full w-4 h-4 p-0.5" />
                    }
                    {wh}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <form
          className="p-6"
          onSubmit={handleSubmit}
          encType="multipart/form-data"
        >
          <Fileupload onFileUpload={handleFileUpload} />

          <div className="flex items-center justify-center py-4 gap-4">
            <button
              type="submit"
              className="w-[200px] py-2.5 px-4 bg-purple-600 text-white font-semibold rounded-sm shadow-md hover:bg-purple-700 whitespace-nowrap"
            >
              {!verifyLoading ? "Upload" : "Uploading document..."}
            </button>
            <button
              onClick={() => {
                resetForm();
                cancelVerify();
              }}
              type="submit"
              className="w-[200px] py-2.5 px-4 bg-purple-600 text-white font-semibold rounded-sm shadow-md hover:bg-purple-700 whitespace-nowrap"
            >
              Cancel
            </button>
          </div>
        </form>

        {verifyError && (
          <div className="mt-4 text-red-500">
            <p>Error: {verifyError}</p>
          </div>
        )}
        {verified && (
          <div className="absolute top-[30%] right-0 text-yellow-500">
            <p>verification pending</p>
            <Link className="underline" to={"/dash"}>
              go to account
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Verify;
