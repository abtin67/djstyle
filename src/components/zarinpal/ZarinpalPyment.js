import React, { useState, useEffect } from 'react';
import './ZarinpalPyment.css';
import { useCart } from '../context/CartContext';

const PaymentGateway = () => {
  const { cartItems } = useCart();
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [ccv2, setCcv2] = useState('');
  const [secondPassword, setSecondPassword] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');

  useEffect(() => {
    const storedName = localStorage.getItem('name');
    const storedEmail = localStorage.getItem('email');
    const storedMobile = localStorage.getItem('phone');

    if (storedName) setName(storedName);
    if (storedEmail) setEmail(storedEmail);
    if (storedMobile) setMobile(storedMobile);
  }, []);

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // اینجا کد برای ارسال اطلاعات پرداخت به سرور یا درگاه پرداخت
    console.log({
      cardNumber,
      expiryDate,
      ccv2,
      secondPassword,
      name,
      email,
      mobile,
      amount: getTotalPrice(),
    });
  };

  return (
    <form onSubmit={handleSubmit} className="payment-form">
      <div className="form-group">
        <label>نام:</label>
        <input type="text" value={name} readOnly />
      </div>
      <div className="form-group">
        <label>ایمیل:</label>
        <input type="email" value={email} readOnly />
      </div>
      <div className="form-group">
        <label>شماره موبایل:</label>
        <input type="tel" value={mobile} readOnly />
      </div>
      <div className="form-group">
        <label>شماره کارت:</label>
        <input type="text" value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} required />
      </div>
      <div className="form-group">
        <label>تاریخ انقضا:</label>
        <input type="text" value={expiryDate} onChange={(e) => setExpiryDate(e.target.value)} required />
      </div>
      <div className="form-group">
        <label>CCV2:</label>
        <input type="text" value={ccv2} onChange={(e) => setCcv2(e.target.value)} required />
      </div>
      <div className="form-group">
        <label>رمز دوم:</label>
        <input type="password" value={secondPassword} onChange={(e) => setSecondPassword(e.target.value)} required />
      </div>
      <div className="form-group">
        <label>مبلغ کل:</label>
        <input type="text" value={getTotalPrice()} readOnly />
      </div>
      <button className='pymentBtn' type="submit">پرداخت</button>
    </form>
  );
};

export default PaymentGateway;
