export const useLegalNoticeConfig = () => {
  return {
    sections: [
      {
        id: "company_information",
        title: "Company Information",
        content: [
          "Print In Progress, LCC",
          "San Francisco, CA 94127",
          "United States of America",
          "Tel.: +1 415-547-0606",
        ],
      },
      {
        id: "represented_by",
        title: "Represented by:",
        content: [
          "Mark Grinberg",
          "Chief Executive Officer",
          "Octavio Hoglund",
          "Chief Technical Officer",
        ],
      },
      {
        id: "disclaimer",
        content: [
          "All information contained herein has been carefully investigated and approved. The data is subject to change at the sole discretion of Print In Progress LLC. Print In Progress LLC may not be held responsible for the correctness, completeness and actuality of the information contained herein.",
        ],
      },
    ],
  };
};
