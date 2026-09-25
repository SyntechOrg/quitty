"use client";
import useChatbase from "./useChatbase";

// Lets server components include the chat launcher.
const Chatbase = () => {
  useChatbase();
  return null;
};

export default Chatbase;
