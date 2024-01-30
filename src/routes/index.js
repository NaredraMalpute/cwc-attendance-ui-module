/* import React from "react";
import { Route, withRouter } from "react-router-dom";
import MainPage from "../pages/mainPage/mainPage";
import PanAadharNumber from "../pages/panAadharNumber/panAadharNumber";
import VerifyPersonalDetails from "../pages/verifyPersonalDetails/verifyPersonalDetails";
import VerifyIncome from "../pages/verifyIncome/verifyIncome";
import VerifyBankDetails from "../pages/verifyBankDetails/verifyBankDetails";
import VerifyBankDetailsErrorMsg from "../pages/verifyBankDetails/verifyBankDetailsErrorMsg";
import UploadBankStatement from "../pages/verifyIncome/uploadBankStatement";
import VideoVerification from "../pages/videoVerification/videoVerification";
import VideoVerificationSuccessMsg from "../pages/videoVerification/videoVerificationSuccessMsg";
import CongratulationsWithSelectEmi from "../pages/videoVerification/congratulationsWithSelectEmi";
import SelectEmiOptions from "../pages/emi/selectEmiOptions";
import LoanSummary from "../pages/loanSummary/loanSummary";
import ConfirmBackAccount from "../pages/verifyBankDetails/confirmBankAccount";
import AddBankAccountDetails from "../pages/verifyBankDetails/addBankAccountDetails";
import ConfirmBankAccountDetails from "../pages/verifyBankDetails/confirmBankAccountDetails";
import UPI from "../pages/verifyBankDetails/upi";
import BankAccountDetailsUpdatedSuccessMsg from "../pages/verifyBankDetails/bankAccountDetailsUpdatedSuccessMsg";
import Warning from "../pages/infoPage/warning";
import Success from "../pages/infoPage/success";
import VerifyWithUpi from "../pages/UPI/verifyWithUpi";
import UpiMainPage from "../pages/UPI/upiMainPage";

function index() {
  return (
    <>
      <Route exact path={"/mainPage"} component={MainPage} />
      <Route exact path={"/panAadharNumber"} component={PanAadharNumber} />
      <Route
        exact
        path={"/verifyPersonalDetails"}
        component={VerifyPersonalDetails}
      />
      <Route exact path={"/verifyIncome"} component={VerifyIncome} />
      <Route exact path={"/verifyBankDetails"} component={VerifyBankDetails} />
      <Route exact path={"/verifyWithUpi"} component={VerifyWithUpi} />
      <Route
        exact
        path={"/verifyBankDetailsErrorMsg"}
        component={VerifyBankDetailsErrorMsg}
      />
      <Route
        exact
        path={"/uploadBankStatement"}
        component={UploadBankStatement}
      />
      <Route exact path={"/videoVerification"} component={VideoVerification} />
      <Route
        exact
        path={"/videoVerificationSuccessMsg"}
        component={VideoVerificationSuccessMsg}
      />
      <Route
        exact
        path={"/congratulationsWithSelectEmi"}
        component={CongratulationsWithSelectEmi}
      />
      <Route exact path={"/selectEmiOptions"} component={SelectEmiOptions} />
      <Route exact path={"/loanSummary"} component={LoanSummary} />
      <Route
        exact
        path={"/confirmBackAccount"}
        component={ConfirmBackAccount}
      />
      <Route
        exact
        path={"/addBankAccountDetails"}
        component={AddBankAccountDetails}
      />
      <Route
        exact
        path={"/confirmBankAccountDetails"}
        component={ConfirmBankAccountDetails}
      />
      <Route exact path={"/upi"} component={UPI} />
      <Route
        exact
        path={"/bankAccountDetailsUpdatedSuccessMsg"}
        component={BankAccountDetailsUpdatedSuccessMsg}
      />
      <Route exact path={"/warning"} component={Warning} />
      <Route exact path={"/success"} component={Success} />
    </>
  );
}

export default withRouter(index);
 */