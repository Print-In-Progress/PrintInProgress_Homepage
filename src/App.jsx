import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layouts/Layout";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Pricing from "./pages/Pricing";
import Services from "./pages/Services";
import Privacy from "./pages/Privacy";
import Contact from "./pages/Contact";
import TermsOfService from "./pages/TermsOfService";
import Policy from "./pages/Policy";
import LegalNotice from "./pages/LegalNotice";
import DocumentationLayout from "./layouts/DocumentationLayout";
import Documentation from "./pages/Documentation";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/products/ed-connect" element={<Products />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/services" element={<Services />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/privacy-policy" element={<Policy />} />
          <Route path="/legal-notice" element={<LegalNotice />} />

          <Route element={<DocumentationLayout />}>
            <Route path="/documentation" element={<Documentation />} />
            <Route path="/documentation/:section" element={<Documentation />} />
          </Route>

          {/* Combined Contact routes */}
          <Route path="/contact/:type" element={<Contact />} />

          {/* Redirect 404 paths to home page */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
