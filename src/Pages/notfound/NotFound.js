import { Button, Card, Col, Row } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";
import ImageNotFound from "../../assets/svg/faq.svg";
import "./style.scss";
const NotFound = () => {
  const navigate = useNavigate();
  return (
    <Card className="wrapper-not-found" style={{ background: "#000" }}>
      <img className="image-not-found" src={ImageNotFound} alt="" />
      <h3 className="header-not-found">404 Not Found</h3>
      <p className="text-not-found">
        {"We can't find the page you're looking for."}
      </p>
      <Row justify={"center"}>
        <Col>
          <Button
            onClick={() => navigate("/lfi/redirectToPage ")}
            className="button-not-found"
          >
            Go Home
          </Button>
        </Col>
      </Row>
    </Card>
  );
};

export default NotFound;
