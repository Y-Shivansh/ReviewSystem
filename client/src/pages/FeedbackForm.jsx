import React, { useState } from 'react';
import axios from 'axios';
import InputBox from '../components/InputBox';
import { Button } from '../components/Button';
import { Heading } from '../components/Heading';
import Navbar from '../components/Navbar';

const FeedbackForm = () => {
    const [error, setError] = useState('');
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        rating: '',
        review: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');  // Reset the error message
        try {
            const response = await axios.post(`${import.meta.env.VITE_API_URL}/v1/feedback`, formData, {withCredentials: true});
            alert(response.data.message);
        } catch (error) {
            console.error('Error submitting feedback', error);
            alert("Error submitting feedback")
            setError('Error submitting feedback');
        }
        finally{
            window.location.reload();
        }
    };
    return (
        <div className='bg-gray-100 h-screen'>
            <Navbar/>
            <div className="max-w-lg mt-10 rounded-xl shadow-md bg-white mx-auto p-6">
                <h1 className="text-center text-4xl font-semibold text-gray-800"> Submit Feedback</h1>
                <form onSubmit={handleSubmit} className="mt-6">
                    <InputBox
                        label="Name"
                        type="text"
                        placeholder="Enter your name"
                        value={formData.name}
                        onChange={handleChange}
                        name="name"
                    />
                    <InputBox
                        label="Email"
                        type="email"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={handleChange}
                        name="email"
                    />
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Rating</label>
                        <select
                            className="shadow-sm appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            value={formData.rating}
                            onChange={handleChange}
                            name="rating"
                        >
                            <option value="">Select rating</option>
                            {[1, 2, 3, 4, 5].map((rating) => (
                                <option key={rating} value={rating}>
                                    {rating}
                                </option>
                            ))}
                        </select>
                    </div>
                    <InputBox
                        label="Review"
                        type="text"
                        placeholder="Enter your review"
                        value={formData.review}
                        onChange={handleChange}
                        name="review"
                    />{error && <p className="text-red-500 text-sm">{error}</p>}
                    <Button label="Submit" type="submit" />
                </form>
            </div>
        </div>
    );
};

export default FeedbackForm;