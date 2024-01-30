import { Button, Row } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import Tick from "../../assets/Images/tick.png";
import "./successMsg.scss";

function SuccessMsg({
  title = "Success",
  desc = "",
  route,
  btnName = "Get Cash Offer",
}) {
  return (
    <div className="wrapperDiv-successMsg pt10 colorWhite p5">
      <div className="p5 successWrapper">
        <div
          style={{ width: "100%", display: "flex", justifyContent: "center" }}
        >
          <img src={Tick} alt="Tick" />
        </div>
        <div className="alignCenter successTextColor fw600 fs25">{title}</div>
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

export default SuccessMsg;
