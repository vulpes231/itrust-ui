import React, { useState } from "react";

const styles = {
  input: `w-full border border-slate-700 dark:border-slate-200 bg-transparent p-2 outline-none focus:outline-purple-500 focus:border-none`,
  select: `w-full border border-slate-700 dark:border-slate-200 bg-transparent p-2 outline-none focus:outline-purple-500 focus:border-none`,
  textarea: `w-full border border-slate-700 dark:border-slate-200 bg-transparent p-2 outline-none focus:outline-purple-500 focus:border-none`,
  label: `capitalize font-medium`,
};

const accounts = ["Basic IRA", "Offshore account"];

const Fundedmodal = ({ closeModal }) => {
  const [form, setForm] = useState({
    account: "",
    reason: "",
    code: "",
    amount: "",
  });

  const [error, setError] = useState(false);

  const handleChange = (e) => {
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

  const handleReset = () => {
    setForm({
      account: "",
      reason: "",
      code: "",
      amount: "",
    });
  };
  return (
    <div className="w-full h-screen fixed top-0 left-0 flex items-center pb-10 pt-20 bg-black bg-opacity-30">
      <div className="h-full dark:bg-white bg-black w-full lg:max-w-[32%] lg:mx-auto">
        <div>
          <h3 className="p-6 capitalize font-bold text-sm">request funds</h3>
          <hr />
          <form action="" className="flex flex-col gap-4 p-6">
            <div>
              <label htmlFor="" className={styles.label}>
                amount
              </label>
              <input
                name="amount"
                onChange={handleChange}
                value={form.amount}
                type="text"
                className={styles.input}
              />
            </div>
            <div>
              <label htmlFor="" className={styles.label}>
                code
              </label>
              <input
                name="code"
                onChange={handleChange}
                value={form.code}
                type="text"
                className={styles.input}
              />
            </div>
            <div>
              <label htmlFor="" className={styles.label}>
                reason
              </label>
              <textarea
                name="reason"
                onChange={handleChange}
                value={form.reason}
                className={styles.textarea}
                rows={8}
              ></textarea>
            </div>
            <div className="flex justify-end gap-4">
              <button
                onClick={closeModal}
                className="bg-gray-500 py-2 px-6 text-white rounded-lg"
              >
                cancel
              </button>
              <button
                onClick={handleSubmit}
                className="bg-purple-500 py-2 px-6 text-white rounded-lg"
              >
                confirm
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Fundedmodal;
