import React from "react";
import { Media } from "reactstrap";
import { distanceInWordsToNow } from "date-fns";
import "./ChatMessage.css";

export const ChatMessage = ({ _id, from, text, date, isNewChatMember }) => {
  if (isNewChatMember) {
    text = (
      <div>
        <b>{`${from.first_name || ""} ${from.last_name || ""}`.trim()}</b>
        &nbsp;присоединился к сообществу
      </div>
    );
  }

  let heading;
  if (isNewChatMember) {
    heading = null;
  } else {
    heading = (
      <Media className="ChatMessage__heading" heading>
        {from.first_name} {from.last_name}
      </Media>
    );
  }

  return (
    <Media className="ChatMessage" id={_id}>
      <Media className="ChatMessage__body" body>
        <div className="ChatMessage__time">
          {distanceInWordsToNow(date * 1000)}
        </div>
        {heading}
        {text}
      </Media>
    </Media>
  );
};
