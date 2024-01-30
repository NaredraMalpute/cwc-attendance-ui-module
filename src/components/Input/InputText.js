/* eslint-disable eqeqeq */
import React from "react";
import { DatePicker, Form, Input, Select, Switch } from "antd";
import TextArea from "antd/lib/input/TextArea";
import "./index.scss";

const InputText = (props) => {
  const { RangePicker } = DatePicker;
  let InputField = Input;
  const { id, type, ...rest } = props;
  const componentProps = {
    id,
    ...rest,
    autoComplete: "off",
    placement: "bottomEnd",
  };
  if (type === "date") {
    InputField = DatePicker;
  }
  if (type === "dropdown") {
    InputField = Select;
  }

  if (type === "number") {
    componentProps.type = "number";
  }
  if (type === "password") {
    InputField = Input.Password;
  }
  if (type === "switch") {
    InputField = Switch;
  }

  return (
    <div className="customInput">
      {props?.type == "textarea" ? (
        <label className="customInput__label" htmlFor={props?.label}>
          {props?.label}
        </label>
      ) : (
        <label className="customInput__label" htmlFor={props?.label}>
          {props?.label}
        </label>
      )}
      {props?.type == "datepickerTime" ? (
        <Form.Item noStyle>
          <DatePicker
            placeholder={" "}
            {...componentProps}
            className="customInput__input"
          />
        </Form.Item>
      ) : props?.type == "textarea" ? (
        <Form.Item noStyle>
          <TextArea
            style={{
              background: "rgba(222, 237, 255, 0.08)",
              color: "#fff",
              border: "none",
            }}
            className="customInput__input"
            autoSize={{
              minRows: 2,
              maxRows: 6,
            }}
            {...componentProps}
          />
        </Form.Item>
      ) : props?.type == "dropdown" ? (
        <Form.Item noStyle>
          <InputField
            placeholder={" "}
            {...componentProps}
            type="dropdown"
            className="customInput__input"
          />
        </Form.Item>
      ) : props?.type == "rangepicker" ? (
        <Form.Item noStyle>
          <RangePicker
            placeholder={[""]}
            {...componentProps}
            className="customInput__input"
          />
        </Form.Item>
      ) : (
        <>
          <Form.Item noStyle>
            <InputField
              height={"3rem"}
              style={{ minHeight: "3rem" }}
              allowClear
              id={props?.label}
              placeholder={[" "]}
              {...componentProps}
              className="customInput__input"
            />
          </Form.Item>
        </>
      )}
    </div>
  );
};

export default InputText;
