import "./style.css";
import { tabs } from "./config";
import { useState } from "react";

function TabFormComponent() {
  const [activeTab, setActiveTab] = useState(0);
  const [data, setData] = useState({
    name: "",
    age: "",
    email: "",
    interests: [],
    theme: "dark",
  });
  const [errors, setErrors] = useState({
    name: "",
    age: "",
    email: "",
    interests: "",
  });

  const ActiveForm = tabs[activeTab].component;

  function prevHandler() {
    if (tabs[activeTab].validate(data, setErrors))
      setActiveTab((state) => state - 1);
  }
  function nextHandler() {
    if (tabs[activeTab].validate(data, setErrors))
      setActiveTab((state) => state + 1);
  }
  function submitHandler() {
    if (tabs[activeTab].validate(data, setErrors))
      console.log("submitted successfully", data);
  }
  return (
    <div>
      <div style={{ display: "flex" }}>
        {tabs.map((t, index) => (
          <div
            key={index}
            style={{
              padding: "10px",
              border: "1px solid black",
              cursor: "pointer",
            }}
            onClick={() => {
              if (tabs[activeTab].validate(data, setErrors))
                setActiveTab(index);
            }}
          >
            {t.name}
          </div>
        ))}
      </div>
      <ActiveForm {...data} setData={setData} errors={errors} />
      {activeTab > 0 && <button onClick={prevHandler}>prev</button>}
      {activeTab < tabs.length - 1 && (
        <button onClick={nextHandler}>next</button>
      )}
      {activeTab === tabs.length - 1 && (
        <button onClick={submitHandler}>submit</button>
      )}
    </div>
  );
}
export default TabFormComponent;
