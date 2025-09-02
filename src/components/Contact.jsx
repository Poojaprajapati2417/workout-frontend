import React, { useState } from "react";
import axios from "axios";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import CircularProgress, {
  circularProgressClasses,
} from '@mui/material/CircularProgress';

const Contact = () => {
  const [loader, setLoader] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(null);
    setLoader(true)

    if (!formData.name || !formData.email || !formData.message) {
      setStatus({ success: false, message: "Please fill all fields" });

      return;
    }
    try {
      const res = await axios.post("https://workout-backend-1-rb2d.onrender.com/workout/contact",
        formData
      );
      if (res.data.Status === "success") {
        setStatus({ success: true, message: "Message sent successfully!" });
        setFormData({ name: "", email: "", message: "" });

      }
    } catch (error) {
      setStatus({ success: false, message: "Failed to send message." });

    } finally {
      setLoader(false);
    }
  };
  return (
    <>

      <React.Fragment>
        <svg width={0} height={0}>
          <defs>
            <linearGradient id="my_gradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#000000ff" />
              <stop offset="100%" stopColor="#0c4b3f" />
            </linearGradient>
          </defs>
        </svg>
      </React.Fragment>
      <section className="contact-section" id="contact">
         {loader && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"></div>)}
        <div className="contact-container">

          {/* Left side - Contact Info */}

          <div className="contact-info ">
            <h2>Contact Me</h2>
            <p>If you have any project in mind or just want to say hello, feel free to reach out.</p>

            <div className="info-item">
              <h4>Address</h4>
              <p>Faridabad, Haryana, India</p>
            </div>

            <div className="info-item">
              <h4>Email</h4>
              <p>poojaprajapati2417@gmail.com</p>
            </div>

            <div className="info-item">
              <h4>Phone</h4>
              <p>+91 9579317113</p>
            </div>

            <div className="social-links">
              <a href="https://www.linkedin.com/in/pooja-prajapati1708/" target="_blank" rel="noreferrer">LinkedIn</a>
              <a href="https://github.com/Poojaprajapati2417" target="_blank" rel="noreferrer">GitHub</a>
            </div>
          </div>

          {/* Right side - Form */}
          <div className="contact-form">
            <h2>Send a Message</h2>
            {status && (
              <p className={`mb-4 ${status.success ? "text-green-400" : "text-red-500"}`}>
                {status.message}
              </p>
            )}

            <form onSubmit={handleSubmit}>
              <input type="text" name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required />
              <input type="email" name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                required />
              <textarea placeholder="Your Message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5" required></textarea>
              <button type="submit" disabled={loader}>
                {loader ? (
                  <CircularProgress sx={{ 'svg circle': { stroke: 'url(#my_gradient)' } }} />
                ) : (
                  "Send Message"
                )}
              </button>
            </form>
          </div>

        </div>
      </section>
    </>

  );
};

export default Contact;
