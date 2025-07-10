import React from "react";
import { FiCheck } from "react-icons/fi";

export const Message = ({ text, sender, time, status }) => {
  const isOwn = sender === "You";

  let justifyContent
  if (isOwn) {
    justifyContent = "flex-end";
  } else {
    justifyContent = "flex-start";
  }

  let background
    if (isOwn) {
      background = "#dcf8c6";
    } else {
      background = "white";
    }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: justifyContent,
        marginBottom: "8px",
      }}
    >
      <div
        style={{
          background: background,
          color: "#222222",
          borderRadius: "8px",
          padding: "8px 12px",
          maxWidth: "60%",
          position: "relative",
        }}
      >
        <div style={{ fontSize: "14px", marginBottom: "4px" }}>
          <strong>{sender}</strong>
        </div>
        <div style={{ fontSize: "16px" }}>{text}</div>
        <div
          style={{
            fontSize: "12px",
            color: "#808080",
            textAlign: "right",
            marginTop: "4px",
            display: 'flex',
            alignItems: 'center',
            gap: 4,
            justifyContent: 'flex-end',
          }}
        >
          {time}
          {isOwn && status === 'sent' && (
            <FiCheck size={16} color="#8696a0" style={{ marginLeft: 4, verticalAlign: 'middle' }} />
          )}
          {isOwn && status === 'seen' && (
            <span style={{ position: 'relative', display: 'inline-block', marginLeft: 4, width: 20, height: 16 }}>
              <FiCheck size={16} color="#34b7f1" style={{ position: 'absolute', left: 4, top: 0, zIndex: 1 }} />
              <FiCheck size={16} color="#34b7f1" style={{ position: 'absolute', left: 0, top: 0, zIndex: 0 }} />
            </span>
          )}
        </div>
      </div>
    </div>
  );
};
