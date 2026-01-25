import { Router } from "express";
import {  addItemToCart, createOrder, decrementQuantityCart, getCartItems, getOrderHistory, getUserProfile, incrementQuantityCart, logoutUser } from "../handlers/userHandler.js";
const router = Router();

router.get("/cart", getCartItems);
router.get("/order-history", getOrderHistory);
router.post("/order", createOrder);
router.get("/getuser", getUserProfile);
router.post("/addtocart", addItemToCart);
router.post("/incrementquantity", incrementQuantityCart);
router.post("/decrementquantity", decrementQuantityCart);
router.post("/logout", logoutUser);

export { router as userRoutes };