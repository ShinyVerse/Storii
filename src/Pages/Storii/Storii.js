import React, { useEffect, useState } from "react";

import openSocket from "socket.io-client";

import { connect } from "react-redux";
import { loadUser } from "../../actions/auth";
import { getStorii } from "../../actions/storii";
import { setAlert } from "../../actions/alert";
import { Entry } from "../../components/Entry/Entry";
import { entryForm } from "../../components/Form/utilities/FormFarm";

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
    if (storii.entries) {
      setEntries(storii.entries);
    }
  }, [storii]);

  const handleSubmit = (state) => {
    ws.emit("message", state);
  };

  return (
    <div className="splitview-container-start">
      <div className="scrollable-container">
        {storii && <List items={entries} Component={Entry} />}
      </div>
      <div className="sticky-form">
        {isAuthenticated() && user && entryForm(handleSubmit, user)}
      </div>
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
