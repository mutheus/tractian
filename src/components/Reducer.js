const Reducer = (state, action) => {
  switch (action.type) {
    case 'SET_ASSETS':
      return {
        ...state,
        assets: action.payload
      };
    case 'SET_STATUS':
      return {
        ...state,
        status: action.payload
      };
    case 'SET_COUNT':
      return {
        ...state,
        count: action.payload
      };
    default:
      return state;
  }
}

export default Reducer;