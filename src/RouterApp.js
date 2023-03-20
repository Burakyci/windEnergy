import * as React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Page404Found from "./pages/Page404Found";

import Contact from "./pages/Contact";
import AppNavbar from "./Component/AppNavbar";
import About from "./pages/About";

export default function RouterApp() {
  return (
    <div>
      <>
        <Routes>
          <Route path="/" element={<AppNavbar />}>
            <Route index={true} element={<Home />} />
            <Route path="*" element={<Page404Found />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
        </Routes>
      </>
    </div>
  );
}
