import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import ProjectDetails from "../pages/ProjectDetails";
export default function AppRoutes() {
    return (_jsx(BrowserRouter, { children: _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(Home, {}) }), _jsx(Route, { path: "/projeto/:id", element: _jsx(ProjectDetails, {}) })] }) }));
}
