import React, { useState } from "react";
import { useDispatch } from "react-redux";
const intitialState = {
  currentPassword: "",
  newPassword: "",
  confirmNewPassword: "",
};
const styles = {
  input: `outline-none w-full p-2 border-2 bg-transparent placeholder:capitalize placeholder:font-thin placeholder:text-xs`,
  label: `capitalize text-slate-400 text-sm`,
};
const Changepass = () => {
  const dispatch = useDispatch();
  const [form, setForm] = useState(intitialState);
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
  };
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
            value={form.currentPassword}
            name="currentPassword"
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
            value={form.confirmNewPassword}
            name="confirmNewPassword"
            className={styles.input}
          />
        </div>
      </div>
      <button
        className="bg-purple-500 text-white border-none py-2.5 w-[180px] text-center rounded-3xl capitalize font-medium text-sm"
        onClick={handleSubmit}
      >
        change password
      </button>
    </form>
  );
};

export default Changepass;
