import React from "react";
import { connect } from "react-redux";
import { loadUser } from "../../actions/auth";
import { setAlert } from "../../actions/alert";
import { Entry } from "../../components/Entry/Entry";
import { Form } from "../../components/Form/Form";

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
      <Entry penName="Sally" content="HELLLLOOOOOOOO" />
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
