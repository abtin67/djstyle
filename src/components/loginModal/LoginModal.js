import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";


function LoginModal({ show, onHide, onLogin }) {
  const [loginFormData, setLoginFormData] = useState({
    username: "",
    phone: "",
    address: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginFormData({
      ...loginFormData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // ذخیره اطلاعات کاربر در localStorage
    localStorage.setItem("userInfo", JSON.stringify(loginFormData));
    // فراخوانی تابع onLogin برای به‌روزرسانی وضعیت لاگین
    onLogin(loginFormData);
    // بستن مودال
    onHide();
  };

  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>ورود به حساب کاربری</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>نام کاربری</Form.Label>
            <Form.Control
              type="text"
              placeholder="نام خود را وارد کنید"
              name="username"
              value={loginFormData.username}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>شماره تلفن</Form.Label>
            <Form.Control
              type="tel"
              placeholder="شماره تلفن خود را وارد کنید"
              name="phone"
              value={loginFormData.phone}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>آدرس کامل</Form.Label>
            <Form.Control
              type="text"
              placeholder="آدرس خود را وارد کنید"
              name="address"
              value={loginFormData.address}
              onChange={handleChange}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            ورود
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

export default LoginModal;
