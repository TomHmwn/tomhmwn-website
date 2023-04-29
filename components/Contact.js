import React, { useState } from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Name: ", name);
    console.log("Email: ", email);
    console.log("Message: ", message);
    if (!name || !email || !message || !subject) return;
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        subject,
        message,
      }),
    });
    if (response.ok) {
      setSent(true);
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
    }
  };
  return (
    <div className="bg-white dark:bg-[#151515]">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-7xl md:text-9xl font-bold text-gray-500 dark:text-gray-300 -mb-10">
          Contact Me
        </h1>
      </div>
      <div className="bg-[#f1f1f1] dark:bg-black">
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto py-20 px-10">
          <div className="grid grid-cols-1 gap-6">
            <label className="block">
              <span className="text-gray-700 dark:text-gray-300 font-base text-xl">Name</span>
              <input
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-1 block w-full shadow-sm bg-transparent border-b-2 pb-2 focus:outline-none text-lg font-mono"
              />
            </label>
            <label className="block">
              <span className="text-gray-700 dark:text-gray-300 font-base text-xl">Email</span>
              <input
                type="text"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 block w-full shadow-sm bg-transparent border-b-2 pb-2 focus:outline-none text-lg font-mono"
              />
            </label>
            <label className="block">
              <span className="text-gray-700 dark:text-gray-300 font-base text-xl">Subject</span>
              <input
                type="text"
                name="subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="mt-1 block w-full shadow-sm bg-transparent border-b-2 pb-2 focus:outline-none text-lg font-mono"
              />
            </label>
            <label className="block">
              <span className="text-gray-700 dark:text-gray-300 font-base text-xl">Message</span>
              <textarea
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="mt-1 block w-full shadow-sm bg-transparent border-b-2 h-64 py-8 px-6 focus:outline-none text-lg font-mono"
              />
            </label>
            <div className="flex justify-center">
              <motion.input
                type="submit"
                value={sent ? "Message Sent!" : "Send Message"}
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-gray-700  dark:text-white  hover:focus:ring-2  hover:focus:ring-gray-300 dark:hover:focus:ring-white mt-8"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              />
            </div>
          </div>
          {sent && (
            <p className="text-green-500">Thank you for your message!</p>
          )}
        </form>
      </div>
    </div>
  );
};

export default Contact;
