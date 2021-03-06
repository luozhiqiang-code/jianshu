import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";

class Write extends PureComponent {
  render() {
    const { loginStatus } = this.props;
    if (loginStatus) {
      return <div>write</div>;
    } else {
      return <Navigate to="/login" />;
    }
  }
}

const mapState = (state) => ({
  loginStatus: state.getIn(["login", "login"]),
});

export default connect(mapState, null)(Write);
