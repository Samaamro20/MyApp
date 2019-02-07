import React from "react";
function TempField({ onChange, value, type }) {
  return (
    <React.Fragment>
      <label htmlFor={type}>Enter value as {type}</label>
      <input onChange={onChange} name={type} value={value} id={type} />
    </React.Fragment>
  );
}
export default TempField;
