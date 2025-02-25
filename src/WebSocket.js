import { useEffect, useState } from "react";
import { io } from "socket.io-client";
const socket = io("http://localhost:7777");
function WebSocket() {
  const [messages, updateMessages] = useState([]);
  const [sendMessage, updateSendMessage] = useState("");
  function sendMessageHandler() {
    if (sendMessage.length > 0) {
      socket.emit("message", sendMessage);
      updateSendMessage("");
    }
  }
  useEffect(() => {
    socket.on("message", (message) => {
      updateMessages((prevMessages) => [...prevMessages, message]);
    });
    return () => {
      socket.off();
    };
  }, []);
  return (
    <div>
      <div>messages</div>
      <div>
        {messages.map((message) => (
          <div>{message}</div>
        ))}
      </div>
      <input
        value={sendMessage}
        onChange={(e) => {
          updateSendMessage(e.target.value);
        }}
      />
      <button onClick={sendMessageHandler}>Send</button>
    </div>
  );
}
export default WebSocket;
