const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// register
const createUser = async (username, password) => {
    return await prisma.user.create({
        data: { username, password},
    });
};

//login
const findUserByUsername = async (username) => {
    return await prisma.user.findUnique({
      where: { username },
    });
};

const findUserById = async (id) => {
    return await prisma.user.findUnique({
        where: { id },
    });
};

module.exports = {
    createUser,
    findUserByUsername,
    findUserById,
};