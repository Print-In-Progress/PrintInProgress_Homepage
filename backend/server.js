require('dotenv').config()
const express = require('express');
const cors = require("cors")
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

console.log(PORT)

// Middleware to parse JSON bodies
app.use(express.json());

// Middleware to allow cross-access
app.use(cors())

// Serve static files from the frontend/dist directory
app.use(express.static(path.join(__dirname, '..', 'frontend', 'dist')));

// API Routes 
app.post("/api/contact", async (req, res) => {
  try {
    // Check if request body exists
    if (!req.body || !req.body.type) {
      return res.status(400).json({ message: "Invalid request: Missing required fields" });
    }

    switch (req.body.type) {  // Changed from res.body to req.body
      case "general":
        // Function to handle "Get in Touch"-Email
        break;
      case "support":
        // Function to handle "Support Portal"-Email
        break;
      case "ideas":
        // Function to handle "Idea Portal"-Email
        break;
      default:
        return res.status(400).json({ message: "Invalid contact type" });
    }

    console.log("Email Sent!")
    return res.status(201).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Something went wrong" });
  }
});

// Serve React App on the root route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'frontend', 'dist', 'index.html'));
});

// Handle all other routes - this enables React Router to work properly
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'frontend', 'dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`Serving static files from: ${path.join(__dirname, '..', 'frontend', 'dist')}`);
});
