import React from "react";
import { Container, Row, Col } from "reactstrap";
import { TopBar } from "../components/TopBar";
import { HeroUnit } from "../components/HeroUnit";
import { ChatRules } from "../components/ChatRules";
import { Moderation } from "../components/Moderation";
import { ChatPreview } from "../components/ChatPreview";
import { GoToChat } from "../components/GoToChat";

const MainSection = ({ show = true, children }) => {
  if (show) {
    return (
      <Container style={{ marginBottom: "2rem", marginTop: "2rem" }}>
        {children}
      </Container>
    );
  } else {
    return null;
  }
};

const CatReviewBanner = () => {
  return (
    <a href="http://реакт-чат.рф/кот-Ревьюн/">
      <img
        style={{ marginTop: "2rem" }}
        width="240px"
        height="400px"
        src="https://vectr.com/tmp/caZ5Aqjx/biXy5hyjq.svg?width=240&height=400&select=biXy5hyjqpage0"
      />
    </a>
  );
};

export const Main = () => {
  return (
    <div className="Main">
      <TopBar />
      <HeroUnit />
      <Row>
        <Col xs={12} md={{ size: 6, offset: 2 }}>
          <MainSection>
            <ChatRules />
          </MainSection>
          <MainSection>
            <Moderation />
          </MainSection>
          <MainSection>
            <ChatPreview />
          </MainSection>
          <MainSection>
            <GoToChat />
          </MainSection>
        </Col>
        {/*
        <Col xs={false} md={{ size: 2 }}>
          <div className="text-center">
            <CatReviewBanner />
          </div>
        </Col>
        */}
      </Row>
    </div>
  );
};
