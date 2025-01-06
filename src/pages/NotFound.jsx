import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const NotFound = () => {
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(5);
  const { t } = useTranslation();

  // Timer to redirect back to the home page after x seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          navigate("/");
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [navigate]);

  const handleSkip = () => {
    navigate("/");
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="mb-5 mt-5 flex min-h-[70vh] flex-col items-center justify-center px-3 py-2"
    >
      <div className="mx-auto w-full max-w-2xl text-center">
        <motion.div
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.3 }}
          className="flex flex-col gap-6"
        >
          <h1 className="text-display-md text-gray-display">
            {t("notFound.redirecting", { count: countdown })}
          </h1>
          <p className="text-body text-gray-body">
            {t("notFound.description")}
          </p>
          <button
            onClick={handleSkip}
            className="primary-button mx-auto px-8 py-3 text-body text-gray-display"
          >
            {t("notFound.skip")}
          </button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default NotFound;
