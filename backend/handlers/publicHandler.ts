import type { Request, Response } from "express";
import { getItemsFromDb } from "../database/getItems.ts";

export async function getItems(req: Request, res: Response) {
    const items = await getItemsFromDb();

    res.status(200).json({ items: items });
}   

