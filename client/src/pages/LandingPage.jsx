import React from 'react';
import { Button } from '../components/Button';
import { Heading } from '../components/Heading';
import { useNavigate } from 'react-router-dom';
import AverageRating from '../components/AverageRating.jsx';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';

const LandingPage = () => {
    const navigate = useNavigate();
    const toastId = "average-rating-toast";
    const handleAverageRatingClick = () => {
        if (!toast.isActive(toastId)) {
            toast(<AverageRating onClose={() => toast.dismiss()} />, {
                toastId,
                closeOnClick: true,
            });
        }
    };

    return (
        <div className="flex flex-col min-h-screen bg-gray-100">
            <Navbar />
            <div className="flex flex-col items-center justify-center flex-grow py-8 px-4 sm:px-6 lg:px-8">
                <h1 className=" text-xl sm:text-3xl md:text-4xl font-semibold text-center">Welcome to Our Feedback System</h1>
                <div className="mt-8 space-y-4 w-full max-w-lg">
                    <Button label="Rate and Review" type="button" onClick={() => navigate('/add-feedback')} className="w-full sm:w-auto" />
                    <Button label="See All Approved Feedbacks" type="button" onClick={() => navigate('/all-feedback')} className="w-full sm:w-auto" />
                    <Button label="Average Ratings" type="button" onClick={handleAverageRatingClick} className="w-full sm:w-auto" />
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default LandingPage;
