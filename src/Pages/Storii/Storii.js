import React from "react";
import { connect } from "react-redux";
import { loadUser } from "../../actions/auth";
import { setAlert } from "../../actions/alert";
import { Entry } from "../../components/Entry/Entry";

export const Storii = ({ loadUser, setAlert, user, history }) => {
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
  return <div>{isAuthenticated() && <Entry />}</div>;
};

const mapStateToProps = (state) => ({
  user: state.auth.user,
});
export default connect(mapStateToProps, {
  loadUser,
  setAlert,
})(Storii);
