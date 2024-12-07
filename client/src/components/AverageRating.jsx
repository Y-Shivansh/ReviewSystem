import React, { useState, useEffect } from 'react';
import RatingStars from 'react-rating-stars-component';
import axios from 'axios';

const AverageRating = ({ onClose }) => {
    const [averageRating, setAverageRating] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchAverageRating = async () => {
            try {
                const response = await axios.get(`${import.meta.env.VITE_API_URL}/v1/average-rating`);
                setAverageRating(response.data.averageRating);
            } catch (err) {
                setError('Error fetching average rating');
            } finally {
                setLoading(false);
            }
        };

        fetchAverageRating();
    }, []);
    const ratingConfig = {
        size: 30,
        count: 5,
        value: averageRating,
        isHalf: true,
        edit: false,
        activeColor: '#ffd700',
        color: '#d3d3d3'
    }

    return (
        <div className="">
            <h2 className="text-xl font-bold mb-4">Average Rating</h2>
            {loading ? (
                <p>Loading...</p>
            ) : error ? (
                <p>{error}</p>
            ) : (
                <div>
                    <p>{averageRating ? `The average rating is ${averageRating}` : 'No ratings available'}</p>
                    {averageRating && (
                        <div className='mt-2'>
                            <RatingStars {...ratingConfig} />
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default AverageRating;