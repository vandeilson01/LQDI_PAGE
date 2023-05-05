import React from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import NoPage from "../pages/Nopage";
import Registrations from "../pages/Registrations";
import Mails from "../pages/Mails";


function AppRoutes() {
    return (
      <BrowserRouter>
        <Routes>
            <Route index element={<Home/>} />
            <Route path="/home" element={<Home/>} />
            <Route path="/registrations"  element={<Registrations />} />
            <Route path="/mails"  element={<Mails/>} />
            <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    );
}

export default AppRoutes;