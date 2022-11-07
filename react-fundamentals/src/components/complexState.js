import React, { useState } from "react";
import NameTag from "./nameTag";

const initialNames = [
    { firstName:"loki",lastName:"Jawale"},
    { firstName:"vicky",lastName:"kaushal"},
    { firstName:"kartik",lastName:"kumbha"},
    { firstName:"kunal",lastName:"patil"}
]
function complexState() {
    const [names,setNames] = useState(initialNames);
  return (
  <div>
    <h1>Complex state example</h1>
    {
    names.map((v,i) => {
   return <NameTag key={`${i}`} firstName={v.firstName} lastName={v.lastName} />
    })
  }
    {/* <NameTag firstName={names[0].firstName} lastName={names[0].lastName} />
    <NameTag firstName={names[1].firstName} lastName={names[1].lastName} />
    <NameTag firstName={names[2].firstName} lastName={names[2].lastName} />
    <NameTag firstName={names[3].firstName} lastName={names[3].lastName} /> */}

  </div>
  );
}

export default complexState;
