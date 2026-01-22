import {prisma } from "./prisma.js";    

async function getItemsFromDb() {
    const items = await prisma.item.findMany();
    return items;
}

export { getItemsFromDb } 

    