import { Route, Routes } from "react-router-dom";
import { PageDashboard } from "../pages/dashboard";
import { PageLogin } from "../pages/login";
import { RegisterPage } from "../pages/register";

export const RoutesMain = () => {
  return (
      <Routes>
        <Route path="/" element={<PageLogin />} />
        <Route path="/login" element={<PageLogin />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/dashboard" element={<PageDashboard />} />
      </Routes>
  );
};
