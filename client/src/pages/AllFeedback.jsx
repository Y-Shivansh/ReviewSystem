import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';

const AllFeedback = () => {
    const [feedbacks, setFeedbacks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchFeedbacks = async () => {
            try {
                const response = await axios.get(`${import.meta.env.VITE_API_URL}/v1/feedback`, {withCredentials: true});
                setFeedbacks(response.data.feedbacks);
            } catch (err) {
                setError('Error fetching feedbacks');
            } finally {
                setLoading(false);
            }
        };

        fetchFeedbacks();
    }, []);

    if (loading) {
        return <div className="text-center text-xl font-semibold">Loading...</div>;
    }

    if (error) {
        return <div className="text-center text-red-500 font-semibold">{error}</div>;
    }

    return (
        <div>
            <Navbar />
            <div className=" mx-auto p-6 bg-gray-50 rounded-lg shadow-lg">
                <h1 className="text-3xl font-semibold text-center text-gray-800 mb-10">Approved Feedbacks</h1>
                {feedbacks.length === 0 ? (
                    <p className="text-center text-lg text-gray-600">No Approved Feedback!</p>
                ) : (
                    <ul className="space-y-6">
                        {feedbacks.map(feedback => (
                            <li key={feedback._id} className="border p-4 rounded-lg shadow-md hover:bg-gray-100">
                                <h3 className="text-xl font-semibold text-gray-900">{feedback.name}</h3>
                                <p className="text-lg text-yellow-500">Rating: {feedback.rating}</p>
                                <p className="text-gray-700 mt-2">{feedback.review}</p>
                            </li>
                        ))}
                    </ul>
                )}
            </div>

        </div>
    );
};

export default AllFeedback;
