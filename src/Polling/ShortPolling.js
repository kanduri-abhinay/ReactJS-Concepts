import { useEffect, useState } from "react";

function ShortPolling() {
  const [data, setData] = useState("Initial Page");

  async function fetchData() {
    const response = await fetch("http://localhost:7777/getData");
    const result = await response.json();
    return result.data;
  }

  useEffect(() => {
    const intervalId = setInterval(async () => {
      const data = await fetchData();
      setData(data);
    }, 5000);
    return () => clearInterval(intervalId);
  }, []);

  return <div>{data}</div>;
}
export default ShortPolling;
