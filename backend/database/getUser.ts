import { prisma }  from '../generated/prisma.ts';



async function getUser(userId: number) {
    const user = await prisma.user.findUnique({
        where: {
            id: userId
        }
    });
    return user;
}

export { getUser }