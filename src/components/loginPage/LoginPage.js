import { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import './LoginPage.css'

export function LoginPage() {
  const navigate = useNavigate();
  const [loginFormData, setLoginFormData] = useState({
    username: "",
    phone: "",
    address: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("userInfo", JSON.stringify(loginFormData));
    navigate("/");
  };
  return (
    <Container className=" login-container">
      <h2 className="login-title ">ورود به حساب کاربری</h2>
      <Form onSubmit={handleSubmit} className="border p-4 rounded shadow">
        <Form.Group className=" login-form mb-3">
          <Form.Label>نام کاربری</Form.Label>
          <Form.Control
            type="text"
            name="username"
            value={loginFormData.username}
            onChange={handleChange}
             className="form-control"
            required
          />
        </Form.Group>
        <Form.Group className="login-form">
          <Form.Label>شماره تلفن</Form.Label>
          <Form.Control
            type="tel"
            name="phone"
            value={loginFormData.phone}
            onChange={handleChange}
            className="form-control"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3 login-form">
          <Form.Label>آدرس</Form.Label>
          <Form.Control
            type="text"
            name="address"
            value={loginFormData.address}
            onChange={handleChange}
            className="form-control"
          />
        </Form.Group>
        <Button variant="primary" type="submit" className=" btn w-100">
          ورود
        </Button>

        
      </Form>
      <div className="mt-5 text-center" style={{marginTop:"30px"}}>
      <span >
         ورود و یا ثبت نام در فروشگاه آنلاین، شما شرایط و قوانین استفاده از تمام
        سرویس های سایت فروشگاه و قوانین حریم خصوصی آن را می‌پذیرید.
      </span>
      </div>
     
    </Container>
  );
}
