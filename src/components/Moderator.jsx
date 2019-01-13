import React from "react";
import { Card, CardImg, CardBody, Button } from "reactstrap";

export const Moderator = ({ name, avatarSrc }) => {
  return (
    <Card tag="a" href={`tg://resolve?domain=${name}`}>
      <CardImg top width="100%" src={avatarSrc} />
      <CardBody>
        <div className="text-center">
          <Button tag="span">@{name}</Button>
        </div>
      </CardBody>
    </Card>
  );
};
