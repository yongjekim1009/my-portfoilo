import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import AdminLogin from "../pages/admin/AdminLogin";
import PrivateRoute from "../routes/PrivateRoute";
import AdminDashboard from "./../pages/admin/AdminDashboard";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/admin/login" element={<AdminLogin />} />
      <Route
        path="/admin"
        element={
          <PrivateRoute>
            <AdminDashboard />
          </PrivateRoute>
        }
      />
    </Routes>
  );
};

export default AppRoutes;
