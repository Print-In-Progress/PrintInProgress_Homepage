import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./layouts/Layout";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Pricing from "./pages/Pricing";
import Documentation from "./pages/Documentation";
import Services from "./pages/Services";
import Privacy from "./pages/Privacy";
import Contact from "./pages/Contact";
import Support from "./pages/Support";
import Ideas from "./pages/Ideas";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />

          {/* Placeholder Pages for now */}
          <Route path="/products" element={<Products />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/documentation" element={<Documentation />} />
          <Route path="/services" element={<Services />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/support" element={<Support />} />
          <Route path="/ideas" element={<Ideas />} />

          {/* Redirect 404 paths to home page */}
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
