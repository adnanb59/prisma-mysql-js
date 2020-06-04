const { PrismaClient } = require("@prisma/client")
const prisma = new PrismaClient()

const createUser = async () => {
    let o = await prisma.user.create({
        data: {
            name: "Alice",
            email: "alice@prisma.io",
            post: {
                create: {title: "Hello World"}
            },
            profile: {
                create: {bio: "I like turtles"}
            }
        }
    });
}


const updateUser = async () => {
    let post = await prisma.post.update({
        where: {id: 1},
        data: {published: true}
    });
    console.log(post);
}

const displayUsers = async () => {
    let allUsers = await prisma.user.findMany({
        include: {
            post: true,
            profile: true
        }
    });
    console.dir(allUsers, {depth: null});
}

const main = async () => {
    try {
        //createUser();
        //displayUsers();
        //updateUser();
        let post = await prisma.post.update({
            where: {id: 2},
            data: {published: true}
        });
        console.log(post);
    } catch (e) {
        throw e;
    } finally {
        await prisma.disconnect();
    }
}

main();