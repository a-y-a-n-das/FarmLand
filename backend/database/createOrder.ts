import { prisma } from "./prisma.ts";

async function createOrderInDb(
  userId: number,
  itemId: number,
  quantity: number,
  price: number,
) {
  const order = await prisma.order.create({
    data: {
      userId: userId,
      orderItems: {
        create: {
          itemId: itemId,
          quantity: quantity,
          priceAtOrder: price,
        },
      },
    },
  });
  return order;
}

export { createOrderInDb };


