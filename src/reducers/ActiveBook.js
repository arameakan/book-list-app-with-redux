// State argument is not application state,
// only the state this reducer is responsible for
export default (state = null, action) => {
  switch (action.type) {
    case "SELECTED_BOOK":
      return action.payload;
    default:
      return state;
  }
};
