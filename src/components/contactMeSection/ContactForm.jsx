import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

// Ideally these should be in .env file
const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const ContactForm = () => {
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const form = useRef();

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const sendEmail = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, {
        publicKey: PUBLIC_KEY,
      });

      toast.success("Message sent successfully! 🚀");

      // Clear form fields after success
      setFormData({
        from_name: "",
        from_email: "",
        message: "",
      });

    } catch (error) {
      console.error("FAILED...", error.text);
      toast.error("Failed to send message. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4">
        {/* Hidden honeypot for spam prevention */}
        <input type="text" name="spam" style={{ display: "none" }} />

        <input
          type="text"
          name="from_name"
          placeholder="Your Name"
          required
          className="h-12 px-2 rounded-lg bg-lightBrown"
          value={formData.from_name}
          onChange={handleChange}
        />

        <input
          type="email"
          name="from_email"
          placeholder="Your Email"
          required
          className="h-12 px-2 rounded-lg bg-lightBrown"
          value={formData.from_email}
          onChange={handleChange}
        />

        <textarea
          name="message"
          rows="9"
          cols="50"
          placeholder="Message"
          required
          className="p-2 rounded-lg bg-lightBrown"
          value={formData.message}
          onChange={handleChange}
        />

        <button
          type="submit"
          className="w-full h-12 text-xl font-bold text-white transition-all duration-500 border rounded-lg border-cyan hover:bg-darkCyan bg-cyan"
          disabled={loading}
        >
          {loading ? "Sending..." : "Send"}
        </button>
      </form>

      {/* Toast Container */}
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
};

export default ContactForm;
