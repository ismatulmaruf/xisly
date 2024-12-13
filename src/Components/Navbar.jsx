import { NavLink } from "react-router-dom";
import { useState } from "react";
import {
  FaGlobe,
  FaUsers,
  FaAd,
  FaWhatsapp,
  FaEnvelope,
  FaImages,
  FaFileAlt,
  FaVideo,
  FaRobot,
  FaPenFancy,
} from "react-icons/fa";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);

  return (
    <nav className="bg-white border-gray-200   shadow-lg">
      <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
        <NavLink
          to="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <span className="self-center text-2xl font-semibold whitespace-nowrap ">
            Xisly
          </span>
        </NavLink>
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 "
          aria-expanded={isMenuOpen ? "true" : "false"}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className={`w-5 h-5 transform transition-transform ${
              isMenuOpen ? "rotate-90" : "rotate-0"
            }`}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>

        <div
          className={`items-center justify-between ${
            isMenuOpen ? "flex" : "hidden"
          } w-full md:flex md:w-auto md:order-1 transition-all duration-300`}
        >
          <ul className="flex flex-col mt-4 font-medium md:flex-row md:mt-0 md:space-x-8 rtl:space-x-reverse w-full">
            <li>
              <button
                onClick={() => setIsMegaMenuOpen(!isMegaMenuOpen)}
                className="flex items-center justify-between w-full py-2 px-3 font-medium text-gray-900 border-b border-gray-100 md:w-auto hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 "
              >
                Services
                <svg
                  className={`w-2.5 h-2.5 ms-3 transform transition-transform ${
                    isMegaMenuOpen ? "rotate-180" : "rotate-0"
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>
            </li>
            <li>
              <NavLink
                to="/about-us"
                className="block py-2 px-3 text-gray-900 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 "
              >
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/blog"
                className="block py-2 px-3 text-gray-900 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 "
              >
                Blog
              </NavLink>
            </li>
            {/* <li>
              <NavLink
                to="/pricing"
                className="block py-2 px-3 text-gray-900 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 "
              >
                Pricing
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/case"
                className="block py-2 px-3 text-gray-900 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 "
              >
                Case Studies
              </NavLink>
            </li> */}
            <li>
              <NavLink
                to="/contact"
                className="block py-2 px-3 text-gray-900 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 "
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>

      <div
        id="mega-menu-full-image-dropdown"
        className={`mt-1 bg-white border border-gray-200 shadow-lg overflow-hidden transition-all duration-500 ease-in-out ${
          isMegaMenuOpen ? "min-h-96" : "max-h-0"
        }`}
      >
        <div className="grid max-w-screen-xl px-6 py-6 mx-auto text-sm text-gray-600 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex items-center p-4 bg-white shadow rounded-lg hover:shadow-lg transition-shadow"
            >
              <div className="w-20 h-20 flex-shrink-0 flex items-center justify-center text-blue-500 text-3xl bg-gray-100 rounded-lg">
                {service.icon}
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-gray-800">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm mt-2">
                  {service.description}
                </p>
                <a
                  href={service.link}
                  className="text-blue-500 text-sm font-medium mt-3 inline-block hover:underline"
                >
                  Read more
                </a>
              </div>
            </div>
          ))}

          <a
            href="#"
            className="relative p-6 bg-gray-500 rounded-lg bg-cover bg-center bg-no-repeat text-white hover:opacity-90 transition-opacity"
            style={{
              backgroundImage: "url(/docs/images/dashboard-overview.png)",
            }}
          >
            <div className="absolute inset-0 bg-gray-800 bg-opacity-50 rounded-lg"></div>
            <div className="relative z-10">
              <p className="font-extrabold text-lg leading-tight">
                Preview the new Flowbite dashboard navigation.
              </p>
              <button
                type="button"
                className="mt-4 inline-flex items-center px-3 py-2 text-sm font-medium border border-white rounded-lg hover:bg-white hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-700"
              >
                Get started
                <svg
                  className="w-4 h-4 ml-2 rtl:rotate-180"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </button>
            </div>
          </a>
        </div>
      </div>
    </nav>
  );
}

const services = [
  {
    title: "Site Builder",
    description: "Domain, Hosting, Site Builder",
    icon: <FaGlobe />,
    link: "/services/site-builder",
  },
  {
    title: "Team Manager",
    description: "Manage your team effectively",
    icon: <FaUsers />,
    link: "/services/team-manager",
  },
  {
    title: "Ads Manager",
    description: "Newspaper, Meta, Google ads management",
    icon: <FaAd />,
    link: "/services/ads-manager",
  },
  {
    title: "WhatsApp Manager",
    description: "Streamline communication on WhatsApp",
    icon: <FaWhatsapp />,
    link: "/services/whatsapp-manager",
  },
  {
    title: "Email Sender",
    description: "Automate and manage email campaigns",
    icon: <FaEnvelope />,
    link: "/services/email-sender",
  },
  {
    title: "Image Generator",
    description: "Generate high-quality images effortlessly",
    icon: <FaImages />,
    link: "/services/image-generator",
  },
  {
    title: "Text Generator",
    description: "Create engaging and unique content",
    icon: <FaFileAlt />,
    link: "/services/text-generator",
  },
  {
    title: "Video Generator",
    description: "Produce videos with AI assistance",
    icon: <FaVideo />,
    link: "/services/video-generator",
  },
  {
    title: "AI Chat",
    description: "Enhance communication with AI chat solutions",
    icon: <FaRobot />,
    link: "/services/ai-chat",
  },
  {
    title: "Content Manager",
    description: "Organize and manage your content effectively",
    icon: <FaPenFancy />,
    link: "/services/content-manager",
  },
];
