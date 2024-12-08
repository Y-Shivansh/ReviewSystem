import Admin from "../models/Admin.model.js";
import { generateToken } from "../utils/generateToken.js";
import bcrypt from 'bcrypt'

export const adminLoginController = async (req, res) => {
    const { username, password } = req.body;
    try {
        const admin = await Admin.findOne({ username: username });
        if (!admin) return res.status(404).json({ message: "Admin not Found" });
        const isMatch = bcrypt.compare(password, admin.password);
        if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });
        const token = generateToken(admin._id);
        console.log("token before cookies: ", token);
        res.cookie('token', token, {
            httpOnly: false,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'lax',
            maxAge: 43200000 
        });
        console.log("cookies: ", req.cookies);  
        console.log("token in cookies: ", req.cookies.token);  
        res.status(200).json({
            message: "Login successful",
            user: {
                id: admin._id,
                username: admin.username,
            }
        })

    } catch (error) {
        console.error("Internal Server Error at Login", error);

    }

}