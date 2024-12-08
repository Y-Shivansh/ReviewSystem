import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar.jsx';

const AdminDashboard = () => {
    const [averageRating, setAverageRating] = useState(null);
    const [feedbacks, setFeedbacks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchAverageRating = async () => {
            try {
                const token = localStorage.getItem('token');
                const response = await axios.get(`${import.meta.env.VITE_API_URL}/admin/average-rating`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                setAverageRating(response.data.averageRating);
            } catch (err) {
                setError('Error fetching average rating');
            }
        };

        const fetchFeedbacks = async () => {
            try {
                const token = localStorage.getItem('token');
                const response = await axios.get(`${import.meta.env.VITE_API_URL}/admin/all-feedback`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                setFeedbacks(response.data.allFeedbacks);
            } catch (err) {
                setError('Error fetching feedbacks');
            } finally {
                setLoading(false);
            }
        };

        fetchAverageRating();
        fetchFeedbacks();
    }, []);

    const handleAction = async (id, action) => {
        try {
            const token = localStorage.getItem('token');
            await axios.post(`${import.meta.env.VITE_API_URL}/admin/feedback/${id}/manpulate`, { action }, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            setFeedbacks(feedbacks.filter(feedback => feedback._id !== id));
            window.location.reload();
        } catch (err) {
            setError('Error processing feedback');
        }
    };

    if (loading) {
        return <div className="text-center text-xl font-semibold">Loading...</div>;
    }

    if (error) {
        return <div className="text-center text-red-500 font-semibold">{error}</div>;
    }

    // Sorting feedbacks array, unapproved feedbacks will come first
    const sortedFeedbacks = [...feedbacks].sort((a, b) => (a.approved === b.approved ? 0 : a.approved ? 1 : -1));

    return (
        <div>
            <Navbar />
            <div className="container mx-auto p-4">
                <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
                <div className="mb-4">
                    <h2 className="text-xl font-semibold">Average Rating</h2>
                    {averageRating !== null ? (
                        <p>{averageRating}</p>
                    ) : (
                        <p>No ratings available</p>
                    )}
                </div>
                <div>
                    <h2 className="text-xl font-semibold">Feedbacks</h2>
                    {feedbacks.length === 0 ? (
                        <p>No feedbacks available</p>
                    ) : (
                        <ul>
                            {sortedFeedbacks.map(feedback => (
                                <li key={feedback._id} className="mb-4 p-4 border rounded">
                                    <p className="font-semibold">{feedback.name}</p>
                                    <p className="text-gray-700 mt-2">{feedback.review}</p>
                                    <div className="mt-4 flex space-x-4">
                                        {/* Approve button is disabled if feedback is approved */}
                                        {feedback.approved ? (
                                            <button
                                                className="bg-green-500 text-white py-2 px-4 rounded-lg cursor-not-allowed opacity-50"
                                                disabled
                                            >
                                                Approved
                                            </button>
                                        ) : (
                                            <button
                                                onClick={() => handleAction(feedback._id, 'approve')}
                                                className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600"
                                            >
                                                Approve
                                            </button>
                                        )}
                                        <button
                                            onClick={() => handleAction(feedback._id, 'reject')}
                                            className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600"
                                        >
                                            Reject
                                        </button>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;