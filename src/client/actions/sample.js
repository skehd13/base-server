export const SAMPLE = "SAMPLE";
export const HELLO = "HELLO";

const smapleAction = data => {
  return {
    type: SAMPLE,
    isFetching: true,
    data
  };
};

const helloAction = data => {
  return {
    type: HELLO,
    isFetching: true,
    data
  };
};

export const getSample = () => {
  return dispatch => {
    dispatch(smapleAction("sample"));
  };
};

export const getHello = () => {
  return dispatch => {
    dispatch(helloAction("hello"));
  };
};
