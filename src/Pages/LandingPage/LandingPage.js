import React, { useState, useEffect } from "react";
import { HeaderWithText } from "../../components/HeaderWithText/HeaderWithText";
import { Image } from "../../components/Image/Image";
import { Form } from "../../components/Form/Form";

import img from "../../assets/img/iconLong.png";

import { connect } from "react-redux";

import { registerForm, loginForm } from "../../Utilities/FormFarm";
import { registerUser, loginUser } from "../../actions/auth";
import { setAlert } from "../../actions/alert";

const LandingPage = ({ registerUser, setAlert, loginUser, history, token }) => {
  useEffect(() => {
    if (token) history.push("/storii");
  }, [token]);

  const [formType, setFormType] = useState("login");

  const checkFormIsPopulated = (state) => {
    for (let [key, value] of Object.entries(state)) {
      if (value === "") {
        setAlert("you need to fill in the form");
        return false;
      }
    }
    return true;
  };

  const checkPassword = ({ password, password2 }) => {
    if (password === password2) {
      return true;
    }
    setAlert("PASSWORDS NOT THE SAME");
    return false;
  };

  const handleSubmit = async (formData) => {
    if (!checkFormIsPopulated(formData)) return;

    if (formType === "register") {
      if (!checkPassword(formData)) return;

      await registerUser(formData);
      return;
    }

    await loginUser(formData);
  };

  return (
    <div>
      <HeaderWithText header="Storii" />
      <Image src={img} type="long" alt="storii join instructions" />

      {formType === "register" && (
        <div>{registerForm(handleSubmit, setFormType)}</div>
      )}

      {formType === "login" && (
        <div>{loginForm(handleSubmit, setFormType)}</div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  token: state.auth.token,
});

export default connect(mapStateToProps, {
  registerUser,
  loginUser,
  setAlert,
})(LandingPage);
