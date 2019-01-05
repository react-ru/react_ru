import React from "react";
import { Media } from "reactstrap";
import { distanceInWordsToNow } from "date-fns";
import "./ChatMessage.css";

export const ChatMessage = ({ id, from, text, date }) => {
  return (
    <Media className="ChatMessage" id="id">
      <Media className="ChatMessage__body" body>
        <div className="ChatMessage__time">
          {distanceInWordsToNow(date * 1000)}
        </div>
        <Media className="ChatMessage__heading" heading>
          {from.first_name} {from.last_name}
        </Media>
        {text}
      </Media>
    </Media>
  );
};
