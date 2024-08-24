import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changePassword } from "../features/userSlice";

const intitialState = {
  password: "",
  confirmNewPass: "",
  newPassword: "",
};

const styles = {
  input: `outline-none w-full p-2 border-2 bg-transparent placeholder:capitalize placeholder:font-thin placeholder:text-xs`,
  label: `capitalize text-slate-400 text-sm`,
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
    <form action="" className="flex flex-col gap-2 pt-5">
      <h4 className="text-xs lg:text-lg font-medium capitalize">
        Change password
      </h4>
      <div className="grid md:grid-cols-2 gap-4">
        <div className="flex flex-col gap-1">
          <label className={styles.label} htmlFor="">
            current password
          </label>
          <input
            type="text"
            placeholder="current password"
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
            placeholder="new password"
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
            placeholder="confirm password"
            onChange={handleInput}
            value={form.confirmNewPass}
            name="confirmNewPass"
            className={styles.input}
          />
        </div>
      </div>
      {error && <p className="text-red-500">{error}</p>}
      {passwordChanged && (
        <p className="text-green-500">password updated successfully.</p>
      )}
      <button
        className="bg-purple-500 text-white border-none py-2.5 w-[180px] text-center rounded-3xl capitalize font-medium text-sm"
        onClick={handleSubmit}
      >
        {!changeLoading ? "change password" : "wait..."}
      </button>
    </form>
  );
};

export default Changepass;
