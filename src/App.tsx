import React, { useEffect } from "react";
import {
    BrowserRouter as Router,
    Route,
    Routes,
    useNavigate,
} from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App: React.FC = () => {
    return (
        <Router>
            <ToastContainer />
            <Routes>
                <Route path="" element={<AuthRedirect />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/forgot-password" element={<LoginPage />} />
                <Route path="/email-sent" element={<LoginPage />} />
            </Routes>
        </Router>
    );
};

const AuthRedirect: React.FC = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("accessToken");
        if (token) {
            navigate("/customers");
        } else {
            navigate("/login");
        }
    }, [navigate]);

    return null;
};

export default App;
