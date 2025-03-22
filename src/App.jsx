import React from "react";
import Home from "./pages/Home";
import School from "./pages/School";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Activity from "./pages/Activity";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/About" element={<About />} /> */}
          {/* <Route path="/Dashboard" element={<Dashboard />} /> */}
          {/* <Route path="/Services" element={<Services />} /> */}
          <Route path="/School" element={<School />} />
          <Route path="/Activity" element={<Activity/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
