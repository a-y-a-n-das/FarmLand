import  { type Response, type NextFunction } from "express";
import jwt from "jsonwebtoken";
import type { UserRequest } from "../types/request.ts";



export async function auth(req: UserRequest, res:Response, next:NextFunction): Promise<void> {
    const token = req.header("Authorization")?.split(" ")[1];
    if (!token) {
        res.status(401).json({ message: "No token, authorization denied" });
        return;
    }

    try {
        const decoded = jwt.verify(token, process.env.SECRET as string) as { userId: number };
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