import { prisma } from "./prisma.ts";

async function decrementQuantityInCartInDb(
  userId: number,
  itemId: number,
  quantity: number,
) {
  const item = await prisma.cartItem.findUnique({
    where: {
      userId_itemId: {
        userId: userId,
        itemId: itemId,
      },
    },
  });

  if (!item) {
    return null;
}

    if (item.quantity == 1 ) {
        const deletedItem = await prisma.cartItem.delete({
            where: {
                userId_itemId: {
                    userId: userId,
                    itemId: itemId,
                },
            },
        });
        return {...deletedItem, quantity: 0};
    }

  const cartItem = await prisma.cartItem.update({
    where: {
      userId_itemId: {
        userId: userId,
        itemId: itemId,
      },
    },
    data: {
      quantity: {
        decrement: quantity,
      },
    },
  });
  return cartItem;
}

export { decrementQuantityInCartInDb };
