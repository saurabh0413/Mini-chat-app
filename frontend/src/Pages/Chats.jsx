import React from "react";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
const Chats = () => {
  const [chatsDa, setChatsDa] = useState([]);
  const chatsData = async () => {
    const { data } = await axios.get("http://localhost:5000/api/chats");
    console.log(data);
    setChatsDa(data);
  };
  useEffect(() => {
    chatsData();
  }, []);
  return (
    <div>
      {chatsDa.map((chat) => (
        <div key={chat._id}>{chat.chatName}</div>
      ))}
    </div>
  );
};

export default Chats;
