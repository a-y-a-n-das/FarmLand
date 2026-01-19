import {prisma} from './prisma.ts';

async function getOrderHistoryFromDb(userId: number) {
    const orderHistory = await prisma.order.findMany({
        where: {  
            userId: userId
        },
        include: {
            orderItems: {
                include: {
                    item: true
                }
            },
            
        },
        orderBy: {
            createdAt: 'desc'
        }
    });
    return orderHistory;
}

export { getOrderHistoryFromDb }