import { createOrderInDb } from "../database/createOrder.ts";
import { getCartItemsFromDb } from "../database/getCartItems.ts";
import { getOrderHistoryFromDb } from "../database/orderHistory.ts";
import type { Request, Response } from "express";

export const getCartItems = async (req: Request, res: Response) => {
  const userId = req.userId!; 

  try {
    const items = await getCartItemsFromDb(userId);
    res.status(200).json({ cartItems: items });
  } catch (error) {
    res.status(500).json({ message: "Error fetching cart items", error });
  }
};

export const getOrderHistory = async (req: Request, res: Response) => {
  const userId = req.userId!; 

  try {
    const orderHistory = await getOrderHistoryFromDb(userId);
    res
      .status(200)
      .json({ message: `Order history for user ${userId}`, orderHistory });
  } catch (error) {
    res.status(500).json({ message: "Error fetching order history", error });
  }
};

export const createOrder = async (req: Request, res: Response) => {
  const userId = req.userId!; 
  const { itemId, quantity, price } = req.body as { itemId: number; quantity: number; price: number };

  try {
    const order = await createOrderInDb(userId, itemId, quantity, price);
    res.status(201).json({ message: "Order created successfully", order });
  } catch (error) {
    res.status(500).json({ message: "Error creating order", error });
  }
};
