export const components = [
  {
    id: "admin-panel",
    title: "edConnect Admin Panel",
    description:
      "The Admin Panel is your intuitive management and administration panel. You can administer all your modules from here. You will be able to send push notifications directly to your users' phones, edit and publish articles, events, and much more. The Admin Panel will be accessible online either from your own domain or with a custom subdomain assigned by us, such as admin-yourname.printinprogress.net. Experience the power of efficient management with the edConnect Admin Panel.",
    imageUrl: "placegolderImage",
  },
  {
    id: "edconnect-mobile",
    title: "edConnect Mobile",
    description:
      "edConnect Mobile allows your students, employees or teachers to access all the content you publish and utilize all other modules on the go. The app is available for download on the App and Play Store for all your users.",
    imageUrl: "placegolderImage",
  },
  {
    id: "edconnect-web",
    title: "edConnect Web",
    description:
      "The web version of edConnect Mobile. Your users will be able to access the same information as on edConnect Mobile from any device using your custom domain or a custom subdomain assigned by us, such as yourname.printinprogress.net.",
    imageUrl: "placegolderImage",
  },
];

export const modules = [
  {
    id: "newspaper",
    title: "Newspaper",
    status: "Done",
    description: [
      {
        key: "Digital Blog Creation",
        details:
          "Schools can create their own online school newspaper or blog, complete with multimedia embedding options (images, video, audio). Multimedia support can also be used for Podcasts and other student created shows.",
      },
      {
        key: "Multimedia Support",
        details:
          "Ability to embed multimedia content like YouTube videos, audio clips, and images to enrich articles.",
      },
      {
        key: "Article Management",
        details:
          "Admins can manage articles, approve submissions, and organize content by categories or tags.",
      },
      {
        key: "User Engagement Tools",
        details:
          "Allows students, staff, and readers to comment, like, and dislike articles, fostering engagement and interaction.",
      },
      {
        key: "User Permissions",
        details:
          "Different permissions for writers, editors, and administrators, with control over who can publish or moderate content.",
      },
    ],
  },
  {
    id: "push-notifications",
    title: "Push Notifications",
    status: "Done",
    description: [
      {
        key: "Instant Notifications",
        details:
          "Send real-time notifications to users' phones for announcements, event updates, or important school-wide alerts.",
      },
      {
        key: "Audience Segmentation",
        details:
          "Notifications can be targeted to specific groups (e.g., grade levels, extracurricular teams, parents, teachers, students) to avoid overloading all users with irrelevant alerts.",
      },
    ],
  },
  {
    id: "events",
    title: "Events",
    status: "Done",
    description: [
      {
        key: "Event Creation and Management",
        details:
          "Create events with dates, locations, and descriptions. Includes the ability to set recurring events (e.g., weekly meetings).",
      },
      {
        key: "RSVP and Attendance Tracking",
        details:
          "Users can RSVP to events, and admins can track attendance and send reminders to those who have or have not responded.",
      },
      {
        key: "Event Categorization",
        details:
          "Organize events by categories like school activities, clubs, or parent-teacher meetings.",
      },
    ],
  },
  {
    id: "user-management",
    title: "User Management",
    status: "Done",
    description: [
      {
        key: "Role-Based Permissions",
        details: "Assign various levels of access to each user or role.",
      },
      {
        key: "Profile Management",
        details:
          "View and manage user information such as names, contact details, roles. Delete the user if needed. Download files submitted by the user on registration.",
      },
      {
        key: "Custom User Groups",
        details:
          "Group users by grade, class, or other criteria for easier management and communication targeting.",
      },
      {
        key: "Activity Log",
        details:
          "Track user activity across the platform, including participation in events, comments and more.",
      },
    ],
  },
  {
    id: "surveys",
    title: "Surveys",
    status: "Done",
    description: [
      {
        key: "Custom Survey Builder",
        details:
          "Create surveys with various question types, including multiple-choice, dropdowns, single-select, multi-select, and free text.",
      },
      {
        key: "Response Analytics",
        details:
          "Real-time response tracking with analytics, allowing for easy analysis of survey results.",
      },
      {
        key: "Targeted Distribution",
        details:
          "Send surveys to specific groups (e.g., parents, students, staff) based on predefined categories.",
      },
    ],
  },
  {
    id: "messaging",
    title: "Messaging Module",
    status: "In Progress",
    description: [
      {
        key: "Group and Private Chats",
        details:
          "Create private one-on-one chats or group messaging channels for classes, teams, and administrative purposes.",
      },
      {
        key: "File Sharing",
        details:
          "Share documents, images, or videos directly within messages, with easy drag-and-drop functionality.",
      },
      {
        key: "Media Sharing",
        details:
          "Send and receive images, audio clips, and video files directly within the messaging interface.",
      },
      {
        key: "Encryption",
        details:
          "All messages are End-to-End encrypted using the highest encryption standard (AES 256)",
      },
    ],
  },
  {
    id: "digital-library",
    title: "Digital Library",
    status: "In Progress",
    description: [
      {
        key: "Document Storage and Management",
        details:
          "Central repository for storing important school documents (e.g., forms, policies, safety manuals), books or other material with easy categorization and search functionality. You can upload PDFs or edit documents in real-time using the built in text editor.",
      },
      {
        key: "Resource Access Permissions",
        details:
          "Restrict or grant access to certain resources based on user roles (e.g., staff-only documents).",
      },
      {
        key: "Multimedia Storage",
        details:
          "Store not only text-based documents but also videos, audio files, and images.",
      },
      {
        key: "AI Generated Assignments",
        details:
          "The assignment generator can create assignments for various subjects which can be accessed from the digital library.",
      },
      {
        key: "Pre-built Libraries",
        details:
          "We offer pre-built libraries for various subjects and mental health.",
      },
    ],
  },
  {
    id: "educational-ai",
    title: "Educational AI",
    status: "Planned",
    description: [
      {
        key: "Plagiarism Detection",
        details:
          "AI can detect instances of AI-generated content or plagiarized work, flagging it for further review.",
      },
      {
        key: "Feedback Generation",
        details:
          "AI generates detailed feedback based on the content of student submissions and on criteria set by the teacher, providing recommendations for improvement. This provides personal feedback for each student without the need for the teacher to read thorough every student's essay.",
      },
      {
        key: "Automated Grading",
        details:
          "The AI can also grade the submissions based on the teacher's criteria.",
      },
    ],
  },
  {
    id: "sorting",
    title: "Sorting Module",
    status: "Done",
    description: [
      {
        key: "Automated Class Assignment",
        details:
          "Uses custom algorithms to sort students into classes based on preferences, and teacher/admin-defined criteria (e.g., special needs, language support). It was primarily created for the German/European admissions process where students are assigned to classes based on various criteria at the start of the school year and generally remain in those classes.",
      },
      {
        key: "Group Creation",
        details:
          "But it can also be used to sort students into groups for activities, trips, or team-based learning experiences.",
      },
      {
        key: "Flexible Criteria Input",
        details:
          "Admins can input various sorting criteria (e.g., gender balance, learning needs, performance levels).",
      },
      {
        key: "Preference Matching",
        details:
          "Students can provide input on preferences (e.g., classmates/teammates) that are factored into the sorting algorithm.",
      },
      {
        key: "Manual Overrides",
        details:
          "Admins can manually adjust student placements after the algorithm completes its assignments.",
      },
    ],
  },
  {
    id: "collaborative-learning",
    title: "Collaborative Learning Module",
    status: "Planned",
    description: [
      {
        key: "Individual Assignment Distribution",
        details:
          "Teachers can assign tasks to individual or multiple students. Teachers can assign assignments directly from the library if both modules are active.",
      },
      {
        key: "File Upload for Submission",
        details:
          "Students can upload completed assignments directly within the app, in any format (e.g., PDFs, Word documents, presentations).",
      },
      {
        key: "Real-time Collaboration",
        details:
          "Students can collaborate in real-time via the built in text editor instead of uploading a file.",
      },
      {
        key: "In-App Grading and Feedback",
        details:
          "Teachers can provide grades and detailed feedback on submitted assignments directly in the app, with the possibility to send comments or suggested improvements to students.",
      },
      {
        key: "Discussion Boards",
        details:
          "Forums where students and teachers can discuss topics, share insights, and collaborate on ideas asynchronously in the form of a digital discussion board.",
      },
      {
        key: "Peer Review",
        details:
          "Assign peer review tasks where students can evaluate each other's work according to preset criteria.",
      },
    ],
  },
  {
    id: "parent-teacher",
    title: "Parent-Teacher Collaboration Module",
    status: "Planned",
    description: [
      {
        key: "Direct Messaging",
        details:
          "Secure, private messaging between parents and teachers for individual student discussions.",
      },
      {
        key: "Progress Reports",
        details:
          "Parents can receive updates on their child's progress, including grades, attendance, and behavioral updates. (Import attendance from the digital class register).",
      },
      {
        key: "Parent-Teacher Meeting Scheduler",
        details:
          "A tool for scheduling meetings, allowing parents to choose available time slots for in-person or virtual meetings.",
      },
    ],
  },
  {
    id: "digital-class-register",
    title: "Digital Class Register",
    status: "Planned",
    description: [
      {
        key: "Real-Time Attendance Tracking",
        details:
          "Teachers can easily take attendance in real time, marking students as present, absent, or tardy, directly from a device (mobile, tablet, or laptop).",
      },
      {
        key: "Excuse and Absence Management",
        details:
          "Automatically track excused or unexcused absences and notify parents or guardians when a student is absent without permission.",
      },
      {
        key: "Digital Notes",
        details:
          "Teachers can leave notes or remarks about each class or individual students for future reference or parent-teacher discussions.",
      },
      {
        key: "Homework Tracking",
        details:
          "Teachers can track homework in the register and link it to the collaborative learning module.",
      },
    ],
  },
  {
    id: "extracurricular",
    title: "Extracurricular Management",
    status: "Planned",
    description: [
      {
        key: "Club-Specific Forums",
        details:
          "Each club or extracurricular group can have dedicated discussion boards where students and advisors can share updates, ideas, and plans.",
      },
      {
        key: "Document Creation for Projects",
        details:
          "Clubs can work on documents together in real time, useful for planning events, drafting proposals, or writing club newsletters.",
      },
      {
        key: "Activity Registration",
        details:
          "Students can sign up for clubs, sports teams and other extracurricular activities directly through the platform.",
      },
      {
        key: "Attendance Tracking for Activities",
        details:
          "Keep a record of student attendance for extracurricular activities.",
      },
    ],
  },
  {
    id: "other-features",
    title: "Other Features",
    status: "Done",
    description: [
      {
        key: "Custom Registration Builder",
        details:
          "Admins can create and customize the registration forms that users fill out when signing up for the app. This allows schools to collect all necessary information upfront, tailored to their specific needs. Form Elements include form fields such as, Checkboxes, Dropdown Menus (e.g., grade level, teacher selection), Text Input (for collecting names, addresses, and open-ended answers), Radio Buttons (for single-choice questions (e.g., male/female/other)) or File Upload Capability to enable users to upload necessary documents directly within the registration form, such as medical documents, previous transcripts or parental consent forms. The builder also allows for the implementation of dynamic fields where more questions or file uploads appear based on earlier answers (e.g., if a parent selects that their child has medical needs, a field for uploading health documents appears). If needed the admin can add an advanced digital signature to ensure legal compliance of the registration process.",
      },
      {
        key: "Custom Color Schemes",
        details:
          "Allow schools to personalize the app's theme by selecting their official colors and logo. This feature changes the entire color scheme of the app to match the school's branding, from the navigation bar to buttons and other UI elements.",
      },
    ],
  },
];
