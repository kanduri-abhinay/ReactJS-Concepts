import { useState } from "react";
import VoteChart from "./VoteChart";
import VoteOptions from "./VoteOptions";

const options = [
  {
    name: "option1",
    count: 0,
  },
  {
    name: "option2",
    count: 0,
  },
  {
    name: "option3",
    count: 0,
  },
  {
    name: "option4",
    count: 0,
  },
];
function App() {
  const [votes, updateVotes] = useState(options);
  return (
    <div style={{ padding: "40px" }}>
      <VoteChart votes={votes} />
      <VoteOptions options={options} votes={votes} updateVotes={updateVotes} />
    </div>
  );
}

export default App;
