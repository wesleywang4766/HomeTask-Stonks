import React from "react";
import ChatBox from "../components/Chat/ChatBox";
import ProfilePictureUpload from "@/components/Modal/ProfilePictureUpload";

const ChatPage = () => {
  return (
    <div>
      <h1>Profile Photo Upload</h1>
      <ProfilePictureUpload />
      <h1>Chat</h1>
      <ChatBox />
    </div>
  );
};

export default ChatPage;
