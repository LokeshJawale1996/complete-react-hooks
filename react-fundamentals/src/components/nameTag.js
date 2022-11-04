import React from "react";

const nameTag = (props) => {
  //destructing props
  // const {firstName,lastName}=props
  if (!props.firstName && !props.lastName) {
    return (
      <div className="name">
        <h3>Invalid Name</h3>
      </div>
    );
  }
  return (
    <div className="name">
      {/* // <h3 className='name' key={firstName}>First Name: {firstName}</h3>,
    // <h3 className='name' key={lastName}>Last Name: {lastName}</h3> */}

      <h3 key={props.firstName}>First Name: {props.firstName}</h3>
      <h3 key={props.lastName}>Last Name: {props.lastName}</h3>
      {props.firstName === "lokesh" && (
        <div style={{ color: "green" }}>VIP</div>
      )}
    </div>
  );
};

export default nameTag;
