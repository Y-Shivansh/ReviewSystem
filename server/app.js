import express from 'express';
import cors from "cors";
import helmet from 'helmet'
import userRoutes from './routes/userRoutes.js'
import {adminLoginController} from './controllers/loginController.js'
import adminRoutes from './routes/adminRoutes.js'
import { verifyAdminToken } from './middlewares/admin.middleware.js';
import cookieParser from 'cookie-parser';

const app = express();
// const corsOption = {
//     origin: ,
//     credentials: true
// }
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet());
app.use(cookieParser())
app.use(cors());

// User Routes
app.use('/api/v1', userRoutes);

// Admin Routes
app.post('/api/admin/login', adminLoginController)
app.use(verifyAdminToken);
app.use('/api/admin', adminRoutes)

export default app