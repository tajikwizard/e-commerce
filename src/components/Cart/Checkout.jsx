import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { useCart } from "../../cartContext";

const Checkout = () => {
  const form = useRef();
  const { cartItems, calculateTotalPrice } = useCart();
  const [emailStatus, setEmailStatus] = useState(null);

  const sendEmail = async (e) => {
    e.preventDefault();
    const totalPrice = calculateTotalPrice();
    const itemsList = cartItems
      .map(
        (item) =>
          `${item.title} - Quantity: ${item.quantity}, Price: $${item.price}`
      )
      .join("\n");

    const formData = {
      user_email: e.target.user_email.value,
      itemsList: itemsList,
      totalPrice: totalPrice,
    };
    const emailParams = {
      ...formData,
      publicKey: "9_nfJpXkG1cxntvBh",
    };

    try {
      const response = await emailjs.sendForm(
        "service_gu4xiun", // Update with your EmailJS service ID
        "template_bldktnl", // Update with your EmailJS template ID
        form.current,
        emailParams
      );

      console.log("Email sent successfully:", response);
      setEmailStatus("success");
    } catch (error) {
      console.error("Email sending failed:", error);
      setEmailStatus("error");
    }

    form.current.reset();
  };

  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      className="shadow flex flex-col justify-center w-96 m-auto mt-36 p-5"
    >
      <label>Email</label>
      <input
        type="email"
        name="user_email"
        className="p-2 border rounded-md"
        required
      />

      {emailStatus === "success" && <p>Email sent successfully!</p>}
      {emailStatus === "error" && (
        <p>Failed to send email. Please try again.</p>
      )}

      <input
        type="submit"
        value="Send"
        className="p-3 border mt-5 bg-blue-500 hover:bg-blue-600 text-white"
      />
    </form>
  );
};

export default Checkout;
