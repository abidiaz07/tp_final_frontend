import React, { useContext } from "react";
import { useParams, Link } from "react-router";
import { Message } from "../Message/Message";
import { ChatContext } from "../Context/ChatContext";
import LoaderSpinner from "../LoaderSpinner/LoaderSpinner";
import { FiArrowLeft } from "react-icons/fi";
import { MdSend } from "react-icons/md";

export const ConversationDetail = () => {
  const { id } = useParams();
  const { conversations, getMessages, addMessage, isLoading } =
    useContext(ChatContext);

  const conversation = conversations.find((conv) => conv.id === id);
  const messages = getMessages(id);

  if (isLoading) {
    return <LoaderSpinner />;
  }

  return (
    <div
      style={{
        minHeight: "100vh", // Si no le pongo esto me queda el fondo cortado
        background: "url('/src/assets/fondo.png')",
        paddingBottom: "60px", // Sin esto me queda el input de mensajes encima del ultimo mensaje
      }}
    >
      {/* Header */}
      <div
        style={{
          position: "sticky",
          top: 0,
          display: "flex",
          alignItems: "center",
          background: "white",
          padding: "12px 16px",
          marginBottom: 12,
          gap: 16,
          zIndex: 2, // Esto es porque sino el header se queda atrás de los mensajes
        }}
      >
        <Link
          to="/conversations"
          style={{ fontSize: 24 }}
        >
          <FiArrowLeft size={24} />
        </Link>
        <Link
          to={`/contacts/${conversation.id}`}
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
          }}
        >
          <img
            src={conversation.image}
            style={{
              width: 48,
              height: 48,
              borderRadius: "50%",
              objectFit: "cover", // Sin esto se me deforma la imagen
            }}
          />
          <div>
            <div style={{ fontWeight: "bold", fontSize: 18 }}>
              {conversation.name}
            </div>
            <div style={{ color: "#808080", fontSize: 12 }}>
              last seen: {conversation.last_seen}
            </div>
          </div>
        </Link>
      </div>
      <div style={{ padding: 12 }}>
        {messages.map((msg, index) => (
          <Message
            key={index}
            text={msg.text}
            sender={msg.sender}
            time={msg.time}
            status={msg.status}
          />
        ))}
      </div>

      {/* Input para enviar mensajes */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          let message = e.target.message.value;
          const newMsg = {
            text: message,
            sender: "You",
            time: new Date().toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            }),
            status: "sent",
          };
          addMessage(id, newMsg);
          e.target.message.value = "";
        }}
        style={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          padding: "12px",
          display: "flex",
          gap: "8px",
        }}
      >
        <input
          name="message"
          type="text"
          placeholder="Message"
          required
          style={{
            flex: 1, // Esto hace que el input ocupe todo el espacio disponible
            padding: "10px 14px",
            borderRadius: "20px",
            border: "1px solid #c0c0c0",
            outline: "none", // Para que no se vea el borde al hacer click
            fontSize: "16px",
          }}
        />
        <button
          type="submit"
          style={{
            background: "#25d366",
            color: "white",
            border: "none",
            borderRadius: "50%",
            width: "40px",
            height: "40px",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <MdSend size={20} />
        </button>
      </form>
    </div>
  );
};
