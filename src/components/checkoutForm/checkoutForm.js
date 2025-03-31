

import React, { Fragment, useState } from "react";
import './checkoutForm.css'

function CheckoutForm({ onClose }) {
  const [paymentMethod, setPaymentMethod] = useState("creditCard");
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // پردازش اطلاعات پرداخت
    console.log("Payment Method:", paymentMethod);
    console.log("Card Number:", cardNumber);
    console.log("Expiry Date:", expiryDate);
    console.log("CVV:", cvv);
    alert("پرداخت با موفقیت انجام شد!");
    onClose(); // بستن فرم پس از پرداخت موفق
  };

  return (
    <div className="checkout-overlay">
      <div className="checkout-form">
        <h2>تکمیل پرداخت</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>روش پرداخت:</label>
            <select
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
            >
              <option value="creditCard">کارت اعتباری</option>
              <option value="bankTransfer">انتقال بانکی</option>
              <option value="wallet">کیف پول</option>
            </select>
          </div>

          {paymentMethod === "creditCard" && (
            <Fragment>
              <div className="form-group">
                <label>شماره کارت:</label>
                <input
                  type="text"
                  value={cardNumber}
                  onChange={(e) => setCardNumber(e.target.value)}
                  placeholder="1234 5678 9012 3456"
                  required
                />
              </div>
              <div className="form-group">
                <label>تاریخ انقضا:</label>
                <input
                  type="text"
                  value={expiryDate}
                  onChange={(e) => setExpiryDate(e.target.value)}
                  placeholder="MM/YY"
                  required
                />
              </div>
              <div className="form-group">
                <label>CVV:</label>
                <input
                  type="text"
                  value={cvv}
                  onChange={(e) => setCvv(e.target.value)}
                  placeholder="123"
                  required
                />
              </div>
            </Fragment>
          )}

          <div className="form-actions">
            <button type="button" onClick={onClose} className="cancel-button">
              انصراف
            </button>
            <button type="submit" className="submit-button">
              پرداخت
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CheckoutForm;