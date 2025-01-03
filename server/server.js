import dotenv from'dotenv';
import connectDB from './config/db.js';
import app from './app.js';
dotenv.config();
connectDB();

const PORT = process.env.PORT || 3000;
app.listen(PORT,()=>{
    console.log(`App is listening on ${PORT}`);
});
