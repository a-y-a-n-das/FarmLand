import { Router } from "express";
import {  createOrder, getCartItems, getOrderHistory } from "../handlers/userHandler.ts";
const router = Router();

router.get("/cart", getCartItems);
router.get("/order-history", getOrderHistory);
router.post("/order", createOrder);

export { router as userRoutes };