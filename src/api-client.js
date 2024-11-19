const SEND_EMAIL_API_URL = import.meta.env.VITE_SEND_EMAIL_API_URL || "";

export const sendEmail = async () => {
  const response = await fetch(SEND_EMAIL_API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });

  const responseBody = await response.json();

  if (!response.ok) {
    throw new Error(responseBody.message);
  }

  return responseBody;
};
