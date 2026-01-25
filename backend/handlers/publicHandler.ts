import type { Request, Response } from "express";
import { getItemsFromDb } from "../database/getItems.js";
import { getUserByEmail } from "../database/getUser.js";
import jwt from "jsonwebtoken";
import { createUser } from "../database/createUser.js";
import bcrypt from "bcrypt";


export async function getItems(req: Request, res: Response) {
    const items = await getItemsFromDb();

    res.status(200).json({ items: items });
}   

export async function getToken(req: Request, res: Response) {
    const { name, email, password } = req.body;

    const user = await getUserByEmail(email);
    if (user) {
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: "Invalid password" });
        }

        jwt.sign({ userId: user.id }, process.env.JWT_SECRET!, {expiresIn: '8h'},(err: unknown, token: string | undefined) => {
            if (err) {
                return res.status(500).json({ message: "Error generating token", error  : err });
            }
            return res.status(200).json({ message: "User exists", token: token });
        });
    }
    const hashedPassword = await bcrypt.hash(password, 12);
    const newUser = await createUser(email, hashedPassword, name);

    jwt.sign({ userId: newUser.id }, process.env.JWT_SECRET! , {expiresIn: '8h'}, (err: unknown, token: string | undefined) => {
        if (err) {
            return res.status(500).json({ message: "Error generating token", error  : err });
        }
        return res.status(201).json({ message: "User created", token: token });
    });
}       

export async function verifyToken(req: Request, res: Response) {
    const token = req.cookies.auth_token;
    
    if (!token) {
        return res.status(401).json({ message: "No token provided" });
    }

    try{
        
        const decoded = jwt.verify(token, process.env.JWT_SECRET!) as { userId: number };
        if(!decoded || !decoded.userId){
            res.status(401).json({ message: "Token is not valid" });
            return;
        }
        req.userId = decoded.userId;
        return res.status(200).json({ message: "Token is valid", token });
    } catch (error) {
        return  res.status(401).json({ message: "Token is not valid", error });    
    }   
}

    