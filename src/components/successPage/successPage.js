import { Button, Row } from "antd";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Tick from "../../assets/svg/success.svg";
import "./style.scss";
import { getDataByMobileNo } from "../../services/LFI/CommonServics";
import Cookies from "js-cookie";

function SuccessPage(props) {
  const location = useLocation();
  const navigate = useNavigate();

  // React.useEffect(() => {
  //   // 1. showContinueRestartJourney --> true (revisit journey )when data present in customer_details else false( first time journey)
  //   // 2. hideRestartJourney --> true when case status is Credit Approved or Approve Stp else false
  //   (async () => {
  //     //  const mobileNumber = searchParams.get("mobileNo");
  //     const searchParams = new URLSearchParams(document.location.search);
  //     console.log("success,....", location?.state?.data?.mobileNo);
  //     const response = await getDataByMobileNo({
  //       mobileNumber: Cookies.get("mobileNumber"), //searchParams.get("mobileNo"),
  //       deviceId: "",
  //     });

  //     console.log(response, "auth");
  //     if (response?.token) {
  //       // Cookies.set("mobileNumber", location?.state?.data?.mobileNo, {
  //       //   expires: 1,
  //       // });
  //       Cookies.set("lFIToken", response?.token, {
  //         expires: 1,
  //       });
  //     }
  //   })();
  // }, []);

  const {
    title = "",
    desc = "",
    btnName = "",
    response,
    route,
  } = location?.state?.data;

  const redirectHandler = () => {
    if (route) {
      navigate(`/lfi/${route}`, {
        state: {
          data: {
            response: response,
          },
        },
      });
    }
  };
  return (
    <div className="successContainer wrapperDiv-successMsg pt10 colorWhite p5">
      <div className="p5 successWrapper">
        <div>
          <img src={Tick} alt="Tick" />
        </div>
        <div className="successTextColor fw600 fs25">{title}</div>
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

export default SuccessPage;
