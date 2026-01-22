import {prisma} from './prisma.js'

async function addItemToCartInDb(userId: number, itemId: number, quantity: number) { 
    const cartItem = await prisma.cartItem.upsert({
        where: {
            userId_itemId: {
                userId: userId,
                itemId: itemId
            }
        },
        update: {
            quantity: {
                increment: quantity
            }
        },
        create: {
            userId: userId,
            itemId: itemId,
            quantity: quantity
        }
    });
    return cartItem;
}

export { addItemToCartInDb };