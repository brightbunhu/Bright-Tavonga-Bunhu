import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  MessageCircle,
  Linkedin,
  Github,
  Phone,
  Mail,
  Facebook,
} from "lucide-react";

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("Sending...");

    emailjs
      .sendForm(
        "service_jjilpvh",
        "template_jatvkov",
        form.current,
        "Y9Duuum9HslUIsGYQ"
      )
      .then(
        (result) => {
          console.log(result.text);
          setStatus("✅ Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          console.error(error.text);
          setStatus("❌ Failed to send message. Please try again.");
        }
      );
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center justify-center">
      <h2 className="text-3xl font-bold text-blue-700 mb-6">Contact Me</h2>

      {/* Contact Form */}
      <form
        ref={form}
        onSubmit={sendEmail}
        className="bg-white shadow-md rounded-lg p-6 w-full max-w-lg"
      >
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Name</label>
          <input
            type="text"
            name="name"
            required
            className="w-full border border-gray-300 p-2 rounded focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">
            Email
          </label>
          <input
            type="email"
            name="user_email"
            required
            className="w-full border border-gray-300 p-2 rounded focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">
            Message
          </label>
          <textarea
            name="message"
            required
            rows="4"
            className="w-full border border-gray-300 p-2 rounded focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300"
        >
          Send Email
        </button>

        {status && (
          <p
            className={`mt-4 text-sm ${
              status.startsWith("✅") ? "text-green-600" : "text-red-600"
            }`}
          >
            {status}
          </p>
        )}
      </form>

      <div className="mt-10 flex flex-col items-center space-y-4">
        <div className="flex space-x-6">
          <a
            href="https://wa.me/263737757995"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-500 hover:text-green-600 transition"
            title="Chat on WhatsApp"
          >
            <MessageCircle size={32} />
          </a>

          <a
            href="https://www.linkedin.com/in/brightbunhu3266"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-700 transition"
            title="Visit my LinkedIn"
          >
            <Linkedin size={32} />
          </a>

          <a
            href="https://github.com/brightbunhu"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 hover:text-gray-900 transition"
            title="View my GitHub"
          >
            <Github size={32} />
          </a>

          <a
            href="https://www.facebook.com/bright.bunhu.3"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 hover:text-blue-800 transition"
            title="Visit my Facebook"
          >
            <Facebook size={32} />
          </a>

          <a
            href="tel:+263783234270"
            className="text-blue-500 hover:text-blue-600 transition"
            title="Call me"
          >
            <Phone size={32} />
          </a>

          <a
            href="mailto:brightbunhu4@gmail.com"
            className="text-red-500 hover:text-red-600 transition"
            title="Send me an Email"
          >
            <Mail size={32} />
          </a>
        </div>
      </div>

      <p className="text-gray-600 mt-4 text-sm">
        You can also find me on{" "}
        <a
          href="https://brightbunhu.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          brightbunhu.vercel.app
        </a>
      </p>
    </div>
  );
};

export default Contact;
