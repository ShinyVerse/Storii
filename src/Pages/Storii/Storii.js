import React, { useEffect, useState, useRef } from "react";

import openSocket from "socket.io-client";

import { connect } from "react-redux";
import { loadUser } from "../../actions/auth";
import { getStorii } from "../../actions/storii";
import { setAlert, clearAlert } from "../../actions/alert";
import { Entry } from "../../components/Entry/Entry";
import { entryForm } from "../../components/Form/utilities/FormFarm";

import { List } from "../../components/List/List";

const ws = openSocket(process.env.STORII_SERVER_URL);

export const Storii = ({
  loadUser,
  setAlert,
  clearAlert,
  user,
  storii,
  getStorii,
  history,
}) => {
  const bottomOfEntries = useRef(null);
  const [entries, setEntries] = useState([]);

  const scrollToBottom = (scrollType = "smooth") => {
    bottomOfEntries.current.scrollIntoView({
      behavior: scrollType,
      block: "end",
    });
  };

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
      if (process.env.NODE_ENV === "production") {
        await getStorii("5eec96f102ac44ab161b3b14");
      } else {
        await getStorii("5ec66337ac935260a11e1388");
      }
    } catch (err) {
      setAlert(err.msg);
    }
  };

  useEffect(() => {
    ws.on("new-message", (message) => {
      if (user) {
        if (message.writer._id === user._id) {
          setTimeout(() => {
            scrollToBottom();
          }, 100);
        } else {
          setAlert("new message!", "event");
          setTimeout(() => {
            clearAlert();
          }, 2000);
        }
      }

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
      setTimeout(() => {
        scrollToBottom("auto");
      }, 200);
    }
  }, [storii]);

  const handleSubmit = (state) => {
    ws.emit("message", state);
    scrollToBottom();
  };

  return (
    <div className="splitview-container-start">
      <div className="scrollable-container">
        {storii && (
          <List items={entries} Component={Entry} refName={bottomOfEntries} />
        )}
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
  clearAlert,
})(Storii);
