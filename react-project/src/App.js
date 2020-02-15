import React from "react";
import "./App.css";
import NavBar from "./components/navbar";
import Items from "./components/itemlist/items";
import Posts from "./components/post_section/posts";
import Popular from "./components/popular";

function App() {
  return (
    <div>
      <NavBar />
      <div className="content">
        <Items />
        <Posts />
        <Popular />
      </div>
    </div>
  );
}

export default App;
