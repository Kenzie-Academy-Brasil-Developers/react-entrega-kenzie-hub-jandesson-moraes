import { Route, Routes } from "react-router-dom";
import { PageDashboard } from "../Pages/dashboard";
import { PageLogin } from "../Pages/login";
import { RegisterPage } from "../Pages/register";
import { ProtectedRoutes } from "../components/ProtectedRoutes";
import { TechProvider } from "../providers/techContext";

export const RoutesMain = () => {
  return (
      <Routes>


        <Route path="/" element={<PageLogin />} />
        <Route path="/register" element={<RegisterPage />} />

        <Route element={<ProtectedRoutes />} >
          <Route path="/dashboard" element={<TechProvider> < PageDashboard /> </TechProvider>} />
        </Route>


      </Routes>
  );
};


