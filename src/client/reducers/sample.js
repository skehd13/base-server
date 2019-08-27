import { SAMPLE, HELLO } from "../actions/sample";

const sampleReducer = (state = { isFetching: false, data: [] }, action) => {
  switch (action.type) {
    case SAMPLE:
      return Object.assign({}, state, {
        isFetching: true,
        data: action.data
      });
    case HELLO:
      return Object.assign({}, state, {
        isFetching: true,
        data: action.data
      });

    default:
      return state;
  }
};

export { sampleReducer };
