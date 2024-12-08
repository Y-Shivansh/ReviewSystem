import mongoose from "mongoose"
import seedAdmin from "../seedAdmin.js";

const connectDB = async () => {
    try {
        console.log(__dirname);
        await mongoose.connect(process.env.MONGO_URL)
        console.log("MongoDB connected");
        await seedAdmin()
    } catch (error) {
        console.error("Error Connecting to DB",error);
        process.exit(1);
    }
}
export default connectDB