import React from "react";
import { useForm } from "react-hook-form";

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

const ContactForm = ({ type, submitFunction }) => {
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

  const onSubmit = handleSubmit((formData) => {
    submitFunction(formData);
    reset();
  });

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-6">
      <label className="flex flex-col gap-2 text-body text-gray-display">
        Name
        <input
          type="text"
          className="primary-input"
          {...register("name", {
            required: "Name is required",
            minLength: {
              value: 2,
              message: "Name must be at least 2 characters",
            },
          })}
        />
        {errors.name && (
          <span className="input-error-message">{errors.name.message}</span>
        )}
      </label>

      <label className="flex flex-col gap-2 text-body text-gray-display">
        Email
        <input
          type="email"
          className="primary-input"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Invalid email address",
            },
          })}
        />
        {errors.email && (
          <span className="input-error-message">{errors.email.message}</span>
        )}
      </label>

      {type == "support" && (
        <label className="flex flex-col gap-2 text-body text-gray-display">
          Priority
          <select className="primary-select w-full" {...register("priority")}>
            {priorityOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          {errors.priority && (
            <span className="input-error-message">
              {errors.priority.message}
            </span>
          )}
        </label>
      )}

      {type == "ideas" && (
        <label className="flex flex-col gap-2 text-body text-gray-display">
          Idea Type
          <select className="primary-select w-full" {...register("ideaType")}>
            {ideaTypeOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          {errors.ideaType && (
            <span className="input-error-message">
              {errors.ideaType.message}
            </span>
          )}
        </label>
      )}

      <label className="flex flex-col gap-2 text-body text-gray-display">
        Subject
        <input
          type="text"
          className="primary-input"
          {...register("subject", {
            required: "Subject is required",
            minLength: {
              value: 3,
              message: "Subject must be at least 3 characters",
            },
          })}
        />
        {errors.subject && (
          <span className="input-error-message">{errors.subject.message}</span>
        )}
      </label>

      <label className="flex flex-col gap-2 text-body text-gray-display">
        Message
        <textarea
          type="textarea"
          className="primary-textarea min-h-52 w-full"
          {...register("message", {
            required: "Message is required",
            minLength: {
              value: 10,
              message: "Message must be at least 10 characters",
            },
          })}
        />
        {errors.message && (
          <span className="input-error-message">{errors.message.message}</span>
        )}
      </label>

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
