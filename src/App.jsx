import React from "react";

import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import AboutUs from "./Pages/About";
import NotFound from "./Pages/NotFound";
import Contact from "./Pages/Contact";
import Privacy from "./Pages/Privacy";
import Terms from "./Pages/Terms";
import Denied from "./Pages/Denied";

import ScrollToTop from "./Components/ScrollToTop";

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy-policy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/denied" element={<Denied />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
