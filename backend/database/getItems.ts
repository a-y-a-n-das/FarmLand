import {prisma } from "./prisma.ts";    

async function getItemsFromDb() {
    const items = await prisma.item.findMany();
    return items;
}

export { getItemsFromDb } 

    