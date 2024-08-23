import React, { useEffect, useState } from "react";
import Formspan from "./Formspan";
import Label from "./Label";
import Input from "./Input";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { createAccount } from "../features/signupSlice";
import Button from "./Button";
import Modal from "./Modal";
import { MdCheck } from "react-icons/md";

const Stepone = ({ formData, handleChange, pageSwitch }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [appError, setAppError] = useState(false);

  const { loading, error, success } = useSelector((state) => state.create);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createAccount(formData));
  };

  useEffect(() => {
    let timeout;
    if (success) {
      timeout = 3000;
      setTimeout(() => {
        pageSwitch();
      }, timeout);
    }
    () => clearTimeout(timeout);
  }, [dispatch, success]);

  useEffect(() => {
    if (error) {
      setAppError(error);
    }
  }, [error]);

  useEffect(() => {
    let timeout;
    if (appError) {
      timeout = 4000;
      setTimeout(() => {
        setAppError(false);
      }, timeout);
    }
    () => clearTimeout(timeout);
  }, [appError]);

  return (
    <div className="py-2">
      <Formspan>
        <Label title={"first name"} />
        <Input
          type={"text"}
          name="firstName"
          value={formData.firstName}
          handleChange={handleChange}
          placeHolder={"Enter Firstname"}
        />
      </Formspan>
      <Formspan>
        <Label title={"last name"} />
        <Input
          type={"text"}
          name="lastName"
          value={formData.lastName}
          handleChange={handleChange}
          placeHolder={"Enter Lastname"}
        />
      </Formspan>
      <Formspan>
        <Label title={"username"} />
        <Input
          type={"text"}
          name="username"
          value={formData.username}
          handleChange={handleChange}
          placeHolder={"Enter Username"}
        />
      </Formspan>
      <Formspan>
        <Label title={"email"} />
        <Input
          type={"text"}
          name="email"
          value={formData.email}
          handleChange={handleChange}
          placeHolder={"Enter Email"}
        />
      </Formspan>
      <Formspan>
        <Label title={"password"} />
        <Input
          type={"password"}
          name="password"
          value={formData.password}
          handleChange={handleChange}
          placeHolder={"Enter password"}
        />
      </Formspan>
      <Formspan>
        <Label title={"confirm password"} />
        <Input
          type={"password"}
          name="password2"
          value={formData.password2}
          handleChange={handleChange}
          placeHolder={"Enter password"}
        />
      </Formspan>
      <div className="pt-3">
        <Button
          type={"submit"}
          handleClick={handleSubmit}
          title={!loading ? "create account" : "creating account..."}
        />
      </div>
      {success && (
        <Modal
          message={"Account created successfully."}
          icon={<MdCheck />}
          customClass={"text-green-500"}
        />
      )}
      {appError && (
        <Modal
          message={appError}
          icon={<MdCheck />}
          customClass={"text-red-500"}
        />
      )}
    </div>
  );
};

export default Stepone;
