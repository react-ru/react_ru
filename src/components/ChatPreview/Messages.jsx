import React from "react";
import { ChatMessage } from "./ChatMessage";
import { map } from "lodash";
import { endpointBase } from "../../constants/endpointBase";
import { chatId } from "../../constants/chatId";
import useFetch from "fetch-suspense";
import { isEmpty } from "lodash";

export const Messages = () => {
  const renderMessage = props => {
    return (
      <ChatMessage
        {...props}
        isNewChatMember={!isEmpty(props.new_chat_members)}
        key={props._id}
      />
    );
  };
  const messages = useFetch(
    `${endpointBase}/api/latest_messages?chat_id=${chatId}&latest=7`
  );
  if (Array.isArray(messages)) {
    return <>{map(messages.reverse(), renderMessage)}</>;
  } else {
    return null;
  }
};
