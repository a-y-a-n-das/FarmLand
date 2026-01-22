import { Router } from "express";
import { getItems, getToken } from "../handlers/publicHandler";
const router = Router();

router.get("/items", getItems);
router.post("/token", getToken);



export { router as publicRoutes };