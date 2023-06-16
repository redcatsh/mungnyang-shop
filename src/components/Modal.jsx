import React from "react";
import { Modal } from "antd";
import { useState } from "react";

export default function Modal() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <Modal
      title="Basic Modal"
      open={isModalOpen}
      onOk={handleOk}
      onCancel={handleCancel}
    >
      <p>Some contents...</p>
    </Modal>
  );
}
