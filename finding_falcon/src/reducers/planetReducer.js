const planetReducer = (
  state = { loading: false, data: [], error: "" },
  action
) => {
  switch (action.type) {
    case "FETCH_PLANETS_REQUEST":
      return { ...state, loading: true };
    case "FETCH_PLANETS_SUCCESS":
      return { ...state, loading: false, data: action.payload };
    case "FETCH_PLANETS_FAILURE":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default planetReducer;