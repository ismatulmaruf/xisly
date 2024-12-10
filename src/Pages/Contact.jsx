import React, { useState } from "react";
import Layout from "../Layout/Layout";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    companyName: "",
    email: "",
    service: "",
    budget: "",
    details: "",
  });

  const [formStatus, setFormStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulate form submission (replace this with your API call)
    setTimeout(() => {
      setFormStatus("success");
    }, 1000);
  };

  return (
    <Layout>
      <div className="relative h-screen overflow-hidden bg-secondary">
        {/* Video Background */}
        <video
          autoPlay
          loop
          muted
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source
            src="https://uiart.io/video/banner-animation.mov"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>

        {/* Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-60"></div>

        {/* Hero Content */}
        <div className="absolute top-10 left-10 z-10">
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
            Let’s work <br />
            <span className="text-primary">— </span>
            <span className="text-white">together.</span>
          </h1>
        </div>

        {/* Form Section */}
        <div className="absolute top-10 right-10 z-10 bg-white p-8 rounded-lg shadow-xl w-full max-w-2xl">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Contact Us
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300 focus:outline-none"
                type="text"
                name="name"
                placeholder="Jane Cooper"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Company Name
                </label>
                <input
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300 focus:outline-none"
                  type="text"
                  name="companyName"
                  placeholder="Ex. Tesla Inc"
                  value={formData.companyName}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Email*
                </label>
                <input
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300 focus:outline-none"
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Service Required*
                </label>
                <select
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300 focus:outline-none"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Your Service</option>
                  <option value="UI/UX Design">UI/UX Design</option>
                  <option value="SaaS Design">SaaS Design</option>
                  <option value="Brand Identity">Brand Identity</option>
                  <option value="Webflow">Webflow</option>
                  <option value="Web Design">Web Design</option>
                  <option value="MVP Development">MVP Development</option>
                  <option value="Design System">Design System</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Project Budget*
                </label>
                <select
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300 focus:outline-none"
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Your Range</option>
                  <option value="$5K - $10K">$5K - $10K</option>
                  <option value="$10K - $20K">$10K - $20K</option>
                  <option value="$20K - $50K">$20K - $50K</option>
                  <option value="$50K - $100K">$50K - $100K</option>
                  <option value="$100k and up">$100k and up</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Project Details*
              </label>
              <textarea
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300 focus:outline-none"
                name="details"
                placeholder="Tell us more about your idea"
                value={formData.details}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:ring focus:ring-blue-300 focus:outline-none"
              >
                Send Inquiry
              </button>
            </div>
          </form>

          {formStatus === "success" && (
            <div className="mt-6 text-green-600">
              Thank you! Your submission has been received!
            </div>
          )}
          {formStatus === "error" && (
            <div className="mt-6 text-red-600">
              Oops! Something went wrong while submitting the form.
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}
