import React, { useContext } from "react";
import Child from "./child";
import { userContext } from "../App";
const Parent = () => {
  const { name } = useContext(userContext);
  const getData = (data) => {
    console.log("Received from child:", data);
  }
  return (
    <div>
      <h2>Parent Component</h2>
      <h3>Context Name: {name}</h3>
      <Child send={getData} />
    </div>
  )
}
export default Parent