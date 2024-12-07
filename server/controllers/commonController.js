import Feedback from "../models/Feedback.model.js";
import Admin from "../models/Admin.model.js";

export const getAverageRating = async (req, res) => {
    try {
        const feedback = await Feedback.find({ approved: true });
        if (feedback.length === 0) {
            return res.status(200).json({
                message: "No Ratings yet!"
            })
        }
        const totalRating = feedback.reduce((sum, thisFeedback) => sum + thisFeedback.rating, 0);
        const averageRating = feedback.length ? totalRating / feedback.length : 0
        res.status(200).json({
            averageRating
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error calculating average rating' });
    }

}