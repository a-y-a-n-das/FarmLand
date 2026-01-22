import { Router } from "express";
import {  addItemToCart, createOrder, decrementQuantityCart, getCartItems, getOrderHistory, getUserProfile, incrementQuantityCart } from "../handlers/userHandler.js";
const router = Router();

router.get("/cart", getCartItems);
router.get("/order-history", getOrderHistory);
router.post("/order", createOrder);
router.get("/getuser", getUserProfile);
router.post("/addtocart", addItemToCart);
router.post("/incrementquantity", incrementQuantityCart);
router.post("/decrementquantity", decrementQuantityCart);

export { router as userRoutes };