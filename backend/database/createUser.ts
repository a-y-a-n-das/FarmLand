import {prisma} from './prisma.ts';


interface UserCreateInput {
    email: string;
    password: string;
    name?: string;
}


async function createUser(
    email: string,
    passwordHash: string,
    name?: string
) {
    const newUser = await prisma.user.create({
        data:<UserCreateInput> {
            email: email,
            password: passwordHash,
            name: name,
        }
    });
    return newUser;
}

export { createUser }