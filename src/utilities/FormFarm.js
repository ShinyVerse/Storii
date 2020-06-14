import React from "react";
import { Form } from "../components/Form/Form";

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
          <div>
            <label htmlFor="penName">Pen Name:</label>
            <input
              name="penName"
              onChange={onChange}
              value={penName}
              type="text"
              required
            />
            <label htmlFor="email">Email:</label>
            <input
              name="email"
              onChange={onChange}
              value={email}
              type="email"
              required
            />
            <label htmlFor="">Password:</label>
            <input
              name="password"
              onChange={onChange}
              value={password}
              type="password"
              required
              minLength="6"
            />
            <label htmlFor="password2">Confirm password:</label>
            <input
              name="password2"
              onChange={onChange}
              value={password2}
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
          <div>
            <label htmlFor="email">Email:</label>
            <input
              name="email"
              onChange={onChange}
              value={email}
              type="email"
              required
            />
            <label htmlFor="">Password:</label>
            <input
              name="password"
              onChange={onChange}
              value={password}
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
  );
};
