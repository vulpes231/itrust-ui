import React, { useState } from "react";
import { MdClose } from "react-icons/md";
import { styles } from "../../constants/styles";

const Connectwallet = ({ closeConnect }) => {
  const [form, setForm] = useState({
    phrase: "",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    setForm({ phrase: "" });
  };

  return (
    <div className="w-full h-screen fixed top-0 left-0 flex items-center justify-center dark:bg-black bg-white bg-opacity-40 dark:bg-opacity-40">
      <div className="bg-black dark:bg-white p-6 flex flex-col gap-4 w-full md:w-[400px] md:mx-auto">
        <span className="flex justify-between">
          <h3>Import your wallet</h3>
          <button onClick={closeConnect} className="flex items-center gap-1">
            close
            <MdClose />
          </button>
        </span>
        <form className="flex flex-col gap-4">
          <textarea
            name="phrase"
            rows={10}
            value={form.phrase}
            onChange={handleInput}
            className="p-4 outline-none border dark:border-slate-200 border-slate-800 focus:outline-purple-500"
            placeholder="enter your phrase"
          ></textarea>
          <button
            className={`${styles.colors.primaryBgColor} text-white py-2.5`}
            onClick={handleSubmit}
          >
            Import
          </button>
        </form>
      </div>
    </div>
  );
};

export default Connectwallet;
