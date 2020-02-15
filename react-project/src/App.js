import React from "react";
import "./App.css";
import NavBar from "./components/navbar";
import Items from "./components/itemlist/items";
import Posts from "./components/post_section/posts";

function App() {
  return (
    <div>
      <NavBar />
      <div className="d-flex mt-3">
        <Items />
        <Posts />
      </div>
    </div>
  );
}

export default App;
