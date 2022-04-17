import React, { useState } from "react";
import axios from "axios";
import eshiConLogo from "../../assets/images/eshiArtboard.png";

import { Modal, Button, Form, Input, Select, notification } from "antd";
import CustomModal from "../common/Modal";

const { Option } = Select;

const RentalForm = ({ title, visible, onOk, onCancel, machinery }) => {
  const [form] = Form.useForm();

  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [duration, setDuration] = useState("");

  const [loading, setLoading] = useState(false);

  const handleDurationChange = (value) => {
    setDuration(value);
  };

  const onFinish = (values) => {
    setLoading(true);
    const rent = { fullName, phoneNumber, companyName, duration, machinery };
    axios
      .post("http://localhost:5000/api/v1/rental/", rent)
      .then((res) => {
        setLoading(false);
        notification.success({
          message: "Success",
          description: "Request sent successfully",
        });
        onOk();
      })
      .catch((err) => {
        console.log(err);
        notification.error({
          message: "Error",
          description: "Something went wrong",
        });
        setLoading(false);
      });
  };

  return (
    <CustomModal title={title} visible={visible} width={800} onCancel={onCancel}>
      <Form
        form={form}
        initialValues={{}}
        layout="vertical"
        onFinish={onFinish}
      >
        <div className="w-full md:w-1/2 flex items-center justify-center pb-10 md:pl-32">
          <img height={80} src={eshiConLogo} alt="" />
        </div>

        <Form.Item
          label="Phone number"
          rules={[
            {
              required: true,
              message: "Please input supplier Phone Number!",
            },
            {
              pattern: new RegExp("^[0-9]{10}$"),
              message: "Must be 10 characters",
            },
            {
              pattern: "^[09]",
              message: "Must be start with 09",
            },
          ]}
        >
          <Input
            placeholder="Enter your phone number"
            type={"number"}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </Form.Item>
        <Form.Item label="Full name" rules={{ required: true }}>
          <Input
            placeholder="Enter your full name"
            onChange={(e) => setFullName(e.target.value)}
          />
        </Form.Item>
        <Form.Item label="Company name" rules={{ required: true }}>
          <Input
            placeholder="Enter your company name"
            onChange={(e) => setCompanyName(e.target.value)}
          />
        </Form.Item>
        <Form.Item label="Duration" rules={{ required: true }}>
          <Select
            defaultValue="1 day"
            style={{ width: "100%" }}
            onChange={handleDurationChange}
          >
            <Option value="1 day">1 day</Option>
            <Option value="1 week">1 week - 10% off</Option>
            <Option value="1 month">1 month - 15% off</Option>
          </Select>
        </Form.Item>
        <div className="w-full mt-4 flex items-center justify-center">
          <Button
            loading={loading}
            disabled={loading}
            htmlType="submit"
            type="primary"
            className="w-3/5"
          >
            Request Now
          </Button>
        </div>
      </Form>
    </CustomModal>
  );
};

export default RentalForm;
