import type { Request, Response } from "express";
import { getItemsFromDb } from "../database/getItems";
import { getUserByEmail } from "../database/getUser";
import jwt from "jsonwebtoken";
import { createUser } from "../database/createUser";
import bcrypt from "bcrypt";

const secret: string = process.env.JWT_SECRET || "your_jwt_secret_key";

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

        jwt.sign({ userId: user.id }, secret , {expiresIn: '8h'},(err: unknown, token: string | undefined) => {
            if (err) {
                return res.status(500).json({ message: "Error generating token", error  : err });
            }
            return res.status(200).json({ message: "User exists", token: token });
        });
    }
    const hashedPassword = await bcrypt.hash(password, 12);
    const newUser = await createUser(email, hashedPassword, name);

    jwt.sign({ userId: newUser.id }, secret , (err: unknown, token: string | undefined) => {
        if (err) {
            return res.status(500).json({ message: "Error generating token", error  : err });
        }
        return res.status(201).json({ message: "User created", token: token });
    });
}       