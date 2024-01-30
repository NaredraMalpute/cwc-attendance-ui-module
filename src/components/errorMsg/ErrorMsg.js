import { Button, Row } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import Tick from "../../assets/Images/tick.png";
import Error from "../../assets/svg/error.svg";
import "./style.scss";

function ErrorMsg({
  title = "Error",
  desc = "",
  route,
  btnName = "Proceed",
}) {
  return (
    <div className="wrapperDiv-errorMsg pt10 colorWhite p5">
      <div className="p5 errorWrapper">
        <div
          style={{ width: "100%", display: "flex", justifyContent: "center" }}
        >
          <img src={Error} alt="Tick" />
        </div>
        <div className="alignCenter errorTextColor fw600 fs25">{title}</div>
        <div className="alignCenter description colorWhite fs12">{desc}</div>
        <Link to={`/${route}`}>
          <Row className="p5">
            <Button className="button">{btnName}</Button>
          </Row>
        </Link>
      </div>
    </div>
  );
}

export default ErrorMsg;
