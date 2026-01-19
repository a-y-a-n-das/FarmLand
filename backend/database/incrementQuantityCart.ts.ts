import {prisma} from './prisma.ts';

async function incrementQuantityCartInDb(userId: number, itemId: number, quantity: number) { 
    const cartItem = await prisma.cartItem.update({
         where: {
            userId_itemId: {
                userId: userId,
                itemId: itemId
            }
        },
        data: {
            quantity:{
                increment: quantity
            }
        }   
    });
    return cartItem;
}


export { incrementQuantityCartInDb };