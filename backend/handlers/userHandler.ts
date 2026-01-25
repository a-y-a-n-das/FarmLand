import { addItemToCartInDb } from "../database/addItemToCart.js";
import { createOrderInDb } from "../database/createOrder.js";
import { getCartItemsFromDb } from "../database/getCartItems.js";
import { getUser } from "../database/getUser.js";
import { getOrderHistoryFromDb } from "../database/orderHistory.js";
import type { Request, Response } from "express";
import { incrementQuantityCartInDb } from "../database/incrementQuantityCart.js";
import { decrementQuantityInCartInDb } from "../database/decrementQuantityInCart.js";

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
  const { itemId, quantity, price } = req.body as { itemId: number[]; quantity: number[]; price: number[] };


  try {
    const order = await createOrderInDb(userId, itemId, quantity, price, );
    res.status(201).json({ message: "Order created successfully", order });
  } catch (error) {
    console.error('Order creation error:', error);
    res.status(500).json({ message: "Error creating order", error });
  }
};

export const getUserProfile = async (req: Request, res: Response) => {
  const userId = req.userId!; 

  try {
    const user = await getUser(userId);
    res.status(200).json({ user });
  } catch (error) {
    res.status(500).json({ message: "Error fetching user profile", error });
  }
};

export const addItemToCart = async (req: Request, res: Response) => {
    const userId = req.userId!; 
    const { itemId, quantity } = req.body as { itemId: number; quantity: number };
    
    try {
        const cartItem = await addItemToCartInDb(userId, itemId, quantity);
        if (!cartItem) {
            return res.status(404).json({ message: "Item not found" });
        }
        res.status(200).json({ message: "Item added to cart", cartItem });
    } catch (error) {
        return res.status(500).json({ message: "Error adding item to cart", error });
    }
};

export const incrementQuantityCart = async (req: Request, res: Response) => {
    const userId = req.userId!; 
    const { itemId, quantity } = req.body as { itemId: number; quantity: number };
    
    try {
        const cartItem = await incrementQuantityCartInDb(userId, itemId, quantity);
        if (!cartItem) {
            return res.status(404).json({ message: "Item not found" });
        }
        res.status(200).json({ message: "Item quantity incremented in cart", cartItem });
    } catch (error) {
        return res.status(500).json({ message: "Error incrementing item quantity in cart", error });

    }
};



export const decrementQuantityCart = async (req: Request, res: Response) => {
    const userId = req.userId!; 
    const { itemId, quantity } = req.body as { itemId: number; quantity: number };
    
    try {
        const cartItem = await decrementQuantityInCartInDb(userId, itemId, quantity);
        if (!cartItem) {
            return res.status(404).json({ message: "Item not found" });
        }
        res.status(200).json({ message: "Item quantity decremented in cart", cartItem });
    } catch (error) {
        return res.status(500).json({ message: "Error decrementing item quantity in cart", error });

    }
};


export const logoutUser = async (req: Request, res: Response) => {
    try {
        // Here you can implement any server-side logout logic if needed
        res.clearCookie("token", {
            httpOnly: true,
            secure: true,
            sameSite: "none",
        });
        res.status(200).json({ message: "User logged out successfully" });
    } catch (error) {
        res.status(500).json({ message: "Error logging out user", error });
    }
};  