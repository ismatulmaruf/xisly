import React from "react";
import { Link } from "react-router-dom";
import Layout from "../Layout/Layout";
import Service from "../Components/Service";
import FAQAccordion from "../Components/FAQAccordion";

export default function HomePage() {
  return (
    <Layout>
      {/* Banner Section with Video Background */}
      <section className="relative w-full h-screen overflow-hidden">
        {/* Background Video */}
        <div className="absolute inset-0 w-full h-full">
          <video
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          >
            <source
              src="https://uiart.io/video/banner-animation.mov"
              type="video/webm"
            />
          </video>
        </div>

        {/* Content Section */}
        <div className="absolute inset-0 w-full h-full bg-black bg-opacity-60 flex flex-col items-center justify-center text-center text-white z-10 px-4 md:px-8">
          <h1 className="text-5xl font-extrabold md:text-6xl text-shadow-lg">
            Leading Global UX{" "}
            <span className="text-yellow-400">Design Agency</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl max-w-2xl mx-auto text-shadow-lg">
            Xisly is a global UX Design and Web Design Agency, helping brands
            redefine experiences and empower business growth.
          </p>

          {/* Review and Contact Us Button */}
          <div className="mt-8 flex flex-col md:flex-row items-center justify-center space-x-0 md:space-x-6 space-y-4 md:space-y-0">
            {/* Clutch Review */}
            <div className="bg-white text-black py-2 px-6 rounded-full shadow-md flex items-center">
              <span className="text-xl font-bold">5.0</span>
              <span className="ml-2 text-sm">Based on Cubic Overseas</span>
            </div>
            {/* Contact Us Button */}
            <Link
              to="/contact"
              className="bg-gradient-to-r from-pink-600 to-red-600 hover:bg-opacity-90 text-white py-3 px-8 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Additional Sections */}
      <Service />
      <FAQAccordion />
    </Layout>
  );
}
