import { NavLink } from "react-router-dom";
import { useState } from "react";

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
            <li>
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
            </li>
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
        className={`mt-1 bg-white border-gray-200 shadow-md  overflow-hidden transition-all duration-500 ease-in-out ${
          isMegaMenuOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="grid max-w-screen-xl px-4 py-5 mx-auto text-sm text-gray-500  md:grid-cols-3 md:px-6">
          <ul className="hidden mb-4 space-y-4 md:mb-0 md:block">
            <li>
              <NavLink
                to="/online-stores"
                className="hover:underline hover:text-blue-600  transition-colors duration-200"
              >
                Online Stores
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/segmentation"
                className="hover:underline hover:text-blue-600  transition-colors duration-200"
              >
                Segmentation
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/marketing-crm"
                className="hover:underline hover:text-blue-600  transition-colors duration-200"
              >
                Marketing CRM
              </NavLink>
            </li>
          </ul>
          <ul className="mb-4 space-y-4 md:mb-0">
            <li>
              <NavLink
                to="/our-blog"
                className="hover:underline hover:text-blue-600  transition-colors duration-200"
              >
                Our Blog
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/terms"
                className="hover:underline hover:text-blue-600  transition-colors duration-200"
              >
                Terms & Conditions
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/license"
                className="hover:underline hover:text-blue-600  transition-colors duration-200"
              >
                License
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/resources"
                className="hover:underline hover:text-blue-600  transition-colors duration-200"
              >
                Resources
              </NavLink>
            </li>
          </ul>
          <a
            href="#"
            className="p-8 bg-local bg-gray-500 bg-center bg-no-repeat bg-cover rounded-lg bg-blend-multiply hover:bg-blend-soft-light"
            style={{
              backgroundImage: "url(/docs/images/dashboard-overview.png)",
            }}
          >
            <p className="max-w-xl mb-5 font-extrabold leading-tight tracking-tight text-white">
              Preview the new Flowbite dashboard navigation.
            </p>
            <button
              type="button"
              className="inline-flex items-center px-2.5 py-1.5 text-xs font-medium text-center text-white border border-white rounded-lg hover:bg-white hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-700"
            >
              Get started
              <svg
                className="w-3 h-3 ms-2 rtl:rotate-180"
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
          </a>
        </div>
      </div>
    </nav>
  );
}
