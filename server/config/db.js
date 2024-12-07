import mongoose from "mongoose"
import seedAdmin from "../SeedAdmin.js";

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log("MongoDB connected");
        await seedAdmin()
    } catch (error) {
        console.error("Error Connecting to DB",error);
        process.exit(1);
    }
}
export default connectDB