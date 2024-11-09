import React from "react";
import { useForm } from "react-hook-form";
import FormField from "./FormField";

const priorityOptions = [
  { value: "low", label: "Low" },
  { value: "normal", label: "Normal" },
  { value: "high", label: "High" },
  { value: "urgent", label: "Urgent" },
];

const ideaTypeOptions = [
  { value: "feature", label: "New Feature" },
  { value: "improvement", label: "Improvement" },
  { value: "integration", label: "Integration" },
  { value: "other", label: "Other" },
];

const ContactForm = ({ type, onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
      priority: "normal",
      ideaType: "feature",
    },
  });

  const onSubmitForm = (data) => {
    onSubmit(data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmitForm)} className="flex flex-col gap-6">
      <FormField
        label="Name"
        error={errors.name?.message}
        {...register("name", {
          required: "Name is required",
          minLength: {
            value: 2,
            message: "Name must be at least 2 characters",
          },
        })}
      />

      <FormField
        label="Email"
        type="email"
        error={errors.email?.message}
        {...register("email", {
          required: "Email is required",
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: "Invalid email address",
          },
        })}
      />

      {type === "support" && (
        <FormField
          label="Priority"
          type="select"
          options={priorityOptions}
          error={errors.priority?.message}
          {...register("priority")}
        />
      )}

      {type === "ideas" && (
        <FormField
          label="Idea Type"
          type="select"
          options={ideaTypeOptions}
          error={errors.ideaType?.message}
          {...register("ideaType")}
        />
      )}

      <FormField
        label="Subject"
        error={errors.subject?.message}
        {...register("subject", {
          required: "Subject is required",
          minLength: {
            value: 3,
            message: "Subject must be at least 3 characters",
          },
        })}
      />

      <FormField
        label="Message"
        type="textarea"
        error={errors.message?.message}
        {...register("message", {
          required: "Message is required",
          minLength: {
            value: 10,
            message: "Message must be at least 10 characters",
          },
        })}
      />

      <button
        type="submit"
        className="primary-button mt-4 px-8 py-3 text-body text-gray-display"
      >
        Submit
      </button>
    </form>
  );
};

export default ContactForm;
