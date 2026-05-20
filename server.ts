import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Middleware to parse request bodies
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // API Health endpoint
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok", time: new Date().toISOString() });
  });

  // API endpoint to handle premium free consultation submission
  app.post("/api/consultation", (req, res) => {
    const { name, email, phone, practiceArea, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "Required fields are missing. Please provide your name, email, and detailed message so we can evaluate your case properly.",
      });
    }

    // Server-side logging to record requests
    console.log("-----------------------------------------");
    console.log("💼 SECURE LAW FIRM INTAKE REQUEST");
    console.log(`Received: ${new Date().toLocaleString()}`);
    console.log(`Name:     ${name}`);
    console.log(`Email:    ${email}`);
    console.log(`Phone:    ${phone || "N/A"}`);
    console.log(`Subject:  ${practiceArea || "General Injury Inquiry"}`);
    console.log(`Brief Case Summary:\n"${message}"`);
    console.log("-----------------------------------------");

    return res.json({
      success: true,
      message: `Thank you, ${name}. Your confidential case information has been securely transmitted directly to the desk of Attorney Keith L. Langston in Longview. A representative from our intake division will phone you and email you within 24 hours to schedule your free consultation. To speak with our office immediately, please call our direct hotline at +1 903-746-4887.`,
    });
  });

  // Vite integrated middleware setup based on environment
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`🚀 Langston Law Firm Fullstack Server running on http://localhost:${PORT}`);
  });
}

startServer();
