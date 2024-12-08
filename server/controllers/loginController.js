import Admin from "../models/Admin.model.js";
import { generateToken } from "../utils/generateToken.js";
import bcrypt from 'bcrypt';

export const adminLoginController = async (req, res) => {
    const { username, password } = req.body;
    try {
        const admin = await Admin.findOne({ username: username });
        if (!admin) return res.status(404).json({ message: "Admin not Found" });
        const isMatch = await bcrypt.compare(password, admin.password);
        if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });
        const token = generateToken(admin._id);
        res.status(200).json({
            message: "Login successful",
            token: token,
            user: {
                id: admin._id,
                username: admin.username,
            }
        });
    } catch (error) {
        console.error("Internal Server Error at Login", error);
    }
};