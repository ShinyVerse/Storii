import React from "react";
import { connect } from "react-redux";
import { loadUser } from "../../actions/auth";
import { setAlert } from "../../actions/alert";
import { Entry } from "../../components/Entry/Entry";
import { Form } from "../../components/Form/Form";

import { List } from "../../components/List/List";

const entries = [
  {
    writer: {
      penName: "Sally",
    },
    content: "HELLLLOOOOOOOO",
  },
  {
    writer: {
      penName: "Bob",
    },
    content: "Oh hi",
  },
  {
    writer: {
      penName: "Lilly",
    },
    content: "I love spaghetti",
  },
];

export const Storii = ({ loadUser, setAlert, user = true, history }) => {
  const isAuthenticated = async () => {
    if (user) {
      return true;
    }
    try {
      await loadUser();
      return true;
    } catch (err) {
      setAlert(err.msg);
      history.push("/LandingPage");
    }
  };

  const handleSubmit = (state) => {
    console.log(state);
  };

  return (
    <div>
      <List items={entries} Component={Entry} />
      {isAuthenticated() && (
        <Form
          initState={{
            content: "",
            penName: "Unknown",
          }}
          btnName="add"
          handleSubmit={handleSubmit}
        >
          {({ state, onChange }) => {
            return (
              <div>
                <textarea
                  name="content"
                  onChange={onChange}
                  value={state.content}
                ></textarea>
              </div>
            );
          }}
        </Form>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: state.auth.user,
});

export default connect(mapStateToProps, {
  loadUser,
  setAlert,
})(Storii);
