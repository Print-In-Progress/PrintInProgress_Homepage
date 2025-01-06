import React from "react";
import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import * as apiClient from "../../api-client.js";
import { toast } from "react-toastify";

const ContactForm = ({ type }) => {
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
      type: type,
      _gotcha: "", // honeypot field
    },
  });

  const { mutate, isLoading } = useMutation(apiClient.sendEmail, {
    onSuccess: () => {
      toast.success(t("toasts.success"), {
        position: "top-right",
      });
      reset();
    },
    onError: (error) => {
      toast.error(t("toasts.error"), {
        position: "top-right",
      });
    },
  });

  const onSubmit = handleSubmit((formData) => {
    // Check if honeypot field is filled
    if (formData._gotcha) {
      toast.error(t("toasts.spam"), {
        position: "top-right",
      });
      reset(); // Reset the form
      return;
    }

    // Remove honeypot field before sending
    const { _gotcha, ...dataToSend } = formData;
    mutate(dataToSend);
  });

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-6" autoComplete="off">
      {/* Honeypot field - with better protection against accidental fills */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          height: '1px',
          width: '1px',
          overflow: 'hidden',
          clip: 'rect(1px, 1px, 1px, 1px)',
          whiteSpace: 'nowrap',
          border: 0,
          padding: 0,
          margin: -1
        }}
      >
        <label>
          <span style={{ display: 'none' }}>Leave this field empty</span>
          <input
            {...register("_gotcha")}
            tabIndex="-1"
            autoComplete="new-password"
            spellCheck="false"
            style={{ display: 'none' }}
          />
        </label>
      </div>

      <label className="flex flex-col gap-2 text-body text-gray-display">
        {t("labels.name")}
        <input
          type="text"
          className="primary-input"
          autoComplete="name"
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
          autoComplete="email"
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

      {type === "support" && (
        <label className="flex flex-col gap-2 text-body text-gray-display">
          {t("labels.priority")}
          <select className="primary-select w-full" {...register("priority")}>
            {[
              { value: "low", label: t("priorities.low") },
              { value: "normal", label: t("priorities.normal") },
              { value: "high", label: t("priorities.high") },
              { value: "urgent", label: t("priorities.urgent") },
            ].map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </label>
      )}

      {type === "ideas" && (
        <label className="flex flex-col gap-2 text-body text-gray-display">
          {t("labels.ideaType")}
          <select className="primary-select w-full" {...register("ideaType")}>
            {[
              { value: "feature", label: t("ideaTypes.feature") },
              { value: "improvement", label: t("ideaTypes.improvement") },
              { value: "integration", label: t("ideaTypes.integration") },
              { value: "other", label: t("ideaTypes.other") },
            ].map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
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
        disabled={isLoading}
        className="primary-button mt-4 px-8 py-3 text-body text-gray-display"
      >
        {t("buttons.submit")}
      </button>
    </form>
  );
};

export default ContactForm;
