import { useState } from "react";
import toast from "react-hot-toast";

export const useMessages = () => {
  const [messages, setMessages] = useState(
    JSON.parse(localStorage.getItem("messages")) || []
  );

  const createMessage = async ({ name, email, message, rating }) => {
    try {
      if (!name || !message) {
        toast.error("Please write your name and message!");
        return;
      }

      const newMessage = {
        username: name,
        userEmail: email,
        userMessage: message,
        userRating: rating,
        id: Date.now(),
        status: "pending",
      };

      const newMessages = [...messages, newMessage];

      setMessages(newMessages);

      localStorage.setItem("messages", JSON.stringify(newMessages));

      toast.success("Your message was sent to admin for review!");

    } catch (error) {
      console.error(error);
      toast.error("Something went wrong!");
    }
  };

  return { createMessage, messages };
};