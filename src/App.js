import { Outlet, Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import APIs from "./components/dashboard/APIs";
import Database from "./components/dashboard/Database";
import Files from "./components/dashboard/Files";
import Overview from "./components/dashboard/Overview";
import Settings from "./components/dashboard/Settings";
import Users from "./components/dashboard/Users";
import Faq from "./components/Faq";
import Home from "./components/Home";
import Login from "./components/Login";
import NotFound from "./components/NotFound";
import Register from "./components/Register";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route index element={<Overview />} />
          <Route path="database" element={<Database />} />
          <Route path="apis" element={<APIs />} />
          <Route path="users" element={<Users />} />
          <Route path="files" element={<Files />} />
          <Route path="settings" element={<Settings />} />
        </Route>
        <Route path="/faq" element={<Faq />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Outlet />
    </div>
  );
}

export default App;
