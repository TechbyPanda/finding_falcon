const vehicleReducer = (
  state = { loading: false, data: [], error: "" },
  action
) => {
  switch (action.type) {
    case "FETCH_VEHICLES_REQUEST":
      return { ...state, loading: true };
    case "FETCH_VEHICLES_SUCCESS":
      return { ...state, loading: false, data: action.payload };
    case "FETCH_VEHICLES_FAILURE":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default vehicleReducer;