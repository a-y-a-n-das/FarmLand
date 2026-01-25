import { Router } from "express";
import { getItems, getToken, verifyToken } from "../handlers/publicHandler.js";
import {  gauthCallback, gauthRedirect } from "../handlers/gauthHandler.js";
const router = Router();

router.get("/items", getItems);
router.post("/token", getToken);
router.get("/auth/google", gauthRedirect)
router.get("/auth/google/callback", gauthCallback)
router.get("/me", verifyToken)


export { router as publicRoutes };