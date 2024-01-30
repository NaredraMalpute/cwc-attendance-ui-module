import { Card, Spin } from "antd";
import React from "react";
// import ImageNotFound from "../../assets/svg/sleeping.svg";
import { LoadingOutlined } from "@ant-design/icons";
import "./style.scss";
const SkeletonPage = () => {
  const antIcon = (
   <LoadingOutlined
    style={{
      fontSize: "3.5rem",
      textAlign:"center",
      color:"#334e9e"
    }}
    spin
  />
  );
  return (
    <Card className="wrapper-not-found" style={{ background: "#000" }}>
      {/* <img className="image-not-found" src={ImageNotFound} alt="" /> */}
      <div className="skeleton-spinner">
        <Spin indicator={antIcon} />
      </div>
      <br />
      <h3 className="header-not-found">Loading...</h3>
    </Card>
  );
};

export default SkeletonPage;
