import React from "react";
import { connect } from "react-redux";
import { getHello } from "../actions/sample";
import baseComponent from "../utils/baseComponent";

class HelloApp extends baseComponent {
  constructor(props) {
    super(props);
    this.props.getHello();
  }
  render() {
    return <div>{this.props.data}</div>;
  }
}

function mapStateToProps(state) {
  const { sampleReducer } = state;
  const { data } = sampleReducer;
  return {
    data
  };
}

const mapDispatchToProps = dispatch => {
  return {
    getHello: () => {
      dispatch(getHello());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HelloApp);
