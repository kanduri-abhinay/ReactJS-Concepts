import { useEffect, useState } from "react";

function LongPolling() {
  const [data, setData] = useState("Initial Data");

  async function fetchData(lastData) {
    try {
      const result = await fetch(
        `http://localhost:7777/getData?lastData=${lastData}`
      );
      const json = await result.json();
      setData(json.data);
      fetchData(json.data);
    } catch (e) {
      fetchData(data);
    }
  }

  useEffect(() => {
    fetchData(data);
  }, []);

  return <div>{data}</div>;
}
export default LongPolling;
