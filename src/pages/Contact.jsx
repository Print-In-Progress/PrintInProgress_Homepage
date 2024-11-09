import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const Contact = () => {
  const { type = "general" } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    priority: "normal",
    category: "general",
    ideaType: "feature",
  });

  // Validate and redirect if invalid type
  useEffect(() => {
    const validTypes = ["general", "support", "ideas"];
    if (!validTypes.includes(type)) {
      navigate("/contact/general", { replace: true });
    }
  }, [type, navigate]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
      priority: "normal",
      category: "general",
      ideaType: "feature",
    });
  };

  const formTitles = {
    general: "Get in Touch",
    support: "Support Portal",
    ideas: "Share Your Ideas",
  };

  const formDescriptions = {
    general: "Have a question about edConnect? We'd love to hear from you.",
    support: "Need technical assistance? Our support team is here to help.",
    ideas: "Share your ideas to help us improve edConnect.",
  };

  return (
    <div className="mb-5 mt-5 flex min-h-screen flex-col px-3 py-2">
      <div className="mx-auto w-full max-w-3xl px-4">
        {/* Form Type Navigation */}
        <div className="mb-8 flex flex-wrap gap-4">
          <button
            onClick={() => navigate("/contact/general")}
            className={`rounded-full px-6 py-2 text-body transition-all ${
              type === "general"
                ? "bg-primary text-gray-display"
                : "bg-gray-outline bg-opacity-10 text-gray-body hover:bg-opacity-20"
            }`}
          >
            Get in Touch
          </button>
          <button
            onClick={() => navigate("/contact/support")}
            className={`rounded-full px-6 py-2 text-body transition-all ${
              type === "support"
                ? "bg-primary text-gray-display"
                : "bg-gray-outline bg-opacity-10 text-gray-body hover:bg-opacity-20"
            }`}
          >
            Support Portal
          </button>
          <button
            onClick={() => navigate("/contact/ideas")}
            className={`rounded-full px-6 py-2 text-body transition-all ${
              type === "ideas"
                ? "bg-primary text-gray-display"
                : "bg-gray-outline bg-opacity-10 text-gray-body hover:bg-opacity-20"
            }`}
          >
            Idea Portal
          </button>
        </div>

        {/* Form Header */}
        <div className="mb-8">
          <h1 className="mb-2 text-display-md text-gray-display">
            {formTitles[type]}
          </h1>
          <p className="text-body text-gray-body">{formDescriptions[type]}</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          {/* Common Fields */}
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="text-body text-gray-display">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              className="primary-input w-full"
              placeholder="Your name"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-body text-gray-display">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="primary-input w-full"
              placeholder="your@email.com"
            />
          </div>

          {/* Conditional Fields */}
          {type === "support" && (
            <div className="flex flex-col gap-2">
              <label htmlFor="priority" className="text-body text-gray-display">
                Priority
              </label>
              <select
                id="priority"
                name="priority"
                value={formData.priority}
                onChange={handleInputChange}
                className="primary-select w-full"
              >
                <option value="low">Low</option>
                <option value="normal">Normal</option>
                <option value="high">High</option>
                <option value="urgent">Urgent</option>
              </select>
            </div>
          )}

          {type === "ideas" && (
            <div className="flex flex-col gap-2">
              <label htmlFor="ideaType" className="text-body text-gray-display">
                Idea Type
              </label>
              <select
                id="ideaType"
                name="ideaType"
                value={formData.ideaType}
                onChange={handleInputChange}
                className="primary-select w-full"
              >
                <option value="feature" className="text-gray-display">
                  New Feature
                </option>
                <option value="improvement" className="text-gray-display">
                  Improvement
                </option>
                <option value="integration" className="text-gray-display">
                  Integration
                </option>
                <option value="other" className="text-gray-display">
                  Other
                </option>
              </select>
            </div>
          )}

          <div className="flex flex-col gap-2">
            <label htmlFor="subject" className="text-body text-gray-display">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleInputChange}
              required
              className="primary-input w-full"
              placeholder="Enter subject"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="text-body text-gray-display">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              required
              rows={6}
              className="primary-textarea w-full resize-none"
              placeholder="Your message here..."
            />
          </div>

          <button
            type="submit"
            className="primary-button mt-4 px-8 py-3 text-body text-gray-display"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
