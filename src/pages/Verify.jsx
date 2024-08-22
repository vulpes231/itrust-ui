// src/components/Verify.jsx
import React from "react";

const Verify = () => {
  return (
    <div className=" min-h-screen flex flex-col items-center justify-center p-6">
      <div className=" dark:bg-white bg-slate-900 text-white dark:text-slate-950 p-8 rounded-lg shadow-lg w-full max-w-3xl">
        <h1 className="text-3xl font-bold mb-6">Verify your account</h1>
        <form className="space-y-6">
          <div>
            <label className="block text-lg font-medium mb-2">
              Upload Passport
            </label>
            <input
              type="file"
              accept=".jpg,.jpeg,.png"
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
                accept=".jpg,.jpeg,.png"
                className="block w-full text-sm text-purple-700 file:mr-4 file:py-2 file:px-4 file:border file:border-gray-300 file:rounded-md file:text-white file:bg-purple-600 hover:file:bg-purple-700"
              />
            </div>

            <div>
              <label className="block text-lg font-medium mb-2">
                Upload Government issued ID - Back
              </label>
              <input
                type="file"
                accept=".jpg,.jpeg,.png"
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
              accept=".jpg,.jpeg,.png"
              className="block w-full text-sm text-purple-700 file:mr-4 file:py-2 file:px-4 file:border file:border-gray-300 file:rounded-md file:text-white file:bg-purple-600 hover:file:bg-purple-700"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 px-4 bg-purple-600 text-white font-semibold rounded-md shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Verify;
