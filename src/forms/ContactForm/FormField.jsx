import React, { forwardRef } from "react";

// forwardRef allows the parent (react-hook-form) to pass a ref directly to the input elements
const FormField = forwardRef(
  ({ label, type = "text", error, options, ...props }, ref) => {
    // ref is passed by react-hook-form to control the input

    // This function determines which input element to render
    const getInput = () => {
      // If it's a select input and we have options
      if (type === "select" && options) {
        return (
          <select
            ref={ref} // Forward the ref to the select element
            className="primary-select w-full"
            {...props} // Spread all react-hook-form props (onChange, onBlur, name, etc.)
          >
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        );
      }

      // If it's a textarea
      if (type === "textarea") {
        return (
          <textarea
            ref={ref} // Forward the ref to the textarea element
            className="primary-textarea w-full resize-none"
            rows={6}
            {...props} // Spread all react-hook-form props
          />
        );
      }

      // Default to regular input
      return (
        <input
          type={type} // The input type (text, email, etc.)
          ref={ref} // Forward the ref to the input element
          className="primary-input w-full"
          {...props} // Spread all react-hook-form props
        />
      );
    };

    // The component's render output
    return (
      <div className="flex flex-col gap-2">
        <label className="text-body text-gray-display">{label}</label>
        {getInput()}

        {/* Show error message if there is one */}
        {error && <span className="text-sm text-red-500">{error}</span>}
      </div>
    );
  },
);

// Required for React.forwardRef components
FormField.displayName = "FormField";

export default FormField;
