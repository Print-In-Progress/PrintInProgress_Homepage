import React from "react";
import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";

const ContactForm = ({ type, submitFunction }) => {
  const { t } = useTranslation("contact");

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

  const priorityOptions = [
    { value: "low", label: t("priorities.low") },
    { value: "normal", label: t("priorities.normal") },
    { value: "high", label: t("priorities.high") },
    { value: "urgent", label: t("priorities.urgent") },
  ];

  const ideaTypeOptions = [
    { value: "feature", label: t("ideaTypes.feature") },
    { value: "improvement", label: t("ideaTypes.improvement") },
    { value: "integration", label: t("ideaTypes.integration") },
    { value: "other", label: t("ideaTypes.other") },
  ];

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-6">
      <label className="flex flex-col gap-2 text-body text-gray-display">
        {t("labels.name")}
        <input
          type="text"
          className="primary-input"
          {...register("name", {
            required: t("validation.required.name"),
            minLength: {
              value: 2,
              message: t("validation.minLength.name"),
            },
          })}
        />
        {errors.name && (
          <span className="input-error-message">{errors.name.message}</span>
        )}
      </label>

      <label className="flex flex-col gap-2 text-body text-gray-display">
        {t("labels.email")}
        <input
          type="email"
          className="primary-input"
          {...register("email", {
            required: t("validation.required.email"),
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: t("validation.email"),
            },
          })}
        />
        {errors.email && (
          <span className="input-error-message">{errors.email.message}</span>
        )}
      </label>

      {type == "support" && (
        <label className="flex flex-col gap-2 text-body text-gray-display">
          {t("labels.priority")}
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
          {t("labels.ideaType")}
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
        {t("labels.subject")}
        <input
          type="text"
          className="primary-input"
          {...register("subject", {
            required: t("validation.required.subject"),
            minLength: {
              value: 3,
              message: t("validation.minLength.subject"),
            },
          })}
        />
        {errors.subject && (
          <span className="input-error-message">{errors.subject.message}</span>
        )}
      </label>

      <label className="flex flex-col gap-2 text-body text-gray-display">
        {t("labels.message")}
        <textarea
          type="textarea"
          className="primary-textarea min-h-52 w-full"
          {...register("message", {
            required: t("validation.required.message"),
            minLength: {
              value: 10,
              message: t("validation.minLength.message"),
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
        {t("buttons.submit")}
      </button>
    </form>
  );
};

export default ContactForm;
