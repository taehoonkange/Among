import React from "react";
import InputItem from "./InputItem";

function InputList({ inputList }) {
  return (
    <div style={{ marginLeft: "10px", marginBottom: "10px" }}>
      {inputList.map((it) => (
        <InputItem key={it.id} {...it} />
      ))}
    </div>
  );
}

export default InputList;
