import React, { Suspense } from "react";
import { Card, CardBody, Button } from "reactstrap";
import { ChatMessage } from "./ChatMessage";
import { map } from "lodash";
import { endpointBase } from "../constants/endpointBase";
import { chatId } from "../constants/chatId";
import useFetch from "fetch-suspense";
import { withModal } from "../HOCs/withModal";

const Messages = () => {
  const renderMessage = props => <ChatMessage {...props} key={props._id} />;
  const messages = useFetch(
    `${endpointBase}/api/latest_messages?chat_id=${chatId}&latest=7`
  );
  return <>{map(messages.reverse(), renderMessage)}</>;
};

const WriteIntoChatButton = withModal("ask-question")(({ toggle }) => {
  return <Button onClick={toggle}>Написать в чат</Button>;
});

export const ChatPreview = () => {
  return (
    <>
      <h1>
        <span role="img" aria-label="чат">
          ✍🏻
        </span>
        Что внутри
      </h1>
      <Card>
        <CardBody>
          <Suspense fallback={"..."}>
            <Messages />
          </Suspense>
          <div className="text-center">
            <WriteIntoChatButton />
          </div>
        </CardBody>
      </Card>
    </>
  );
};
