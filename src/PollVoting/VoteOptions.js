import { useState } from "react";

function VoteOptions({ options, updateVotes }) {
  const [selected, updateSelected] = useState([]);
  function changeHandler(e) {
    const name = e.target.name;
    const isChecked = e.target.checked;

    if (name === "all") {
      if (isChecked) {
        updateSelected(["all"]);
        updateVotes((prevVotes) => {
          const newVotes = JSON.parse(JSON.stringify(prevVotes));
          newVotes.forEach((element) => {
            element.count = element.count + 1;
          });
          return newVotes;
        });
      } else {
        updateSelected([]);
      }
    } else {
      if (isChecked) {
        let newSelected = selected.filter((ele) => ele != "all");
        newSelected = [...newSelected, name];
        if (newSelected.length === options.length) newSelected = ["all"];
        updateSelected(newSelected);
        updateVotes((prevVotes) => {
          const newVotes = JSON.parse(JSON.stringify(prevVotes));
          newVotes.forEach((element) => {
            if (element.name === name) element.count = element.count + 1;
          });
          return newVotes;
        });
      } else {
        const newSelected = selected.filter((ele) => ele != name);
        updateSelected(newSelected);
      }
    }
  }
  return (
    <div>
      <div>Voting options</div>
      {options.map((option) => (
        <div>
          <input
            type="checkbox"
            name={option.name}
            checked={selected?.includes(option.name)}
            onChange={changeHandler}
          />
          <label>{option.name}</label>
        </div>
      ))}
      <input
        type="checkbox"
        checked={selected?.includes("all")}
        name="all"
        onChange={changeHandler}
      />
      <label>All the above</label>
    </div>
  );
}
export default VoteOptions;
