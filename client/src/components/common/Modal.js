import { Modal } from "antd";
import React from "react";

const CustomModal = ({
  children,
  visible,
  onCancel,
  width,
  maskClosable = true,
}) => {
  return (
    <>
      <Modal
        title="Information"
        destroyOnClose={true}
        visible={visible}
        onCancel={onCancel}
        footer={null}
        maskClosable={maskClosable}
        width={width || 400}
      >
        {children}
      </Modal>
    </>
  );
};

export default CustomModal;
