import "./App.css";
import NameTag from "./components/nameTag";
import UseStateExample from "./components/useStateExample";
import React from "react";
import  ComplexState from "./components/complexState";

//Higher Order Components

const makeGreen = BaseComponent => props => {
  const addGreen = {
    style: {
      color: "green"
    }
  }
  const newProps = {
    ...props,...addGreen
  }
  return <BaseComponent {...newProps}/>
}

const removeInline = BaseComponent => props  => {
  const newProps = {...props};
  delete newProps.style;
  return <BaseComponent {...newProps}/>
}

const GreenNameTag = makeGreen(NameTag);
const CleanNameTag = removeInline(NameTag);
const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="name title">Names List</h1>
        {/* reusable components and props */}
        <GreenNameTag firstName="lokesh" lastName="Jawale"/>
        <CleanNameTag style={{color:"red"}} firstName="akshay" lastName="Pharagade"/>
        <NameTag style= {{color:"red"}}firstName="kumodini" lastName="upadhaye"/>
        <NameTag></NameTag>
        <UseStateExample/>
        <ComplexState/>
      </header>

    </div>
  );
};

export default App;
