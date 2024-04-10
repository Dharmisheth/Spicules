import React from "react";
import {
  Row,
  Col,
  CardTitle,
  CardBody,
  Button,
  Card,
  CardSubtitle,
  Container,
} from "reactstrap";
import Image from "next/image";
import Logo from "@/src/layouts/logo/Logo";
// import img from "../src/assets/images/background/icons2.jpg";

const About = () => {
  const features = [];
  return (
    <Row>
      <Card>
        <Container
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <CardTitle tag="h2" className=" p-3 mb-0">
            Welcome To Spicules Insight
          </CardTitle>
          <Logo />
        </Container>
      </Card>
      <Container>
          <div>
            <h4>This is a CRM application for tracking your business progress</h4>
          </div>
      </Container>
    </Row>
  );
};

export default About;
