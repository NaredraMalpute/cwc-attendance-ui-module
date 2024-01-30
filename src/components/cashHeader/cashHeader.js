import React from "react";
import "./cashHeader.scss";

function CashHeader(props) {
  const { amount = "50,000" } = props;

  function numberWithCommas(x) {
    return x?.toString()?.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  return (
    <>
      <div className="cashHeaderContent">
        <div className="Header">
          Get upto
          <span> {""} </span>
          <span className="fsfamilyAmt spanBlue">
            <span className="rupee">₹</span>
            <span className="cashFont "> {numberWithCommas(amount)}</span>
          </span>
          cash
        </div>
        <div className="subHeader">Directly in your bank account</div>
      </div>
    </>
  );
}

export default CashHeader;
