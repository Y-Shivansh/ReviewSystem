import express from 'express';
import { getAverageRating } from '../controllers/commonController.js';
import { getAllFeedback, approveOrRejectFeedback } from '../controllers/adminController.js';

const router = express.Router()
router.get('/all-feedback', getAllFeedback);
router.get('/average-rating', getAverageRating);
router.post('/feedback/:id/manpulate', approveOrRejectFeedback);

export default router;