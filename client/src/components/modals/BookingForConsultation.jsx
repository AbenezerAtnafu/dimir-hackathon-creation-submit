import React, { useState } from "react";
import { Form, Input, Button, message, notification, Select } from "antd";
import eshiConLogo from "../../assets/images/eshiArtboard.png";
import axios from "axios";

const { Option } = Select;

const BookingForConsultation = () => {
  const [loading, setLoading] = useState(false);
  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select
        style={{
          width: 80,
        }}
        defaultValue="251"
      >
        <Option value="251">+251</Option>
      </Select>
    </Form.Item>
  );
  const handleSubmit = (values) => {
    const result = {
      ...values.bookings,
      phoneNumber: "+251" + values.bookings.phoneNumber,
    };

    setLoading(true);
    const response = axios
      .post("http://localhost:5000/api/v1/consultation", result)
      .then((res) => {
        message.success({
          type: "success",
          placement: "topRight",
          message: "Consultation Booked",
        });
        setLoading(false);
      })
      .catch((err) => {
        if (err.toString().split(": ")[1] === "Network Error") {
          notification.error({
            type: "error",
            placement: "topRight",
            message: err.toString().split(": ")[1],
          });
        } else {
          message.error(err);
        }
        setLoading(false);
      });
  };

  return (
    <>
      <Form layout="vertical" requiredMark={false} onFinish={handleSubmit}>
        <div className="w-full flex md:flex-row flex-col">
          <div className="w-full flex md:flex-row flex-col-reverse">
            <div className="w-full md:w-1/2 flex flex-col">
              <Form.Item
                name={["bookings", "email"]}
                label="Email"
                rules={[
                  {
                    required: true,
                    message: "Email is required",
                    type: "email",
                  },
                ]}
              >
                <Input placeholder="Email" />
              </Form.Item>
              <Form.Item
                name={["bookings", "phoneNumber"]}
                label="Phone number"
                validateFirst
                rules={[
                  {
                    pattern: "^[9]",
                    message: "Must start with 9",
                  },
                  {
                    pattern: new RegExp("^[0-9]{9}$"),
                    message: "Must be 9 characters",
                  },
                  {
                    required: true,
                    message: "Phone number is required",
                  },
                ]}
              >
                <Input
                  addonBefore={prefixSelector}
                  placeholder="Phone number"
                />
              </Form.Item>
            </div>
            <div className="w-full md:w-1/2">
              <img height={100} src={eshiConLogo} alt="" />
            </div>
          </div>
        </div>
        <div className="w-full flex md:flex-row flex-col">
          <div className="md:mr-2 w-full md:w-1/2 flex flex-col">
            <Form.Item
              name={["bookings", "projectName"]}
              label="Project Name"
              rules={[
                {
                  required: true,
                  message: "Project name is required",
                },
              ]}
            >
              <Input placeholder="Project name" />
            </Form.Item>
          </div>
          <div className="md:ml-2 w-full md:w-1/2 flex flex-col">
            <Form.Item
              name={["bookings", "location"]}
              label="Location of work"
              rules={[
                {
                  required: true,
                  message: "Location of work is required",
                },
              ]}
            >
              <Input placeholder="Location of work" />
            </Form.Item>
          </div>
        </div>
        <div className="w-full flex md:flex-row flex-col">
          <div className="md:mr-2 w-full md:w-1/2 flex flex-col">
            <Form.Item
              name={["bookings", "projectManager"]}
              label="Project manager"
              rules={[
                {
                  required: true,
                  message: "Project manager is required",
                },
              ]}
            >
              <Input placeholder="Project manager" />
            </Form.Item>
          </div>
          <div className="md:ml-2 w-full md:w-1/2 flex flex-col">
            <Form.Item
              name={["bookings", "applicantName"]}
              label="Applicant name"
              rules={[
                {
                  required: true,
                  message: "Applicant name is required",
                },
              ]}
            >
              <Input placeholder="Applicant name" />
            </Form.Item>
          </div>
        </div>
        <div className="w-full flex md:flex-row flex-col">
          <div className="md:mr-2 w-full md:w-1/2 flex flex-col">
            <Form.Item
              name={["bookings", "city"]}
              label="City"
              rules={[
                {
                  required: true,
                  message: "City is required",
                },
              ]}
            >
              <Input placeholder="City" />
            </Form.Item>
          </div>
          <div className="md:ml-2 w-full md:w-1/2 flex flex-col">
            <Form.Item
              name={["bookings", "country"]}
              label="Country"
              rules={[
                {
                  required: true,
                  message: "Country is required",
                },
              ]}
            >
              <Input placeholder="Country" />
            </Form.Item>
          </div>
        </div>
        <div className="w-full mt-4 flex items-center justify-center">
          <Button
            loading={loading}
            disabled={loading}
            htmlType="submit"
            className="w-3/5"
          >
            Book Now
          </Button>
        </div>
      </Form>
    </>
  );
};

export default BookingForConsultation;
