import React, { useContext } from "react";
import { useParams, Link } from "react-router";
import { FiArrowLeft } from "react-icons/fi";
import { ChatContext } from "../Context/ChatContext";

export const ContactDetail = () => {
  const { id } = useParams();
  const { conversations } = useContext(ChatContext);

  const contact = conversations.find((conv) => conv.id === id);

  if (!contact) {
    return <div>Contact not found</div>;
  }

  return (
    <div
      style={{
        position: "relative", // Para que la flecha se posicione bien
        minHeight: "100vh",
        background: "#f6f6f6",
      }}
    >
      <Link
        to={`/conversations/${id}`}
        style={{
          position: "absolute",
          top: 24,
          left: 24,
          fontSize: 28,
        }}
      >
        <FiArrowLeft size={28} />
      </Link>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: 24,
          maxWidth: 400,
          margin: "60px auto 0 auto",
          background: "white",
          borderRadius: 12,
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        }}
      >
        <img
          src={contact.image}
          alt={contact.name}
          style={{
            width: 120,
            height: 120,
            borderRadius: "50%",
            objectFit: "cover",
            marginBottom: 24,
          }}
        />
        <h2 style={{ textAlign: "center", marginBottom: 8 }}>{contact.name}</h2>
        <div style={{ textAlign: "center", color: "#808080" }}>
          Last seen: {contact.last_seen}
        </div>
      </div>
    </div>
  );
};

export default ContactDetail;
