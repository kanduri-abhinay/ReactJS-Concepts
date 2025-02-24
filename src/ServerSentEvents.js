import { useEffect, useState } from "react";

function ServerSentEvents() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const eventSource = new EventSource("http://localhost:7777/notifications");

    eventSource.onmessage = (event) => {
      const message = JSON.parse(event.data).message;
      setData((prevMessages) => [...prevMessages, message]);
    };

    eventSource.onerror = (err) => {
      console.error("EventSource failed: ", err);
      eventSource.close();
    };

    return () => {
      eventSource.close();
    };
  }, []);

  return (
    <div>
      {data.map((msg, index) => (
        <div key={index}>{msg}</div>
      ))}
    </div>
  );
}

export default ServerSentEvents;
