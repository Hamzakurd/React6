
import { useState } from "react";
import toast from "react-hot-toast";

export const useMessages = () => {
  const [messages, setMessages] = useState(
    JSON.parse(localStorage.getItem("messages")) || []
  );

  const [approvedMessages, setApprovedMessages] = useState(
    JSON.parse(localStorage.getItem("approvedMessages")) || []
  );

  // Create a new message
  const createMessage = async ({ name, email, message, rating }) => {
    try {
      if (!name?.trim() || !message?.trim()) {
        toast.error("Please write your name and message!");
        return false;
      }

      const newMessage = {
        username: name,
        userEmail: email,
        userMessage: message,
        userRating: rating ?? 0,
        id: Date.now(),
        status: "pending",
      };

      const currentMessages =
        JSON.parse(localStorage.getItem("messages")) || [];

      const newMessages = [...currentMessages, newMessage];

      localStorage.setItem("messages", JSON.stringify(newMessages));
      setMessages(newMessages);

      toast.success("Your message was sent to admin for review!");
      return true;

    } catch (error) {
      console.error(error);
      toast.error("Something went wrong!");
      return false;
    }
  };

  // Update message status
  const updatedStatus = async (id, newStatus) => {
    try {
      const currentMessages =
        JSON.parse(localStorage.getItem("messages")) || [];

      const message = currentMessages.find((msg) => msg.id === id);

      if (!message) {
        toast.error("Message not found!");
        return false;
      }

      const newMessages = currentMessages.map((msg) =>
        msg.id === id
          ? { ...msg, status: newStatus }
          : msg
      );

      localStorage.setItem("messages", JSON.stringify(newMessages));
      setMessages(newMessages);

      const approved = newMessages.filter(
        (msg) => msg.status === "approved"
      );

      setApprovedMessages(approved);
      localStorage.setItem(
        "approvedMessages",
        JSON.stringify(approved)
      );

      toast.success(`Message ${newStatus} successfully!`);
      return true;

    } catch (error) {
      console.error(error);
      toast.error("Something went wrong!");
      return false;
    }
  };

  // Get approved messages
  const getApprovedMessages = () => {
    try {
      const currentMessages =
        JSON.parse(localStorage.getItem("messages")) || [];

      const approved = currentMessages.filter(
        (msg) => msg.status === "approved"
      );

      setApprovedMessages(approved);

      localStorage.setItem(
        "approvedMessages",
        JSON.stringify(approved)
      );

      return approved;

    } catch (error) {
      console.error(error);
      toast.error("Something went wrong!");
      return [];
    }
  };

  return {
    createMessage,
    updatedStatus,
    getApprovedMessages,
    messages,
    approvedMessages,
  };
};
