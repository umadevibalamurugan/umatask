import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
//Components
import Home from "./pages/Home";
import Resources from "./pages/Resources";
import Products from "./pages/Products";
import Pricing from "./pages/Pricing";
import NotFound from "./pages/NotFound";
import Dashboard from "./pages/Dashboard";
//Layout
import Layout from "./components/Layout";

function App() {
  const LoggedIn = false;

  const Public = () => {
    return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/products" element={<Products />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    );
  };

  const Private = () => {
    return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/products" element={<Products />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    );
  };

  return (
    <div className={`main`}>
      <Layout>{LoggedIn === true ? <Private /> : <Public />}</Layout>
    </div>
  );
}

export default App;
