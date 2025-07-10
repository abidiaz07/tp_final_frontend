import React, { createContext, useState, useEffect } from "react";
import { conversations as initialConversations } from "../../data/chats";

export const ChatContext = createContext({
  conversations: [],
  getMessages: () => [],
  addMessage: (id, message) => {},
  isLoading: false,
  filterConversations: (search) => [],
});

export const ChatProvider = ({ children }) => {
  const [conversations, setConversations] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setConversations(initialConversations);
      setIsLoading(false);
    }, 1000); // simular una carga de datos
  }, []);

  function getMessages(id) {
    const conv = conversations.find((c) => c.id === id);
    if (!conv) {
      return [];
    }
    return conv.messages;
  }

  function addMessage(id, message) {
    const updatedConversations = conversations.map((conv) => {
      if (conv.id === id) {
        const conversation_clone = { ...conv };
        const messages_clone = [...conversation_clone.messages];
        messages_clone.push(message);
        conversation_clone.messages = messages_clone;
        return conversation_clone;
      } else {
        return conv;
      }
    });
    setConversations(updatedConversations);
  }

  function filterConversations(search) {
    return conversations.filter(({ name }) =>
      name.toLowerCase().includes(search.toLowerCase()) // Esto es para que no distinga entre mayúsculas y minúsculas
    );
  }

  return (
    <ChatContext.Provider value={{ conversations, getMessages, addMessage, isLoading, filterConversations }}>
      {children}
    </ChatContext.Provider>
  );
};
