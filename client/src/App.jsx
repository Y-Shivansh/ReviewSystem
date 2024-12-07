import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import FeedbackForm from './pages/FeedbackForm.jsx'
import LandingPage from './pages/LandingPage.jsx'
import AllFeedback from './pages/AllFeedback.jsx'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AdminLogin from './pages/AdminLogin.jsx'
import AdminDashboard from './pages/AdminDashboard.jsx'
import { useEffect } from 'react';

function App() {
  return (
    <div>
      <BrowserRouter>

        <ToastContainer />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/add-feedback" element={<FeedbackForm />} />
          <Route path="/all-feedback" element={<AllFeedback />} />
          <Route path="/AdminLogin" element={<AdminLogin />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App