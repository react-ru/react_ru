import React, { Suspense } from "react";
import { Card, CardBody } from "reactstrap";
import { Messages } from "./Messages";
import { WriteIntoChatButton } from "./WriteIntoChatButton";
import { ErrorBoundary } from "./ErrorBoundary";

export const ChatPreview = () => {
  return (
    <>
      <h1>
        <span role="img" aria-label="чат">
          ✍🏻
        </span>
        Что внутри
      </h1>
      <ErrorBoundary>
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
      </ErrorBoundary>
    </>
  );
};
