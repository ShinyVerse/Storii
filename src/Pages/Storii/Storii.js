import React, { useEffect, useState } from "react";

import openSocket from "socket.io-client";

import { connect } from "react-redux";
import { loadUser } from "../../actions/auth";
import { getStorii } from "../../actions/storii";
import { setAlert } from "../../actions/alert";
import { Entry } from "../../components/Entry/Entry";
import { Form } from "../../components/Form/Form";

import { List } from "../../components/List/List";

const ws = openSocket("http://localhost:4000");

export const Storii = ({
  loadUser,
  setAlert,
  user,
  storii,
  getStorii,
  history,
}) => {
  const [entries, setEntries] = useState([]);

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

  const loadEntries = async () => {
    try {
      await getStorii("5ec66337ac935260a11e1388");
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    ws.on("new-message", (message) => {
      const updatedEntries = [...entries, message];

      setEntries(updatedEntries);
    });
  }, [entries]);

  useEffect(() => {
    loadEntries();
  }, []);

  useEffect(() => {
    setEntries(storii.entries);
  }, [storii]);

  const handleSubmit = (state) => {
    ws.emit("message", state);
  };

  return (
    <div>
      {storii && <List items={entries} Component={Entry} />}

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
  storii: state.storii,
});

export default connect(mapStateToProps, {
  getStorii,
  loadUser,
  setAlert,
})(Storii);
