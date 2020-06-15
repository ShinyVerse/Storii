import React from "react";
import { Form } from "../Form";

export const registerForm = (handleSubmit, setFormType) => {
  return (
    <Form
      initState={{
        penName: "laursy",
        email: "laursy@laura.com",
        password: "123456",
        password2: "123456",
      }}
      btnName="create"
      handleSubmit={handleSubmit}
    >
      {({ state, onChange }) => {
        const { penName, email, password, password2 } = state;

        return (
          <div className="form-wrapper">
            <label className="label" htmlFor="penName">
              Pen Name:
            </label>
            <input
              className="form-child input"
              name="penName"
              onChange={onChange}
              value={penName}
              type="text"
              required
            />
            <label className="label" htmlFor="email">
              Email:
            </label>
            <input
              className="form-child input"
              name="email"
              onChange={onChange}
              value={email}
              type="email"
              required
            />
            <label className="label" htmlFor="">
              Password:
            </label>
            <input
              className="form-child input"
              name="password"
              onChange={onChange}
              value={password}
              type="password"
              required
              minLength="6"
            />
            <label className="label" htmlFor="password2">
              Confirm password:
            </label>
            <input
              className="form-child input"
              name="password2"
              onChange={onChange}
              value={password2}
              type="password"
              required
              minLength="6"
            />
            <p className="form-child link-note">
              Already a writer? ...
              <a onClick={() => setFormType("login")}>
                <span className="highlight">Click here</span>
              </a>
            </p>
          </div>
        );
      }}
    </Form>
  );
};

export const loginForm = (handleSubmit, setFormType) => {
  return (
    <Form
      initState={{
        email: "laursy@laura.com",
        password: "123456",
      }}
      btnName="login"
      handleSubmit={handleSubmit}
    >
      {({ state, onChange }) => {
        const { email, password } = state;

        return (
          <div className="form-wrapper">
            <label className="label" htmlFor="email">
              Email:
            </label>
            <input
              className="form-child input"
              name="email"
              onChange={onChange}
              value={email}
              type="email"
              required
            />
            <label className="label" htmlFor="">
              Password:
            </label>
            <input
              className="form-child input"
              name="password"
              onChange={onChange}
              value={password}
              type="password"
              required
              minLength="6"
            />

            <p className="form-child link-note">
              Not yet a writer? ...
              <a onClick={() => setFormType("register")}>
                <span className="highlight">Click here</span>
              </a>
            </p>
          </div>
        );
      }}
    </Form>
  );
};