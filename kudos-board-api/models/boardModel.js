const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getAllBoards = async (filter = {}, orderBy = {}) => {
  return prisma.Board.findMany({
    where: filter,
    orderBy: orderBy,
    include: {
      cards: true,
    },
  });
};

const getBoardById = async (id) => {
  return prisma.Board.findUnique({ where: { id: parseInt(id) } });
};

const createBoard = async (boardData) => {
  return prisma.Board.create({
    data: {
      name: boardData.name,
      category: boardData.category,
    },
  });
};

module.exports = {
  getAllBoards,
  getBoardById,
  createBoard,
};
