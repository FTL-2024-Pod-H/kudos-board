const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getAllCards = async () => {
  return prisma.Card.findMany();
};

const getCardById = async (id) => {
  return prisma.Card.findUnique({
    where: { card_id: parseInt(id) },
  });
};

// const createCard = async (cardData) => {
//   return prisma.Card.create({
//     data: {
//       title: cardData.title,
//       message: cardData.message,
//       gif_url: cardData.gif_url,
//       author: cardData.author,
//       boardId: parseInt(cardData.boardId),
//     },
//   });
// };

const updateCard = async (id, cardData) => {
  return prisma.Card.update({
    where: { card_id: parseInt(id) },
    data: cardData,
  });
};

const deleteCard = async (id) => {
  return prisma.Card.delete({
    where: { card_id: parseInt(id) },
  });
};

module.exports = {
  getAllCards,
  getCardById,
  createCard,
  updateCard,
  deleteCard,
};
