import React from "react";
import { Container } from "reactstrap";

export const MainSection = ({ show = true, children }) => {
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
