'use client';

import React, { useState } from "react";
import { IoLocation } from "react-icons/io5";
import { MdMarkEmailRead } from "react-icons/md";
import { FaPhone } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        toast.error("An error occurred, please try again.");
      }
    } catch (error) {
      toast.error("An error occurred, please try again.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="px-4 py-10 bg-gray-50 mt-16 min-h-screen">
      <h1 className="text-center text-3xl mx-auto my-10 font-extrabold bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 text-transparent bg-clip-text">
        Get In Touch
      </h1>

      <div className="flex md:w-1/2 w-full flex-col md:flex-row mx-auto items-center md:justify-between px-8 gap-8">
        <img
          src="/images/girl.png" // Replace with your image URL
          alt="Contact Us"
          className="w-full max-w-xs rounded-lg shadow-lg"
        />

        <div className="flex flex-col flex-1 md:pl-20">
          <h1 className="text-4xl font-extrabold mb-9 text-center md:text-start mt-5 bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 text-transparent bg-clip-text">
            We're Here to Help
          </h1>
          <p className="text-sm text-slate-500 mb-5">
            Have questions about our products, need help with an order, or want to provide feedback? Our team is here to assist you.
          </p>
          <div className="flex items-start mt-6">
            <MdMarkEmailRead className="text-green-500 text-xl" />
            <h2 className="text-sm font-bold ml-2">support@ecommerce.com</h2>
          </div>
          <div className="flex items-start mt-6">
            <FaPhone className="text-green-500 text-xl" />
            <h2 className="text-sm font-bold ml-2">+123 456 7890</h2>
          </div>
          <div className="flex items-start mt-6">
            <IoLocation className="text-green-500 text-xl" />
            <h2 className="text-sm font-bold ml-2">123 E-Commerce St, Shop City, EC 12345</h2>
          </div>
        </div>
      </div>

      <div className="flex flex-col flex-1 mt-10 md:mt-0">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col mt-3 w-full max-w-md mx-auto">
            <label htmlFor="name" className="mb-1 text-sm font-semibold">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="bg-slate-100 p-3 text-sm rounded-md"
              placeholder="Your Name"
              required
            />
          </div>
          <div className="flex flex-col mt-3 w-full max-w-md mx-auto">
            <label htmlFor="email" className="mb-1 text-sm font-semibold">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="bg-slate-100 p-3 text-sm rounded-md"
              placeholder="Your Email"
              required
            />
          </div>
          <div className="flex flex-col mt-3 w-full max-w-md mx-auto">
            <label htmlFor="message" className="mb-1 text-sm font-semibold">
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="bg-slate-100 resize-none text-sm rounded-md p-3"
              placeholder="Enter your message here"
              rows={4}
              required
            />
          </div>
          <div className="flex justify-center mt-6">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md"
              disabled={loading}
            >
              {loading ? "Submitting..." : "Submit"}
            </button>
          </div>
        </form>
      </div>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

export default Contact;
