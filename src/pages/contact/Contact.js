import { useState } from "react";
import { Alert, Form, Button } from "react-bootstrap";
import { IoImageOutline } from "react-icons/io5";
import { FaRegMessage } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { MdDriveFileRenameOutline } from "react-icons/md";
import { MdSubject } from "react-icons/md";
import { LiaWpforms } from "react-icons/lia";
import Footer from '../../components/footer/Footer'


function Contact() {
  const [formData, setFormData] = useState({
    subject: "",
    name: "",
    email: "",
    message: "",
    image: null,
  });

  const [showSuccess, setShowSuccess] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({
          ...formData,
          image: reader.result,
        });
      };

      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const existingData =
      JSON.parse(localStorage.getItem("cantactFormData")) || [];
    const newData = [...existingData, formData];
    localStorage.setItem("contactFormData", JSON.stringify(newData));

    setShowSuccess(true);

    setFormData({
      subject: "",
      name: "",
      email: "",
      message: "",
      image: null,
    });
  };
  return (
    <div className="container mt-5" style={{ maxWidth: "600px" }}>
      <h2 className="my-5"> <LiaWpforms size='23px' style={{marginLeft:"10px"}} />فرم تماس</h2>

      {showSuccess && (
        <Alert
          dismissible
          variant="success"
          onClose={() => setShowSuccess(false)}
        >
          پیام با موفقیت ارسال شد
        </Alert>
      )}
      <Form onSubmit={handleSubmit}>
        <Form.Group className="py-4">
          <Form.Label> <MdSubject size='23px' style={{marginLeft:"10px"}} />موضوع:</Form.Label>
          <Form.Control
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleInputChange}
            required
          />
        </Form.Group>

        <Form.Group className="py-4">
          <Form.Label> <MdDriveFileRenameOutline size='23px' style={{marginLeft:"10px"}} />نام کامل:</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </Form.Group>

        <Form.Group className="py-4">
          <Form.Label><MdOutlineEmail size='23px' style={{marginLeft:"10px"}} />آدرس ایمیل:</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </Form.Group>

        <Form.Group className="py-4">
          <Form.Label><FaRegMessage size='23px' style={{marginLeft:"10px"}} /> متن پیام:</Form.Label>
          <Form.Control
            as="textarea"
            rows={4}
            value={formData.message}
            onChange={handleInputChange}
            required
          />
        </Form.Group>
        <Form.Group className="py-4">
          <Form.Label> <IoImageOutline size='23px' style={{marginLeft:"10px"}} />عکس(اختیاری):</Form.Label>
          <Form.Control
           type="file"
           accept="imge/*"
           onChange={handleImageChange}
          />
        </Form.Group>

        <div className="mt-5 d-grid gap-2 ">
          <Button variant="primary" type="submit">
            ارسال
          </Button>
        </div>
      </Form>
      <Footer />
    </div>
  );
}
export default Contact;

