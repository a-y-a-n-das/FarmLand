import { prisma } from "./prisma.ts";

async function createOrderInDb(
  userId: number,
  itemId: number[],
  quantity: number[],
  price: number[],
) {
  try {
    
    const order = await prisma.order.create({
      data: {
        user: {
          connect: { id: userId }
        },
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
    
    return order;
  } catch (error) {
    console.error('Prisma error details:', error);
    throw error;
  }
}



export { createOrderInDb };


