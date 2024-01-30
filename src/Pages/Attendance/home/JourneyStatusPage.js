import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getCaseDetails } from "../../../services/LFI/CommonServics";
import useCommonStore from "../../../store/commonStore";
import useHeaderStore from "../../../store/headerStore";
import "./style.scss";

const JourneyStatusPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [selected, setSelected] = React.useState("continue");
  const storeData = useCommonStore((state) => state.data);
  const setIsLogoVisible = useHeaderStore((state) => state.setIsLogoVisible);
  const setHeader = useHeaderStore((state) => state.setHeader);
  const [journayStageData, setJournayStageData] = useState([]);

  const searchParams = new URLSearchParams(document.location.search);
  const employeeId = searchParams.get("employeeId");
  const authToken = searchParams.get("authToken");
  const caseStatus = searchParams.get("caseStatus");
  const applicantUniqueId = searchParams.get("applicantUniqueId");

  useEffect(() => {
    fetchJourneyStages();
    setIsLogoVisible(true);
    setHeader("");
    return () => {
      setIsLogoVisible(true);
    };
  }, []);
  //searchParams.get("employeeId")
  //searchParams.get("employeeId");
  const fetchJourneyStages = async () => {
    let headers = {
      "Access-Control-Allow-Origin": "*",
      "authentication-token": authToken,
    };

    const response = await getCaseDetails(
      {
        employeeId: employeeId,
        caseStatus: caseStatus == "InProgress" ? "In Progress" : "Completed",
      },
      headers
    );
    //console.log(journayStageData);
    const filteredResponse = response?.responseList.filter(
      (data) => data.applicantUniqueId === applicantUniqueId
    );
    console.log(filteredResponse);
    setJournayStageData(filteredResponse);
    console.log("State", journayStageData);

    if (filteredResponse[0]?.token) {
      Cookies.set("mobileNo", filteredResponse[0]?.mobile, {
        expires: 1,
      });
      Cookies.set("lFIToken", filteredResponse[0]?.token, {
        expires: 1,
      });
      Cookies.set("applicantId", applicantUniqueId);
      Cookies.set("customerType", filteredResponse[0]?.customerType);
    }
    switch (filteredResponse[0]?.currentStage) {
      case "Enter PAN":
        navigate("/lfi/panAadharNumber");
        break;
      case "Member Selection":
        navigate("/lfi/memberSelection");
        break;
      case "Member Details":
        navigate("/lfi/memberDetails");
        break;
      case "Medical Declaration":
        navigate("/lfi/selfDeclaration");
        break;
      case "AA Selection":
        navigate("/lfi/benifitsofIncomeProof");
        break;
      case "Account Aggregator Skip":
        navigate("/lfi/selectInsurancePlan");
        break;

      case "Live Bank Names":
        navigate("/lfi/aaBankSelection");
        break;
      case "Account Aggregator":
        navigate("/lfi/aaBankSelection");
        break;
      case "Account Aggregator BRE":
        navigate("/lfi/accountAggregatorInProgress");
        break;
      case "Bank Name Not Listed Waitlist":
        navigate("/error", {
          state: {
            data: {
              title: "",
              desc: "Sorry ! We are currently not providing loans if your bank is not listed",
              btnName: "Go to Home Page",
              route: "/lfi/redirectToPage",
            },
          },
        });
        break;
      case "Select Insurance Plan":
        navigate("/lfi/selectInsurancePlan");
        break;
      case "View Premium Details":
        navigate("/lfi/selectInsurancePlan");
        break;
      case "Review Your Policy":
        navigate("/lfi/reviewYourPolicy");
        break;
      case "Payment Selection":
        navigate("/lfi/selectPaymentPlan");
        break;
      case "View Premium Details2":
        navigate("/lfi/selectPaymentPlan");
        break;
      case "PAN Upload":
        navigate("/lfi/uploadPan");
        break;
      case "Aadhar Upload":
        navigate("/lfi/uploadAadhar");
        break;
      case "Personal Details":
        navigate("/lfi/verifyPersonalDetails");
        break;
      case "Add Nominee":
        navigate("/lfi/nomineeDetails");
        break;
      case "Other Basic Details":
        navigate("/lfi/otherBasicDetails");
        break;
      case "Add Bank Details":
        navigate("/lfi/addBankAccountDetails");
        break;
      case "Confirm Bank Account":
        navigate("/lfi/confirmBankAccount");
        break;
      case "Emi Auto Pay":
        navigate("/lfi/emiAutoPay");
        break;
      case "Sign your agreement":
        navigate("/lfi/eSignAgreement");
        break;
      case "Payment View Details":
        navigate("/lfi/emiPayment");
        break;
      case "Payment":
        navigate("/lfi/emiPayment");
        break;
      case "Payment Success View":
        navigate("/lfi/ePaymentSuccess");
        break;
      case "Activate Policy In Progress":
        navigate("/lfi/policyActivationInProgress");
        break;
      case "Policy Activated":
        navigate("/lfi/policyActivated");
        break;
      case "Medical Declaration- Yes":
        navigate("/lfi/healthConditionsError");
        break;
    }
    //       navigate("/otherPersonalDetails");
    //       break;
    //     case "Emi Auto Pay":
    //       navigate("/emiAutoPay");
    //       break;
    //     case "Confirm Bank Account Details":
    //       navigate("/confirmBankAccount");
    //       break;

    //     case "Check Document Upload Success":
    //       navigate("/confirmBankAccount");
    //       break;
    //     case "Check Document Upload Failure":
    //       if (storeData?.customerType == "Existing") {
    //         navigate("/selectUploadType");
    //       } else {
    //         navigate(`/uploadPan`, {
    //           state: {
    //             data: {
    //               type: "pan",
    //               redirectFlag: true,
    //             },
    //           },
    //         });
    //       }
    //       break;

    //     case "Account Aggregator": // --working
    //       navigate("/accountAggregator");
    //       break;
    //     case "Personal Details": // ---working;
    //       navigate("/verifyPersonalDetails");
    //       break;
    //     case "Enter PAN and Aadhar":
    //       navigate("/panAadharNumber");
    //       break;
    //     case "PAN Upload":
    //       navigate("/uploadPan");
    //       break;
    //     case "Aadhar Upload":
    //       navigate("/uploadAadhar");
    //       break;
    //     case "PAN And Aadhar Upload Verified":
    //       navigate("/uploadPan");
    //       break;

    //     case "Video Verification Success":
    //       navigate("/videoVerificationSuccessMsg");
    //       break;

    //     case "Manual Case":
    //       navigate("/inProgress");
    //       break;
    //     case "Credit Rejected":
    //       navigate("/error", {
    //         state: {
    //           data: {
    //             title: "Waitlisted",
    //             desc: "Based on your credit profile, we will need to place you on a waitlist for CWC Cash.Please try again after 2 months.",
    //             btnName: "OK",
    //             route: "lfi/redirectToPage ",
    //             apiCall: "pl/ruleengineapi/saveRuleEngineWaitlist",
    //           },
    //         },
    //       });
    //       break;
    //     case "STP Rejected":
    //       navigate("/error", {
    //         state: {
    //           data: {
    //             title: "Waitlisted",
    //             desc: "Based on your credit profile, we will need to place you on a waitlist for CWC Cash.Please try again after 2 months.",
    //             btnName: "OK",
    //             route: "lfi/redirectToPage ",
    //             apiCall: "pl/ruleengineapi/saveRuleEngineWaitlist",
    //           },
    //         },
    //       });
    //       break;
    //     case "Rule Engine Waitlist":
    //       navigate("/error", {
    //         state: {
    //           data: {
    //             title: "Waitlisted",
    //             desc: "Based on your credit profile, we will need to place you on a waitlist for CWC Cash.Please try again after 2 months.",
    //             btnName: "OK",
    //             route: "lfi/redirectToPage ",
    //             apiCall: "pl/ruleengineapi/saveRuleEngineWaitlist",
    //           },
    //         },
    //       });
    //       break;
    //     case "Rule Engine Waitlist":
    //       navigate("/error", {
    //         state: {
    //           data: {
    //             title: "Waitlisted",
    //             desc: "Based on your credit profile, we will need to place you on a waitlist for CWC Cash.Please try again after 2 months.",
    //             btnName: "OK",
    //             route: "lfi/redirectToPage ",
    //             apiCall: "pl/ruleengineapi/saveRuleEngineWaitlist",
    //           },
    //         },
    //       });
    //       break;
    //     case "STP Rejected Waitlist":
    //       navigate("/error", {
    //         state: {
    //           data: {
    //             title: "Waitlisted",
    //             desc: "Based on your credit profile, we will need to place you on a waitlist for CWC Cash.Please try again after 2 months.",
    //             btnName: "OK",
    //             route: "lfi/redirectToPage ",
    //             apiCall: "pl/ruleengineapi/saveRuleEngineWaitlist",
    //           },
    //         },
    //       });
    //       break;

    //     default:
    //       navigate("/panAadharNumber");
    //       break;
    //   }
    // };

    // const navigatePanAadhar = async () => {
    //   const response = await updateCaseStatus({
    //     applicantUniqueId: Cookies.get("applicantId"),
    //   });
    //   if (!response.error) {
    //     navigate("/panAadharNumber");
    //   } else {
    //     navigate("/error", {
    //       state: {
    //         data: {
    //           title: "Error",
    //           desc: response?.message,
    //           btnName: "OK",
    //           route: "lfi/redirectToPage ",
    //         },
    //       },
    //     });
    //   }
    // };
    // if (!response?.error) {
    //   console.log(response);
    //   setPolicyData(response);
    // }
  };
  // const navigateBasedOnJourneyStatus = async () => {
  //   const response = await getJourneyStages({
  //     applicantUniqueId: Cookies.get("applicantId"),
  //   });

  //   switch (response?.data?.stages) {
  //     case "Cash Offer":
  //       navigate("/cashOffer");
  //       break;
  //     case "Select EMI":
  //       navigate("/cashOffer");
  //       break;
  //     case "Loan Summary":
  //       navigate("/loanSummary");
  //       break;
  //     case "Confirm Bank Account":
  //       navigate("/confirmBankAccount");
  //       break;
  //     case "Add Bank Details":
  //       navigate("/addBankAccountDetails");
  //       break;
  //     case "Net Banking Login":
  //       navigate("/emiAutoPay");
  //       break;
  //     case "Add Nominee":
  //       navigate("/addNominee");
  //       break;
  //     case "Sign your agreement":
  //       navigate("/esignAgreement");
  //       break;
  //     case "Get Cash":
  //       navigate("/getCash");
  //       break;
  //     case "Reverse Penny drop":
  //       navigate("/reversePennyInProgress");
  //       break;
  //     case "Upload Address Proof":
  //       navigate("/uploadAddressProof");
  //       break;
  //     case "Form 60":
  //       navigate("/selectUploadType");
  //       break;
  //     case "Verify Your Address":
  //       navigate("/verifyAddress");
  //       break;
  //     case "Video Verification":
  //       navigate("/videoVerification");
  //       break;
  //     case "Upload Bank Statement":
  //       navigate("/uploadBankStatement");
  //       break;
  //     case "Upload Bank Statement BRE":
  //       navigate("/uploadDocumentInProgress");
  //       break;
  //     case "Auto Disbursal":
  //       navigate("/congratulations");
  //       break;
  //     case "Account Aggregator BRE":
  //       navigate("/accountAggregatorInProgress");
  //       break;
  //     case "Aadhar Upload After Check Document":
  //       navigate(`/uploadAadhar`, {
  //         state: {
  //           data: {
  //             navigateChooseBankAccount: true,
  //           },
  //         },
  //       });
  //       break;
  //     case "Pan Upload After Check Document":
  //       if (storeData?.customerType == "Existing") {
  //         navigate("/selectUploadType");
  //       } else {
  //         navigate(`/uploadPan`, {
  //           state: {
  //             data: {
  //               type: "pan",
  //               redirectFlag: true,
  //             },
  //           },
  //         });
  //       }
  //       break;
  //     case "Other Personal Details":
  //       navigate("/otherPersonalDetails");
  //       break;
  //     case "Emi Auto Pay":
  //       navigate("/emiAutoPay");
  //       break;
  //     case "Confirm Bank Account Details":
  //       navigate("/confirmBankAccount");
  //       break;

  //     case "Check Document Upload Success":
  //       navigate("/confirmBankAccount");
  //       break;
  //     case "Check Document Upload Failure":
  //       if (storeData?.customerType == "Existing") {
  //         navigate("/selectUploadType");
  //       } else {
  //         navigate(`/uploadPan`, {
  //           state: {
  //             data: {
  //               type: "pan",
  //               redirectFlag: true,
  //             },
  //           },
  //         });
  //       }
  //       break;

  //     case "Account Aggregator": // --working
  //       navigate("/accountAggregator");
  //       break;
  //     case "Personal Details": // ---working;
  //       navigate("/verifyPersonalDetails");
  //       break;
  //     case "Enter PAN and Aadhar":
  //       navigate("/panAadharNumber");
  //       break;
  //     case "PAN Upload":
  //       navigate("/uploadPan");
  //       break;
  //     case "Aadhar Upload":
  //       navigate("/uploadAadhar");
  //       break;
  //     case "PAN And Aadhar Upload Verified":
  //       navigate("/uploadPan");
  //       break;

  //     case "Video Verification Success":
  //       navigate("/videoVerificationSuccessMsg");
  //       break;

  //     case "Manual Case":
  //       navigate("/inProgress");
  //       break;
  //     case "Credit Rejected":
  //       navigate("/error", {
  //         state: {
  //           data: {
  //             title: "Waitlisted",
  //             desc: "Based on your credit profile, we will need to place you on a waitlist for CWC Cash.Please try again after 2 months.",
  //             btnName: "OK",
  //             route: "lfi/redirectToPage ",
  //             apiCall: "pl/ruleengineapi/saveRuleEngineWaitlist",
  //           },
  //         },
  //       });
  //       break;
  //     case "STP Rejected":
  //       navigate("/error", {
  //         state: {
  //           data: {
  //             title: "Waitlisted",
  //             desc: "Based on your credit profile, we will need to place you on a waitlist for CWC Cash.Please try again after 2 months.",
  //             btnName: "OK",
  //             route: "lfi/redirectToPage ",
  //             apiCall: "pl/ruleengineapi/saveRuleEngineWaitlist",
  //           },
  //         },
  //       });
  //       break;
  //     case "Rule Engine Waitlist":
  //       navigate("/error", {
  //         state: {
  //           data: {
  //             title: "Waitlisted",
  //             desc: "Based on your credit profile, we will need to place you on a waitlist for CWC Cash.Please try again after 2 months.",
  //             btnName: "OK",
  //             route: "lfi/redirectToPage ",
  //             apiCall: "pl/ruleengineapi/saveRuleEngineWaitlist",
  //           },
  //         },
  //       });
  //       break;
  //     case "Rule Engine Waitlist":
  //       navigate("/error", {
  //         state: {
  //           data: {
  //             title: "Waitlisted",
  //             desc: "Based on your credit profile, we will need to place you on a waitlist for CWC Cash.Please try again after 2 months.",
  //             btnName: "OK",
  //             route: "lfi/redirectToPage ",
  //             apiCall: "pl/ruleengineapi/saveRuleEngineWaitlist",
  //           },
  //         },
  //       });
  //       break;
  //     case "STP Rejected Waitlist":
  //       navigate("/error", {
  //         state: {
  //           data: {
  //             title: "Waitlisted",
  //             desc: "Based on your credit profile, we will need to place you on a waitlist for CWC Cash.Please try again after 2 months.",
  //             btnName: "OK",
  //             route: "lfi/redirectToPage ",
  //             apiCall: "pl/ruleengineapi/saveRuleEngineWaitlist",
  //           },
  //         },
  //       });
  //       break;

  //     default:
  //       navigate("/panAadharNumber");
  //       break;
  //   }
  // };

  // const navigatePanAadhar = async () => {
  //   const response = await updateCaseStatus({
  //     applicantUniqueId: Cookies.get("applicantId"),
  //   });
  //   if (!response.error) {
  //     navigate("/panAadharNumber");
  //   } else {
  //     navigate("/error", {
  //       state: {
  //         data: {
  //           title: "Error",
  //           desc: response?.message,
  //           btnName: "OK",
  //           route: "lfi/redirectToPage ",
  //         },
  //       },
  //     });
  //   }
  // };

  // const redirectHandler = (type) => {
  //   selected == "continue"
  //     ? navigateBasedOnJourneyStatus()
  //     : navigatePanAadhar();
  // };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "90vh",
      }}
    >
      <div className="successContainer wrapperDiv-successMsg pt10 colorWhite p5">
        {/* <div className="p5 successWrapper">
          <Row className="p5">
            <Button className={"button"}>{"Continue Journey"}</Button>
          </Row>
        </div> */}
      </div>
      {/* <div className="p3">
        <Row justify={"center"}>
          <Button onClick={() => redirectHandler()} className="button">
            {"Proceed"}
          </Button>
        </Row>
      </div> */}
    </div>
  );
};

export default JourneyStatusPage;
