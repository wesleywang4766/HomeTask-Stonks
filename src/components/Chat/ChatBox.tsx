import React, { useState } from "react";
import EmojiPicker from "./EmojiPicker";
import UserTagPicker from "./UserTagPicker";
import CommandPicker from "./CommandPicker";
import Message from "./Message";
import useInput from "../../hooks/useInput";

const ChatBox: React.FC = () => {
  const {
    value: newMessage,
    handleChange: handleNewMessageChange,
    reset: resetNewMessage,
    setInputValue: setMessage,
  } = useInput("");
  const [messages, setMessages] = useState([
    { id: 1, text: "Hello world!", user: "User1" },
    { id: 2, text: "Hi @User1 :smile:", user: "User2" },
  ]);

  const handleSend = () => {
    setMessages([
      ...messages,
      { id: messages.length + 1, text: newMessage, user: "You" },
    ]);
    resetNewMessage();
  };

  const clickHandle = (newData: string) => {
    console.log(newData);
    setMessage(newMessage + newData);
  };

  return (
    <div>
      <div>
        {messages.map((msg) => (
          <Message key={msg.id} message={msg} />
        ))}
      </div>
      <div>
        <EmojiPicker clickHandle={clickHandle} />
        <UserTagPicker clickHandle={clickHandle} />
        <CommandPicker clickHandle={clickHandle} />
        <input
          type="text"
          value={newMessage}
          onChange={handleNewMessageChange}
          placeholder="Type a message"
        />
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  );
};

export default ChatBox;
