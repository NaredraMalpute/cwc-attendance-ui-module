import React from "react";
import "./style.scss";
import AgencyIcon from "../../assets/svg/AgencyIcon";
import BranchIcon from "../../assets/svg/BranchIcon";
import UserIcon from "../../assets/svg/UserIcon";
import ReportIcon from "../../assets/svg/ReportIcon";
const Card = (props) => {
  const [flag, setFlag] = React.useState(false);
  function MouseOver(event) {
    setFlag(true);
    //    event.target.style.background = "#334e9e";
  }
  function MouseOut(event) {
    if(!props?.isActive){

        setFlag(false);
    }
    // event.target.style.background = "";
  }


  React.useEffect(() => {
    if (props?.isActive) {
         setFlag(true);
    }else{
        setFlag(false);
    }
  }, [props?.isActive]);

  const Icon = () => {
    switch (props?.type) {
      case "agency":
        return (
          <React.Fragment>
            <AgencyIcon flag={flag} />
            <h4>Agency</h4>
          </React.Fragment>
        );
      case "branch":
        return (
          <React.Fragment>
            <BranchIcon flag={flag} />
            <h4>Branch</h4>
          </React.Fragment>
        );
      case "user":
        return (
          <React.Fragment>
            <UserIcon flag={flag} />
            <h4>FI User</h4>
          </React.Fragment>
        );
      case "report":
        return (
          <React.Fragment>
            <ReportIcon flag={flag} />
            <h4>Report</h4>
          </React.Fragment>
        );

      default:
        break;
    }
  };

  return (
    <div
      onMouseOver={MouseOver}
      onFocus={MouseOver}
      onMouseOut={MouseOut}
      onBlur={MouseOut}
      className={flag ? "card_wrapper bgBlue" : "card_wrapper "}
    >
      {<Icon />}
    </div>
  );
};

export default Card;
