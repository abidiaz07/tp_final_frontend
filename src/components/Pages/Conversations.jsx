import React, { useContext } from "react";
import { ConversationsList } from "../ConversationsList/ConversationsList";
import { ConversationsHeader } from "../../components/ConversationsHeader/ConversationsHeader";
import { ConversationsFooter } from "../../components/ConversationsFooter/ConversationsFooter";
import { ChatContext } from "../Context/ChatContext";
import LoaderSpinner from "../LoaderSpinner/LoaderSpinner";

function Conversations() {
  const { isLoading } = useContext(ChatContext);

  if (isLoading) {
    return <LoaderSpinner />;
  }

  return (
    <>
      <ConversationsHeader />
      <ConversationsList />
      <ConversationsFooter />
    </>
  );
}

export default Conversations;
