import React, { useEffect } from "react";

import { connect } from "react-redux";

import "./Alert.scss";

export const Alert = ({ alert: { message, type = "danger" } }) => {
  const alertStatus = () => {
    if (message) {
      return (
        <div className={`alert ${type}`} data-test="alert">
          {message}
        </div>
      );
    }
    return null;
  };

  return <div>{alertStatus()}</div>;
};

const mapStateToProps = (state) => ({
  alert: state.alert,
});

export default connect(mapStateToProps)(Alert);
