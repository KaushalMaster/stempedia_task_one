import React from "react";
import { useSelector } from "react-redux";

function ComponentC() {
  const value = useSelector((state) => state.value);

  return (
    <div>
      <p>The current value is: {value}</p>
    </div>
  );
}

export default ComponentC;
