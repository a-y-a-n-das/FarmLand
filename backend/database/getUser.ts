import { prisma }  from '../generated/prisma.js';



async function getUser(userId: number) {
    const user = await prisma.user.findUnique({
        where: {
            id: userId
        },
        include: {
            cartItems: {
                include: {
                    item: true
                }
            }
        }   
    });
    return user;
}

async function getUserByEmail(email: string) {
    const user =  await prisma.user.findUnique({
        where: {
            email: email
        }
    });
    return user;
}   

export { getUser, getUserByEmail   }