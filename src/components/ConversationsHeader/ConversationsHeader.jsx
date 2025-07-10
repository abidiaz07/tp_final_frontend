import React from "react";
import { FiCamera, FiMoreVertical } from "react-icons/fi";

export const ConversationsHeader = () => {
  return (
    <header
      style={{
        position: "sticky",
        top: "0",
        backgroundColor: "white",
        color: "#075E54",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px 16px 0 16px",
        zIndex: 10,
        height: "60px",
      }}
    >
      <HeaderLeft />
      <HeaderRight />
    </header>
  );
};

export const HeaderLeft = () => {
  return (
    <span
      style={{
        fontWeight: "bold",
        fontSize: "1.5rem",
        letterSpacing: "1px",
      }}
    >
      WhatsApp
    </span>
  );
};

export const HeaderRight = () => {
  return (
    <div
      style={{
        display: "flex",
        gap: "16px",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "36px",
          height: "36px",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontWeight: "bold",
          fontSize: "1.2rem",
          color: "black",
          cursor: "pointer",
        }}
      >
        {/* Camera icon */}
        <FiCamera size={20} color="black" />
      </div>
      <div
        style={{
          width: "36px",
          height: "36px",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontWeight: "bold",
          fontSize: "1.2rem",
          cursor: "pointer",
          color: "black",
        }}
      >
        {/* Menu icon */}
        <FiMoreVertical size={20} color="black" />
      </div>
    </div>
  );
};
