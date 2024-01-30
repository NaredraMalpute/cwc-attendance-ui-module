import { Button, Row } from "antd";
import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Error from "../../assets/svg/error.svg";
import "./style.scss";

function ErrorPage(props) {
  const location = useLocation();
  const navigate = useNavigate();
  console.log(location.state);

  const {
    title = "",
    desc = "Currently we are facing some technical issue",
    btnName = "Go Back",
    response,
    route,
  } = location?.state?.data;

  const redirectHandler = () => {
    if (route) {
      navigate(`/lfi/${route}`, {
        state: {
          data: {
            response: response?.data,
          },
        },
      });
    }
  };
  return (
    <div className="errorPageContainer wrapperDiv-successMsg pt10 colorWhite p5" style={{margin:0}}>
      <div
        className="p5 successWrapper"
        style={{ border: "1px solid #F9CA26" }}
      >
        <div>
          <img src={Error} alt="Tick" />
        </div>
        <div
          style={{ color: "#F9CA26" }}
          className="successTextColor fw600 fs25"
        >
          {title}
        </div>
        <div className="description colorWhite fs12">{desc}</div>
        {/* <Link to={`/${route}`}> */}
        <Row className="p5">
          <Button onClick={redirectHandler} className="button">
            {btnName}
          </Button>
        </Row>
        {/* </Link> */}
      </div>
    </div>
  );
}

export default ErrorPage;
