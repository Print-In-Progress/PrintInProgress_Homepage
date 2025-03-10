import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import NavigationSection from "../forms/ContactForm/NavigationSection";
import HeaderSection from "../forms/ContactForm/HeaderSection";
import ContactForm from "../forms/ContactForm/ContactForm";

const Contact = () => {
  const { type = "general" } = useParams();
  const navigate = useNavigate();

  // Validate and redirect if invalid type
  useEffect(() => {
    const validTypes = ["general", "support", "ideas"];
    if (!validTypes.includes(type)) {
      navigate("/contact/general", { replace: true });
    }
  }, [type, navigate]);

  return (
    <div className="mb-5 mt-5 flex flex-col px-3 py-2">
      <div className="mx-auto w-full max-w-3xl px-4">
        <NavigationSection currentType={type} />
        <HeaderSection type={type} />
        <ContactForm type={type} />
      </div>
    </div>
  );
};

export default Contact;
