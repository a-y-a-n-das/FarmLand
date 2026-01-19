import { Router } from "express";
import { getItems } from "../handlers/publicHandler.ts";
const router = Router();

router.get("/items", getItems);



export { router as publicRoutes };