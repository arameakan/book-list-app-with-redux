import React from "react";
import BooksList from "../containers/BooksList";
import BookDetail from "../containers/BookDetail";

const App = () => {
  return (
    <div>
      <BooksList />
      <BookDetail />
    </div>
  );
};

export default App;
