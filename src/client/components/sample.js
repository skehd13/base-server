import React from "react";
import { connect } from "react-redux";
import { getSample } from "../actions/sample";
import baseComponent from "../utils/baseComponent";

class SampleApp extends baseComponent {
  constructor(props) {
    super(props);
    this.props.getSample();
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
    getSample: () => {
      dispatch(getSample());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SampleApp);
