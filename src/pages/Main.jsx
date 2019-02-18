import React from "react";
import { /* Container, */ Row, Col } from "reactstrap";
import { TopBar } from "../components/TopBar";
import { HeroUnit } from "../components/HeroUnit";
import { ChatRules } from "../components/ChatRules";
import { Moderation } from "../components/Moderation";
import { ChatPreview } from "../components/ChatPreview";
import { GoToChat } from "../components/GoToChat";
import { MainSection } from "../components/MainSection";
import { Donations } from "../components/Donations";
import { SiblingProjects } from "../components/SiblingProjects";
import { StickyContainer } from "react-sticky";

export const Main = () => {
  return (
    <StickyContainer>
      <div className="Main">
        <SiblingProjects />
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
          <Col xs={false} md={{ size: 2 }}>
            <div className="text-center">
              <Donations />
            </div>
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
    </StickyContainer>
  );
};
