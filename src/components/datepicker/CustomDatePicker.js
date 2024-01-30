import { CalendarOutlined } from "@ant-design/icons";
import { Button, Form, Modal, Row } from "antd";
import moment from "moment";
import React, { useEffect, useState } from "react";
import DatePicker from "react-mobile-datepicker";
import InputText from "../Input/InputText";
import Error from "../../assets/svg/error.svg";
import "./style.scss";

const CustomDatePicker = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [date, setDate] = useState("");
  const [errorModal, setErrorModal] = useState(false);
  const componentProps = {
    ...props,
  };
  const { name, rules, form } = props;

  useEffect(() => {
    if (props?.defaultValue) {
      setDate(props?.defaultValue);
    } else {
      setDate("");
    }
  }, []);

  const showModal = () => {
    setIsModalOpen(true);
  };

  //console.log(date);

  const monthMap = {
    1: "Jan",
    2: "Feb",
    3: "Mar",
    4: "Apr",
    5: "May",
    6: "Jun",
    7: "Jul",
    8: "Aug",
    9: "Sep",
    10: "Oct",
    11: "Nov",
    12: "Dec",
  };

  const dateConfig = {
    date: {
      format: "DD",
      caption: "Day",
      step: 1,
    },
    month: {
      format: (value) => monthMap[value.getMonth() + 1],
      caption: "Mon",
      step: 1,
    },
    year: {
      format: "YYYY",
      caption: "Year",
      step: 1,
    },
  };

  const handleDatePickerCancel = () => {
    // this.setState({ isOpen: false });
    setIsModalOpen(false);
  };

  const onOkHandler = () => {
    // this.setState({ isOpen: false });
    setIsModalOpen(false);
    setErrorModal(false);
  };

  const handleDateSelection = (date) => {
    // this.setState({ time, isOpen: false });

    // console.log("Selected Date Year", moment(date).year());
    // console.log("IsLessDate", props?.isLessThanDate);
    // console.log("CurrentYear", moment().year());
    // console.log("TestDate", moment(date).year());
    if (props.isError) {
      if (!date) {
        //  date modal open
        setErrorModal(true);
      } else if (
        (props?.isLessThanDate &&
          moment(date).year() < props?.isLessThanDate) ||
        moment(date).year() === moment().year()
        //||
        //!date
      ) {
        //  date modal open
        setErrorModal(true);
      } else {
        setDate(moment(date).format("DD-MM-YYYY"));
        setIsModalOpen(false);
        form.setFieldValue(name, moment(date).format("DD-MM-YYYY"));
      }
    } else {
      setDate(moment(date).format("DD-MM-YYYY"));
      setIsModalOpen(false);
      form.setFieldValue(name, moment(date).format("DD-MM-YYYY"));
    }
  };

  return (
    <div
      className=" custom-datepicker-container"
      //  style={{ background: "#fff" }}
    >
      {/* <Button type="primary" >
        Open Modal
      </Button> */}
      <div className="">
        <Modal
          title=""
          open={errorModal}
          centered
          footer={null}
          closable={false}
          // onOk={handleOk}
          // onCancel={handleCancel}
        >
          <div className=" errorPageContainerDP wrapperDiv-successMsgDP pt10 colorWhite p5">
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
                {""}
              </div>
              {!date && (
                <div className="description colorWhite fs12">
                  {
                    "Unfortunately, based on the age selection, we regret to inform you that we are unable to offer health insurance coverage at this time."
                  }
                </div>
              )}
              {/* {date && (
              <div className="description colorWhite fs12">
                "Invalid Date of Birth"
              </div>
            )} */}

              {/* <Link to={`/${route}`}> */}
              <Row className="p5">
                <Button className="button" onClick={onOkHandler}>
                  {"Okay"}
                </Button>
              </Row>
            </div>
          </div>
        </Modal>
      </div>
      <div onClick={showModal}>
        <Form.Item name={name} rules={rules}>
          <InputText
            suffix={<CalendarOutlined style={{ color: "gray" }} />}
            value={date}
            initialvalues={date}
            readOnly
            inputreadonly="true"
            placement="bottomRight"
            className="custom-input mdDOB"
            // type="date"
            placeholder="Select Date"
            {...componentProps}
            allowClear={false}
          />
        </Form.Item>
      </div>
      <div>
        {isModalOpen && (
          <DatePicker
            className="custom-datepicker"
            theme={"android-dark"}
            showHeader={false}
            confirmText={"OK"}
            cancelText={"Cancel"}
            // headerFormat={"DD/MM/YYYY"}
            onSelect={handleDateSelection}
            onCancel={handleDatePickerCancel}
            isOpen={isModalOpen}
            showCaption={true}
            dateConfig={dateConfig}
            isClearable
            {...componentProps}
          />
        )}
      </div>
    </div>
  );
};

export default CustomDatePicker;
