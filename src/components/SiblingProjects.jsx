import React from "react";
import { Col } from "reactstrap";
import "./SiblingProjects.css";

export const SiblingProjects = () => {
  return (
    <div className="SiblingProjects">
      <Col xs={12} md={{ size: 6, offset: 2 }}>
        <a
          href="https://node-chat.ru"
          target="_blank"
          rel="noopener noreferrer"
        >
          node-chat.ru
        </a>
      </Col>
    </div>
  );
};
