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
  return prisma.Board.findUnique({
    where: { id: parseInt(id) },
    include: {
      cards: true,
    },
  });
};

const createBoard = async (boardData) => {
  return prisma.Board.create({
    data: {
      name: boardData.name,
      category: boardData.category,
    },
  });
};

const updateBoard = async (id, boardData) => {
  return prisma.Board.update({
    where: { id: parseInt(id) },
    data: boardData,
    include: { cards: true },
  });
};

//Function to delete a board
const deleteBoard = async (id) => {
  return prisma.Board.delete({
    where: { id: parseInt(id) },
    include: { cards: true },
  });
};

const addCardToBoard = async (boardId, cardData) => {
  return prisma.Card.create({
    data: {
      title: cardData.title,
      message: cardData.message,
      gif_url: cardData.gif_url,
      author: cardData.author,
      boardId: parseInt(boardId),
    },
  });
};

const getCards = async (id) => {
  return prisma.Card.findMany({
    where: { boardId: parseInt(id) },
  });
};

// updateBoard, deleteBoard, addCardtoBoard,

module.exports = {
  getAllBoards,
  getBoardById,
  createBoard,
  updateBoard,
  deleteBoard,
  addCardToBoard,
  getCards,
};
