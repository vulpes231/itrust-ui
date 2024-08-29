import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changePassword } from "../features/userSlice";

const intitialState = {
  password: "",
  confirmNewPass: "",
  newPassword: "",
};

const styles = {
  input: `outline-none w-full p-2 border bg-transparent placeholder:capitalize placeholder:font-thin placeholder:text-xs focus:border-none focus:outline-purple-500 order border-slate-600 dark:border-slate-200`,
  label: `capitalize text-sm font-medium`,
};

const Changepass = () => {
  const dispatch = useDispatch();
  const [form, setForm] = useState(intitialState);
  const [error, setError] = useState(false);
  const { changeLoading, changeError, passwordChanged } = useSelector(
    (state) => state.user
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
    if (form.newPassword !== form.confirmNewPass) {
      setError("passwords do not match!");
    }

    const data = {
      password: form.password,
      newPassword: form.newPassword,
    };
    dispatch(changePassword(data));
  };

  useEffect(() => {
    if (changeError) {
      setError(error);
    }
  }, [changeError]);

  useEffect(() => {
    let timeout;
    if (error) {
      timeout = 3000;
      setTimeout(() => {
        setError(false);
      }, timeout);
    }
    return () => clearTimeout(timeout);
  }, [error]);

  useEffect(() => {
    let timeout;
    if (passwordChanged) {
      timeout = 2000;
      setTimeout(() => {
        window.location.reload();
      }, timeout);
    }
    return () => clearTimeout(timeout);
  }, [passwordChanged]);
  return (
    <form action="" className="flex flex-col gap-2 bg-black dark:bg-white">
      <h4 className="text-xs lg:text-lg font-semibold capitalize p-6">
        password update
      </h4>
      <hr className="order border-slate-600 dark:border-slate-200" />
      <div className="grid gap-4 p-6">
        <div className="flex flex-col gap-1">
          <label className={styles.label} htmlFor="">
            current password
          </label>
          <input
            type="text"
            onChange={handleInput}
            value={form.password}
            name="password"
            className={styles.input}
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className={styles.label} htmlFor="">
            new password
          </label>
          <input
            type="text"
            onChange={handleInput}
            value={form.newPassword}
            name="newPassword"
            className={styles.input}
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className={styles.label} htmlFor="">
            confirm password
          </label>
          <input
            type="text"
            onChange={handleInput}
            value={form.confirmNewPass}
            name="confirmNewPass"
            className={styles.input}
          />
        </div>
      </div>
      {error && <p className="text-red-500 px-3">{error}</p>}
      {passwordChanged && (
        <p className="text-green-500">password updated successfully.</p>
      )}
      <button
        className="bg-purple-500 text-white border-none py-2.5 w-[140px] text-center rounded-sm capitalize font-medium text-sm mt-5 shadow-xl m-6"
        onClick={handleSubmit}
      >
        {!changeLoading ? "update" : "wait..."}
      </button>
    </form>
  );
};

export default Changepass;
