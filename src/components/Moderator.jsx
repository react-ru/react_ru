import React from "react";
import { Card, CardImg, CardBody, Button } from "reactstrap";
import { Avatar } from "./Avatar";

export const Moderator = ({ name, avatarSrc }) => {
  return (
    <Card tag="a" href={`tg://resolve?domain=${name}`}>
      <CardImg top width="100%" src={avatarSrc} />
      <CardBody>
        <div className="text-center">
          <Button tag="a" href={`tg://resolve?domain=${name}`}>
            @{name}
          </Button>
        </div>
      </CardBody>
    </Card>
  );
};