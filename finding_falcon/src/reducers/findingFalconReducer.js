const initialState = { loading: false, data: [], error: "" }

const findingFalconReducer = (
    state = initialState,
    action
  ) => {
    switch (action.type) {
      case "FETCH_FIND_FALCON_REQUEST":
        return { ...state, loading: true };
      case "FETCH_FIND_FALCON_SUCCESS":
        return { ...state, loading: false, data: action.payload };
      case "FETCH_FIND_FALCON_FAILURE":
        return { ...state, loading: false, error: action.payload };
      case "RESET_FIND_FALCON":
        return { ...initialState };
      default:
        return state;
    }
  };
  
  export default findingFalconReducer;
  