import React from "react";

const Footer = () => {
  return (
    <section className="footer-area bg-gray-900 text-white py-16">
      <div className="container mx-auto px-6">
        <div className="footer-columns grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* About Us Section */}
          <div className="footer-about-us">
            <div className="footer-contact-item mb-10">
              <h1 className="text-2xl font-semibold">Xisly</h1>
              <p className="text-gray-400">
                An Experience Design Agency focusing on building functional,
                simple, human-centered digital products for the future.
              </p>
            </div>
            <div className="btn-wrapper flex">
              <a
                href="/contact"
                target="_blank"
                rel="nofollow"
                className="primary-button bg-blue-500 text-black px-6 py-3 rounded-lg transition duration-300 hover:bg-blue-600"
              >
                Contact us now
              </a>
            </div>
          </div>

          {/* Services Section */}
          <div className="footer-nav">
            <h4 className="footer-contact-item-title text-lg font-semibold mb-4">
              Services
            </h4>
            <ul className="footer-menu-list space-y-2">
              <li>
                <a
                  href="/services/ui-ux-design"
                  className="footer-nav-link text-gray-300 hover:text-white"
                >
                  UI/UX Design
                </a>
              </li>
              <li>
                <a
                  href="/services/web-design-development"
                  className="footer-nav-link text-gray-300 hover:text-white"
                >
                  Web Design
                </a>
              </li>
              <li>
                <a
                  href="/services/brand-design"
                  className="footer-nav-link text-gray-300 hover:text-white"
                >
                  Branding
                </a>
              </li>
              <li>
                <a
                  href="/services/webflow-design-development"
                  className="footer-nav-link text-gray-300 hover:text-white"
                >
                  Webflow
                </a>
              </li>
              <li>
                <a
                  href="/services/mvp-development"
                  className="footer-nav-link text-gray-300 hover:text-white"
                >
                  MVP Development
                </a>
              </li>
              <li>
                <a
                  href="/services/saas-design"
                  className="footer-nav-link text-gray-300 hover:text-white"
                >
                  SaaS Design
                </a>
              </li>
              <li>
                <a
                  href="/services/mobile-app-design"
                  className="footer-nav-link text-gray-300 hover:text-white"
                >
                  Mobile App
                </a>
              </li>
              <li>
                <a
                  href="/services/design-system"
                  className="footer-nav-link text-gray-300 hover:text-white"
                >
                  Design System
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links Section */}
          <div className="footer-nav">
            <h4 className="footer-contact-item-title text-lg font-semibold mb-4">
              Quick Links
            </h4>
            <ul className="footer-menu-list space-y-2">
              <li>
                <a
                  href="/"
                  className="footer-nav-link text-gray-300 hover:text-white"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/case-study"
                  className="footer-nav-link text-gray-300 hover:text-white"
                >
                  Work
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="footer-nav-link text-gray-300 hover:text-white"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="/pricing-plan"
                  className="footer-nav-link text-gray-300 hover:text-white"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="/ui-ux-process"
                  className="footer-nav-link text-gray-300 hover:text-white"
                >
                  Our Process
                </a>
              </li>
              <li>
                <a
                  href="/career"
                  className="footer-nav-link text-gray-300 hover:text-white"
                >
                  Career
                </a>
              </li>
              <li>
                <a
                  href="/blog"
                  className="footer-nav-link text-gray-300 hover:text-white"
                >
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Review Section */}
          <div className="footer-nav">
            <h4 className="footer-contact-item-title text-lg font-semibold mb-4">
              Review
            </h4>
            <ul className="footer-menu-list space-y-2">
              <li>
                <a
                  href=""
                  className="footer-nav-link text-gray-300 hover:text-white"
                >
                  Cubic overseas
                </a>
              </li>
              <li>
                <a
                  href=""
                  className="footer-nav-link text-gray-300 hover:text-white"
                >
                  Crypto Gold Minings
                </a>
              </li>
              <li>
                <a
                  href=""
                  className="footer-nav-link text-gray-300 hover:text-white"
                >
                  SonarFib
                </a>
              </li>
              <li>
                <a
                  href=""
                  className="footer-nav-link text-gray-300 hover:text-white"
                >
                  GoldJute
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer Section */}
        <div className="footer-bottom-content mt-16">
          <div className="footer-bottom-inner-content flex flex-col sm:flex-row justify-between items-center border-t border-gray-700 pt-6">
            {/* Copyright Section */}
            <p className="footer-copyright text-gray-400 text-sm text-center sm:text-left">
              © 2024 Xisly. All rights reserved.
            </p>

            {/* Social Links Section */}
            <div className="footer-social-links flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 items-center sm:justify-end mt-4 sm:mt-0">
              <a href="#" className="text-gray-300 hover:text-white">
                Facebook
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                Twitter
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                Instagram
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
