import "./App.css";
import NameTag from "./components/nameTag";
import React from "react";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="name title">Names List</h1>
        {/* reusable components and props */}
        <NameTag firstName="lokesh" lastName="Jawale"/>
        <NameTag firstName="akshay" lastName="Pharagade"/>
        <NameTag firstName="kumodini" lastName="upadhaye"/>
        <NameTag></NameTag>
      </header>

    </div>
  );
};

export default App;
