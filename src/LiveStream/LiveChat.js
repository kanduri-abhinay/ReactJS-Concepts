import { useEffect, useState } from "react";
import Message from "./Message";

const MESSAGES_LIMIT = 11;
const data = [
  {
    id: "0",
    profilePic:
      "https://img.freepik.com/free-vector/illustration-user-avatar-icon_53876-5907.jpg?semt=ais_hybrid",
    message: "hello world",
  },
  {
    id: "0",
    profilePic:
      "https://img.freepik.com/free-vector/illustration-user-avatar-icon_53876-5907.jpg?semt=ais_hybrid",
    message: "hello 2",
  },
  {
    id: "0",
    profilePic:
      "https://img.freepik.com/free-vector/illustration-user-avatar-icon_53876-5907.jpg?semt=ais_hybrid",
    message: "hello 3",
  },
  {
    id: "0",
    profilePic:
      "https://img.freepik.com/free-vector/illustration-user-avatar-icon_53876-5907.jpg?semt=ais_hybrid",
    message: "hello 4",
  },
  {
    id: "0",
    profilePic:
      "https://img.freepik.com/free-vector/illustration-user-avatar-icon_53876-5907.jpg?semt=ais_hybrid",
    message: "hello 5 djkdhkfdfdf  dfdfdfdfdf    dfdfdfdf",
  },
  {
    id: "0",
    profilePic:
      "https://img.freepik.com/free-vector/illustration-user-avatar-icon_53876-5907.jpg?semt=ais_hybrid",
    message: "hello 6",
  },
];
function LiveChat() {
  const [messages, setMessages] = useState([]);

  function fetchData() {
    setMessages((prevMessages) => {
      let newMessages = [...data, ...prevMessages];
      newMessages = newMessages.splice(0, MESSAGES_LIMIT);
      return newMessages;
    });
  }

  useEffect(() => {
    const intervalId = setInterval(fetchData, 2000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="chat-container">
      {messages.map((msg, index) => (
        <Message key={index} {...msg} />
      ))}
    </div>
  );
}
export default LiveChat;
