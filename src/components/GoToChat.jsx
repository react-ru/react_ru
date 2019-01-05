/* global ym */

import React from "react";
import { Button } from "reactstrap";

export const GoToChat = () => {
  const onClick = () => {
    ym(46609578, "reachGoal", "GOTO_CHAT");
  };

  return (
    <div className="text-center">
      <Button
        color="primary"
        size="lg"
        tag="a"
        href="tg://resolve?domain=react_ru"
        onClick={onClick}
      >
        Перейти к сообществу
      </Button>
    </div>
  );
};
