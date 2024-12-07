import Feedback from "../models/Feedback.model.js"

export const getAllApprovedFeedback = async (req, res) => {
    try {
        const approvedFeedbacks = await Feedback.find({ approved: true });
        if (approvedFeedbacks.length === 0) {
            return res.status(200).json({
                message: "No Approved Feedback!"
            })
        }
        res.status(200).json({
            success: true,
            feedbacks: approvedFeedbacks
        })
    } catch (error) {
        console.error("Internal Server Error", error);
        res.status(500).json({
            success: false,
            message: "Internal Server Error. Please try again later."
        });
    }
}
export const submitFeedback = async (req, res) => {
    const { name, email, rating, review } = req.body
    try {
        const feedback = new Feedback({ name, email, rating, review });
        const existingFeedback = await Feedback.findOne({ email });
        if (existingFeedback) {
            existingFeedback.rating = rating;
            existingFeedback.review = review;
            await existingFeedback.save();
            return res.status(200).json({ message: 'Feedback updated successfully' });
        }
        await feedback.save();
        res.status(201).json({ message: 'Feedback submitted successfully, pending admin approval.' });
    }
    catch (error) {
        res.status(500).json({ message: 'Error submitting feedback' });
    }
}