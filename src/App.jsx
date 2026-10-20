import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import NameList from "./components/pages/name list/namelist.jsx";
import HeaderBar from "./components/menubar/headerbar.jsx";
import Home from "./components/pages/Home/home.jsx";
import About from "./components/pages/About/about.jsx";


function App() {
  return (
    <div>
      <BrowserRouter>
        <HeaderBar />
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/namelist" element={<NameList />} />
            <Route path="/" element={<Home />} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
