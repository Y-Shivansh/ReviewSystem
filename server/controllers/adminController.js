import Admin from "../models/Admin.model.js";
import Feedback from "../models/Feedback.model.js";

export const getAllFeedback = async (req, res) => {
    try {
        const allFeedbacks = await Feedback.find({});
        res.status(200).json({ allFeedbacks })

    } catch (error) {
        console.error("error loading feedbacks", error);
        res.status(500).json({ message: "Error Loading Feedbacks", error })

    }
}

export const approveOrRejectFeedback = async (req, res) => {
    try {
        const { id } = req.params;
        const { action } = req.body;

        // If action is 'approve', update the feedback to approved
        if (action === "approve") {
            const feedback = await Feedback.findByIdAndUpdate(id, { approved: true }, { new: true });

            if (!feedback) {
                return res.status(404).json({ message: 'Feedback not found' });
            }

            return res.status(200).json({ message: 'Feedback approved successfully', feedback });
        }

        // If action is 'reject', delete the feedback
        if (action === "reject") {
            const feedback = await Feedback.findByIdAndDelete(id);

            if (!feedback) {
                return res.status(404).json({ message: 'Feedback not found' });
            }

            return res.status(200).json({ message: 'Feedback rejected and deleted successfully' });
        }
    } catch (error) {
        console.error("Error processing feedback:", error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
}