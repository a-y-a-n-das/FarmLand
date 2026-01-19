import { prisma } from "./prisma.ts";

async function getCartItemsFromDb(userId: number) {
    const cartItems = await prisma.cartItem.findMany({
        where: {
            userId: userId
        },
        include: {
            item: true
        }
    });
    return cartItems;

}

export { getCartItemsFromDb }




