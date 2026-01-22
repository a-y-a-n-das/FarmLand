import { prisma } from "./prisma.js";

async function createOrderInDb(
  userId: number,
  itemId: number[],
  quantity: number[],
  price: number[],
) {
  try {
    const totalAmount: number = price.reduce((acc, curr, index) => acc + (curr * (quantity[index] ?? 1)), 0);
    const order = await prisma.order.create({
      data: {
        user: {
          connect: { id: userId }
        },
        totalAmount: totalAmount,
        orderItems: {
          create: itemId.map((id, index) => ({
            item: {
              connect: { id: id }
            },
            quantity: Math.floor(quantity[index] ?? 1),
            priceAtOrder: Math.floor(price[index] ?? 0),
          })),
        },
      },
      include: {
        orderItems: {
          include: {
            item: true
          }
        }
      }
    });

    await prisma.cartItem.deleteMany({
      where: {
        userId: userId
      }
    }); 
    
    return order;
  } catch (error) {
    console.error('Prisma error details:', error);
    throw error;
  }
}



export { createOrderInDb };


