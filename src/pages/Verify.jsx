import React, { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { verifyAccount } from "../features/verifySlice";
import { Link, useNavigate } from "react-router-dom";
import { TitleContext } from "../contexts/TitleContext";
import { getAccessToken } from "../constants";

const initialState = {
  passport: null,
  idFront: null,
  idBack: null,
  utility: null,
};

const Verify = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [form, setForm] = useState(initialState);
  const { changeTitle } = useContext(TitleContext);

  const accessToken = getAccessToken();

  const { verifyLoading, verifyError, verified } = useSelector(
    (state) => state.verify
  );

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    if (files.length > 0) {
      setForm((prevForm) => ({
        ...prevForm,
        [name]: files[0],
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    for (const key in form) {
      if (form[key]) {
        formData.append(key, form[key]);
      }
    }

    dispatch(verifyAccount(formData));
  };

  const resetForm = () => {
    setForm(initialState);
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
    <div className="min-h-screen flex flex-col items-center justify-center p-6">
      <div className="dark:bg-white bg-slate-900 text-white dark:text-slate-950 p-8 rounded-lg shadow-lg w-full max-w-3xl">
        <h1 className="text-3xl font-bold mb-6">Verify your account</h1>
        <form
          className="space-y-6"
          onSubmit={handleSubmit}
          encType="multipart/form-data"
        >
          <div>
            <label className="block text-lg font-medium mb-2">
              Upload Passport
            </label>
            <input
              type="file"
              name="passport"
              accept=".jpg,.jpeg,.png"
              onChange={handleFileChange}
              className="block w-full text-sm text-purple-700 file:mr-4 file:py-2 file:px-4 file:border file:border-gray-300 file:rounded-md file:text-white file:bg-purple-600 hover:file:bg-purple-700"
            />
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-lg font-medium mb-2">
                Upload Government issued ID - Front
              </label>
              <input
                type="file"
                name="idFront"
                accept=".jpg,.jpeg,.png"
                onChange={handleFileChange}
                className="block w-full text-sm text-purple-700 file:mr-4 file:py-2 file:px-4 file:border file:border-gray-300 file:rounded-md file:text-white file:bg-purple-600 hover:file:bg-purple-700"
              />
            </div>

            <div>
              <label className="block text-lg font-medium mb-2">
                Upload Government issued ID - Back
              </label>
              <input
                type="file"
                name="idBack"
                accept=".jpg,.jpeg,.png"
                onChange={handleFileChange}
                className="block w-full text-sm text-purple-700 file:mr-4 file:py-2 file:px-4 file:border file:border-gray-300 file:rounded-md file:text-white file:bg-purple-600 hover:file:bg-purple-700"
              />
            </div>
          </div>

          <div>
            <label className="block text-lg font-medium mb-2">
              Upload Utility Bill{" "}
              <small className="font-thin text-xs">
                (*Not less than 6 months)
              </small>
            </label>
            <input
              type="file"
              name="utility"
              accept=".jpg,.jpeg,.png"
              onChange={handleFileChange}
              className="block w-full text-sm text-purple-700 file:mr-4 file:py-2 file:px-4 file:border file:border-gray-300 file:rounded-md file:text-white file:bg-purple-600 hover:file:bg-purple-700"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 px-4 bg-purple-600 text-white font-semibold rounded-md shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
          >
            {!verifyLoading ? "Submit" : "Submitting documents..."}
          </button>
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
