import React, { useEffect, useState } from "react";

import openSocket from "socket.io-client";

import { connect } from "react-redux";
import { loadUser } from "../../actions/auth";
import { setAlert } from "../../actions/alert";
import { Entry } from "../../components/Entry/Entry";
import { Form } from "../../components/Form/Form";

import { List } from "../../components/List/List";

const staticEntries = [
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

const ws = openSocket("http://localhost:4000");
ws.on("new-message", (message) => {
  console.log("INSIDESHFAODJFAO", message);
});

export const Storii = ({ loadUser, setAlert, user, history }) => {
  const [entries, setEntries] = useState(staticEntries);

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

  useEffect(() => {
    ws.on("new-message", (message) => {
      const updatedEntries = [...entries, message];
      setEntries(updatedEntries);
    });
  }, [entries]);

  const handleSubmit = (state) => {
    console.log("HEFE", state);

    ws.emit("message", state);
  };
  console.log("USER!", { ...user });

  return (
    <div>
      <List items={entries} Component={Entry} />

      {isAuthenticated() && user && (
        <Form
          initState={{
            content: "",
            writer: { ...user },
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
