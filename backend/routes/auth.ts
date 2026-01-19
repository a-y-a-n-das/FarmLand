import  { type Response, type NextFunction } from "express";
import jwt from "jsonwebtoken";
import type { Request } from "express";

interface UserRequest extends Request {
    userId?: number;
}

const SECRET: string = process.env.SECRET || "your_jwt_secret_key";

export async function auth(req: UserRequest, res:Response, next:NextFunction): Promise<void> {
    const token = req.header("Authorization")?.split(" ")[1];
    if (!token) {
        res.status(401).json({ message: "No token, authorization denied" });
        return;
    }

    try {
        const decoded = jwt.verify(token, SECRET) as { userId: number };
        if(!decoded || !decoded.userId){
            res.status(401).json({ message: "Token is not valid" });
            return;
        }
        req.userId = decoded.userId;
        next();
    } catch (error) {
        res.status(401).json({ message: "Token is not valid", error });    
    }

}