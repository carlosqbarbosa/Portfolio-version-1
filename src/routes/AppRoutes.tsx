import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import ProjectDetails from "../pages/ProjectDetails";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projeto/:id" element={<ProjectDetails />} />
      </Routes>
    </BrowserRouter>
  );
}
