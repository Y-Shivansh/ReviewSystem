import jwt from 'jsonwebtoken'
import { SECRET_KEY } from '../config/jwt.js'

export const verifyAdminToken = async(req,res,next) => {
    try{
        const {token} = req.cookies;
        if(!token) return res.status(403).json({message: "Access denied. No token provided."});
        jwt.verify(token, SECRET_KEY, (err,decoded) => {
            if(err){
                res.status(403).json({message: "Invalid or Forbidden Token"})
            }
            req.admin = decoded;
            next();
        })

    }catch(error){
        console.log(error);
        res.status(400).json({ message: "Invalid or expired token." });
    }
}