import React, { useState } from "react";
import { useDispatch } from "react-redux";

function ComponentB() {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  const handleChange = (event) => {
    setValue(event.target.value);
    dispatch({ type: "SET_VALUE", payload: event.target.value });
  };

  return (
    <div>
      <input type="text" value={value} onChange={handleChange} />
    </div>
  );
}

export default ComponentB;
