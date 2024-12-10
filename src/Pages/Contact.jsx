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
      <div className="relative min-h-screen bg-secondary flex items-center justify-center py-2">
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
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>

        <div className="relative z-10 container mx-auto px-6 md:px-16 lg:px-24 xl:px-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Hero Content */}
            <div className="text-white space-y-6">
              <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
                Let’s Build <br />
                <span className="text-primary">—</span>
                Success Together.
              </h1>
              <p className="text-lg md:text-xl text-gray-300">
                Partner with us to transform your vision into exceptional
                digital solutions. Let's create something amazing.
              </p>
            </div>

            {/* Form Section */}
            <div className="bg-white p-8 rounded-xl shadow-2xl">
              <h2 className="text-3xl font-semibold text-gray-800 mb-4">
                Contact Us
              </h2>
              <p className="text-gray-600 mb-6">
                Let us know your requirements, and we’ll reach out to help bring
                your project to life.
              </p>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Full Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Full Name
                  </label>
                  <input
                    id="name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring focus:ring-primary focus:outline-none"
                    type="text"
                    name="name"
                    placeholder="Jane Cooper"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* Company Name & Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="companyName"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Company Name
                    </label>
                    <input
                      id="companyName"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring focus:ring-primary focus:outline-none"
                      type="text"
                      name="companyName"
                      placeholder="Ex. Tesla Inc"
                      value={formData.companyName}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Email*
                    </label>
                    <input
                      id="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring focus:ring-primary focus:outline-none"
                      type="email"
                      name="email"
                      placeholder="you@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                {/* Service & Budget */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="service"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Service Required*
                    </label>
                    <select
                      id="service"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring focus:ring-primary focus:outline-none"
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
                    <label
                      htmlFor="budget"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Project Budget*
                    </label>
                    <select
                      id="budget"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring focus:ring-primary focus:outline-none"
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

                {/* Project Details */}
                <div>
                  <label
                    htmlFor="details"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Project Details*
                  </label>
                  <textarea
                    id="details"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring focus:ring-primary focus:outline-none"
                    name="details"
                    placeholder="Tell us more about your idea"
                    value={formData.details}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>

                {/* Submit Button */}
                <div>
                  <button
                    type="submit"
                    className="w-full bg-primary text-white py-3 px-6 rounded-lg hover:bg-primary-dark focus:ring focus:ring-primary focus:outline-none transition duration-200"
                  >
                    Send Inquiry
                  </button>
                </div>
              </form>

              {/* Form Status */}
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
        </div>
      </div>

      {/* `


      second



      `   */}
      <div className="bg-black py-20 px-6 md:px-12 lg:px-24">
        <div className="max-w-5xl mx-auto text-center">
          {/* Section Title */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-tight mb-16">
            Drop us an email to explore for Business{" "}
            <span className="text-primary">collaborations</span> or career{" "}
            <span className="text-primary">opportunities.</span>
          </h2>
        </div>

        {/* Contact Options */}
        <div className="grid gap-12 md:grid-cols-1 max-w-4xl mx-auto">
          {/* Business Collaborations */}
          <div className="text-center bg-gray-800 hover:bg-gray-700 transition-transform transform hover:-translate-y-2 rounded-lg p-10 shadow-lg">
            <a href="mailto:hello@musemind.agency" className="block">
              <p className="text-white text-2xl font-medium mb-4">
                hello@xisly.net
              </p>
            </a>
            <p className="text-gray-400">
              Projects, collaborations, and queries.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
