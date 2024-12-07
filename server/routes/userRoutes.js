import express from 'express';
import { getAllApprovedFeedback, submitFeedback } from '../controllers/userController.js';
import { getAverageRating } from '../controllers/commonController.js';

const router = express.Router()
router.get('/average-rating', getAverageRating);
router.get('/feedback', getAllApprovedFeedback);
router.post('/feedback', submitFeedback);

export default router;
