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
        res.cookie('token', token, {
            httpOnly: false,
            secure: true,
            sameSite: 'lax',
            maxAge: 43200000 
        });
        console.log("cookies: ", req.cookies);  
        console.log("cookies token: ", req.cookies.token);  
        res.status(200).json({
            message: "Login successful",
            user: {
                id: admin._id,
                name: admin.name,
            }
        })

    } catch (error) {
        console.error("Internal Server Error at Login", error);

    }

}