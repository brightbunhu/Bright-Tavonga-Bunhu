import React, { useState } from "react";
import emailjs from "emailjs-com";
import cve from "./cv.pdf";
const Cv = () => {
  const [email, setEmail] = useState("");
  const [showDownload, setShowDownload] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // 🧾 Path to your actual CV file (inside /public folder)
  const cvLink = cve;

  // ⚙️ EmailJS credentials — make sure these are EXACTLY correct
  const SERVICE_ID = "service_jjilpvh";
  const TEMPLATE_ID = "template_mx4duam";
  const PUBLIC_KEY = "Y9Duuum9HslUIsGYQ";

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Simple email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setLoading(true);
    setError("");

    try {
      // Send email notification via EmailJS
      const result = await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        { user_email: email }, // must match {{user_email}} in template
        PUBLIC_KEY
      );

      console.log("✅ EmailJS Response:", result);
      setShowDownload(true);
      setLoading(false);
    } catch (err) {
      console.error("❌ EmailJS Error Details:", err);
      setError("Failed to send email. Please try again.");
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-50 to-blue-100 p-6">
      <h2 className="text-3xl font-bold text-blue-700 mb-4">Download My CV</h2>
      <p className="text-gray-600 mb-8 text-center max-w-md">
        Enter your email to download my latest CV. I will be notified when
        someone downloads it.
      </p>

      {!showDownload ? (
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-lg rounded-lg p-6 w-full max-w-sm"
        >
          <label className="block text-gray-700 font-semibold mb-2">
            Email Address
          </label>
          <input
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-gray-300 p-2 rounded focus:ring-2 focus:ring-blue-500"
            required
          />

          {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

          <button
            type="submit"
            disabled={loading}
            className="mt-4 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition duration-300 disabled:opacity-50"
          >
            {loading ? "Sending..." : "Continue"}
          </button>
        </form>
      ) : (
        <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-sm text-center">
          <p className="text-gray-700 mb-4">
            ✅ Thank you! You can now download my CV below.
          </p>
          <a
            href={cvLink}
            download="Bright_Bunhu_CV.pdf"
            className="inline-block bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition duration-300"
          >
            Download CV
          </a>
        </div>
      )}
    </div>
  );
};

export default Cv;
