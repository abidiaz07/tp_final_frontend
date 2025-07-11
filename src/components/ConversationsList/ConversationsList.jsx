import React, { useContext } from "react";
import { Link } from "react-router";
import { FiSearch } from "react-icons/fi";
import { ChatContext } from "../Context/ChatContext";

export function ConversationsList() {
  const [search, setSearch] = React.useState("");
  const { filterConversations } = useContext(ChatContext);

  const filteredConversations = filterConversations(search);

  return (
    <div
      style={{
        width: "100vw",
        maxWidth: "100vw",
        backgroundColor: "white",
        minHeight: "100vh",
      }}
    >
      {/* Buscador */}
      <div
        style={{
          padding: "16px 20px",
          backgroundColor: "white",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            background: "#f6f6f6",
            borderRadius: "20px",
            padding: "6px 12px",
            border: "1px solid #ced4da",
          }}
        >
          <FiSearch size={20} color="#8696a0" style={{ marginRight: 8 }} />
          <input
            type="text"
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{
              width: "100%",
              padding: "8px 0",
              border: "none",
              outline: "none",
              background: "transparent",
              fontSize: "16px",
              borderRadius: "20px",
            }}
          />
        </div>
      </div>
      {filteredConversations.map(
        ({ id, name, time, image, last_message, unread_messages }) => {
          return (
            <ConversationPreview
              key={id}
              id={id}
              name={name}
              time={time}
              image={image}
              last_message={last_message}
              unread_messages={unread_messages}
            />
          );
        }
      )}
    </div>
  );
}

const ConversationPreview = ({
  id,
  name,
  time,
  image,
  last_message,
  unread_messages,
}) => {
  return (
    <Link
      to={`/conversations/${id}`}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "16px 20px",
        cursor: "pointer",
        textDecoration: "none",
        color: "#111b21",
        backgroundColor: "white",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", flex: 1 }}>
        <img
          src={image}
          alt={name}
          style={{
            width: 40,
            height: 40,
            borderRadius: "50%",
            marginRight: 16,
            objectFit: "cover",
            flexShrink: 0,
          }}
        />
        <div style={{ flex: 1 }}>
          <div
            style={{
              fontWeight: 500,
              fontSize: "16px",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            }}
          >
            {name}
          </div>
          <div
            style={{
              fontSize: "14px",
              color: "#8696a0",
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              maxWidth: "50vw",
              minWidth: 0,
            }}
          >
            {last_message}
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end",
          minWidth: 0,
        }}
      >
        <div
          style={{
            fontSize: "12px",
            color: "#8696a0",
            marginBottom: 4,
            whiteSpace: "nowrap",
          }}
        >
          {time}
        </div>
        {unread_messages > 0 && (
          <span
            style={{
              background: "#25d366",
              color: "white",
              borderRadius: "50%",
              width: 24,
              height: 24,
              minWidth: 24,
              minHeight: 24,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 12,
              fontWeight: 600,
              textAlign: "center",
            }}
          >
            {unread_messages}
          </span>
        )}
      </div>
    </Link>
  );
};
