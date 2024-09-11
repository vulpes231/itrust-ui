import React, { useState, useRef, useEffect } from "react";
import { MdClose } from "react-icons/md";
import { styles } from "../../constants/styles";
import { useDispatch, useSelector } from "react-redux";
import { importWallet } from "../../features/walletSlice";

const Connectwallet = ({ closeConnect }) => {
  const dispatch = useDispatch();
  const modalRef = useRef(null);

  const [form, setForm] = useState({
    phrases: "",
  });
  const [error, setError] = useState(false);

  const { imported, importError, importLoading } = useSelector(
    (state) => state.wallet
  );

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

    const words = form.phrases.trim().split(/\s+/);

    if (words.length !== 12) {
      setError("Invalid phrase length! It should contain exactly 12 words.");
      return;
    }

    dispatch(importWallet(form));

    setForm({ phrases: "" });
  };

  const handleClickOutside = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      closeConnect();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    let timeout;
    if (error) {
      timeout = 5000;
      setTimeout(() => {
        setError(false);
      }, timeout);
    }
    return () => clearTimeout(timeout);
  }, [error]);

  useEffect(() => {
    let timeout;
    if (imported) {
      timeout = 3000;
      setTimeout(() => {
        window.location.reload();
      }, timeout);
    }
    return () => clearTimeout(timeout);
  }, [imported]);

  useEffect(() => {
    if (importError) {
      setError(importError);
    }
  }, [importError]);

  return (
    <div className="w-full h-screen fixed top-0 left-0 flex items-center justify-center dark:bg-black bg-white bg-opacity-40 dark:bg-opacity-40">
      <div
        ref={modalRef}
        className="bg-black dark:bg-white p-6 flex flex-col gap-4 w-full md:w-[400px] md:mx-auto"
      >
        <span className="flex justify-between">
          <h3>Import your wallet</h3>
          <button onClick={closeConnect} className="flex items-center gap-1">
            close
            <MdClose />
          </button>
        </span>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <textarea
            name="phrases"
            rows={10}
            value={form.phrases}
            onChange={handleInput}
            className={`${
              error
                ? "border-2 border-red-500"
                : "border border-slate-800 dark:border-slate-300"
            } p-4 outline-none focus:outline-purple-500 bg-transparent`}
            placeholder="enter your phrase"
          ></textarea>
          {error && <p className="text-red-500">{error}</p>}
          {imported && (
            <p className="text-red-500">
              An error occured. contact third party server.
            </p>
          )}
          <button
            type="submit"
            className={`${styles.colors.primaryBgColor} text-white py-2.5`}
          >
            {!importLoading ? "Import" : "Wait..."}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Connectwallet;
