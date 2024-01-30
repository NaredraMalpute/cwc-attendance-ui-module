import React from "react";
import { useNavigate } from "react-router-dom";

const GetStarted = () => {
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(document.location.search);

  React.useEffect(() => {
    navigate(
      `/lfi/login/?deviceId=${searchParams.get(
        "deviceId"
      )}&&employeeId=${searchParams.get("employeeId")}`
    );
  }, []);
  return <div style={{ color: "#fff" }}></div>;
};

export default GetStarted;
