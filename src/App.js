import { Outlet, Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard";
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
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Outlet />
    </div>
  );
}

export default App;
