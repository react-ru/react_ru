import React from "react";
import { Button } from "reactstrap";
import { withModal } from "../../HOCs/withModal";

export const WriteIntoChatButton = withModal("ask-question")(({ toggle }) => {
  return <Button onClick={toggle}>Написать в чат</Button>;
});
