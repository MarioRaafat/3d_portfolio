import { motion } from "framer-motion";
import { styles } from "../../styles";
import { SectionWrapper } from "../../hoc";
import "./Contact.css";
import { contact } from "../../constants/constants.js";
import { slideIn } from "../../utils/motion";
import ReCAPTCHA from "react-google-recaptcha";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [recaptchaToken, setRecaptchaToken] = useState(null);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [charCount, setCharCount] = useState(0);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (name === "message") {
      setCharCount(value.length);
    }
  };

  const onReCAPTCHAChange = (token) => {
    setRecaptchaToken(token);
    setError(""); // Clear error if reCAPTCHA is completed
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    // Validation: Check if fields are filled
    if (!formData.name.trim()) {
      setError("Please enter your name.");
      return;
    }
    if (!formData.email.trim()) {
      setError("Please enter your email.");
      return;
    }
    if (!formData.message.trim()) {
      setError("Please enter your message.");
      return;
    }
    if (formData.message.length > 250) {
      setError("Message cannot exceed 250 characters.");
      return;
    }
    // if (!recaptchaToken) {
    //   setError("Please complete the reCAPTCHA verification.");
    //   return;
    // }

    // Send data to backend
    try {
      const response = await fetch("https://your-app.vercel.app/api/send-message", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, recaptchaToken }),
      });
      const result = await response.json();

      if (response.ok) {
        setSuccess(result.message || "Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
        setRecaptchaToken(null);
        setCharCount(0);
      } else {
        setError(result.error || "Failed to send message.");
      }
    } catch (error) {
      setError("Failed to connect to server. Please try again.");
    }
  };

  return (
      <div className="contact-section">
        <motion.div
            variants={slideIn("left", "tween", 0.2, 1)}
            className="bg-black-100 p-8 rounded-2xl w-full"
        >
          <p className={styles.sectionSubText}>Get in touch</p>
          <h3 className={styles.sectionHeadText}>Contact.</h3>

          {/* Contact Cards Section */}
          <div className="contacts-container mt-8">
            {contact.map((contact, index) => (
                <div
                    key={index}
                    className="contact-card"
                    onClick={() => {
                      window.open(contact.link, "_blank");
                    }}
                >
                  <img
                      src={contact.icon}
                      alt={contact.title}
                      className="contact-icon"
                  />
                  <p className="contact-text">{contact.title}</p>
                </div>
            ))}
          </div>

          {/* Message Form Section */}
          <div className="mt-12">
            <h4 className="text-white text-xl font-bold mb-4">Send Message</h4>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="flex space-x-4">
                <input
                    type="text"
                    name="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-1/2 p-3 bg-black-200 text-white border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-800"
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Your email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-1/2 p-3 bg-black-200 text-white border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-800"
                />
              </div>
              <textarea
                  name="message"
                  placeholder="Your message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-3 bg-black-200 text-white border border-gray-700 rounded-lg h-32 focus:outline-none focus:ring-2 focus:ring-purple-800"
              />
              {/*<div className="flex items-center space-x-4">*/}
              {/*  <ReCAPTCHA*/}
              {/*      sitekey="6Ld_ah0iAAAAAErab1WePoWdgbChkYVC7Naz7Kw3"*/}
              {/*      onChange={onReCAPTCHAChange}*/}
              {/*      className="g-recaptcha"*/}
              {/*  />*/}
              {/*  <div className="text-gray-500 text-sm">{charCount}/250</div>*/}
              {/*</div>*/}
              {error && <p className="text-red-500 text-sm">{error}</p>}
              {success && <p className="text-green-500 text-sm">{success}</p>}
              <button
                  type="submit"
                  className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 hover:text-black transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </motion.div>
      </div>
  );
};

const WrappedContact = SectionWrapper(Contact, "contact");
export default WrappedContact;