import React, { useState } from "react";
import { HeaderWithText } from "../../components/HeaderWithText/HeaderWithText";
import { Image } from "../../components/Image/Image";
import { Form } from "../../components/Form/Form";

import img from "../../assets/img/iconLong.png";

import { connect } from "react-redux";

import { registerUser } from "../../actions/auth";

const LandingPage = ({ registerUser }) => {
  const [formType, setFormType] = useState("register");

  const checkFormIsPopulated = (state) => {
    for (let [key, value] of Object.entries(state)) {
      if (value === "") {
        return false;
      }
    }
    return true;
  };

  const checkPassword = ({ password, password2 }) => {
    if (password === password2) {
      return true;
    }
    return false;
  };

  const handleSubmit = async (state) => {
    if (!checkFormIsPopulated(state)) {
      alert("you need to fill in the form");
      return;
    }
    if (formType === "register") {
      if (!checkPassword(state)) {
        alert("PASSWORDS NOT THE SAME");
        return;
      }
    }

    await registerUser(state);
    console.log("EXAMPLE OF BIG BOY", state);
  };

  return (
    <div>
      <HeaderWithText header="Storii" />
      <Image src={img} type="long" alt="storii join instructions" />

      {formType === "register" && (
        <div>
          <Form
            initState={{
              penName: "Name",
              email: "email@email.com",
              password: "123456",
              password2: "123456",
            }}
            btnName="create"
            handleSubmit={handleSubmit}
          >
            {({ state, onChange }) => {
              const { penName, email, password, password2 } = state;

              return (
                <div>
                  <label htmlFor="penName">Pen Name:</label>
                  <input
                    name="penName"
                    onChange={onChange}
                    value={penName || ""}
                    type="text"
                    required
                  />
                  <label htmlFor="email">Email:</label>
                  <input
                    name="email"
                    onChange={onChange}
                    value={email || ""}
                    type="email"
                    required
                  />
                  <label htmlFor="">Password:</label>
                  <input
                    name="password"
                    onChange={onChange}
                    value={password || ""}
                    type="password"
                    required
                    minLength="6"
                  />
                  <label htmlFor="password2">Confirm password:</label>
                  <input
                    name="password2"
                    onChange={onChange}
                    value={password2 || ""}
                    type="password"
                    required
                    minLength="6"
                  />
                  <p>
                    Already a writer?
                    <a onClick={() => setFormType("login")}>Click here</a>
                  </p>
                </div>
              );
            }}
          </Form>
        </div>
      )}

      {formType === "login" && (
        <div>
          <Form
            initState={{
              email: "",
              password: "",
            }}
            btnName="login"
            handleSubmit={handleSubmit}
          >
            {({ state, onChange }) => {
              const { email, password } = state;

              return (
                <div>
                  <label htmlFor="email">Email:</label>
                  <input
                    name="email"
                    onChange={onChange}
                    value={email || ""}
                    type="email"
                    required
                  />
                  <label htmlFor="">Password:</label>
                  <input
                    name="password"
                    onChange={onChange}
                    value={password || ""}
                    type="password"
                    required
                    minLength="6"
                  />

                  <p>
                    Not yet a writer?
                    <a onClick={() => setFormType("register")}>Click here</a>
                  </p>
                </div>
              );
            }}
          </Form>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = () => ({});

export default connect(mapStateToProps, { registerUser })(LandingPage);
