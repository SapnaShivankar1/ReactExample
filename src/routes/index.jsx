import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import App from '../containers/App/App';
import Portfolio from '../containers/Portfolio/Portfolio';


export function AppRoutes() {
  return (
    <div className="App">
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/portfolio/:slug" element={<Portfolio />} />
      <Route path="*" element={<h1>404 not found</h1>} />
    </Routes>
    </div>
  );
}
