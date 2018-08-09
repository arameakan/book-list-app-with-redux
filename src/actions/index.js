export const selectBook = book => ({
  // selectBook is an ActionCreator, it needs
  // to return an object with a type
  type: "SELECTED_BOOK",
  payload: book
});
