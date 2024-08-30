import React, { useState, useRef, useEffect } from "react";

const styles = {
  input: `w-full border border-slate-700 dark:border-slate-200 bg-transparent p-2 outline-none focus:outline-purple-500 focus:border-none`,
  select: `w-full border border-slate-700 dark:border-slate-200 bg-transparent p-2 outline-none focus:outline-purple-500 focus:border-none`,
  textarea: `w-full border border-slate-700 dark:border-slate-200 bg-transparent p-2 outline-none focus:outline-purple-500 focus:border-none`,
  label: `capitalize font-medium`,
};

const Fundedmodal = ({ closeModal }) => {
  const [form, setForm] = useState({
    account: "",
    reason: "",
    code: "",
    amount: "",
  });

  const [error, setError] = useState(false);
  const modalRef = useRef();

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

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        closeModal();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [closeModal]);

  return (
    <div className="w-full h-screen fixed top-0 left-0 flex items-center pb-10 pt-20 bg-black bg-opacity-30">
      <div
        ref={modalRef}
        className="h-full dark:bg-white bg-black w-full lg:max-w-[32%] lg:mx-auto"
      >
        <div>
          <h3 className="p-6 capitalize font-bold text-sm">request funds</h3>
          <hr />
          <form action="" className="flex flex-col gap-4 p-6">
            <div>
              <label htmlFor="amount" className={styles.label}>
                Amount
              </label>
              <input
                id="amount"
                name="amount"
                onChange={handleChange}
                value={form.amount}
                type="text"
                className={styles.input}
              />
            </div>
            <div>
              <label htmlFor="code" className={styles.label}>
                Code
              </label>
              <input
                id="code"
                name="code"
                onChange={handleChange}
                value={form.code}
                type="text"
                className={styles.input}
              />
            </div>
            <div>
              <label htmlFor="reason" className={styles.label}>
                Reason
              </label>
              <textarea
                id="reason"
                name="reason"
                onChange={handleChange}
                value={form.reason}
                className={styles.textarea}
                rows={8}
              ></textarea>
            </div>
            <div className="flex justify-end gap-4">
              <button
                type="button"
                onClick={closeModal}
                className="bg-gray-500 py-2 px-6 text-white rounded-lg"
              >
                Cancel
              </button>
              <button
                type="submit"
                onClick={handleSubmit}
                className="bg-purple-500 py-2 px-6 text-white rounded-lg"
              >
                Confirm
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Fundedmodal;
