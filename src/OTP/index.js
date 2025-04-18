import { useEffect, useRef, useState } from "react";

export default function OTP() {
  const LENGTH = 6;
  const [inputValues, updateInputValues] = useState(
    Array.from({ length: LENGTH }).fill("")
  );
  const inputRefArray = useRef([]);
  function onChangeHandler(val, index) {
    if (isNaN(val)) return;
    val = val === "" ? "" : Number(val) % 10;
    updateInputValues((prev) => {
      const newValues = [...prev];
      newValues[index] = val;
      if (index + 1 < LENGTH && val) inputRefArray.current[index + 1].focus();
      return newValues;
    });
  }
  function keyPressHandler(e, index) {
    if (e.key === "Backspace" && !inputValues[index] && index > 0) {
      inputRefArray.current[index - 1].focus();
      setTimeout(() => {
        inputRefArray.current[index - 1].setSelectionRange(1, 1);
      }, 0);
    } else if (e.key === "ArrowLeft" && index > 0) {
      inputRefArray.current[index - 1].focus();
      setTimeout(() => {
        inputRefArray.current[index - 1].setSelectionRange(1, 1);
      }, 0);
    } else if (e.key === "ArrowRight" && index + 1 < LENGTH) {
      inputRefArray.current[index + 1].focus();
    }
  }
  useEffect(() => {
    inputRefArray.current[0].focus();
  }, []);
  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "10px",
      }}
    >
      {inputValues.map((inputVal, index) => (
        <input
          ref={(el) => (inputRefArray.current[index] = el)}
          key={index}
          value={inputVal}
          style={{
            width: "100px",
            height: "100px",
            fontSize: "32px",
            textAlign: "center",
          }}
          onKeyDown={(e) => keyPressHandler(e, index)}
          onChange={(e) => onChangeHandler(e.target.value, index)}
        />
      ))}
    </div>
  );
}
